// Morris.js Charts sample data for SB Admin template
var callChart;
var yearlyData;
var monthlyData;
var weeklyData;
var dailyData;
var hourlyData;
var basicYodadata;
var colorChoice = 4;
var lineColorsChoose = [ '#2B431F', '#43762A', '#761E74', '#C359C0', '#7CC359' ]

function getBasicData(a, b) {
    basicYodadata = [ {
        "period" : 15,
        "Actual Call Volume" : 7,
        "Yodacast Predicted Volume" : 29
    }, {
        "period" : 16,
        "Actual Call Volume" : 1027,
        "Yodacast Predicted Volume" : 1056
    }, {
        "period" : 17,
        "Actual Call Volume" : 1240,
        "Yodacast Predicted Volume" : 1432
    }, {
        "period" : 18,
        "Actual Call Volume" : 757,
        "Yodacast Predicted Volume" : 784
    }, {
        "period" : 19,
        "Actual Call Volume" : 24,
        "Yodacast Predicted Volume" : 57
    }, {
        "period" : 20,
        // "Actual Call Volume" : 348,
        "Yodacast Predicted Volume" : 278
    }, {
        "period" : 21,
        // "Actual Call Volume" : 1561,
        "Yodacast Predicted Volume" : 1420
    }, {
        "period" : 22,
        // "Actual Call Volume" : 849,
        "Yodacast Predicted Volume" : 859
    }, {
        "period" : 23,
        // "Actual Call Volume" : 54,
        "Yodacast Predicted Volume" : 48
    } ];
    console.log(a);
    console.log(b);
    if (a == false) {
        for (var i = 0; i < basicYodadata.length; i++)
            delete basicYodadata[i]["Actual Call Volume"];
    }

    if (b == false) {
        for (var i = 0; i < basicYodadata.length; i++)
            delete basicYodadata[i]["Yodacast Predicted Volume"];
    }

    return basicYodadata;
}

// Area Chart
function drawGraph() {
    $("#morris-area-chart").empty();
    callChart = Morris.Area({
        element : 'morris-area-chart',
        data : newData,
        xkey : 'period',
        ykeys : [ 'prediction' ],
        labels : [ 'Prediction' ],
        pointSize : 2,
        parseTime : false,
        hideHover : 'auto',
        resize : true,
        lineColors : [ lineColorsChoose[colorChoice] ]
    });
}

function drawFirstYoda() {
    $("#morris-area-chart").empty();
    callChart = Morris.Line({
        element : 'morris-area-chart',
        data : getBasicData(false, true),
        xkey : 'period',
        ykeys : [ 'Actual Call Volume', 'Yodacast Predicted Volume' ],
        labels : [ 'Actual Call Volume', 'Yodacast Predicted Volume' ],
        pointSize : 2,
        parseTime : false,
        hideHover : 'auto',
        lineWidth : 4,
        resize : true,
        events : [ 18 ],
        eventStrokeWidth : 2,
        eventLineColors : [ '#000000' ],
        xLabels : "day",
        xLabelFormat : function(d) {
            return d.label + '/06';
        },
        lineColors : [ '#424242', '#7cc359', ]
    });

    callChart.options.labels.forEach(function(label, i) {
        var legendItem = $('<span></span>').text(label).css('color',
                callChart.options.lineColors[i])
        var checkbox = $('<input type="checkbox" id=' + label.substring(0, 3)
                + ' class="lineCheckbox" checked="">');
        $('#legend').append(checkbox);
        $('#legend').append(legendItem);
    })
    var dashBoard = $('<spanx "></spanx>').text("Today -----").css('color',
            "black");

    $('#legend').append(dashBoard);
}

function drawWeatherYoda() {
    $("#morris-area-chart").empty();
    callChart = Morris.Line({
        element : 'morris-area-chart',
        data : weatherYodaData,
        xkey : 'period',
        ykeys : [ 'Yodacast Predicted Volume', 'BadWeather', 'GoodWeather' ],
        labels : [ 'Yodacast Predicted Volume', 'BadWeather', 'GoodWeather' ],
        pointSize : 2,
        parseTime : false,
        hideHover : 'auto',
        resize : true,
        lineColors : [ '#2B431F', '#C359C0', '#761E74' ]
    });
}

function drawFootBallYoda() {
    $("#morris-area-chart").empty();
    callChart = Morris.Line({
        element : 'morris-area-chart',
        data : footBallData,
        xkey : 'period',
        ykeys : [ 'Yodacast Predicted Volume', 'Football' ],
        labels : [ 'Yodacast Predicted Volume', 'Football' ],
        pointSize : 2,
        parseTime : false,
        hideHover : 'auto',
        resize : true,
        lineColors : [ '#2B431F', '#761E74' ]
    });
}

function updateTable(text) {
    $("#morris-area-chart").empty();
    if (text == "Monthly") {
        colorChoice = 0;
        newData = monthlyData;
        drawGraph();
    }

    if (text == "Weekly") {
        colorChoice = 1;
        newData = weeklyData;
        drawGraph();
    }

    if (text == "Daily") {
        colorChoice = 2;
        newData = dailyData;
        drawGraph();
    }

    if (text == "Hourly") {
        colorChoice = 3;
        newData = hourlyData;
        drawGraph();
    }

    if (text == "Event" || text == "Hotline") {
        for ( var i in newData) {
            newData[i].prediction = newData[i].prediction
                    * (Math.floor(Math.random() * 5) + 1);
        }
        drawGraph();
    }

    if (text == "weather") {
        drawWeatherYoda();
    }

    if (text == "football") {
        drawFootBallYoda();
    }
}

$(document).ready(function() {
    $('#Act').attr('checked', false);
    $('#kpiPanel').hide();
    $('#Act').on('change', function() {
        var isChecked1 = $('#Act').is(':checked');
        var isChecked2 = $('#Yod').is(':checked');
        if (isChecked1) {
            $('#kpiPanel').show()
        } else {
            $('#kpiPanel').hide();
        }
        callChart.setData(getBasicData(isChecked1, isChecked2));

    });
    $('#Yod').on('change', function() {
        var isChecked1 = $('#Act').is(':checked');
        var isChecked2 = $('#Yod').is(':checked');
        callChart.setData(getBasicData(isChecked1, isChecked2));
    });
    drawFirstYoda();
});
