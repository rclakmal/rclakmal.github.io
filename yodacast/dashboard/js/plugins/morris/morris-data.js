// Morris.js Charts sample data for SB Admin template

$(function drawGraph() {

    yearlyData = [ {
        period : '2010',
        prediction : 200000
    }, {
        period : '2011',
        prediction : 250000
    }, {
        period : '2012',
        prediction : 225000
    }, {
        period : '2013',
        prediction : 300000
    }, {
        period : '2014',
        prediction : 275000
    }, {
        period : '2015',
        prediction : 325000
    }, {
        period : '2016',
        prediction : 250000
    } ];

    monthlyData = [ {
        period : 'January',
        prediction : 4500
    }, {
        period : 'February',
        prediction : 3200
    }, {
        period : 'March',
        prediction : 2500
    }, {
        period : 'April',
        prediction : 3700
    }, {
        period : 'May',
        prediction : 4750
    }, {
        period : 'June',
        prediction : 5350
    }, {
        period : 'July',
        prediction : 2700
    } ];


    weeklyData = [ {
        period : '1st Week May',
        prediction : 600
    }, {
        period : '2nd Week May',
        prediction : 400
    }, {
        period : '3rd Week May',
        prediction : 375
    }, {
        period : '4th Week May',
        prediction : 460
    }, {
        period : '1st Week June',
        prediction : 550
    }, {
        period : '2nd Week June',
        prediction : 676
    }, {
        period : '3rd Week June',
        prediction : 900
    }, {
        period : '4th Week June',
        prediction : 1075
    },{
        period : '1st Week July',
        prediction : 1300
    },{
        period : '2nd Week June',
        prediction : 570
    }];


    dailyData = [ {
        period : '11/June',
        prediction : 450
    }, {
        period : '12/June',
        prediction : 97
    }, {
        period : '13/June',
        prediction : 375
    }, {
        period : '14/June',
        prediction : 150
    }, {
        period : '15/June',
        prediction : 578
    }, {
        period : '15/June',
        prediction : 456
    }, {
        period : '16/June',
        prediction : 324
    }, {
        period : '17/June',
        prediction : 345
    },{
        period : '18/June',
        prediction : 250
    },{
        period : '19/June',
        prediction : 400
    }];


    hourlyData = [ {
        period : '8AM',
        prediction : 60
    }, {
        period : '10AM',
        prediction : 100
    }, {
        period : '12Noon',
        prediction : 170
    }, {
        period : '2PM',
        prediction : 100
    }, {
        period : '4PM',
        prediction : 115
    }, {
        period : '6PM',
        prediction : 68
    }, {
        period : '8PM',
        prediction : 45
    }, {
        period : '10PM',
        prediction : 76
    },{
        period : '12MidNight',
        prediction : 12
    },{
        period : '2AM',
        prediction : 10
    }];

    var data1= monthlyData;

    // Area Chart
    Morris.Area({
        element : 'morris-area-chart',
        data : data1,
        xkey : 'period',
        ykeys : [ 'prediction' ],
        labels : [ 'Prediction' ],
        pointSize : 2,
        parseTime: false,
        hideHover : 'auto',
        resize : true
    });

    // Donut Chart
    Morris.Donut({
        element : 'morris-donut-chart',
        data : [ {
            label : "Hotline 1212",
            value : 4567
        }, {
            label : "Hotline 1414",
            value : 3200
        }, {
            label : "Hotline 2212",
            value : 676
        } ],
        resize : true
    });
});
