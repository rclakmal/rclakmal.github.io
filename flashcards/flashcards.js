// Extending localStorage to store objects:

Storage.prototype.setObject = function(key, value) {
    this.setItem(key, JSON.stringify(value));
};

Storage.prototype.getObject = function(key) {
    var value = this.getItem(key);
    return value && JSON.parse(value);
};

// Some auxiliary stuff:

function makeSafeForCSS(name) {
    return name.replace(/[^a-z0-9]/g, function(s) {
        var c = s.charCodeAt(0);
        if (c == 32) return '-';
        if (c >= 65 && c <= 90) return '_' + s.toLowerCase();
        return '__' + ('000' + c.toString(16)).slice(-4);
    });
}

function isPhoneGap() {
    return (true)
    && /^file:\/{3}[^\/]/i.test(window.location.href)
    && /ios|iphone|ipod|ipad|android/i.test(navigator.userAgent);
}

// Business logic starting here:

var qa = {}; // { set-name : [questions] } (a question is a {q : "", a : ""} object)
var ugly = {}; // { set-name : ugly-set-name } (the ugly-set-name contains no spaces)
var nice = {}; // { ugly-set-name : set-name } 
var size = {}; // { ugly-set-name : number-of-questions-in-set }
var todo = {}; // { ugly-set-name : [unanswered-questions-in-this-round] }
var score = {}; // { ugly-set-name : number-of-times-the-set-has-been-answered-completely }
var current = ''; // current ugly-set-name of het flashcard page
var qidx = -1; // index in todo of the current question in the flashcard page

var storage = window.localStorage;

var waitingJqm = function() {
    var def = $.Deferred();
    $(document).bind("pageinit", def.resolve);
    return def.promise();
};

var waitingPhoneGap = function() {
    var def = $.Deferred();
    if (isPhoneGap()) {
        $(document).bind("deviceready", def.resolve);
    } else {
        def.resolve();
    }
    return def.promise();
};

var loadingJSON = function() {
    return $.getJSON("qa.json");
};

var creatingStats = function(data) {
    var def = $.Deferred();
    // store the JSON data in global variable
    qa = data;
    for (var set in qa) {
        var uglyset = makeSafeForCSS(set);
        // create the ugly-set-names
        ugly[set] = uglyset;
        nice[uglyset] = set;
        // create stats in a global variable
        size[uglyset] = qa[set].length;
    }
    def.resolve();
    return def.promise();
};

var loadingScore = function() {
    var def = $.Deferred();
    // load scores from localStorage into a global variable
    todo = storage.getObject('todo') || {};
    score = storage.getObject('score') || {};
    def.resolve();
    return def.promise();
};

var formatScore = function(uglyset) {
    var rightAnswers = size[uglyset] - todo[uglyset].length ? size[uglyset] - todo[uglyset].length + '/' : '';
    var numberOfQuestions = size[uglyset] + '';
    var numberOfRuns = score[uglyset] ? ' ★ ' + score[uglyset] : '';
    return rightAnswers + numberOfQuestions + numberOfRuns;
};

var initialize = function() {
    // if no unanswered questions came from storage, initialize from json
    if ($.isEmptyObject(todo)) {
        for (var set in qa) {
            // create the initial unanswered questions lists
            todo[ugly[set]] = JSON.parse(JSON.stringify(qa[set])); // alternative turns arrays into objects: jQuery.extend(true, {}, qa[set]);
        }
    }
    // initialize GUI based on global variable data
    for (var set in qa) {
        var item = '<li><a id="%uglytitle" class="set">%title<span class="ui-li-count" class="score %uglytitle">%score</span></a></li>';
        item = item.replace('%title', set);
        item = item.replace('%uglytitle', ugly[set]);
        item = item.replace('%score', formatScore(ugly[set]));
        $('#sets').append(item).listview('refresh');
    }
    return;
};

var random = function() {
    // for the current set, get a random unanswered question
    var left = todo[current].length;
    var random = Math.floor(Math.random() * left);
    return random;
};

// event handling
$(document).ready(function () {
    
    // sequence of events during initialization
    $.when(
        loadingJSON()
            .then(function(json){
                return creatingStats(json);
            }),
        waitingPhoneGap().then(loadingScore)
    ).done(initialize);

    // clicking a set
    $('#sets').on('click', '.set', function() {
        var uglyset = $(this).attr('id');
        // set the global variable indicating the current set
        current = uglyset;
        // navigate to the flashcard page
        $.mobile.navigate("#flashcard");
        // prepare the flashcard gui for a new question
        $('#answer').hide();
        $('#rightwrong').hide();
        $('#answerbutton').show();
        $('#question').show();
        $('#set').text(nice[current]);
        $('#score').text(formatScore(current));
        // get a random question from the unanswered questions list
        qidx = random();
        $('#question').text(todo[current][qidx]['q']);
        $('#answer').text(todo[current][qidx]['a']);
    });
    // clicking the answerbutton
    $('#answerbutton').on('click', 'a', function() {
        $('#answer').show();
        $('#answerbutton').hide();
        $('#rightwrong').show();
    });
    // clicking the 'wrong' button
    $('#wrong').on('click', 'a', function() {
        // prepare the flashcard gui for a new question
        $('#answer').hide();
        $('#rightwrong').hide();
        $('#answerbutton').show();
        // get a random question from the unanswered questions list
        qidx = random();
        $('#question').text(todo[current][qidx]['q']);
        $('#answer').text(todo[current][qidx]['a']);
    });
    // clicking the 'right' button
    $('#right').on('click', 'a', function() {
        if (todo[current].length > 1) {
        // over to next question
            // remove the question from the unanswered questions list
            todo[current].splice(qidx,1);
            // update the score, also on the main page!
            $('#score').text(formatScore(current));
            $('#' + current).find('span').text(formatScore(current));
            // prepare the flashcard gui for a new question
            $('#answer').hide();
            $('#rightwrong').hide();
            $('#answerbutton').show();
            // get a random question from the unanswered questions list
            qidx = random();
            $('#question').text(todo[current][qidx]['q']);
            $('#answer').text(todo[current][qidx]['a']);
            // store the score
            storage.setObject('todo',todo);
        } else {
        // this was the last question, congratulations!
            // reset the unanswered questions list
            todo[current] = JSON.parse(JSON.stringify(qa[nice[current]]));
            // register the completed run
            score[current] = score[current] ? score[current] + 1 : 1;
            // update the score, also on the main page!
            $('#score').text(formatScore(current));
            $('#' + current).find('span').text(formatScore(current));
            // navigate to the modal congratulations page
            $.mobile.changePage( "#congrats", {
            	reverse: false,
            	changeHash: false
            });
            // store the score
            storage.setObject('todo',todo);
            storage.setObject('score',score);
        }
    });
    $('#congrats').on('click', function() {
        // navigate to navigation screen
        $.mobile.navigate("#navigation");
    });
});

/*
 following section fixes flickering of page transitions on Android
 and must be imported between jQuery and jQuery Mobile
 */
$(document).on('mobileinit', function()
{
   if (navigator.userAgent.indexOf("Android") != -1)
   {
     $.mobile.defaultPageTransition = 'none';
     $.mobile.defaultDialogTransition = 'none';
   }
});