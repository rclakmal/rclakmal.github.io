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
        "period" : 13,
        "Actual Call Volume" : 7,
        "Yodacast Predicted Volume" : 29
    }, {
        "period" : 14,
        "Actual Call Volume" : 1027,
        "Yodacast Predicted Volume" : 1056
    }, {
        "period" : 15,
        "Actual Call Volume" : 1240,
        "Yodacast Predicted Volume" : 1432
    }, {
        "period" : 16,
        "Actual Call Volume" : 757,
        "Yodacast Predicted Volume" : 784
    }, {
        "period" : 17,
        "Actual Call Volume" : 24,
        "Yodacast Predicted Volume" : 57
    }, {
        "period" : 18,
        "Actual Call Volume" : 348,
        "Yodacast Predicted Volume" : 278
    }, {
        "period" : 19,
        "Actual Call Volume" : 1561,
        "Yodacast Predicted Volume" : 1420
    }, {
        "period" : 20,
        "Actual Call Volume" : 849,
        "Yodacast Predicted Volume" : 859
    }, {
        "period" : 21,
        "Actual Call Volume" : 54,
        "Yodacast Predicted Volume" : 48
    }, {
        "period" : 22,
        "Actual Call Volume" : 7,
        "Yodacast Predicted Volume" : 29
    }, {
        "period" : 23,
        "Actual Call Volume" : 1027,
        "Yodacast Predicted Volume" : 1056
    }, {
        "period" : 24,
        "Actual Call Volume" : 1240,
        "Yodacast Predicted Volume" : 1432
    }, {
        "period" : 25,
        // "Actual Call Volume" : 757,
        "Yodacast Predicted Volume" : 784
    }, {
        "period" : 26,
        // "Actual Call Volume" : 24,
        "Yodacast Predicted Volume" : 57
    }, {
        "period" : 27,
        // "Actual Call Volume" : 348,
        "Yodacast Predicted Volume" : 278
    }, {
        "period" : 28,
        // "Actual Call Volume" : 1561,
        "Yodacast Predicted Volume" : 1420
    }, {
        "period" : 29,
        // "Actual Call Volume" : 849,
        "Yodacast Predicted Volume" : 859
    }, {
        "period" : 30,
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

function getUpdateChart(a, b, c, d) {

    var updatedChart = [ {
        "period" : 1,
        "Actual Call Volume" : 54,
        "Yodacast Predicted Volume" : null,
        "Yodacast Predicted Football" : null,
        "Yodacast Predicted Weather" : null
    }, {
        "period" : 2,
        "Actual Call Volume" : 42,
        "Yodacast Predicted Volume" : null,
        "Yodacast Predicted Football" : null,
        "Yodacast Predicted Weather" : null
    }, {
        "period" : 3,
        "Actual Call Volume" : 41,
        "Yodacast Predicted Volume" : null,
        "Yodacast Predicted Football" : null,
        "Yodacast Predicted Weather" : null
    }, {
        "period" : 4,
        "Actual Call Volume" : 19,
        "Yodacast Predicted Volume" : null,
        "Yodacast Predicted Football" : null,
        "Yodacast Predicted Weather" : null
    }, {
        "period" : 5,
        "Actual Call Volume" : 19,
        "Yodacast Predicted Volume" : null,
        "Yodacast Predicted Football" : null,
        "Yodacast Predicted Weather" : null
    }, {
        "period" : 6,
        "Actual Call Volume" : 20,
        "Yodacast Predicted Volume" : null,
        "Yodacast Predicted Football" : null,
        "Yodacast Predicted Weather" : null
    }, {
        "period" : 7,
        "Actual Call Volume" : 17,
        "Yodacast Predicted Volume" : null,
        "Yodacast Predicted Football" : null,
        "Yodacast Predicted Weather" : null
    }, {
        "period" : 8,
        "Actual Call Volume" : 14,
        "Yodacast Predicted Volume" : null,
        "Yodacast Predicted Football" : null,
        "Yodacast Predicted Weather" : null
    }, {
        "period" : 9,
        "Actual Call Volume" : 9,
        "Yodacast Predicted Volume" : null,
        "Yodacast Predicted Football" : null,
        "Yodacast Predicted Weather" : null
    }, {
        "period" : 10,
        "Actual Call Volume" : 11,
        "Yodacast Predicted Volume" : null,
        "Yodacast Predicted Football" : null,
        "Yodacast Predicted Weather" : null
    }, {
        "period" : 11,
        "Actual Call Volume" : 42,
        "Yodacast Predicted Volume" : null,
        "Yodacast Predicted Football" : null,
        "Yodacast Predicted Weather" : null
    }, {
        "period" : 12,
        "Actual Call Volume" : 31,
        "Yodacast Predicted Volume" : null,
        "Yodacast Predicted Football" : null,
        "Yodacast Predicted Weather" : null
    }, {
        "period" : 13,
        "Actual Call Volume" : 91,
        "Yodacast Predicted Volume" : null,
        "Yodacast Predicted Football" : null,
        "Yodacast Predicted Weather" : null
    }, {
        "period" : 14,
        "Actual Call Volume" : 143,
        "Yodacast Predicted Volume" : null,
        "Yodacast Predicted Football" : null,
        "Yodacast Predicted Weather" : null
    }, {
        "period" : 15,
        "Actual Call Volume" : 248,
        "Yodacast Predicted Volume" : null,
        "Yodacast Predicted Football" : null,
        "Yodacast Predicted Weather" : null
    }, {
        "period" : 16,
        "Actual Call Volume" : 455,
        "Yodacast Predicted Volume" : null,
        "Yodacast Predicted Football" : null,
        "Yodacast Predicted Weather" : null
    }, {
        "period" : 17,
        "Actual Call Volume" : 859,
        "Yodacast Predicted Volume" : null,
        "Yodacast Predicted Football" : null,
        "Yodacast Predicted Weather" : null
    }, {
        "period" : 18,
        "Actual Call Volume" : 859,
        "Yodacast Predicted Volume" : null,
        "Yodacast Predicted Football" : null,
        "Yodacast Predicted Weather" : null
    }, {
        "period" : 19,
        "Actual Call Volume" : 1196,
        "Yodacast Predicted Volume" : null,
        "Yodacast Predicted Football" : null,
        "Yodacast Predicted Weather" : null
    }, {
        "period" : 20,
        "Actual Call Volume" : 1298,
        "Yodacast Predicted Volume" : null,
        "Yodacast Predicted Football" : null,
        "Yodacast Predicted Weather" : null
    }, {
        "period" : 21,
        "Actual Call Volume" : 1400,
        "Yodacast Predicted Volume" : null,
        "Yodacast Predicted Football" : null,
        "Yodacast Predicted Weather" : null
    }, {
        "period" : 22,
        "Actual Call Volume" : 1388,
        "Yodacast Predicted Volume" : null,
        "Yodacast Predicted Football" : null,
        "Yodacast Predicted Weather" : null
    }, {
        "period" : 23,
        "Actual Call Volume" : 1418,
        "Yodacast Predicted Volume" : null,
        "Yodacast Predicted Football" : null,
        "Yodacast Predicted Weather" : null
    }, {
        "period" : 24,
        "Actual Call Volume" : 1427,
        "Yodacast Predicted Volume" : null,
        "Yodacast Predicted Football" : null,
        "Yodacast Predicted Weather" : null
    }, {
        "period" : 25,
        "Actual Call Volume" : 1399,
        "Yodacast Predicted Volume" : null,
        "Yodacast Predicted Football" : null,
        "Yodacast Predicted Weather" : null
    }, {
        "period" : 26,
        "Actual Call Volume" : 1345,
        "Yodacast Predicted Volume" : null,
        "Yodacast Predicted Football" : null,
        "Yodacast Predicted Weather" : null
    }, {
        "period" : 27,
        "Actual Call Volume" : 1373,
        "Yodacast Predicted Volume" : null,
        "Yodacast Predicted Football" : null,
        "Yodacast Predicted Weather" : null
    }, {
        "period" : 28,
        "Actual Call Volume" : 1401,
        "Yodacast Predicted Volume" : null,
        "Yodacast Predicted Football" : null,
        "Yodacast Predicted Weather" : null
    }, {
        "period" : 29,
        "Actual Call Volume" : 1189,
        "Yodacast Predicted Volume" : null,
        "Yodacast Predicted Football" : null,
        "Yodacast Predicted Weather" : null
    }, {
        "period" : 30,
        "Actual Call Volume" : 1375,
        "Yodacast Predicted Volume" : null,
        "Yodacast Predicted Football" : null,
        "Yodacast Predicted Weather" : null
    }, {
        "period" : 31,
        "Actual Call Volume" : 1282,
        "Yodacast Predicted Volume" : null,
        "Yodacast Predicted Football" : null,
        "Yodacast Predicted Weather" : null
    }, {
        "period" : 32,
        "Actual Call Volume" : 1416,
        "Yodacast Predicted Volume" : null,
        "Yodacast Predicted Football" : null,
        "Yodacast Predicted Weather" : null
    }, {
        "period" : 33,
        "Actual Call Volume" : 1417,
        "Yodacast Predicted Volume" : null,
        "Yodacast Predicted Football" : null,
        "Yodacast Predicted Weather" : null
    }, {
        "period" : 34,
        "Actual Call Volume" : 1462,
        "Yodacast Predicted Volume" : null,
        "Yodacast Predicted Football" : null,
        "Yodacast Predicted Weather" : null
    }, {
        "period" : 35,
        "Actual Call Volume" : 1417,
        "Yodacast Predicted Volume" : null,
        "Yodacast Predicted Football" : null,
        "Yodacast Predicted Weather" : null
    }, {
        "period" : 36,
        "Actual Call Volume" : 1433,
        "Yodacast Predicted Volume" : null,
        "Yodacast Predicted Football" : null,
        "Yodacast Predicted Weather" : null
    }, {
        "period" : 37,
        "Actual Call Volume" : 1278,
        "Yodacast Predicted Volume" : null,
        "Yodacast Predicted Football" : null,
        "Yodacast Predicted Weather" : null
    }, {
        "period" : 38,
        "Actual Call Volume" : 1170,
        "Yodacast Predicted Volume" : null,
        "Yodacast Predicted Football" : null,
        "Yodacast Predicted Weather" : null
    }, {
        "period" : 39,
        "Actual Call Volume" : 1025,
        "Yodacast Predicted Volume" : null,
        "Yodacast Predicted Football" : null,
        "Yodacast Predicted Weather" : null
    }, {
        "period" : 40,
        "Actual Call Volume" : 1007,
        "Yodacast Predicted Volume" : null,
        "Yodacast Predicted Football" : null,
        "Yodacast Predicted Weather" : null
    }, {
        "period" : 41,
        "Actual Call Volume" : 884,
        "Yodacast Predicted Volume" : null,
        "Yodacast Predicted Football" : null,
        "Yodacast Predicted Weather" : null
    }, {
        "period" : 42,
        "Actual Call Volume" : 740,
        "Yodacast Predicted Volume" : null,
        "Yodacast Predicted Football" : null,
        "Yodacast Predicted Weather" : null
    }, {
        "period" : 43,
        "Actual Call Volume" : 520,
        "Yodacast Predicted Volume" : null,
        "Yodacast Predicted Football" : null,
        "Yodacast Predicted Weather" : null
    }, {
        "period" : 44,
        "Actual Call Volume" : 378,
        "Yodacast Predicted Volume" : null,
        "Yodacast Predicted Football" : null,
        "Yodacast Predicted Weather" : null
    }, {
        "period" : 45,
        "Actual Call Volume" : 244,
        "Yodacast Predicted Volume" : null,
        "Yodacast Predicted Football" : null,
        "Yodacast Predicted Weather" : null
    }, {
        "period" : 46,
        "Actual Call Volume" : 199,
        "Yodacast Predicted Volume" : null,
        "Yodacast Predicted Football" : null,
        "Yodacast Predicted Weather" : null
    }, {
        "period" : 47,
        "Actual Call Volume" : 147,
        "Yodacast Predicted Volume" : null,
        "Yodacast Predicted Football" : null,
        "Yodacast Predicted Weather" : null
    }, {
        "period" : 48,
        "Actual Call Volume" : 93,
        "Yodacast Predicted Volume" : null,
        "Yodacast Predicted Football" : null,
        "Yodacast Predicted Weather" : null
    }, {
        "period" : 49,
        "Actual Call Volume" : 53,
        "Yodacast Predicted Volume" : null,
        "Yodacast Predicted Football" : null,
        "Yodacast Predicted Weather" : null
    }, {
        "period" : 50,
        "Actual Call Volume" : 37,
        "Yodacast Predicted Volume" : null,
        "Yodacast Predicted Football" : null,
        "Yodacast Predicted Weather" : null
    }, {
        "period" : 51,
        "Actual Call Volume" : 25,
        "Yodacast Predicted Volume" : null,
        "Yodacast Predicted Football" : null,
        "Yodacast Predicted Weather" : null
    }, {
        "period" : 52,
        "Actual Call Volume" : 21,
        "Yodacast Predicted Volume" : null,
        "Yodacast Predicted Football" : null,
        "Yodacast Predicted Weather" : null
    }, {
        "period" : 53,
        "Actual Call Volume" : 23,
        "Yodacast Predicted Volume" : null,
        "Yodacast Predicted Football" : null,
        "Yodacast Predicted Weather" : null
    }, {
        "period" : 54,
        "Actual Call Volume" : 6,
        "Yodacast Predicted Volume" : null,
        "Yodacast Predicted Football" : null,
        "Yodacast Predicted Weather" : null
    }, {
        "period" : 55,
        "Actual Call Volume" : 16,
        "Yodacast Predicted Volume" : null,
        "Yodacast Predicted Football" : null,
        "Yodacast Predicted Weather" : null
    }, {
        "period" : 56,
        "Actual Call Volume" : 12,
        "Yodacast Predicted Volume" : null,
        "Yodacast Predicted Football" : null,
        "Yodacast Predicted Weather" : null
    }, {
        "period" : 57,
        "Actual Call Volume" : 7,
        "Yodacast Predicted Volume" : null,
        "Yodacast Predicted Football" : null,
        "Yodacast Predicted Weather" : null
    }, {
        "period" : 58,
        "Actual Call Volume" : 15,
        "Yodacast Predicted Volume" : null,
        "Yodacast Predicted Football" : null,
        "Yodacast Predicted Weather" : null
    }, {
        "period" : 59,
        "Actual Call Volume" : 20,
        "Yodacast Predicted Volume" : null,
        "Yodacast Predicted Football" : null,
        "Yodacast Predicted Weather" : null
    }, {
        "period" : 60,
        "Actual Call Volume" : 26,
        "Yodacast Predicted Volume" : null,
        "Yodacast Predicted Football" : null,
        "Yodacast Predicted Weather" : null
    }, {
        "period" : 61,
        "Actual Call Volume" : 68,
        "Yodacast Predicted Volume" : null,
        "Yodacast Predicted Football" : null,
        "Yodacast Predicted Weather" : null
    }, {
        "period" : 62,
        "Actual Call Volume" : 120,
        "Yodacast Predicted Volume" : null,
        "Yodacast Predicted Football" : null,
        "Yodacast Predicted Weather" : null
    }, {
        "period" : 63,
        "Actual Call Volume" : 249,
        "Yodacast Predicted Volume" : null,
        "Yodacast Predicted Football" : null,
        "Yodacast Predicted Weather" : null
    }, {
        "period" : 64,
        "Actual Call Volume" : 394,
        "Yodacast Predicted Volume" : null,
        "Yodacast Predicted Football" : null,
        "Yodacast Predicted Weather" : null
    }, {
        "period" : 65,
        "Actual Call Volume" : 646,
        "Yodacast Predicted Volume" : null,
        "Yodacast Predicted Football" : null,
        "Yodacast Predicted Weather" : null
    }, {
        "period" : 66,
        "Actual Call Volume" : 749,
        "Yodacast Predicted Volume" : null,
        "Yodacast Predicted Football" : null,
        "Yodacast Predicted Weather" : null
    }, {
        "period" : 67,
        "Actual Call Volume" : 968,
        "Yodacast Predicted Volume" : null,
        "Yodacast Predicted Football" : null,
        "Yodacast Predicted Weather" : null
    }, {
        "period" : 68,
        "Actual Call Volume" : 1238,
        "Yodacast Predicted Volume" : null,
        "Yodacast Predicted Football" : null,
        "Yodacast Predicted Weather" : null
    }, {
        "period" : 69,
        "Actual Call Volume" : 1361,
        "Yodacast Predicted Volume" : null,
        "Yodacast Predicted Football" : null,
        "Yodacast Predicted Weather" : null
    }, {
        "period" : 70,
        "Actual Call Volume" : 1373,
        "Yodacast Predicted Volume" : null,
        "Yodacast Predicted Football" : null,
        "Yodacast Predicted Weather" : null
    }, {
        "period" : 71,
        "Actual Call Volume" : 1353,
        "Yodacast Predicted Volume" : null,
        "Yodacast Predicted Football" : null,
        "Yodacast Predicted Weather" : null
    }, {
        "period" : 72,
        "Actual Call Volume" : 1311,
        "Yodacast Predicted Volume" : null,
        "Yodacast Predicted Football" : null,
        "Yodacast Predicted Weather" : null
    }, {
        "period" : 73,
        "Actual Call Volume" : 1473,
        "Yodacast Predicted Volume" : null,
        "Yodacast Predicted Football" : null,
        "Yodacast Predicted Weather" : null
    }, {
        "period" : 74,
        "Actual Call Volume" : 1341,
        "Yodacast Predicted Volume" : null,
        "Yodacast Predicted Football" : null,
        "Yodacast Predicted Weather" : null
    }, {
        "period" : 75,
        "Actual Call Volume" : 1297,
        "Yodacast Predicted Volume" : null,
        "Yodacast Predicted Football" : null,
        "Yodacast Predicted Weather" : null
    }, {
        "period" : 76,
        "Actual Call Volume" : 1219,
        "Yodacast Predicted Volume" : null,
        "Yodacast Predicted Football" : null,
        "Yodacast Predicted Weather" : null
    }, {
        "period" : 77,
        "Actual Call Volume" : 1284,
        "Yodacast Predicted Volume" : null,
        "Yodacast Predicted Football" : null,
        "Yodacast Predicted Weather" : null
    }, {
        "period" : 78,
        "Actual Call Volume" : 1314,
        "Yodacast Predicted Volume" : null,
        "Yodacast Predicted Football" : null,
        "Yodacast Predicted Weather" : null
    }, {
        "period" : 79,
        "Actual Call Volume" : 1295,
        "Yodacast Predicted Volume" : null,
        "Yodacast Predicted Football" : null,
        "Yodacast Predicted Weather" : null
    }, {
        "period" : 80,
        "Actual Call Volume" : 1205,
        "Yodacast Predicted Volume" : null,
        "Yodacast Predicted Football" : null,
        "Yodacast Predicted Weather" : null
    }, {
        "period" : 81,
        "Actual Call Volume" : 1339,
        "Yodacast Predicted Volume" : null,
        "Yodacast Predicted Football" : null,
        "Yodacast Predicted Weather" : null
    }, {
        "period" : 82,
        "Actual Call Volume" : 1346,
        "Yodacast Predicted Volume" : null,
        "Yodacast Predicted Football" : null,
        "Yodacast Predicted Weather" : null
    }, {
        "period" : 83,
        "Actual Call Volume" : 1247,
        "Yodacast Predicted Volume" : null,
        "Yodacast Predicted Football" : null,
        "Yodacast Predicted Weather" : null
    }, {
        "period" : 84,
        "Actual Call Volume" : 1267,
        "Yodacast Predicted Volume" : null,
        "Yodacast Predicted Football" : null,
        "Yodacast Predicted Weather" : null
    }, {
        "period" : 85,
        "Actual Call Volume" : 1108,
        "Yodacast Predicted Volume" : null,
        "Yodacast Predicted Football" : null,
        "Yodacast Predicted Weather" : null
    }, {
        "period" : 86,
        "Actual Call Volume" : 1091,
        "Yodacast Predicted Volume" : null,
        "Yodacast Predicted Football" : null,
        "Yodacast Predicted Weather" : null
    }, {
        "period" : 87,
        "Actual Call Volume" : 960,
        "Yodacast Predicted Volume" : null,
        "Yodacast Predicted Football" : null,
        "Yodacast Predicted Weather" : null
    }, {
        "period" : 88,
        "Actual Call Volume" : 918,
        "Yodacast Predicted Volume" : null,
        "Yodacast Predicted Football" : null,
        "Yodacast Predicted Weather" : null
    }, {
        "period" : 89,
        "Actual Call Volume" : 761,
        "Yodacast Predicted Volume" : null,
        "Yodacast Predicted Football" : null,
        "Yodacast Predicted Weather" : null
    }, {
        "period" : 90,
        "Actual Call Volume" : 610,
        "Yodacast Predicted Volume" : null,
        "Yodacast Predicted Football" : null,
        "Yodacast Predicted Weather" : null
    }, {
        "period" : 91,
        "Actual Call Volume" : 487,
        "Yodacast Predicted Volume" : null,
        "Yodacast Predicted Football" : null,
        "Yodacast Predicted Weather" : null
    }, {
        "period" : 92,
        "Actual Call Volume" : 332,
        "Yodacast Predicted Volume" : null,
        "Yodacast Predicted Football" : null,
        "Yodacast Predicted Weather" : null
    }, {
        "period" : 93,
        "Actual Call Volume" : 269,
        "Yodacast Predicted Volume" : null,
        "Yodacast Predicted Football" : null,
        "Yodacast Predicted Weather" : null
    }, {
        "period" : 94,
        "Actual Call Volume" : 240,
        "Yodacast Predicted Volume" : null,
        "Yodacast Predicted Football" : null,
        "Yodacast Predicted Weather" : null
    }, {
        "period" : 95,
        "Actual Call Volume" : 140,
        "Yodacast Predicted Volume" : null,
        "Yodacast Predicted Football" : null,
        "Yodacast Predicted Weather" : null
    }, {
        "period" : 96,
        "Actual Call Volume" : 93,
        "Yodacast Predicted Volume" : null,
        "Yodacast Predicted Football" : null,
        "Yodacast Predicted Weather" : null
    }, {
        "period" : 97,
        "Actual Call Volume" : 64,
        "Yodacast Predicted Volume" : null,
        "Yodacast Predicted Football" : null,
        "Yodacast Predicted Weather" : null
    }, {
        "period" : 98,
        "Actual Call Volume" : 57,
        "Yodacast Predicted Volume" : null,
        "Yodacast Predicted Football" : null,
        "Yodacast Predicted Weather" : null
    }, {
        "period" : 99,
        "Actual Call Volume" : 32,
        "Yodacast Predicted Volume" : null,
        "Yodacast Predicted Football" : null,
        "Yodacast Predicted Weather" : null
    }, {
        "period" : 100,
        "Actual Call Volume" : 11,
        "Yodacast Predicted Volume" : null,
        "Yodacast Predicted Football" : null,
        "Yodacast Predicted Weather" : null
    }, {
        "period" : 101,
        "Actual Call Volume" : 16,
        "Yodacast Predicted Volume" : null,
        "Yodacast Predicted Football" : null,
        "Yodacast Predicted Weather" : null
    }, {
        "period" : 102,
        "Actual Call Volume" : 15,
        "Yodacast Predicted Volume" : null,
        "Yodacast Predicted Football" : null,
        "Yodacast Predicted Weather" : null
    }, {
        "period" : 103,
        "Actual Call Volume" : 9,
        "Yodacast Predicted Volume" : null,
        "Yodacast Predicted Football" : null,
        "Yodacast Predicted Weather" : null
    }, {
        "period" : 104,
        "Actual Call Volume" : 7,
        "Yodacast Predicted Volume" : null,
        "Yodacast Predicted Football" : null,
        "Yodacast Predicted Weather" : null
    }, {
        "period" : 105,
        "Actual Call Volume" : 12,
        "Yodacast Predicted Volume" : null,
        "Yodacast Predicted Football" : null,
        "Yodacast Predicted Weather" : null
    }, {
        "period" : 106,
        "Actual Call Volume" : 14,
        "Yodacast Predicted Volume" : null,
        "Yodacast Predicted Football" : null,
        "Yodacast Predicted Weather" : null
    }, {
        "period" : 107,
        "Actual Call Volume" : 31,
        "Yodacast Predicted Volume" : null,
        "Yodacast Predicted Football" : null,
        "Yodacast Predicted Weather" : null
    }, {
        "period" : 108,
        "Actual Call Volume" : 38,
        "Yodacast Predicted Volume" : null,
        "Yodacast Predicted Football" : null,
        "Yodacast Predicted Weather" : null
    }, {
        "period" : 109,
        "Actual Call Volume" : 64,
        "Yodacast Predicted Volume" : null,
        "Yodacast Predicted Football" : null,
        "Yodacast Predicted Weather" : null
    }, {
        "period" : 110,
        "Actual Call Volume" : 125,
        "Yodacast Predicted Volume" : null,
        "Yodacast Predicted Football" : null,
        "Yodacast Predicted Weather" : null
    }, {
        "period" : 111,
        "Actual Call Volume" : 246,
        "Yodacast Predicted Volume" : null,
        "Yodacast Predicted Football" : null,
        "Yodacast Predicted Weather" : null
    }, {
        "period" : 112,
        "Actual Call Volume" : 383,
        "Yodacast Predicted Volume" : null,
        "Yodacast Predicted Football" : null,
        "Yodacast Predicted Weather" : null
    }, {
        "period" : 113,
        "Actual Call Volume" : 636,
        "Yodacast Predicted Volume" : null,
        "Yodacast Predicted Football" : null,
        "Yodacast Predicted Weather" : null
    }, {
        "period" : 114,
        "Actual Call Volume" : 764,
        "Yodacast Predicted Volume" : null,
        "Yodacast Predicted Football" : null,
        "Yodacast Predicted Weather" : null
    }, {
        "period" : 115,
        "Actual Call Volume" : 1027,
        "Yodacast Predicted Volume" : null,
        "Yodacast Predicted Football" : null,
        "Yodacast Predicted Weather" : null
    }, {
        "period" : 116,
        "Actual Call Volume" : 1146,
        "Yodacast Predicted Volume" : null,
        "Yodacast Predicted Football" : null,
        "Yodacast Predicted Weather" : null
    }, {
        "period" : 117,
        "Actual Call Volume" : 1238,
        "Yodacast Predicted Volume" : null,
        "Yodacast Predicted Football" : null,
        "Yodacast Predicted Weather" : null
    }, {
        "period" : 118,
        "Actual Call Volume" : 1286,
        "Yodacast Predicted Volume" : null,
        "Yodacast Predicted Football" : null,
        "Yodacast Predicted Weather" : null
    }, {
        "period" : 119,
        "Actual Call Volume" : 1448,
        "Yodacast Predicted Volume" : null,
        "Yodacast Predicted Football" : null,
        "Yodacast Predicted Weather" : null
    }, {
        "period" : 120,
        "Actual Call Volume" : 1328,
        "Yodacast Predicted Volume" : null,
        "Yodacast Predicted Football" : null,
        "Yodacast Predicted Weather" : null
    }, {
        "period" : 121,
        "Actual Call Volume" : 1308,
        "Yodacast Predicted Volume" : null,
        "Yodacast Predicted Football" : null,
        "Yodacast Predicted Weather" : null
    }, {
        "period" : 122,
        "Actual Call Volume" : 1232,
        "Yodacast Predicted Volume" : null,
        "Yodacast Predicted Football" : null,
        "Yodacast Predicted Weather" : null
    }, {
        "period" : 123,
        "Actual Call Volume" : 1239,
        "Yodacast Predicted Volume" : null,
        "Yodacast Predicted Football" : null,
        "Yodacast Predicted Weather" : null
    }, {
        "period" : 124,
        "Actual Call Volume" : 1256,
        "Yodacast Predicted Volume" : null,
        "Yodacast Predicted Football" : null,
        "Yodacast Predicted Weather" : null
    }, {
        "period" : 125,
        "Actual Call Volume" : 1256,
        "Yodacast Predicted Volume" : null,
        "Yodacast Predicted Football" : null,
        "Yodacast Predicted Weather" : null
    }, {
        "period" : 126,
        "Actual Call Volume" : 1240,
        "Yodacast Predicted Volume" : null,
        "Yodacast Predicted Football" : null,
        "Yodacast Predicted Weather" : null
    }, {
        "period" : 127,
        "Actual Call Volume" : 1192,
        "Yodacast Predicted Volume" : null,
        "Yodacast Predicted Football" : null,
        "Yodacast Predicted Weather" : null
    }, {
        "period" : 128,
        "Actual Call Volume" : 1195,
        "Yodacast Predicted Volume" : null,
        "Yodacast Predicted Football" : null,
        "Yodacast Predicted Weather" : null
    }, {
        "period" : 129,
        "Actual Call Volume" : 1276,
        "Yodacast Predicted Volume" : null,
        "Yodacast Predicted Football" : null,
        "Yodacast Predicted Weather" : null
    }, {
        "period" : 130,
        "Actual Call Volume" : 1349,
        "Yodacast Predicted Volume" : null,
        "Yodacast Predicted Football" : null,
        "Yodacast Predicted Weather" : null
    }, {
        "period" : 131,
        "Actual Call Volume" : 1272,
        "Yodacast Predicted Volume" : null,
        "Yodacast Predicted Football" : null,
        "Yodacast Predicted Weather" : null
    }, {
        "period" : 132,
        "Actual Call Volume" : 1298,
        "Yodacast Predicted Volume" : null,
        "Yodacast Predicted Football" : null,
        "Yodacast Predicted Weather" : null
    }, {
        "period" : 133,
        "Actual Call Volume" : 1189,
        "Yodacast Predicted Volume" : null,
        "Yodacast Predicted Football" : null,
        "Yodacast Predicted Weather" : null
    }, {
        "period" : 134,
        "Actual Call Volume" : 1000,
        "Yodacast Predicted Volume" : null,
        "Yodacast Predicted Football" : null,
        "Yodacast Predicted Weather" : null
    }, {
        "period" : 135,
        "Actual Call Volume" : 922,
        "Yodacast Predicted Volume" : null,
        "Yodacast Predicted Football" : null,
        "Yodacast Predicted Weather" : null
    }, {
        "period" : 136,
        "Actual Call Volume" : 823,
        "Yodacast Predicted Volume" : null,
        "Yodacast Predicted Football" : null,
        "Yodacast Predicted Weather" : null
    }, {
        "period" : 137,
        "Actual Call Volume" : 757,
        "Yodacast Predicted Volume" : null,
        "Yodacast Predicted Football" : null,
        "Yodacast Predicted Weather" : null
    }, {
        "period" : 138,
        "Actual Call Volume" : 719,
        "Yodacast Predicted Volume" : null,
        "Yodacast Predicted Football" : null,
        "Yodacast Predicted Weather" : null
    }, {
        "period" : 139,
        "Actual Call Volume" : 543,
        "Yodacast Predicted Volume" : null,
        "Yodacast Predicted Football" : null,
        "Yodacast Predicted Weather" : null
    }, {
        "period" : 140,
        "Actual Call Volume" : 427,
        "Yodacast Predicted Volume" : null,
        "Yodacast Predicted Football" : null,
        "Yodacast Predicted Weather" : null
    }, {
        "period" : 141,
        "Actual Call Volume" : 282,
        "Yodacast Predicted Volume" : null,
        "Yodacast Predicted Football" : null,
        "Yodacast Predicted Weather" : null
    }, {
        "period" : 142,
        "Actual Call Volume" : 263,
        "Yodacast Predicted Volume" : null,
        "Yodacast Predicted Football" : null,
        "Yodacast Predicted Weather" : null
    }, {
        "period" : 143,
        "Actual Call Volume" : 176,
        "Yodacast Predicted Volume" : null,
        "Yodacast Predicted Football" : null,
        "Yodacast Predicted Weather" : null
    }, {
        "period" : 144,
        "Actual Call Volume" : 122,
        "Yodacast Predicted Volume" : null,
        "Yodacast Predicted Football" : null,
        "Yodacast Predicted Weather" : null
    }, {
        "period" : 145,
        "Actual Call Volume" : 80,
        "Yodacast Predicted Volume" : null,
        "Yodacast Predicted Football" : null,
        "Yodacast Predicted Weather" : null
    }, {
        "period" : 146,
        "Actual Call Volume" : 73,
        "Yodacast Predicted Volume" : null,
        "Yodacast Predicted Football" : null,
        "Yodacast Predicted Weather" : null
    }, {
        "period" : 147,
        "Actual Call Volume" : 46,
        "Yodacast Predicted Volume" : null,
        "Yodacast Predicted Football" : null,
        "Yodacast Predicted Weather" : null
    }, {
        "period" : 148,
        "Actual Call Volume" : 24,
        "Yodacast Predicted Volume" : null,
        "Yodacast Predicted Football" : null,
        "Yodacast Predicted Weather" : null
    }, {
        "period" : 149,
        "Actual Call Volume" : 17,
        "Yodacast Predicted Volume" : null,
        "Yodacast Predicted Football" : null,
        "Yodacast Predicted Weather" : null
    }, {
        "period" : 150,
        "Actual Call Volume" : 11,
        "Yodacast Predicted Volume" : null,
        "Yodacast Predicted Football" : null,
        "Yodacast Predicted Weather" : null
    }, {
        "period" : 151,
        "Actual Call Volume" : 12,
        "Yodacast Predicted Volume" : null,
        "Yodacast Predicted Football" : null,
        "Yodacast Predicted Weather" : null
    }, {
        "period" : 152,
        "Actual Call Volume" : 8,
        "Yodacast Predicted Volume" : null,
        "Yodacast Predicted Football" : null,
        "Yodacast Predicted Weather" : null
    }, {
        "period" : 153,
        "Actual Call Volume" : 22,
        "Yodacast Predicted Volume" : null,
        "Yodacast Predicted Football" : null,
        "Yodacast Predicted Weather" : null
    }, {
        "period" : 154,
        "Actual Call Volume" : 19,
        "Yodacast Predicted Volume" : null,
        "Yodacast Predicted Football" : null,
        "Yodacast Predicted Weather" : null
    }, {
        "period" : 155,
        "Actual Call Volume" : 28,
        "Yodacast Predicted Volume" : null,
        "Yodacast Predicted Football" : null,
        "Yodacast Predicted Weather" : null
    }, {
        "period" : 156,
        "Actual Call Volume" : 49,
        "Yodacast Predicted Volume" : null,
        "Yodacast Predicted Football" : null,
        "Yodacast Predicted Weather" : null
    }, {
        "period" : 157,
        "Actual Call Volume" : 80,
        "Yodacast Predicted Volume" : null,
        "Yodacast Predicted Football" : null,
        "Yodacast Predicted Weather" : null
    }, {
        "period" : 158,
        "Actual Call Volume" : 169,
        "Yodacast Predicted Volume" : null,
        "Yodacast Predicted Football" : null,
        "Yodacast Predicted Weather" : null
    }, {
        "period" : 159,
        "Actual Call Volume" : 348,
        "Yodacast Predicted Volume" : null,
        "Yodacast Predicted Football" : null,
        "Yodacast Predicted Weather" : null
    }, {
        "period" : 160,
        "Actual Call Volume" : 455,
        "Yodacast Predicted Volume" : null,
        "Yodacast Predicted Football" : null,
        "Yodacast Predicted Weather" : null
    }, {
        "period" : 161,
        "Actual Call Volume" : 879,
        "Yodacast Predicted Volume" : null,
        "Yodacast Predicted Football" : null,
        "Yodacast Predicted Weather" : null
    }, {
        "period" : 162,
        "Actual Call Volume" : 996,
        "Yodacast Predicted Volume" : null,
        "Yodacast Predicted Football" : null,
        "Yodacast Predicted Weather" : null
    }, {
        "period" : 163,
        "Actual Call Volume" : 1171,
        "Yodacast Predicted Volume" : null,
        "Yodacast Predicted Football" : null,
        "Yodacast Predicted Weather" : null
    }, {
        "period" : 164,
        "Actual Call Volume" : 1359,
        "Yodacast Predicted Volume" : null,
        "Yodacast Predicted Football" : null,
        "Yodacast Predicted Weather" : null
    }, {
        "period" : 165,
        "Actual Call Volume" : 1461,
        "Yodacast Predicted Volume" : null,
        "Yodacast Predicted Football" : null,
        "Yodacast Predicted Weather" : null
    }, {
        "period" : 166,
        "Actual Call Volume" : 1469,
        "Yodacast Predicted Volume" : null,
        "Yodacast Predicted Football" : null,
        "Yodacast Predicted Weather" : null
    }, {
        "period" : 167,
        "Actual Call Volume" : 1484,
        "Yodacast Predicted Volume" : null,
        "Yodacast Predicted Football" : null,
        "Yodacast Predicted Weather" : null
    }, {
        "period" : 168,
        "Actual Call Volume" : 1443,
        "Yodacast Predicted Volume" : null,
        "Yodacast Predicted Football" : null,
        "Yodacast Predicted Weather" : null
    }, {
        "period" : 169,
        "Actual Call Volume" : 1490,
        "Yodacast Predicted Volume" : null,
        "Yodacast Predicted Football" : null,
        "Yodacast Predicted Weather" : null
    }, {
        "period" : 170,
        "Actual Call Volume" : 1561,
        "Yodacast Predicted Volume" : null,
        "Yodacast Predicted Football" : null,
        "Yodacast Predicted Weather" : null
    }, {
        "period" : 171,
        "Actual Call Volume" : 1450,
        "Yodacast Predicted Volume" : null,
        "Yodacast Predicted Football" : null,
        "Yodacast Predicted Weather" : null
    }, {
        "period" : 172,
        "Actual Call Volume" : 1370,
        "Yodacast Predicted Volume" : null,
        "Yodacast Predicted Football" : null,
        "Yodacast Predicted Weather" : null
    }, {
        "period" : 173,
        "Actual Call Volume" : 1314,
        "Yodacast Predicted Volume" : null,
        "Yodacast Predicted Football" : null,
        "Yodacast Predicted Weather" : null
    }, {
        "period" : 174,
        "Actual Call Volume" : 1444,
        "Yodacast Predicted Volume" : null,
        "Yodacast Predicted Football" : null,
        "Yodacast Predicted Weather" : null
    }, {
        "period" : 175,
        "Actual Call Volume" : 1365,
        "Yodacast Predicted Volume" : null,
        "Yodacast Predicted Football" : null,
        "Yodacast Predicted Weather" : null
    }, {
        "period" : 176,
        "Actual Call Volume" : 1419,
        "Yodacast Predicted Volume" : null,
        "Yodacast Predicted Football" : null,
        "Yodacast Predicted Weather" : null
    }, {
        "period" : 177,
        "Actual Call Volume" : 1312,
        "Yodacast Predicted Volume" : null,
        "Yodacast Predicted Football" : null,
        "Yodacast Predicted Weather" : null
    }, {
        "period" : 178,
        "Actual Call Volume" : 1312,
        "Yodacast Predicted Volume" : null,
        "Yodacast Predicted Football" : null,
        "Yodacast Predicted Weather" : null
    }, {
        "period" : 179,
        "Actual Call Volume" : 1221,
        "Yodacast Predicted Volume" : null,
        "Yodacast Predicted Football" : null,
        "Yodacast Predicted Weather" : null
    }, {
        "period" : 180,
        "Actual Call Volume" : 1076,
        "Yodacast Predicted Volume" : null,
        "Yodacast Predicted Football" : null,
        "Yodacast Predicted Weather" : null
    }, {
        "period" : 181,
        "Actual Call Volume" : 950,
        "Yodacast Predicted Volume" : null,
        "Yodacast Predicted Football" : null,
        "Yodacast Predicted Weather" : null
    }, {
        "period" : 182,
        "Actual Call Volume" : 850,
        "Yodacast Predicted Volume" : 925,
        "Yodacast Predicted Football" : 925,
        "Yodacast Predicted Weather" : 879
    }, {
        "period" : 183,
        "Actual Call Volume" : null,
        "Yodacast Predicted Volume" : 867,
        "Yodacast Predicted Football" : 867,
        "Yodacast Predicted Weather" : 761
    }, {
        "period" : 184,
        "Actual Call Volume" : null,
        "Yodacast Predicted Volume" : 768,
        "Yodacast Predicted Football" : 768,
        "Yodacast Predicted Weather" : 633
    }, {
        "period" : 185,
        "Actual Call Volume" : null,
        "Yodacast Predicted Volume" : 683,
        "Yodacast Predicted Football" : 683,
        "Yodacast Predicted Weather" : 508
    }, {
        "period" : 186,
        "Actual Call Volume" : null,
        "Yodacast Predicted Volume" : 348,
        "Yodacast Predicted Football" : 348,
        "Yodacast Predicted Weather" : 393
    }, {
        "period" : 187,
        "Actual Call Volume" : null,
        "Yodacast Predicted Volume" : 254,
        "Yodacast Predicted Football" : 254,
        "Yodacast Predicted Weather" : 291
    }, {
        "period" : 188,
        "Actual Call Volume" : null,
        "Yodacast Predicted Volume" : 182,
        "Yodacast Predicted Football" : 182,
        "Yodacast Predicted Weather" : 210
    }, {
        "period" : 189,
        "Actual Call Volume" : null,
        "Yodacast Predicted Volume" : 135,
        "Yodacast Predicted Football" : 135,
        "Yodacast Predicted Weather" : 154
    }, {
        "period" : 190,
        "Actual Call Volume" : null,
        "Yodacast Predicted Volume" : 116,
        "Yodacast Predicted Football" : 116,
        "Yodacast Predicted Weather" : 125
    }, {
        "period" : 191,
        "Actual Call Volume" : null,
        "Yodacast Predicted Volume" : 126,
        "Yodacast Predicted Football" : 126,
        "Yodacast Predicted Weather" : 128
    }, {
        "period" : 192,
        "Actual Call Volume" : null,
        "Yodacast Predicted Volume" : 166,
        "Yodacast Predicted Football" : 166,
        "Yodacast Predicted Weather" : 162
    }, {
        "period" : 193,
        "Actual Call Volume" : null,
        "Yodacast Predicted Volume" : 230,
        "Yodacast Predicted Football" : 230,
        "Yodacast Predicted Weather" : 221
    }, {
        "period" : 194,
        "Actual Call Volume" : null,
        "Yodacast Predicted Volume" : 85,
        "Yodacast Predicted Football" : 85,
        "Yodacast Predicted Weather" : 7
    }, {
        "period" : 195,
        "Actual Call Volume" : null,
        "Yodacast Predicted Volume" : 13,
        "Yodacast Predicted Football" : 13,
        "Yodacast Predicted Weather" : 18
    }, {
        "period" : 196,
        "Actual Call Volume" : null,
        "Yodacast Predicted Volume" : 22,
        "Yodacast Predicted Football" : 22,
        "Yodacast Predicted Weather" : 13
    }, {
        "period" : 197,
        "Actual Call Volume" : null,
        "Yodacast Predicted Volume" : 16,
        "Yodacast Predicted Football" : 16,
        "Yodacast Predicted Weather" : 31
    }, {
        "period" : 198,
        "Actual Call Volume" : null,
        "Yodacast Predicted Volume" : 62,
        "Yodacast Predicted Football" : 62,
        "Yodacast Predicted Weather" : 16
    }, {
        "period" : 199,
        "Actual Call Volume" : null,
        "Yodacast Predicted Volume" : 54,
        "Yodacast Predicted Football" : 54,
        "Yodacast Predicted Weather" : 8
    }, {
        "period" : 200,
        "Actual Call Volume" : null,
        "Yodacast Predicted Volume" : 46,
        "Yodacast Predicted Football" : 46,
        "Yodacast Predicted Weather" : 4
    }, {
        "period" : 201,
        "Actual Call Volume" : null,
        "Yodacast Predicted Volume" : 39,
        "Yodacast Predicted Football" : 39,
        "Yodacast Predicted Weather" : 9
    }, {
        "period" : 202,
        "Actual Call Volume" : null,
        "Yodacast Predicted Volume" : 32,
        "Yodacast Predicted Football" : 32,
        "Yodacast Predicted Weather" : 15
    }, {
        "period" : 203,
        "Actual Call Volume" : null,
        "Yodacast Predicted Volume" : 22,
        "Yodacast Predicted Football" : 22,
        "Yodacast Predicted Weather" : 23
    }, {
        "period" : 204,
        "Actual Call Volume" : null,
        "Yodacast Predicted Volume" : 8,
        "Yodacast Predicted Football" : 8,
        "Yodacast Predicted Weather" : 35
    }, {
        "period" : 205,
        "Actual Call Volume" : null,
        "Yodacast Predicted Volume" : 13,
        "Yodacast Predicted Football" : 13,
        "Yodacast Predicted Weather" : 52
    }, {
        "period" : 206,
        "Actual Call Volume" : null,
        "Yodacast Predicted Volume" : 46,
        "Yodacast Predicted Football" : 46,
        "Yodacast Predicted Weather" : 80
    }, {
        "period" : 207,
        "Actual Call Volume" : null,
        "Yodacast Predicted Volume" : 94,
        "Yodacast Predicted Football" : 94,
        "Yodacast Predicted Weather" : 123
    }, {
        "period" : 208,
        "Actual Call Volume" : null,
        "Yodacast Predicted Volume" : 160,
        "Yodacast Predicted Football" : 160,
        "Yodacast Predicted Weather" : 186
    }, {
        "period" : 209,
        "Actual Call Volume" : null,
        "Yodacast Predicted Volume" : 246,
        "Yodacast Predicted Football" : 246,
        "Yodacast Predicted Weather" : 269
    }, {
        "period" : 210,
        "Actual Call Volume" : null,
        "Yodacast Predicted Volume" : 350,
        "Yodacast Predicted Football" : 350,
        "Yodacast Predicted Weather" : 372
    }, {
        "period" : 211,
        "Actual Call Volume" : null,
        "Yodacast Predicted Volume" : 469,
        "Yodacast Predicted Football" : 469,
        "Yodacast Predicted Weather" : 492
    }, {
        "period" : 212,
        "Actual Call Volume" : null,
        "Yodacast Predicted Volume" : 593,
        "Yodacast Predicted Football" : 593,
        "Yodacast Predicted Weather" : 621
    }, {
        "period" : 213,
        "Actual Call Volume" : null,
        "Yodacast Predicted Volume" : 715,
        "Yodacast Predicted Football" : 715,
        "Yodacast Predicted Weather" : 748
    }, {
        "period" : 214,
        "Actual Call Volume" : null,
        "Yodacast Predicted Volume" : 809,
        "Yodacast Predicted Football" : 809,
        "Yodacast Predicted Weather" : 851
    }, {
        "period" : 215,
        "Actual Call Volume" : null,
        "Yodacast Predicted Volume" : 873,
        "Yodacast Predicted Football" : 873,
        "Yodacast Predicted Weather" : 928
    }, {
        "period" : 216,
        "Actual Call Volume" : null,
        "Yodacast Predicted Volume" : 885,
        "Yodacast Predicted Football" : 885,
        "Yodacast Predicted Weather" : 958
    }, {
        "period" : 217,
        "Actual Call Volume" : null,
        "Yodacast Predicted Volume" : 862,
        "Yodacast Predicted Football" : 862,
        "Yodacast Predicted Weather" : 951
    }, {
        "period" : 218,
        "Actual Call Volume" : null,
        "Yodacast Predicted Volume" : 789,
        "Yodacast Predicted Football" : 789,
        "Yodacast Predicted Weather" : 892
    }, {
        "period" : 219,
        "Actual Call Volume" : null,
        "Yodacast Predicted Volume" : 696,
        "Yodacast Predicted Football" : 696,
        "Yodacast Predicted Weather" : 811
    }, {
        "period" : 220,
        "Actual Call Volume" : null,
        "Yodacast Predicted Volume" : 618,
        "Yodacast Predicted Football" : 618,
        "Yodacast Predicted Weather" : 743
    }, {
        "period" : 221,
        "Actual Call Volume" : null,
        "Yodacast Predicted Volume" : 547,
        "Yodacast Predicted Football" : 547,
        "Yodacast Predicted Weather" : 678
    }, {
        "period" : 222,
        "Actual Call Volume" : null,
        "Yodacast Predicted Volume" : 512,
        "Yodacast Predicted Football" : 512,
        "Yodacast Predicted Weather" : 647
    }, {
        "period" : 223,
        "Actual Call Volume" : null,
        "Yodacast Predicted Volume" : 481,
        "Yodacast Predicted Football" : 481,
        "Yodacast Predicted Weather" : 620
    }, {
        "period" : 224,
        "Actual Call Volume" : null,
        "Yodacast Predicted Volume" : 462,
        "Yodacast Predicted Football" : 462,
        "Yodacast Predicted Weather" : 603
    }, {
        "period" : 225,
        "Actual Call Volume" : null,
        "Yodacast Predicted Volume" : 449,
        "Yodacast Predicted Football" : 449,
        "Yodacast Predicted Weather" : 591
    }, {
        "period" : 226,
        "Actual Call Volume" : null,
        "Yodacast Predicted Volume" : 441,
        "Yodacast Predicted Football" : 441,
        "Yodacast Predicted Weather" : 582
    }, {
        "period" : 227,
        "Actual Call Volume" : null,
        "Yodacast Predicted Volume" : 427,
        "Yodacast Predicted Football" : 427,
        "Yodacast Predicted Weather" : 567
    }, {
        "period" : 228,
        "Actual Call Volume" : null,
        "Yodacast Predicted Volume" : 405,
        "Yodacast Predicted Football" : 405,
        "Yodacast Predicted Weather" : 541
    }, {
        "period" : 229,
        "Actual Call Volume" : null,
        "Yodacast Predicted Volume" : 371,
        "Yodacast Predicted Football" : 371,
        "Yodacast Predicted Weather" : 502
    }, {
        "period" : 230,
        "Actual Call Volume" : null,
        "Yodacast Predicted Volume" : 328,
        "Yodacast Predicted Football" : 328,
        "Yodacast Predicted Weather" : 452
    }, {
        "period" : 231,
        "Actual Call Volume" : null,
        "Yodacast Predicted Volume" : 279,
        "Yodacast Predicted Football" : 279,
        "Yodacast Predicted Weather" : 394
    }, {
        "period" : 232,
        "Actual Call Volume" : null,
        "Yodacast Predicted Volume" : 229,
        "Yodacast Predicted Football" : 229,
        "Yodacast Predicted Weather" : 334
    }, {
        "period" : 233,
        "Actual Call Volume" : null,
        "Yodacast Predicted Volume" : 182,
        "Yodacast Predicted Football" : 182,
        "Yodacast Predicted Weather" : 277
    }, {
        "period" : 234,
        "Actual Call Volume" : null,
        "Yodacast Predicted Volume" : 141,
        "Yodacast Predicted Football" : 141,
        "Yodacast Predicted Weather" : 228
    }, {
        "period" : 235,
        "Actual Call Volume" : null,
        "Yodacast Predicted Volume" : 109,
        "Yodacast Predicted Football" : 109,
        "Yodacast Predicted Weather" : 187
    }, {
        "period" : 236,
        "Actual Call Volume" : null,
        "Yodacast Predicted Volume" : 88,
        "Yodacast Predicted Football" : 88,
        "Yodacast Predicted Weather" : 159
    }, {
        "period" : 237,
        "Actual Call Volume" : null,
        "Yodacast Predicted Volume" : 78,
        "Yodacast Predicted Football" : 78,
        "Yodacast Predicted Weather" : 145
    }, {
        "period" : 238,
        "Actual Call Volume" : null,
        "Yodacast Predicted Volume" : 76,
        "Yodacast Predicted Football" : 76,
        "Yodacast Predicted Weather" : 143
    }, {
        "period" : 239,
        "Actual Call Volume" : null,
        "Yodacast Predicted Volume" : 77,
        "Yodacast Predicted Football" : 77,
        "Yodacast Predicted Weather" : 139
    }, {
        "period" : 240,
        "Actual Call Volume" : null,
        "Yodacast Predicted Volume" : 73,
        "Yodacast Predicted Football" : 73,
        "Yodacast Predicted Weather" : 126
    }, {
        "period" : 241,
        "Actual Call Volume" : null,
        "Yodacast Predicted Volume" : 49,
        "Yodacast Predicted Football" : 49,
        "Yodacast Predicted Weather" : 96
    }, {
        "period" : 242,
        "Actual Call Volume" : null,
        "Yodacast Predicted Volume" : 73,
        "Yodacast Predicted Football" : 73,
        "Yodacast Predicted Weather" : 50
    }, {
        "period" : 243,
        "Actual Call Volume" : null,
        "Yodacast Predicted Volume" : 9,
        "Yodacast Predicted Football" : 9,
        "Yodacast Predicted Weather" : 38
    }, {
        "period" : 244,
        "Actual Call Volume" : null,
        "Yodacast Predicted Volume" : 2,
        "Yodacast Predicted Football" : 2,
        "Yodacast Predicted Weather" : 1
    }, {
        "period" : 245,
        "Actual Call Volume" : null,
        "Yodacast Predicted Volume" : 49,
        "Yodacast Predicted Football" : 49,
        "Yodacast Predicted Weather" : 39
    }, {
        "period" : 246,
        "Actual Call Volume" : null,
        "Yodacast Predicted Volume" : 8,
        "Yodacast Predicted Football" : 8,
        "Yodacast Predicted Weather" : 24
    }, {
        "period" : 247,
        "Actual Call Volume" : null,
        "Yodacast Predicted Volume" : 20,
        "Yodacast Predicted Football" : 20,
        "Yodacast Predicted Weather" : 9
    }, {
        "period" : 248,
        "Actual Call Volume" : null,
        "Yodacast Predicted Volume" : 34,
        "Yodacast Predicted Football" : 34,
        "Yodacast Predicted Weather" : 28
    }, {
        "period" : 249,
        "Actual Call Volume" : null,
        "Yodacast Predicted Volume" : 35,
        "Yodacast Predicted Football" : 35,
        "Yodacast Predicted Weather" : 36
    }, {
        "period" : 250,
        "Actual Call Volume" : null,
        "Yodacast Predicted Volume" : 25,
        "Yodacast Predicted Football" : 25,
        "Yodacast Predicted Weather" : 34
    }, {
        "period" : 251,
        "Actual Call Volume" : null,
        "Yodacast Predicted Volume" : 7,
        "Yodacast Predicted Football" : 7,
        "Yodacast Predicted Weather" : 24
    }, {
        "period" : 252,
        "Actual Call Volume" : null,
        "Yodacast Predicted Volume" : 12,
        "Yodacast Predicted Football" : 12,
        "Yodacast Predicted Weather" : 11
    }, {
        "period" : 253,
        "Actual Call Volume" : null,
        "Yodacast Predicted Volume" : 25,
        "Yodacast Predicted Football" : 25,
        "Yodacast Predicted Weather" : 0
    }, {
        "period" : 254,
        "Actual Call Volume" : null,
        "Yodacast Predicted Volume" : 25,
        "Yodacast Predicted Football" : 25,
        "Yodacast Predicted Weather" : 2
    }, {
        "period" : 255,
        "Actual Call Volume" : null,
        "Yodacast Predicted Volume" : 7,
        "Yodacast Predicted Football" : 7,
        "Yodacast Predicted Weather" : 13
    }, {
        "period" : 256,
        "Actual Call Volume" : null,
        "Yodacast Predicted Volume" : 32,
        "Yodacast Predicted Football" : 32,
        "Yodacast Predicted Weather" : 51
    }, {
        "period" : 257,
        "Actual Call Volume" : null,
        "Yodacast Predicted Volume" : 91,
        "Yodacast Predicted Football" : 91,
        "Yodacast Predicted Weather" : 114
    }, {
        "period" : 258,
        "Actual Call Volume" : null,
        "Yodacast Predicted Volume" : 166,
        "Yodacast Predicted Football" : 166,
        "Yodacast Predicted Weather" : 195
    }, {
        "period" : 259,
        "Actual Call Volume" : null,
        "Yodacast Predicted Volume" : 248,
        "Yodacast Predicted Football" : 248,
        "Yodacast Predicted Weather" : 285
    }, {
        "period" : 260,
        "Actual Call Volume" : null,
        "Yodacast Predicted Volume" : 324,
        "Yodacast Predicted Football" : 324,
        "Yodacast Predicted Weather" : 370
    }, {
        "period" : 261,
        "Actual Call Volume" : null,
        "Yodacast Predicted Volume" : 380,
        "Yodacast Predicted Football" : 380,
        "Yodacast Predicted Weather" : 436
    }, {
        "period" : 262,
        "Actual Call Volume" : null,
        "Yodacast Predicted Volume" : 405,
        "Yodacast Predicted Football" : 405,
        "Yodacast Predicted Weather" : 466
    }, {
        "period" : 263,
        "Actual Call Volume" : null,
        "Yodacast Predicted Volume" : 393,
        "Yodacast Predicted Football" : 393,
        "Yodacast Predicted Weather" : 462
    }, {
        "period" : 264,
        "Actual Call Volume" : null,
        "Yodacast Predicted Volume" : 350,
        "Yodacast Predicted Football" : 350,
        "Yodacast Predicted Weather" : 431
    }, {
        "period" : 265,
        "Actual Call Volume" : null,
        "Yodacast Predicted Volume" : 286,
        "Yodacast Predicted Football" : 286,
        "Yodacast Predicted Weather" : 376
    }, {
        "period" : 266,
        "Actual Call Volume" : null,
        "Yodacast Predicted Volume" : 221,
        "Yodacast Predicted Football" : 221,
        "Yodacast Predicted Weather" : 318
    }, {
        "period" : 267,
        "Actual Call Volume" : null,
        "Yodacast Predicted Volume" : 168,
        "Yodacast Predicted Football" : 168,
        "Yodacast Predicted Weather" : 272
    }, {
        "period" : 268,
        "Actual Call Volume" : null,
        "Yodacast Predicted Volume" : 140,
        "Yodacast Predicted Football" : 140,
        "Yodacast Predicted Weather" : 253
    }, {
        "period" : 269,
        "Actual Call Volume" : null,
        "Yodacast Predicted Volume" : 134,
        "Yodacast Predicted Football" : 134,
        "Yodacast Predicted Weather" : 253
    }, {
        "period" : 270,
        "Actual Call Volume" : null,
        "Yodacast Predicted Volume" : 149,
        "Yodacast Predicted Football" : 180,
        "Yodacast Predicted Weather" : 190
    }, {
        "period" : 271,
        "Actual Call Volume" : null,
        "Yodacast Predicted Volume" : 177,
        "Yodacast Predicted Football" : 190,
        "Yodacast Predicted Weather" : 210
    }, {
        "period" : 272,
        "Actual Call Volume" : null,
        "Yodacast Predicted Volume" : 211,
        "Yodacast Predicted Football" : 140,
        "Yodacast Predicted Weather" : 160
    }, {
        "period" : 273,
        "Actual Call Volume" : null,
        "Yodacast Predicted Volume" : 242,
        "Yodacast Predicted Football" : 110,
        "Yodacast Predicted Weather" : 130
    }, {
        "period" : 274,
        "Actual Call Volume" : null,
        "Yodacast Predicted Volume" : 267,
        "Yodacast Predicted Football" : 92,
        "Yodacast Predicted Weather" : 102
    }, {
        "period" : 275,
        "Actual Call Volume" : null,
        "Yodacast Predicted Volume" : 282,
        "Yodacast Predicted Football" : 95,
        "Yodacast Predicted Weather" : 105
    }, {
        "period" : 276,
        "Actual Call Volume" : null,
        "Yodacast Predicted Volume" : 287,
        "Yodacast Predicted Football" : 97,
        "Yodacast Predicted Weather" : 115
    }, {
        "period" : 277,
        "Actual Call Volume" : null,
        "Yodacast Predicted Volume" : 281,
        "Yodacast Predicted Football" : 99,
        "Yodacast Predicted Weather" : 110
    }, {
        "period" : 278,
        "Actual Call Volume" : null,
        "Yodacast Predicted Volume" : 267,
        "Yodacast Predicted Football" : 120,
        "Yodacast Predicted Weather" : 135
    }, {
        "period" : 279,
        "Actual Call Volume" : null,
        "Yodacast Predicted Volume" : 246,
        "Yodacast Predicted Football" : 140,
        "Yodacast Predicted Weather" : 160
    }, {
        "period" : 280,
        "Actual Call Volume" : null,
        "Yodacast Predicted Volume" : 222,
        "Yodacast Predicted Football" : 150,
        "Yodacast Predicted Weather" : 170
    }, {
        "period" : 281,
        "Actual Call Volume" : null,
        "Yodacast Predicted Volume" : 195,
        "Yodacast Predicted Football" : 152,
        "Yodacast Predicted Weather" : 175
    }, {
        "period" : 282,
        "Actual Call Volume" : null,
        "Yodacast Predicted Volume" : 167,
        "Yodacast Predicted Football" : 150,
        "Yodacast Predicted Weather" : 180
    }, {
        "period" : 283,
        "Actual Call Volume" : null,
        "Yodacast Predicted Volume" : 140,
        "Yodacast Predicted Football" : 140,
        "Yodacast Predicted Weather" : 183
    }, {
        "period" : 284,
        "Actual Call Volume" : null,
        "Yodacast Predicted Volume" : 114,
        "Yodacast Predicted Football" : 114,
        "Yodacast Predicted Weather" : 158
    }, {
        "period" : 285,
        "Actual Call Volume" : null,
        "Yodacast Predicted Volume" : 88,
        "Yodacast Predicted Football" : 88,
        "Yodacast Predicted Weather" : 140
    }, {
        "period" : 286,
        "Actual Call Volume" : null,
        "Yodacast Predicted Volume" : 64,
        "Yodacast Predicted Football" : 64,
        "Yodacast Predicted Weather" : 129
    }, {
        "period" : 287,
        "Actual Call Volume" : null,
        "Yodacast Predicted Volume" : 39,
        "Yodacast Predicted Football" : 39,
        "Yodacast Predicted Weather" : 113
    }, {
        "period" : 288,
        "Actual Call Volume" : null,
        "Yodacast Predicted Volume" : 6,
        "Yodacast Predicted Football" : 6,
        "Yodacast Predicted Weather" : 82
    }, {
        "period" : 289,
        "Actual Call Volume" : null,
        "Yodacast Predicted Volume" : 25,
        "Yodacast Predicted Football" : 25,
        "Yodacast Predicted Weather" : 54
    }, {
        "period" : 290,
        "Actual Call Volume" : null,
        "Yodacast Predicted Volume" : 87,
        "Yodacast Predicted Football" : 87,
        "Yodacast Predicted Weather" : 23
    }, {
        "period" : 291,
        "Actual Call Volume" : null,
        "Yodacast Predicted Volume" : 21,
        "Yodacast Predicted Football" : 21,
        "Yodacast Predicted Weather" : 19
    }, {
        "period" : 292,
        "Actual Call Volume" : null,
        "Yodacast Predicted Volume" : 60,
        "Yodacast Predicted Football" : 60,
        "Yodacast Predicted Weather" : 122
    }, {
        "period" : 293,
        "Actual Call Volume" : null,
        "Yodacast Predicted Volume" : 60,
        "Yodacast Predicted Football" : 60,
        "Yodacast Predicted Weather" : 82
    }, {
        "period" : 294,
        "Actual Call Volume" : null,
        "Yodacast Predicted Volume" : 13,
        "Yodacast Predicted Football" : 13,
        "Yodacast Predicted Weather" : 2
    }, {
        "period" : 295,
        "Actual Call Volume" : null,
        "Yodacast Predicted Volume" : 14,
        "Yodacast Predicted Football" : 14,
        "Yodacast Predicted Weather" : 3
    }, {
        "period" : 296,
        "Actual Call Volume" : null,
        "Yodacast Predicted Volume" : 15,
        "Yodacast Predicted Football" : 15,
        "Yodacast Predicted Weather" : 0
    }, {
        "period" : 297,
        "Actual Call Volume" : null,
        "Yodacast Predicted Volume" : 10,
        "Yodacast Predicted Football" : 10,
        "Yodacast Predicted Weather" : 2
    }, {
        "period" : 298,
        "Actual Call Volume" : null,
        "Yodacast Predicted Volume" : 4,
        "Yodacast Predicted Football" : 4,
        "Yodacast Predicted Weather" : 11
    }, {
        "period" : 299,
        "Actual Call Volume" : null,
        "Yodacast Predicted Volume" : 28,
        "Yodacast Predicted Football" : 28,
        "Yodacast Predicted Weather" : 29
    }, {
        "period" : 300,
        "Actual Call Volume" : null,
        "Yodacast Predicted Volume" : 63,
        "Yodacast Predicted Football" : 63,
        "Yodacast Predicted Weather" : 56
    }, {
        "period" : 301,
        "Actual Call Volume" : null,
        "Yodacast Predicted Volume" : 118,
        "Yodacast Predicted Football" : 118,
        "Yodacast Predicted Weather" : 103
    }, {
        "period" : 302,
        "Actual Call Volume" : null,
        "Yodacast Predicted Volume" : 199,
        "Yodacast Predicted Football" : 199,
        "Yodacast Predicted Weather" : 176
    }, {
        "period" : 303,
        "Actual Call Volume" : null,
        "Yodacast Predicted Volume" : 311,
        "Yodacast Predicted Football" : 311,
        "Yodacast Predicted Weather" : 284
    }, {
        "period" : 304,
        "Actual Call Volume" : null,
        "Yodacast Predicted Volume" : 460,
        "Yodacast Predicted Football" : 460,
        "Yodacast Predicted Weather" : 436
    }, {
        "period" : 305,
        "Actual Call Volume" : null,
        "Yodacast Predicted Volume" : 644,
        "Yodacast Predicted Football" : 644,
        "Yodacast Predicted Weather" : 626
    }, {
        "period" : 306,
        "Actual Call Volume" : null,
        "Yodacast Predicted Volume" : 848,
        "Yodacast Predicted Football" : 848,
        "Yodacast Predicted Weather" : 841
    }, {
        "period" : 307,
        "Actual Call Volume" : null,
        "Yodacast Predicted Volume" : 1045,
        "Yodacast Predicted Football" : 1045,
        "Yodacast Predicted Weather" : 1050
    }, {
        "period" : 308,
        "Actual Call Volume" : null,
        "Yodacast Predicted Volume" : 1204,
        "Yodacast Predicted Football" : 1204,
        "Yodacast Predicted Weather" : 1218
    }, {
        "period" : 309,
        "Actual Call Volume" : null,
        "Yodacast Predicted Volume" : 1325,
        "Yodacast Predicted Football" : 1325,
        "Yodacast Predicted Weather" : 1348
    }, {
        "period" : 310,
        "Actual Call Volume" : null,
        "Yodacast Predicted Volume" : 1401,
        "Yodacast Predicted Football" : 1401,
        "Yodacast Predicted Weather" : 1430
    }, {
        "period" : 311,
        "Actual Call Volume" : null,
        "Yodacast Predicted Volume" : 1432,
        "Yodacast Predicted Football" : 1432,
        "Yodacast Predicted Weather" : 1477
    }, {
        "period" : 312,
        "Actual Call Volume" : null,
        "Yodacast Predicted Volume" : 1434,
        "Yodacast Predicted Football" : 1434,
        "Yodacast Predicted Weather" : 1504
    }, {
        "period" : 313,
        "Actual Call Volume" : null,
        "Yodacast Predicted Volume" : 1416,
        "Yodacast Predicted Football" : 1416,
        "Yodacast Predicted Weather" : 1511
    }, {
        "period" : 314,
        "Actual Call Volume" : null,
        "Yodacast Predicted Volume" : 1385,
        "Yodacast Predicted Football" : 1385,
        "Yodacast Predicted Weather" : 1506
    }, {
        "period" : 315,
        "Actual Call Volume" : null,
        "Yodacast Predicted Volume" : 1351,
        "Yodacast Predicted Football" : 1351,
        "Yodacast Predicted Weather" : 1498
    }, {
        "period" : 316,
        "Actual Call Volume" : null,
        "Yodacast Predicted Volume" : 1329,
        "Yodacast Predicted Football" : 1329,
        "Yodacast Predicted Weather" : 1501
    }, {
        "period" : 317,
        "Actual Call Volume" : null,
        "Yodacast Predicted Volume" : 1326,
        "Yodacast Predicted Football" : 1326,
        "Yodacast Predicted Weather" : 1516
    }, {
        "period" : 318,
        "Actual Call Volume" : null,
        "Yodacast Predicted Volume" : 1332,
        "Yodacast Predicted Football" : 1332,
        "Yodacast Predicted Weather" : 1529
    }, {
        "period" : 319,
        "Actual Call Volume" : null,
        "Yodacast Predicted Volume" : 1339,
        "Yodacast Predicted Football" : 1339,
        "Yodacast Predicted Weather" : 1540
    }, {
        "period" : 320,
        "Actual Call Volume" : null,
        "Yodacast Predicted Volume" : 1339,
        "Yodacast Predicted Football" : 1339,
        "Yodacast Predicted Weather" : 1542
    }, {
        "period" : 321,
        "Actual Call Volume" : null,
        "Yodacast Predicted Volume" : 1333,
        "Yodacast Predicted Football" : 1333,
        "Yodacast Predicted Weather" : 1534
    }, {
        "period" : 322,
        "Actual Call Volume" : null,
        "Yodacast Predicted Volume" : 1304,
        "Yodacast Predicted Football" : 1304,
        "Yodacast Predicted Weather" : 1501
    }, {
        "period" : 323,
        "Actual Call Volume" : null,
        "Yodacast Predicted Volume" : 1256,
        "Yodacast Predicted Football" : 1256,
        "Yodacast Predicted Weather" : 1449
    }, {
        "period" : 324,
        "Actual Call Volume" : null,
        "Yodacast Predicted Volume" : 1183,
        "Yodacast Predicted Football" : 1183,
        "Yodacast Predicted Weather" : 1371
    }, {
        "period" : 325,
        "Actual Call Volume" : null,
        "Yodacast Predicted Volume" : 1104,
        "Yodacast Predicted Football" : 1104,
        "Yodacast Predicted Weather" : 1286
    }, {
        "period" : 326,
        "Actual Call Volume" : null,
        "Yodacast Predicted Volume" : 1009,
        "Yodacast Predicted Football" : 1009,
        "Yodacast Predicted Weather" : 1185
    }, {
        "period" : 327,
        "Actual Call Volume" : null,
        "Yodacast Predicted Volume" : 904,
        "Yodacast Predicted Football" : 904,
        "Yodacast Predicted Weather" : 1069
    }, {
        "period" : 328,
        "Actual Call Volume" : null,
        "Yodacast Predicted Volume" : 790,
        "Yodacast Predicted Football" : 790,
        "Yodacast Predicted Weather" : 942
    }, {
        "period" : 329,
        "Actual Call Volume" : null,
        "Yodacast Predicted Volume" : 676,
        "Yodacast Predicted Football" : 676,
        "Yodacast Predicted Weather" : 811
    }, {
        "period" : 330,
        "Actual Call Volume" : null,
        "Yodacast Predicted Volume" : 564,
        "Yodacast Predicted Football" : 564,
        "Yodacast Predicted Weather" : 678
    }, {
        "period" : 331,
        "Actual Call Volume" : null,
        "Yodacast Predicted Volume" : 454,
        "Yodacast Predicted Football" : 454,
        "Yodacast Predicted Weather" : 545
    }, {
        "period" : 332,
        "Actual Call Volume" : null,
        "Yodacast Predicted Volume" : 351,
        "Yodacast Predicted Football" : 351,
        "Yodacast Predicted Weather" : 418
    }, {
        "period" : 333,
        "Actual Call Volume" : null,
        "Yodacast Predicted Volume" : 257,
        "Yodacast Predicted Football" : 257,
        "Yodacast Predicted Weather" : 300
    }, {
        "period" : 334,
        "Actual Call Volume" : null,
        "Yodacast Predicted Volume" : 174,
        "Yodacast Predicted Football" : 174,
        "Yodacast Predicted Weather" : 193
    }, {
        "period" : 335,
        "Actual Call Volume" : null,
        "Yodacast Predicted Volume" : 101,
        "Yodacast Predicted Football" : 101,
        "Yodacast Predicted Weather" : 102
    }, {
        "period" : 336,
        "Actual Call Volume" : null,
        "Yodacast Predicted Volume" : 37,
        "Yodacast Predicted Football" : 37,
        "Yodacast Predicted Weather" : 24
    } ];

    console.log("hey" + a)
    console.log("hey" + b)
    console.log("hey" + c)
    console.log("hey" + d)
    if (a == false) {
        for (var i = 0; i < updatedChart.length; i++)
            delete updatedChart[i]["Actual Call Volume"];
    }

    if (b == false) {
        for (var i = 0; i < updatedChart.length; i++)
            delete updatedChart[i]["Yodacast Predicted Volume"];
    }

    if (c == false) {
        for (var i = 0; i < updatedChart.length; i++)
            delete updatedChart[i]["Yodacast Predicted Football"];
    }

    if (d == false) {
        for (var i = 0; i < updatedChart.length; i++)
            delete updatedChart[i]["Yodacast Predicted Weather"];
    }

    return updatedChart;
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

function drawFirstYoda(event) {
    var mydata;
    var mylabel;
    if (event == "fb"){
        mydata = getUpdateChart(true, false, true, false);
        mylabel= [ 'Actual Call Volume', 'Yodacast Predicted Football'];
    }
    if(event == "w"){
        mydata = getUpdateChart(true, false, false, true);
        mylabel= [ 'Actual Call Volume', 'Yodacast Predicted Weather'];
    }
    
    if(event =="n"){
        mydata = getUpdateChart(true, true, false, false);
        mylabel= [ 'Actual Call Volume', 'Yodacast Predicted Volume'];
    }
    
    $("#morris-area-chart").empty();
    callChart = Morris.Line({
        element : 'morris-area-chart',
        data : mydata,
        xkey : 'period',
        ykeys : [ 'Actual Call Volume', 'Yodacast Predicted Volume',
                'Yodacast Predicted Football', 'Yodacast Predicted Weather' ],
        labels : mylabel,
        pointSize : 2,
        parseTime : false,
        hideHover : 'auto',
        lineWidth : 4,
        resize : true,
        events : [ 182 ],
        eventStrokeWidth : 2,
        eventLineColors : [ '#000000' ],
        xLabels : "day",
        xLabelFormat : function(d) {
            return '';
        },
        lineColors : [ '#424242', '#7cc359','#7cc359','#7cc359']
    });

    callChart.options.labels.forEach(function(label, i) {
        var legendItem = $('<span></span>').text(label).css('color',
                callChart.options.lineColors[i])
        var checkbox = $('<input type="checkbox" id='
                + label.replace(/\s/g, '')
                + ' class="lineCheckbox" checked="">');
        $('#legend').append(checkbox);
        $('#legend').append(legendItem);
    })
    var dashBoard = $('<spanx "></spanx>').text("Today -----").css('color',
            "black");
    $('#ActualCallVolume').attr('checked', true);
    $('#YodacastPredictedVolume').attr('checked', true);
    $('#YodacastPredictedFootball').attr('checked', true);
    $('#YodacastPredictedWeather').attr('checked', true);

    $('#ActualCallVolume')
            .on(
                    'change',
                    function() {
                        var isChecked1 = $('#ActualCallVolume').is(':checked');
                        var isChecked2 = $('#YodacastPredictedVolume').is(
                                ':checked');
                        var isChecked3 = $('#YodacastPredictedFootball').is(
                                ':checked');
                        var isChecked4 = $('#YodacastPredictedWeather').is(
                                ':checked');

                        callChart.setData(getUpdateChart(isChecked1,
                                isChecked2, isChecked3, isChecked4));

                    });
    $('#YodacastPredictedVolume')
            .on(
                    'change',
                    function() {
                        var isChecked1 = $('#ActualCallVolume').is(':checked');
                        var isChecked2 = $('#YodacastPredictedVolume').is(
                                ':checked');
                        var isChecked3 = $('#YodacastPredictedFootball').is(
                                ':checked');
                        var isChecked4 = $('#YodacastPredictedWeather').is(
                                ':checked');
                        callChart.setData(getUpdateChart(isChecked1,
                                isChecked2, isChecked3, isChecked4));
                    });
    $('#YodacastPredictedFootball')
            .on(
                    'change',
                    function() {
                        var isChecked1 = $('#ActualCallVolume').is(':checked');
                        var isChecked2 = $('#YodacastPredictedVolume').is(
                                ':checked');
                        var isChecked3 = $('#YodacastPredictedFootball').is(
                                ':checked');
                        var isChecked4 = $('#YodacastPredictedWeather').is(
                                ':checked');
                        callChart.setData(getUpdateChart(isChecked1,
                                isChecked2, isChecked3, isChecked4));
                    });
    $('#YodacastPredictedWeather')
            .on(
                    'change',
                    function() {
                        var isChecked1 = $('#ActualCallVolume').is(':checked');
                        var isChecked2 = $('#YodacastPredictedVolume').is(
                                ':checked');
                        var isChecked3 = $('#YodacastPredictedFootball').is(
                                ':checked');
                        var isChecked4 = $('#YodacastPredictedWeather').is(
                                ':checked');
                        callChart.setData(getUpdateChart(isChecked1,
                                isChecked2, isChecked3, isChecked4));
                    });
    $('#legend').append(dashBoard);
}

function drawUpdateYoda() {
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
        events : [ 11 ],
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
    $('#Act').attr('checked', false);
    $('#Yod').attr('checked', true);

    $('#Act').on('change', function() {
        var isChecked1 = $('#Act').is(':checked');
        var isChecked2 = $('#Yod').is(':checked');

        callChart.setData(getBasicData(isChecked1, isChecked2));

    });
    $('#Yod').on('change', function() {
        var isChecked1 = $('#Act').is(':checked');
        var isChecked2 = $('#Yod').is(':checked');
        callChart.setData(getBasicData(isChecked1, isChecked2));
    });
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

function footballSave(){
    $("#footBallModal").modal("hide");
    drawFirstYoda("fb");
}

function weatherSave(){
    $("#weatherModal").modal("hide");
    drawFirstYoda("w");
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
    $('#legend').hide();
    drawFirstYoda("n");
});
