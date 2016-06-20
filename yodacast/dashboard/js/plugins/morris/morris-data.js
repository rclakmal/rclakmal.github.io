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

function getUpdateChart(a, b, c,d) {

    var updatedChart = [ {
        "period" : 1,
        "Actual Call Volume" : 54,
        "Yodacast Predicted Volume" : -39,
        "Yodacast Predicted Football" : -39,
        "Yodacast Predicted Weather" : -39
    }, {
        "period" : 2,
        "Actual Call Volume" : 42,
        "Yodacast Predicted Volume" : -52,
        "Yodacast Predicted Football" : -52,
        "Yodacast Predicted Weather" : -52
    }, {
        "period" : 3,
        "Actual Call Volume" : 41,
        "Yodacast Predicted Volume" : -52,
        "Yodacast Predicted Football" : -52,
        "Yodacast Predicted Weather" : -52
    }, {
        "period" : 4,
        "Actual Call Volume" : 19,
        "Yodacast Predicted Volume" : -36,
        "Yodacast Predicted Football" : -36,
        "Yodacast Predicted Weather" : -36
    }, {
        "period" : 5,
        "Actual Call Volume" : 19,
        "Yodacast Predicted Volume" : -7,
        "Yodacast Predicted Football" : -7,
        "Yodacast Predicted Weather" : -7
    }, {
        "period" : 6,
        "Actual Call Volume" : 20,
        "Yodacast Predicted Volume" : 124,
        "Yodacast Predicted Football" : 124,
        "Yodacast Predicted Weather" : 124
    }, {
        "period" : 7,
        "Actual Call Volume" : 17,
        "Yodacast Predicted Volume" : 107,
        "Yodacast Predicted Football" : 107,
        "Yodacast Predicted Weather" : 107
    }, {
        "period" : 8,
        "Actual Call Volume" : 14,
        "Yodacast Predicted Volume" : 81,
        "Yodacast Predicted Football" : 81,
        "Yodacast Predicted Weather" : 81
    }, {
        "period" : 9,
        "Actual Call Volume" : 9,
        "Yodacast Predicted Volume" : 59,
        "Yodacast Predicted Football" : 59,
        "Yodacast Predicted Weather" : 59
    }, {
        "period" : 10,
        "Actual Call Volume" : 11,
        "Yodacast Predicted Volume" : 41,
        "Yodacast Predicted Football" : 41,
        "Yodacast Predicted Weather" : 41
    }, {
        "period" : 11,
        "Actual Call Volume" : 42,
        "Yodacast Predicted Volume" : 32,
        "Yodacast Predicted Football" : 32,
        "Yodacast Predicted Weather" : 32
    }, {
        "period" : 12,
        "Actual Call Volume" : 31,
        "Yodacast Predicted Volume" : 38,
        "Yodacast Predicted Football" : 38,
        "Yodacast Predicted Weather" : 38
    }, {
        "period" : 13,
        "Actual Call Volume" : 91,
        "Yodacast Predicted Volume" : 66,
        "Yodacast Predicted Football" : 66,
        "Yodacast Predicted Weather" : 66
    }, {
        "period" : 14,
        "Actual Call Volume" : 143,
        "Yodacast Predicted Volume" : 123,
        "Yodacast Predicted Football" : 123,
        "Yodacast Predicted Weather" : 123
    }, {
        "period" : 15,
        "Actual Call Volume" : 248,
        "Yodacast Predicted Volume" : 214,
        "Yodacast Predicted Football" : 214,
        "Yodacast Predicted Weather" : 214
    }, {
        "period" : 16,
        "Actual Call Volume" : 455,
        "Yodacast Predicted Volume" : 343,
        "Yodacast Predicted Football" : 343,
        "Yodacast Predicted Weather" : 343
    }, {
        "period" : 17,
        "Actual Call Volume" : 859,
        "Yodacast Predicted Volume" : 506,
        "Yodacast Predicted Football" : 506,
        "Yodacast Predicted Weather" : 506
    }, {
        "period" : 18,
        "Actual Call Volume" : 859,
        "Yodacast Predicted Volume" : 695,
        "Yodacast Predicted Football" : 695,
        "Yodacast Predicted Weather" : 695
    }, {
        "period" : 19,
        "Actual Call Volume" : 1196,
        "Yodacast Predicted Volume" : 893,
        "Yodacast Predicted Football" : 893,
        "Yodacast Predicted Weather" : 893
    }, {
        "period" : 20,
        "Actual Call Volume" : 1298,
        "Yodacast Predicted Volume" : 1079,
        "Yodacast Predicted Football" : 1079,
        "Yodacast Predicted Weather" : 1079
    }, {
        "period" : 21,
        "Actual Call Volume" : 1400,
        "Yodacast Predicted Volume" : 1227,
        "Yodacast Predicted Football" : 1227,
        "Yodacast Predicted Weather" : 1227
    }, {
        "period" : 22,
        "Actual Call Volume" : 1388,
        "Yodacast Predicted Volume" : 1326,
        "Yodacast Predicted Football" : 1326,
        "Yodacast Predicted Weather" : 1326
    }, {
        "period" : 23,
        "Actual Call Volume" : 1418,
        "Yodacast Predicted Volume" : 1380,
        "Yodacast Predicted Football" : 1380,
        "Yodacast Predicted Weather" : 1380
    }, {
        "period" : 24,
        "Actual Call Volume" : 1427,
        "Yodacast Predicted Volume" : 1401,
        "Yodacast Predicted Football" : 1401,
        "Yodacast Predicted Weather" : 1401
    }, {
        "period" : 25,
        "Actual Call Volume" : 1399,
        "Yodacast Predicted Volume" : 1394,
        "Yodacast Predicted Football" : 1394,
        "Yodacast Predicted Weather" : 1394
    }, {
        "period" : 26,
        "Actual Call Volume" : 1345,
        "Yodacast Predicted Volume" : 1374,
        "Yodacast Predicted Football" : 1374,
        "Yodacast Predicted Weather" : 1374
    }, {
        "period" : 27,
        "Actual Call Volume" : 1373,
        "Yodacast Predicted Volume" : 1357,
        "Yodacast Predicted Football" : 1357,
        "Yodacast Predicted Weather" : 1357
    }, {
        "period" : 28,
        "Actual Call Volume" : 1401,
        "Yodacast Predicted Volume" : 1354,
        "Yodacast Predicted Football" : 1354,
        "Yodacast Predicted Weather" : 1354
    }, {
        "period" : 29,
        "Actual Call Volume" : 1189,
        "Yodacast Predicted Volume" : 1370,
        "Yodacast Predicted Football" : 1370,
        "Yodacast Predicted Weather" : 1370
    }, {
        "period" : 30,
        "Actual Call Volume" : 1375,
        "Yodacast Predicted Volume" : 1405,
        "Yodacast Predicted Football" : 1405,
        "Yodacast Predicted Weather" : 1405
    }, {
        "period" : 31,
        "Actual Call Volume" : 1282,
        "Yodacast Predicted Volume" : 1433,
        "Yodacast Predicted Football" : 1433,
        "Yodacast Predicted Weather" : 1433
    }, {
        "period" : 32,
        "Actual Call Volume" : 1416,
        "Yodacast Predicted Volume" : 1464,
        "Yodacast Predicted Football" : 1464,
        "Yodacast Predicted Weather" : 1464
    }, {
        "period" : 33,
        "Actual Call Volume" : 1417,
        "Yodacast Predicted Volume" : 1487,
        "Yodacast Predicted Football" : 1487,
        "Yodacast Predicted Weather" : 1487
    }, {
        "period" : 34,
        "Actual Call Volume" : 1462,
        "Yodacast Predicted Volume" : 1494,
        "Yodacast Predicted Football" : 1494,
        "Yodacast Predicted Weather" : 1494
    }, {
        "period" : 35,
        "Actual Call Volume" : 1417,
        "Yodacast Predicted Volume" : 1458,
        "Yodacast Predicted Football" : 1458,
        "Yodacast Predicted Weather" : 1458
    }, {
        "period" : 36,
        "Actual Call Volume" : 1433,
        "Yodacast Predicted Volume" : 1388,
        "Yodacast Predicted Football" : 1388,
        "Yodacast Predicted Weather" : 1388
    }, {
        "period" : 37,
        "Actual Call Volume" : 1278,
        "Yodacast Predicted Volume" : 1294,
        "Yodacast Predicted Football" : 1294,
        "Yodacast Predicted Weather" : 1294
    }, {
        "period" : 38,
        "Actual Call Volume" : 1170,
        "Yodacast Predicted Volume" : 1193,
        "Yodacast Predicted Football" : 1193,
        "Yodacast Predicted Weather" : 1193
    }, {
        "period" : 39,
        "Actual Call Volume" : 1025,
        "Yodacast Predicted Volume" : 1081,
        "Yodacast Predicted Football" : 1081,
        "Yodacast Predicted Weather" : 1081
    }, {
        "period" : 40,
        "Actual Call Volume" : 1007,
        "Yodacast Predicted Volume" : 959,
        "Yodacast Predicted Football" : 959,
        "Yodacast Predicted Weather" : 959
    }, {
        "period" : 41,
        "Actual Call Volume" : 884,
        "Yodacast Predicted Volume" : 820,
        "Yodacast Predicted Football" : 820,
        "Yodacast Predicted Weather" : 820
    }, {
        "period" : 42,
        "Actual Call Volume" : 740,
        "Yodacast Predicted Volume" : 673,
        "Yodacast Predicted Football" : 673,
        "Yodacast Predicted Weather" : 673
    }, {
        "period" : 43,
        "Actual Call Volume" : 520,
        "Yodacast Predicted Volume" : 528,
        "Yodacast Predicted Football" : 528,
        "Yodacast Predicted Weather" : 528
    }, {
        "period" : 44,
        "Actual Call Volume" : 378,
        "Yodacast Predicted Volume" : 389,
        "Yodacast Predicted Football" : 389,
        "Yodacast Predicted Weather" : 389
    }, {
        "period" : 45,
        "Actual Call Volume" : 244,
        "Yodacast Predicted Volume" : 263,
        "Yodacast Predicted Football" : 263,
        "Yodacast Predicted Weather" : 263
    }, {
        "period" : 46,
        "Actual Call Volume" : 199,
        "Yodacast Predicted Volume" : 157,
        "Yodacast Predicted Football" : 157,
        "Yodacast Predicted Weather" : 157
    }, {
        "period" : 47,
        "Actual Call Volume" : 147,
        "Yodacast Predicted Volume" : 85,
        "Yodacast Predicted Football" : 85,
        "Yodacast Predicted Weather" : 85
    }, {
        "period" : 48,
        "Actual Call Volume" : 93,
        "Yodacast Predicted Volume" : 49,
        "Yodacast Predicted Football" : 49,
        "Yodacast Predicted Weather" : 49
    }, {
        "period" : 49,
        "Actual Call Volume" : 53,
        "Yodacast Predicted Volume" : 34,
        "Yodacast Predicted Football" : 34,
        "Yodacast Predicted Weather" : 34
    }, {
        "period" : 50,
        "Actual Call Volume" : 37,
        "Yodacast Predicted Volume" : -25,
        "Yodacast Predicted Football" : -25,
        "Yodacast Predicted Weather" : -25
    }, {
        "period" : 51,
        "Actual Call Volume" : 25,
        "Yodacast Predicted Volume" : 11,
        "Yodacast Predicted Football" : 11,
        "Yodacast Predicted Weather" : 11
    }, {
        "period" : 52,
        "Actual Call Volume" : 21,
        "Yodacast Predicted Volume" : 10,
        "Yodacast Predicted Football" : 10,
        "Yodacast Predicted Weather" : 10
    }, {
        "period" : 53,
        "Actual Call Volume" : 23,
        "Yodacast Predicted Volume" : 3,
        "Yodacast Predicted Football" : 3,
        "Yodacast Predicted Weather" : 3
    }, {
        "period" : 54,
        "Actual Call Volume" : 6,
        "Yodacast Predicted Volume" : 80,
        "Yodacast Predicted Football" : 80,
        "Yodacast Predicted Weather" : 80
    }, {
        "period" : 55,
        "Actual Call Volume" : 16,
        "Yodacast Predicted Volume" : 66,
        "Yodacast Predicted Football" : 66,
        "Yodacast Predicted Weather" : 66
    }, {
        "period" : 56,
        "Actual Call Volume" : 12,
        "Yodacast Predicted Volume" : 49,
        "Yodacast Predicted Football" : 49,
        "Yodacast Predicted Weather" : 49
    }, {
        "period" : 57,
        "Actual Call Volume" : 7,
        "Yodacast Predicted Volume" : 34,
        "Yodacast Predicted Football" : 34,
        "Yodacast Predicted Weather" : 34
    }, {
        "period" : 58,
        "Actual Call Volume" : 15,
        "Yodacast Predicted Volume" : 27,
        "Yodacast Predicted Football" : 27,
        "Yodacast Predicted Weather" : 27
    }, {
        "period" : 59,
        "Actual Call Volume" : 20,
        "Yodacast Predicted Volume" : 31,
        "Yodacast Predicted Football" : 31,
        "Yodacast Predicted Weather" : 31
    }, {
        "period" : 60,
        "Actual Call Volume" : 26,
        "Yodacast Predicted Volume" : 53,
        "Yodacast Predicted Football" : 53,
        "Yodacast Predicted Weather" : 53
    }, {
        "period" : 61,
        "Actual Call Volume" : 68,
        "Yodacast Predicted Volume" : 100,
        "Yodacast Predicted Football" : 100,
        "Yodacast Predicted Weather" : 100
    }, {
        "period" : 62,
        "Actual Call Volume" : 120,
        "Yodacast Predicted Volume" : 175,
        "Yodacast Predicted Football" : 175,
        "Yodacast Predicted Weather" : 175
    }, {
        "period" : 63,
        "Actual Call Volume" : 249,
        "Yodacast Predicted Volume" : 283,
        "Yodacast Predicted Football" : 283,
        "Yodacast Predicted Weather" : 283
    }, {
        "period" : 64,
        "Actual Call Volume" : 394,
        "Yodacast Predicted Volume" : 424,
        "Yodacast Predicted Football" : 424,
        "Yodacast Predicted Weather" : 424
    }, {
        "period" : 65,
        "Actual Call Volume" : 646,
        "Yodacast Predicted Volume" : 592,
        "Yodacast Predicted Football" : 592,
        "Yodacast Predicted Weather" : 592
    }, {
        "period" : 66,
        "Actual Call Volume" : 749,
        "Yodacast Predicted Volume" : 775,
        "Yodacast Predicted Football" : 775,
        "Yodacast Predicted Weather" : 775
    }, {
        "period" : 67,
        "Actual Call Volume" : 968,
        "Yodacast Predicted Volume" : 964,
        "Yodacast Predicted Football" : 964,
        "Yodacast Predicted Weather" : 964
    }, {
        "period" : 68,
        "Actual Call Volume" : 1238,
        "Yodacast Predicted Volume" : 1144,
        "Yodacast Predicted Football" : 1144,
        "Yodacast Predicted Weather" : 1144
    }, {
        "period" : 69,
        "Actual Call Volume" : 1361,
        "Yodacast Predicted Volume" : 1282,
        "Yodacast Predicted Football" : 1282,
        "Yodacast Predicted Weather" : 1282
    }, {
        "period" : 70,
        "Actual Call Volume" : 1373,
        "Yodacast Predicted Volume" : 1367,
        "Yodacast Predicted Football" : 1367,
        "Yodacast Predicted Weather" : 1367
    }, {
        "period" : 71,
        "Actual Call Volume" : 1353,
        "Yodacast Predicted Volume" : 1397,
        "Yodacast Predicted Football" : 1397,
        "Yodacast Predicted Weather" : 1397
    }, {
        "period" : 72,
        "Actual Call Volume" : 1311,
        "Yodacast Predicted Volume" : 1381,
        "Yodacast Predicted Football" : 1381,
        "Yodacast Predicted Weather" : 1381
    }, {
        "period" : 73,
        "Actual Call Volume" : 1473,
        "Yodacast Predicted Volume" : 1342,
        "Yodacast Predicted Football" : 1342,
        "Yodacast Predicted Weather" : 1342
    }, {
        "period" : 74,
        "Actual Call Volume" : 1341,
        "Yodacast Predicted Volume" : 1303,
        "Yodacast Predicted Football" : 1303,
        "Yodacast Predicted Weather" : 1303
    }, {
        "period" : 75,
        "Actual Call Volume" : 1297,
        "Yodacast Predicted Volume" : 1274,
        "Yodacast Predicted Football" : 1274,
        "Yodacast Predicted Weather" : 1274
    }, {
        "period" : 76,
        "Actual Call Volume" : 1219,
        "Yodacast Predicted Volume" : 1275,
        "Yodacast Predicted Football" : 1275,
        "Yodacast Predicted Weather" : 1275
    }, {
        "period" : 77,
        "Actual Call Volume" : 1284,
        "Yodacast Predicted Volume" : 1261,
        "Yodacast Predicted Football" : 1261,
        "Yodacast Predicted Weather" : 1261
    }, {
        "period" : 78,
        "Actual Call Volume" : 1314,
        "Yodacast Predicted Volume" : 1300,
        "Yodacast Predicted Football" : 1300,
        "Yodacast Predicted Weather" : 1300
    }, {
        "period" : 79,
        "Actual Call Volume" : 1295,
        "Yodacast Predicted Volume" : 1326,
        "Yodacast Predicted Football" : 1326,
        "Yodacast Predicted Weather" : 1326
    }, {
        "period" : 80,
        "Actual Call Volume" : 1205,
        "Yodacast Predicted Volume" : 1345,
        "Yodacast Predicted Football" : 1345,
        "Yodacast Predicted Weather" : 1345
    }, {
        "period" : 81,
        "Actual Call Volume" : 1339,
        "Yodacast Predicted Volume" : 1345,
        "Yodacast Predicted Football" : 1345,
        "Yodacast Predicted Weather" : 1345
    }, {
        "period" : 82,
        "Actual Call Volume" : 1346,
        "Yodacast Predicted Volume" : 1319,
        "Yodacast Predicted Football" : 1319,
        "Yodacast Predicted Weather" : 1319
    }, {
        "period" : 83,
        "Actual Call Volume" : 1247,
        "Yodacast Predicted Volume" : 1278,
        "Yodacast Predicted Football" : 1278,
        "Yodacast Predicted Weather" : 1278
    }, {
        "period" : 84,
        "Actual Call Volume" : 1267,
        "Yodacast Predicted Volume" : 1221,
        "Yodacast Predicted Football" : 1221,
        "Yodacast Predicted Weather" : 1221
    }, {
        "period" : 85,
        "Actual Call Volume" : 1108,
        "Yodacast Predicted Volume" : 1134,
        "Yodacast Predicted Football" : 1134,
        "Yodacast Predicted Weather" : 1134
    }, {
        "period" : 86,
        "Actual Call Volume" : 1091,
        "Yodacast Predicted Volume" : 1031,
        "Yodacast Predicted Football" : 1031,
        "Yodacast Predicted Weather" : 1031
    }, {
        "period" : 87,
        "Actual Call Volume" : 960,
        "Yodacast Predicted Volume" : 918,
        "Yodacast Predicted Football" : 918,
        "Yodacast Predicted Weather" : 918
    }, {
        "period" : 88,
        "Actual Call Volume" : 918,
        "Yodacast Predicted Volume" : 795,
        "Yodacast Predicted Football" : 795,
        "Yodacast Predicted Weather" : 795
    }, {
        "period" : 89,
        "Actual Call Volume" : 761,
        "Yodacast Predicted Volume" : 669,
        "Yodacast Predicted Football" : 669,
        "Yodacast Predicted Weather" : 669
    }, {
        "period" : 90,
        "Actual Call Volume" : 610,
        "Yodacast Predicted Volume" : 546,
        "Yodacast Predicted Football" : 546,
        "Yodacast Predicted Weather" : 546
    }, {
        "period" : 91,
        "Actual Call Volume" : 487,
        "Yodacast Predicted Volume" : 430,
        "Yodacast Predicted Football" : 430,
        "Yodacast Predicted Weather" : 430
    }, {
        "period" : 92,
        "Actual Call Volume" : 332,
        "Yodacast Predicted Volume" : 324,
        "Yodacast Predicted Football" : 324,
        "Yodacast Predicted Weather" : 324
    }, {
        "period" : 93,
        "Actual Call Volume" : 269,
        "Yodacast Predicted Volume" : 232,
        "Yodacast Predicted Football" : 232,
        "Yodacast Predicted Weather" : 232
    }, {
        "period" : 94,
        "Actual Call Volume" : 240,
        "Yodacast Predicted Volume" : 160,
        "Yodacast Predicted Football" : 160,
        "Yodacast Predicted Weather" : 160
    }, {
        "period" : 95,
        "Actual Call Volume" : 140,
        "Yodacast Predicted Volume" : 112,
        "Yodacast Predicted Football" : 112,
        "Yodacast Predicted Weather" : 112
    }, {
        "period" : 96,
        "Actual Call Volume" : 93,
        "Yodacast Predicted Volume" : 89,
        "Yodacast Predicted Football" : 89,
        "Yodacast Predicted Weather" : 89
    }, {
        "period" : 97,
        "Actual Call Volume" : 64,
        "Yodacast Predicted Volume" : 88,
        "Yodacast Predicted Football" : 88,
        "Yodacast Predicted Weather" : 88
    }, {
        "period" : 98,
        "Actual Call Volume" : 57,
        "Yodacast Predicted Volume" : -6,
        "Yodacast Predicted Football" : -6,
        "Yodacast Predicted Weather" : -6
    }, {
        "period" : 99,
        "Actual Call Volume" : 32,
        "Yodacast Predicted Volume" : 68,
        "Yodacast Predicted Football" : 68,
        "Yodacast Predicted Weather" : 68
    }, {
        "period" : 100,
        "Actual Call Volume" : 11,
        "Yodacast Predicted Volume" : 39,
        "Yodacast Predicted Football" : 39,
        "Yodacast Predicted Weather" : 39
    }, {
        "period" : 101,
        "Actual Call Volume" : 16,
        "Yodacast Predicted Volume" : -21,
        "Yodacast Predicted Football" : -21,
        "Yodacast Predicted Weather" : -21
    }, {
        "period" : 102,
        "Actual Call Volume" : 15,
        "Yodacast Predicted Volume" : -25,
        "Yodacast Predicted Football" : -25,
        "Yodacast Predicted Weather" : -25
    }, {
        "period" : 103,
        "Actual Call Volume" : 9,
        "Yodacast Predicted Volume" : -35,
        "Yodacast Predicted Football" : -35,
        "Yodacast Predicted Weather" : -35
    }, {
        "period" : 104,
        "Actual Call Volume" : 7,
        "Yodacast Predicted Volume" : -44,
        "Yodacast Predicted Football" : -44,
        "Yodacast Predicted Weather" : -44
    }, {
        "period" : 105,
        "Actual Call Volume" : 12,
        "Yodacast Predicted Volume" : -51,
        "Yodacast Predicted Football" : -51,
        "Yodacast Predicted Weather" : -51
    }, {
        "period" : 106,
        "Actual Call Volume" : 14,
        "Yodacast Predicted Volume" : -49,
        "Yodacast Predicted Football" : -49,
        "Yodacast Predicted Weather" : -49
    }, {
        "period" : 107,
        "Actual Call Volume" : 31,
        "Yodacast Predicted Volume" : -34,
        "Yodacast Predicted Football" : -34,
        "Yodacast Predicted Weather" : -34
    }, {
        "period" : 108,
        "Actual Call Volume" : 38,
        "Yodacast Predicted Volume" : 2,
        "Yodacast Predicted Football" : 2,
        "Yodacast Predicted Weather" : 2
    }, {
        "period" : 109,
        "Actual Call Volume" : 64,
        "Yodacast Predicted Volume" : 63,
        "Yodacast Predicted Football" : 63,
        "Yodacast Predicted Weather" : 63
    }, {
        "period" : 110,
        "Actual Call Volume" : 125,
        "Yodacast Predicted Volume" : 158,
        "Yodacast Predicted Football" : 158,
        "Yodacast Predicted Weather" : 158
    }, {
        "period" : 111,
        "Actual Call Volume" : 246,
        "Yodacast Predicted Volume" : 289,
        "Yodacast Predicted Football" : 289,
        "Yodacast Predicted Weather" : 289
    }, {
        "period" : 112,
        "Actual Call Volume" : 383,
        "Yodacast Predicted Volume" : 455,
        "Yodacast Predicted Football" : 455,
        "Yodacast Predicted Weather" : 455
    }, {
        "period" : 113,
        "Actual Call Volume" : 636,
        "Yodacast Predicted Volume" : 646,
        "Yodacast Predicted Football" : 646,
        "Yodacast Predicted Weather" : 646
    }, {
        "period" : 114,
        "Actual Call Volume" : 764,
        "Yodacast Predicted Volume" : 848,
        "Yodacast Predicted Football" : 848,
        "Yodacast Predicted Weather" : 848
    }, {
        "period" : 115,
        "Actual Call Volume" : 1027,
        "Yodacast Predicted Volume" : 1047,
        "Yodacast Predicted Football" : 1047,
        "Yodacast Predicted Weather" : 1047
    }, {
        "period" : 116,
        "Actual Call Volume" : 1146,
        "Yodacast Predicted Volume" : 1216,
        "Yodacast Predicted Football" : 1216,
        "Yodacast Predicted Weather" : 1216
    }, {
        "period" : 117,
        "Actual Call Volume" : 1238,
        "Yodacast Predicted Volume" : 1339,
        "Yodacast Predicted Football" : 1339,
        "Yodacast Predicted Weather" : 1339
    }, {
        "period" : 118,
        "Actual Call Volume" : 1286,
        "Yodacast Predicted Volume" : 1402,
        "Yodacast Predicted Football" : 1402,
        "Yodacast Predicted Weather" : 1402
    }, {
        "period" : 119,
        "Actual Call Volume" : 1448,
        "Yodacast Predicted Volume" : 1417,
        "Yodacast Predicted Football" : 1417,
        "Yodacast Predicted Weather" : 1417
    }, {
        "period" : 120,
        "Actual Call Volume" : 1328,
        "Yodacast Predicted Volume" : 1396,
        "Yodacast Predicted Football" : 1396,
        "Yodacast Predicted Weather" : 1396
    }, {
        "period" : 121,
        "Actual Call Volume" : 1308,
        "Yodacast Predicted Volume" : 1351,
        "Yodacast Predicted Football" : 1351,
        "Yodacast Predicted Weather" : 1351
    }, {
        "period" : 122,
        "Actual Call Volume" : 1232,
        "Yodacast Predicted Volume" : 1298,
        "Yodacast Predicted Football" : 1298,
        "Yodacast Predicted Weather" : 1298
    }, {
        "period" : 123,
        "Actual Call Volume" : 1239,
        "Yodacast Predicted Volume" : 1264,
        "Yodacast Predicted Football" : 1264,
        "Yodacast Predicted Weather" : 1264
    }, {
        "period" : 124,
        "Actual Call Volume" : 1256,
        "Yodacast Predicted Volume" : 1270,
        "Yodacast Predicted Football" : 1270,
        "Yodacast Predicted Weather" : 1270
    }, {
        "period" : 125,
        "Actual Call Volume" : 1256,
        "Yodacast Predicted Volume" : 1245,
        "Yodacast Predicted Football" : 1245,
        "Yodacast Predicted Weather" : 1245
    }, {
        "period" : 126,
        "Actual Call Volume" : 1240,
        "Yodacast Predicted Volume" : 1290,
        "Yodacast Predicted Football" : 1290,
        "Yodacast Predicted Weather" : 1290
    }, {
        "period" : 127,
        "Actual Call Volume" : 1192,
        "Yodacast Predicted Volume" : 1315,
        "Yodacast Predicted Football" : 1315,
        "Yodacast Predicted Weather" : 1315
    }, {
        "period" : 128,
        "Actual Call Volume" : 1195,
        "Yodacast Predicted Volume" : 1341,
        "Yodacast Predicted Football" : 1341,
        "Yodacast Predicted Weather" : 1341
    }, {
        "period" : 129,
        "Actual Call Volume" : 1276,
        "Yodacast Predicted Volume" : 1357,
        "Yodacast Predicted Football" : 1357,
        "Yodacast Predicted Weather" : 1357
    }, {
        "period" : 130,
        "Actual Call Volume" : 1349,
        "Yodacast Predicted Volume" : 1350,
        "Yodacast Predicted Football" : 1350,
        "Yodacast Predicted Weather" : 1350
    }, {
        "period" : 131,
        "Actual Call Volume" : 1272,
        "Yodacast Predicted Volume" : 1319,
        "Yodacast Predicted Football" : 1319,
        "Yodacast Predicted Weather" : 1319
    }, {
        "period" : 132,
        "Actual Call Volume" : 1298,
        "Yodacast Predicted Volume" : 1263,
        "Yodacast Predicted Football" : 1263,
        "Yodacast Predicted Weather" : 1263
    }, {
        "period" : 133,
        "Actual Call Volume" : 1189,
        "Yodacast Predicted Volume" : 1181,
        "Yodacast Predicted Football" : 1181,
        "Yodacast Predicted Weather" : 1181
    }, {
        "period" : 134,
        "Actual Call Volume" : 1000,
        "Yodacast Predicted Volume" : 1080,
        "Yodacast Predicted Football" : 1080,
        "Yodacast Predicted Weather" : 1080
    }, {
        "period" : 135,
        "Actual Call Volume" : 922,
        "Yodacast Predicted Volume" : 966,
        "Yodacast Predicted Football" : 966,
        "Yodacast Predicted Weather" : 966
    }, {
        "period" : 136,
        "Actual Call Volume" : 823,
        "Yodacast Predicted Volume" : 847,
        "Yodacast Predicted Football" : 847,
        "Yodacast Predicted Weather" : 847
    }, {
        "period" : 137,
        "Actual Call Volume" : 757,
        "Yodacast Predicted Volume" : 716,
        "Yodacast Predicted Football" : 716,
        "Yodacast Predicted Weather" : 716
    }, {
        "period" : 138,
        "Actual Call Volume" : 719,
        "Yodacast Predicted Volume" : 581,
        "Yodacast Predicted Football" : 581,
        "Yodacast Predicted Weather" : 581
    }, {
        "period" : 139,
        "Actual Call Volume" : 543,
        "Yodacast Predicted Volume" : 451,
        "Yodacast Predicted Football" : 451,
        "Yodacast Predicted Weather" : 451
    }, {
        "period" : 140,
        "Actual Call Volume" : 427,
        "Yodacast Predicted Volume" : 328,
        "Yodacast Predicted Football" : 328,
        "Yodacast Predicted Weather" : 328
    }, {
        "period" : 141,
        "Actual Call Volume" : 282,
        "Yodacast Predicted Volume" : 219,
        "Yodacast Predicted Football" : 219,
        "Yodacast Predicted Weather" : 219
    }, {
        "period" : 142,
        "Actual Call Volume" : 263,
        "Yodacast Predicted Volume" : 127,
        "Yodacast Predicted Football" : 127,
        "Yodacast Predicted Weather" : 127
    }, {
        "period" : 143,
        "Actual Call Volume" : 176,
        "Yodacast Predicted Volume" : 63,
        "Yodacast Predicted Football" : 63,
        "Yodacast Predicted Weather" : 63
    }, {
        "period" : 144,
        "Actual Call Volume" : 122,
        "Yodacast Predicted Volume" : 27,
        "Yodacast Predicted Football" : 27,
        "Yodacast Predicted Weather" : 27
    }, {
        "period" : 145,
        "Actual Call Volume" : 80,
        "Yodacast Predicted Volume" : 13,
        "Yodacast Predicted Football" : 13,
        "Yodacast Predicted Weather" : 13
    }, {
        "period" : 146,
        "Actual Call Volume" : 73,
        "Yodacast Predicted Volume" : 11,
        "Yodacast Predicted Football" : 11,
        "Yodacast Predicted Weather" : 11
    }, {
        "period" : 147,
        "Actual Call Volume" : 46,
        "Yodacast Predicted Volume" : 60,
        "Yodacast Predicted Football" : 60,
        "Yodacast Predicted Weather" : 60
    }, {
        "period" : 148,
        "Actual Call Volume" : 24,
        "Yodacast Predicted Volume" : -20,
        "Yodacast Predicted Football" : -20,
        "Yodacast Predicted Weather" : -20
    }, {
        "period" : 149,
        "Actual Call Volume" : 17,
        "Yodacast Predicted Volume" : 13,
        "Yodacast Predicted Football" : 13,
        "Yodacast Predicted Weather" : 13
    }, {
        "period" : 150,
        "Actual Call Volume" : 11,
        "Yodacast Predicted Volume" : 70,
        "Yodacast Predicted Football" : 70,
        "Yodacast Predicted Weather" : 70
    }, {
        "period" : 151,
        "Actual Call Volume" : 12,
        "Yodacast Predicted Volume" : 58,
        "Yodacast Predicted Football" : 58,
        "Yodacast Predicted Weather" : 58
    }, {
        "period" : 152,
        "Actual Call Volume" : 8,
        "Yodacast Predicted Volume" : 45,
        "Yodacast Predicted Football" : 45,
        "Yodacast Predicted Weather" : 45
    }, {
        "period" : 153,
        "Actual Call Volume" : 22,
        "Yodacast Predicted Volume" : 31,
        "Yodacast Predicted Football" : 31,
        "Yodacast Predicted Weather" : 31
    }, {
        "period" : 154,
        "Actual Call Volume" : 19,
        "Yodacast Predicted Volume" : 22,
        "Yodacast Predicted Football" : 22,
        "Yodacast Predicted Weather" : 22
    }, {
        "period" : 155,
        "Actual Call Volume" : 28,
        "Yodacast Predicted Volume" : 24,
        "Yodacast Predicted Football" : 24,
        "Yodacast Predicted Weather" : 24
    }, {
        "period" : 156,
        "Actual Call Volume" : 49,
        "Yodacast Predicted Volume" : 44,
        "Yodacast Predicted Football" : 44,
        "Yodacast Predicted Weather" : 44
    }, {
        "period" : 157,
        "Actual Call Volume" : 80,
        "Yodacast Predicted Volume" : 90,
        "Yodacast Predicted Football" : 90,
        "Yodacast Predicted Weather" : 90
    }, {
        "period" : 158,
        "Actual Call Volume" : 169,
        "Yodacast Predicted Volume" : 165,
        "Yodacast Predicted Football" : 165,
        "Yodacast Predicted Weather" : 165
    }, {
        "period" : 159,
        "Actual Call Volume" : 348,
        "Yodacast Predicted Volume" : 276,
        "Yodacast Predicted Football" : 276,
        "Yodacast Predicted Weather" : 276
    }, {
        "period" : 160,
        "Actual Call Volume" : 455,
        "Yodacast Predicted Volume" : 421,
        "Yodacast Predicted Football" : 421,
        "Yodacast Predicted Weather" : 421
    }, {
        "period" : 161,
        "Actual Call Volume" : 879,
        "Yodacast Predicted Volume" : 593,
        "Yodacast Predicted Football" : 593,
        "Yodacast Predicted Weather" : 593
    }, {
        "period" : 162,
        "Actual Call Volume" : 996,
        "Yodacast Predicted Volume" : 784,
        "Yodacast Predicted Football" : 784,
        "Yodacast Predicted Weather" : 784
    }, {
        "period" : 163,
        "Actual Call Volume" : 1171,
        "Yodacast Predicted Volume" : 983,
        "Yodacast Predicted Football" : 983,
        "Yodacast Predicted Weather" : 983
    }, {
        "period" : 164,
        "Actual Call Volume" : 1359,
        "Yodacast Predicted Volume" : 1171,
        "Yodacast Predicted Football" : 1171,
        "Yodacast Predicted Weather" : 1171
    }, {
        "period" : 165,
        "Actual Call Volume" : 1461,
        "Yodacast Predicted Volume" : 1315,
        "Yodacast Predicted Football" : 1315,
        "Yodacast Predicted Weather" : 1315
    }, {
        "period" : 166,
        "Actual Call Volume" : 1469,
        "Yodacast Predicted Volume" : 1408,
        "Yodacast Predicted Football" : 1408,
        "Yodacast Predicted Weather" : 1408
    }, {
        "period" : 167,
        "Actual Call Volume" : 1484,
        "Yodacast Predicted Volume" : 1441,
        "Yodacast Predicted Football" : 1441,
        "Yodacast Predicted Weather" : 1441
    }, {
        "period" : 168,
        "Actual Call Volume" : 1443,
        "Yodacast Predicted Volume" : 1415,
        "Yodacast Predicted Football" : 1415,
        "Yodacast Predicted Weather" : 1415
    }, {
        "period" : 169,
        "Actual Call Volume" : 1490,
        "Yodacast Predicted Volume" : 1363,
        "Yodacast Predicted Football" : 1363,
        "Yodacast Predicted Weather" : 1363
    }, {
        "period" : 170,
        "Actual Call Volume" : 1561,
        "Yodacast Predicted Volume" : 1287,
        "Yodacast Predicted Football" : 1287,
        "Yodacast Predicted Weather" : 1287
    }, {
        "period" : 171,
        "Actual Call Volume" : 1450,
        "Yodacast Predicted Volume" : 1281,
        "Yodacast Predicted Football" : 1281,
        "Yodacast Predicted Weather" : 1281
    }, {
        "period" : 172,
        "Actual Call Volume" : 1370,
        "Yodacast Predicted Volume" : 1280,
        "Yodacast Predicted Football" : 1280,
        "Yodacast Predicted Weather" : 1280
    }, {
        "period" : 173,
        "Actual Call Volume" : 1314,
        "Yodacast Predicted Volume" : 1268,
        "Yodacast Predicted Football" : 1268,
        "Yodacast Predicted Weather" : 1268
    }, {
        "period" : 174,
        "Actual Call Volume" : 1444,
        "Yodacast Predicted Volume" : 1319,
        "Yodacast Predicted Football" : 1319,
        "Yodacast Predicted Weather" : 1319
    }, {
        "period" : 175,
        "Actual Call Volume" : 1365,
        "Yodacast Predicted Volume" : 1336,
        "Yodacast Predicted Football" : 1336,
        "Yodacast Predicted Weather" : 1336
    }, {
        "period" : 176,
        "Actual Call Volume" : 1419,
        "Yodacast Predicted Volume" : 1297,
        "Yodacast Predicted Football" : 1297,
        "Yodacast Predicted Weather" : 1297
    }, {
        "period" : 177,
        "Actual Call Volume" : 1312,
        "Yodacast Predicted Volume" : 1247,
        "Yodacast Predicted Football" : 1247,
        "Yodacast Predicted Weather" : 1247
    }, {
        "period" : 178,
        "Actual Call Volume" : 1312,
        "Yodacast Predicted Volume" : 1182,
        "Yodacast Predicted Football" : 1182,
        "Yodacast Predicted Weather" : 1182
    }, {
        "period" : 179,
        "Actual Call Volume" : 1221,
        "Yodacast Predicted Volume" : 1110,
        "Yodacast Predicted Football" : 1110,
        "Yodacast Predicted Weather" : 1110
    }, {
        "period" : 180,
        "Actual Call Volume" : 1076,
        "Yodacast Predicted Volume" : 1039,
        "Yodacast Predicted Football" : 1039,
        "Yodacast Predicted Weather" : 1039
    }, {
        "period" : 181,
        "Actual Call Volume" : 950,
        "Yodacast Predicted Volume" : 964,
        "Yodacast Predicted Football" : 964,
        "Yodacast Predicted Weather" : 964
    }, {
        "period" : 182,
        "Actual Call Volume" : -1,
        "Yodacast Predicted Volume" : 925,
        "Yodacast Predicted Football" : 925,
        "Yodacast Predicted Weather" : 879
    }, {
        "period" : 183,
        "Actual Call Volume" : -1,
        "Yodacast Predicted Volume" : 867,
        "Yodacast Predicted Football" : 867,
        "Yodacast Predicted Weather" : 761
    }, {
        "period" : 184,
        "Actual Call Volume" : -1,
        "Yodacast Predicted Volume" : 768,
        "Yodacast Predicted Football" : 768,
        "Yodacast Predicted Weather" : 633
    }, {
        "period" : 185,
        "Actual Call Volume" : -1,
        "Yodacast Predicted Volume" : 683,
        "Yodacast Predicted Football" : 683,
        "Yodacast Predicted Weather" : 508
    }, {
        "period" : 186,
        "Actual Call Volume" : -1,
        "Yodacast Predicted Volume" : 348,
        "Yodacast Predicted Football" : 348,
        "Yodacast Predicted Weather" : 393
    }, {
        "period" : 187,
        "Actual Call Volume" : -1,
        "Yodacast Predicted Volume" : 254,
        "Yodacast Predicted Football" : 254,
        "Yodacast Predicted Weather" : 291
    }, {
        "period" : 188,
        "Actual Call Volume" : -1,
        "Yodacast Predicted Volume" : 182,
        "Yodacast Predicted Football" : 182,
        "Yodacast Predicted Weather" : 210
    }, {
        "period" : 189,
        "Actual Call Volume" : -1,
        "Yodacast Predicted Volume" : 135,
        "Yodacast Predicted Football" : 135,
        "Yodacast Predicted Weather" : 154
    }, {
        "period" : 190,
        "Actual Call Volume" : -1,
        "Yodacast Predicted Volume" : 116,
        "Yodacast Predicted Football" : 116,
        "Yodacast Predicted Weather" : 125
    }, {
        "period" : 191,
        "Actual Call Volume" : -1,
        "Yodacast Predicted Volume" : 126,
        "Yodacast Predicted Football" : 126,
        "Yodacast Predicted Weather" : 128
    }, {
        "period" : 192,
        "Actual Call Volume" : -1,
        "Yodacast Predicted Volume" : 166,
        "Yodacast Predicted Football" : 166,
        "Yodacast Predicted Weather" : 162
    }, {
        "period" : 193,
        "Actual Call Volume" : -1,
        "Yodacast Predicted Volume" : 230,
        "Yodacast Predicted Football" : 230,
        "Yodacast Predicted Weather" : 221
    }, {
        "period" : 194,
        "Actual Call Volume" : -1,
        "Yodacast Predicted Volume" : -85,
        "Yodacast Predicted Football" : -85,
        "Yodacast Predicted Weather" : -7
    }, {
        "period" : 195,
        "Actual Call Volume" : -1,
        "Yodacast Predicted Volume" : -13,
        "Yodacast Predicted Football" : -13,
        "Yodacast Predicted Weather" : 18
    }, {
        "period" : 196,
        "Actual Call Volume" : -1,
        "Yodacast Predicted Volume" : 22,
        "Yodacast Predicted Football" : 22,
        "Yodacast Predicted Weather" : -13
    }, {
        "period" : 197,
        "Actual Call Volume" : -1,
        "Yodacast Predicted Volume" : -16,
        "Yodacast Predicted Football" : -16,
        "Yodacast Predicted Weather" : -31
    }, {
        "period" : 198,
        "Actual Call Volume" : -1,
        "Yodacast Predicted Volume" : -62,
        "Yodacast Predicted Football" : -62,
        "Yodacast Predicted Weather" : -16
    }, {
        "period" : 199,
        "Actual Call Volume" : -1,
        "Yodacast Predicted Volume" : -54,
        "Yodacast Predicted Football" : -54,
        "Yodacast Predicted Weather" : -8
    }, {
        "period" : 200,
        "Actual Call Volume" : -1,
        "Yodacast Predicted Volume" : -46,
        "Yodacast Predicted Football" : -46,
        "Yodacast Predicted Weather" : 4
    }, {
        "period" : 201,
        "Actual Call Volume" : -1,
        "Yodacast Predicted Volume" : -39,
        "Yodacast Predicted Football" : -39,
        "Yodacast Predicted Weather" : 9
    }, {
        "period" : 202,
        "Actual Call Volume" : -1,
        "Yodacast Predicted Volume" : -32,
        "Yodacast Predicted Football" : -32,
        "Yodacast Predicted Weather" : 15
    }, {
        "period" : 203,
        "Actual Call Volume" : -1,
        "Yodacast Predicted Volume" : -22,
        "Yodacast Predicted Football" : -22,
        "Yodacast Predicted Weather" : 23
    }, {
        "period" : 204,
        "Actual Call Volume" : -1,
        "Yodacast Predicted Volume" : -8,
        "Yodacast Predicted Football" : -8,
        "Yodacast Predicted Weather" : 35
    }, {
        "period" : 205,
        "Actual Call Volume" : -1,
        "Yodacast Predicted Volume" : 13,
        "Yodacast Predicted Football" : 13,
        "Yodacast Predicted Weather" : 52
    }, {
        "period" : 206,
        "Actual Call Volume" : -1,
        "Yodacast Predicted Volume" : 46,
        "Yodacast Predicted Football" : 46,
        "Yodacast Predicted Weather" : 80
    }, {
        "period" : 207,
        "Actual Call Volume" : -1,
        "Yodacast Predicted Volume" : 94,
        "Yodacast Predicted Football" : 94,
        "Yodacast Predicted Weather" : 123
    }, {
        "period" : 208,
        "Actual Call Volume" : -1,
        "Yodacast Predicted Volume" : 160,
        "Yodacast Predicted Football" : 160,
        "Yodacast Predicted Weather" : 186
    }, {
        "period" : 209,
        "Actual Call Volume" : -1,
        "Yodacast Predicted Volume" : 246,
        "Yodacast Predicted Football" : 246,
        "Yodacast Predicted Weather" : 269
    }, {
        "period" : 210,
        "Actual Call Volume" : -1,
        "Yodacast Predicted Volume" : 350,
        "Yodacast Predicted Football" : 350,
        "Yodacast Predicted Weather" : 372
    }, {
        "period" : 211,
        "Actual Call Volume" : -1,
        "Yodacast Predicted Volume" : 469,
        "Yodacast Predicted Football" : 469,
        "Yodacast Predicted Weather" : 492
    }, {
        "period" : 212,
        "Actual Call Volume" : -1,
        "Yodacast Predicted Volume" : 593,
        "Yodacast Predicted Football" : 593,
        "Yodacast Predicted Weather" : 621
    }, {
        "period" : 213,
        "Actual Call Volume" : -1,
        "Yodacast Predicted Volume" : 715,
        "Yodacast Predicted Football" : 715,
        "Yodacast Predicted Weather" : 748
    }, {
        "period" : 214,
        "Actual Call Volume" : -1,
        "Yodacast Predicted Volume" : 809,
        "Yodacast Predicted Football" : 809,
        "Yodacast Predicted Weather" : 851
    }, {
        "period" : 215,
        "Actual Call Volume" : -1,
        "Yodacast Predicted Volume" : 873,
        "Yodacast Predicted Football" : 873,
        "Yodacast Predicted Weather" : 928
    }, {
        "period" : 216,
        "Actual Call Volume" : -1,
        "Yodacast Predicted Volume" : 885,
        "Yodacast Predicted Football" : 885,
        "Yodacast Predicted Weather" : 958
    }, {
        "period" : 217,
        "Actual Call Volume" : -1,
        "Yodacast Predicted Volume" : 862,
        "Yodacast Predicted Football" : 862,
        "Yodacast Predicted Weather" : 951
    }, {
        "period" : 218,
        "Actual Call Volume" : -1,
        "Yodacast Predicted Volume" : 789,
        "Yodacast Predicted Football" : 789,
        "Yodacast Predicted Weather" : 892
    }, {
        "period" : 219,
        "Actual Call Volume" : -1,
        "Yodacast Predicted Volume" : 696,
        "Yodacast Predicted Football" : 696,
        "Yodacast Predicted Weather" : 811
    }, {
        "period" : 220,
        "Actual Call Volume" : -1,
        "Yodacast Predicted Volume" : 618,
        "Yodacast Predicted Football" : 618,
        "Yodacast Predicted Weather" : 743
    }, {
        "period" : 221,
        "Actual Call Volume" : -1,
        "Yodacast Predicted Volume" : 547,
        "Yodacast Predicted Football" : 547,
        "Yodacast Predicted Weather" : 678
    }, {
        "period" : 222,
        "Actual Call Volume" : -1,
        "Yodacast Predicted Volume" : 512,
        "Yodacast Predicted Football" : 512,
        "Yodacast Predicted Weather" : 647
    }, {
        "period" : 223,
        "Actual Call Volume" : -1,
        "Yodacast Predicted Volume" : 481,
        "Yodacast Predicted Football" : 481,
        "Yodacast Predicted Weather" : 620
    }, {
        "period" : 224,
        "Actual Call Volume" : -1,
        "Yodacast Predicted Volume" : 462,
        "Yodacast Predicted Football" : 462,
        "Yodacast Predicted Weather" : 603
    }, {
        "period" : 225,
        "Actual Call Volume" : -1,
        "Yodacast Predicted Volume" : 449,
        "Yodacast Predicted Football" : 449,
        "Yodacast Predicted Weather" : 591
    }, {
        "period" : 226,
        "Actual Call Volume" : -1,
        "Yodacast Predicted Volume" : 441,
        "Yodacast Predicted Football" : 441,
        "Yodacast Predicted Weather" : 582
    }, {
        "period" : 227,
        "Actual Call Volume" : -1,
        "Yodacast Predicted Volume" : 427,
        "Yodacast Predicted Football" : 427,
        "Yodacast Predicted Weather" : 567
    }, {
        "period" : 228,
        "Actual Call Volume" : -1,
        "Yodacast Predicted Volume" : 405,
        "Yodacast Predicted Football" : 405,
        "Yodacast Predicted Weather" : 541
    }, {
        "period" : 229,
        "Actual Call Volume" : -1,
        "Yodacast Predicted Volume" : 371,
        "Yodacast Predicted Football" : 371,
        "Yodacast Predicted Weather" : 502
    }, {
        "period" : 230,
        "Actual Call Volume" : -1,
        "Yodacast Predicted Volume" : 328,
        "Yodacast Predicted Football" : 328,
        "Yodacast Predicted Weather" : 452
    }, {
        "period" : 231,
        "Actual Call Volume" : -1,
        "Yodacast Predicted Volume" : 279,
        "Yodacast Predicted Football" : 279,
        "Yodacast Predicted Weather" : 394
    }, {
        "period" : 232,
        "Actual Call Volume" : -1,
        "Yodacast Predicted Volume" : 229,
        "Yodacast Predicted Football" : 229,
        "Yodacast Predicted Weather" : 334
    }, {
        "period" : 233,
        "Actual Call Volume" : -1,
        "Yodacast Predicted Volume" : 182,
        "Yodacast Predicted Football" : 182,
        "Yodacast Predicted Weather" : 277
    }, {
        "period" : 234,
        "Actual Call Volume" : -1,
        "Yodacast Predicted Volume" : 141,
        "Yodacast Predicted Football" : 141,
        "Yodacast Predicted Weather" : 228
    }, {
        "period" : 235,
        "Actual Call Volume" : -1,
        "Yodacast Predicted Volume" : 109,
        "Yodacast Predicted Football" : 109,
        "Yodacast Predicted Weather" : 187
    }, {
        "period" : 236,
        "Actual Call Volume" : -1,
        "Yodacast Predicted Volume" : 88,
        "Yodacast Predicted Football" : 88,
        "Yodacast Predicted Weather" : 159
    }, {
        "period" : 237,
        "Actual Call Volume" : -1,
        "Yodacast Predicted Volume" : 78,
        "Yodacast Predicted Football" : 78,
        "Yodacast Predicted Weather" : 145
    }, {
        "period" : 238,
        "Actual Call Volume" : -1,
        "Yodacast Predicted Volume" : 76,
        "Yodacast Predicted Football" : 76,
        "Yodacast Predicted Weather" : 143
    }, {
        "period" : 239,
        "Actual Call Volume" : -1,
        "Yodacast Predicted Volume" : 77,
        "Yodacast Predicted Football" : 77,
        "Yodacast Predicted Weather" : 139
    }, {
        "period" : 240,
        "Actual Call Volume" : -1,
        "Yodacast Predicted Volume" : 73,
        "Yodacast Predicted Football" : 73,
        "Yodacast Predicted Weather" : 126
    }, {
        "period" : 241,
        "Actual Call Volume" : -1,
        "Yodacast Predicted Volume" : 49,
        "Yodacast Predicted Football" : 49,
        "Yodacast Predicted Weather" : 96
    }, {
        "period" : 242,
        "Actual Call Volume" : -1,
        "Yodacast Predicted Volume" : -73,
        "Yodacast Predicted Football" : -73,
        "Yodacast Predicted Weather" : 50
    }, {
        "period" : 243,
        "Actual Call Volume" : -1,
        "Yodacast Predicted Volume" : 9,
        "Yodacast Predicted Football" : 9,
        "Yodacast Predicted Weather" : 38
    }, {
        "period" : 244,
        "Actual Call Volume" : -1,
        "Yodacast Predicted Volume" : -2,
        "Yodacast Predicted Football" : -2,
        "Yodacast Predicted Weather" : -1
    }, {
        "period" : 245,
        "Actual Call Volume" : -1,
        "Yodacast Predicted Volume" : -49,
        "Yodacast Predicted Football" : -49,
        "Yodacast Predicted Weather" : -39
    }, {
        "period" : 246,
        "Actual Call Volume" : -1,
        "Yodacast Predicted Volume" : -8,
        "Yodacast Predicted Football" : -8,
        "Yodacast Predicted Weather" : -24
    }, {
        "period" : 247,
        "Actual Call Volume" : -1,
        "Yodacast Predicted Volume" : 20,
        "Yodacast Predicted Football" : 20,
        "Yodacast Predicted Weather" : 9
    }, {
        "period" : 248,
        "Actual Call Volume" : -1,
        "Yodacast Predicted Volume" : 34,
        "Yodacast Predicted Football" : 34,
        "Yodacast Predicted Weather" : 28
    }, {
        "period" : 249,
        "Actual Call Volume" : -1,
        "Yodacast Predicted Volume" : 35,
        "Yodacast Predicted Football" : 35,
        "Yodacast Predicted Weather" : 36
    }, {
        "period" : 250,
        "Actual Call Volume" : -1,
        "Yodacast Predicted Volume" : 25,
        "Yodacast Predicted Football" : 25,
        "Yodacast Predicted Weather" : 34
    }, {
        "period" : 251,
        "Actual Call Volume" : -1,
        "Yodacast Predicted Volume" : 7,
        "Yodacast Predicted Football" : 7,
        "Yodacast Predicted Weather" : 24
    }, {
        "period" : 252,
        "Actual Call Volume" : -1,
        "Yodacast Predicted Volume" : -12,
        "Yodacast Predicted Football" : -12,
        "Yodacast Predicted Weather" : 11
    }, {
        "period" : 253,
        "Actual Call Volume" : -1,
        "Yodacast Predicted Volume" : -25,
        "Yodacast Predicted Football" : -25,
        "Yodacast Predicted Weather" : 0
    }, {
        "period" : 254,
        "Actual Call Volume" : -1,
        "Yodacast Predicted Volume" : -25,
        "Yodacast Predicted Football" : -25,
        "Yodacast Predicted Weather" : -2
    }, {
        "period" : 255,
        "Actual Call Volume" : -1,
        "Yodacast Predicted Volume" : -7,
        "Yodacast Predicted Football" : -7,
        "Yodacast Predicted Weather" : 13
    }, {
        "period" : 256,
        "Actual Call Volume" : -1,
        "Yodacast Predicted Volume" : 32,
        "Yodacast Predicted Football" : 32,
        "Yodacast Predicted Weather" : 51
    }, {
        "period" : 257,
        "Actual Call Volume" : -1,
        "Yodacast Predicted Volume" : 91,
        "Yodacast Predicted Football" : 91,
        "Yodacast Predicted Weather" : 114
    }, {
        "period" : 258,
        "Actual Call Volume" : -1,
        "Yodacast Predicted Volume" : 166,
        "Yodacast Predicted Football" : 166,
        "Yodacast Predicted Weather" : 195
    }, {
        "period" : 259,
        "Actual Call Volume" : -1,
        "Yodacast Predicted Volume" : 248,
        "Yodacast Predicted Football" : 248,
        "Yodacast Predicted Weather" : 285
    }, {
        "period" : 260,
        "Actual Call Volume" : -1,
        "Yodacast Predicted Volume" : 324,
        "Yodacast Predicted Football" : 324,
        "Yodacast Predicted Weather" : 370
    }, {
        "period" : 261,
        "Actual Call Volume" : -1,
        "Yodacast Predicted Volume" : 380,
        "Yodacast Predicted Football" : 380,
        "Yodacast Predicted Weather" : 436
    }, {
        "period" : 262,
        "Actual Call Volume" : -1,
        "Yodacast Predicted Volume" : 405,
        "Yodacast Predicted Football" : 405,
        "Yodacast Predicted Weather" : 466
    }, {
        "period" : 263,
        "Actual Call Volume" : -1,
        "Yodacast Predicted Volume" : 393,
        "Yodacast Predicted Football" : 393,
        "Yodacast Predicted Weather" : 462
    }, {
        "period" : 264,
        "Actual Call Volume" : -1,
        "Yodacast Predicted Volume" : 350,
        "Yodacast Predicted Football" : 350,
        "Yodacast Predicted Weather" : 431
    }, {
        "period" : 265,
        "Actual Call Volume" : -1,
        "Yodacast Predicted Volume" : 286,
        "Yodacast Predicted Football" : 286,
        "Yodacast Predicted Weather" : 376
    }, {
        "period" : 266,
        "Actual Call Volume" : -1,
        "Yodacast Predicted Volume" : 221,
        "Yodacast Predicted Football" : 221,
        "Yodacast Predicted Weather" : 318
    }, {
        "period" : 267,
        "Actual Call Volume" : -1,
        "Yodacast Predicted Volume" : 168,
        "Yodacast Predicted Football" : 168,
        "Yodacast Predicted Weather" : 272
    }, {
        "period" : 268,
        "Actual Call Volume" : -1,
        "Yodacast Predicted Volume" : 140,
        "Yodacast Predicted Football" : 140,
        "Yodacast Predicted Weather" : 253
    }, {
        "period" : 269,
        "Actual Call Volume" : -1,
        "Yodacast Predicted Volume" : 134,
        "Yodacast Predicted Football" : 134,
        "Yodacast Predicted Weather" : 253
    }, {
        "period" : 270,
        "Actual Call Volume" : -1,
        "Yodacast Predicted Volume" : 149,
        "Yodacast Predicted Football" : 180,
        "Yodacast Predicted Weather" : 190
    }, {
        "period" : 271,
        "Actual Call Volume" : -1,
        "Yodacast Predicted Volume" : 177,
        "Yodacast Predicted Football" : 190,
        "Yodacast Predicted Weather" : 210
    }, {
        "period" : 272,
        "Actual Call Volume" : -1,
        "Yodacast Predicted Volume" : 211,
        "Yodacast Predicted Football" : 140,
        "Yodacast Predicted Weather" : 160
    }, {
        "period" : 273,
        "Actual Call Volume" : -1,
        "Yodacast Predicted Volume" : 242,
        "Yodacast Predicted Football" : 110,
        "Yodacast Predicted Weather" : 130
    }, {
        "period" : 274,
        "Actual Call Volume" : -1,
        "Yodacast Predicted Volume" : 267,
        "Yodacast Predicted Football" : 92,
        "Yodacast Predicted Weather" : 102
    }, {
        "period" : 275,
        "Actual Call Volume" : -1,
        "Yodacast Predicted Volume" : 282,
        "Yodacast Predicted Football" : 95,
        "Yodacast Predicted Weather" : 105
    }, {
        "period" : 276,
        "Actual Call Volume" : -1,
        "Yodacast Predicted Volume" : 287,
        "Yodacast Predicted Football" : 97,
        "Yodacast Predicted Weather" : 115
    }, {
        "period" : 277,
        "Actual Call Volume" : -1,
        "Yodacast Predicted Volume" : 281,
        "Yodacast Predicted Football" : 99,
        "Yodacast Predicted Weather" : 110
    }, {
        "period" : 278,
        "Actual Call Volume" : -1,
        "Yodacast Predicted Volume" : 267,
        "Yodacast Predicted Football" : 120,
        "Yodacast Predicted Weather" : 135
    }, {
        "period" : 279,
        "Actual Call Volume" : -1,
        "Yodacast Predicted Volume" : 246,
        "Yodacast Predicted Football" : 140,
        "Yodacast Predicted Weather" : 160
    }, {
        "period" : 280,
        "Actual Call Volume" : -1,
        "Yodacast Predicted Volume" : 222,
        "Yodacast Predicted Football" : 150,
        "Yodacast Predicted Weather" : 170
    }, {
        "period" : 281,
        "Actual Call Volume" : -1,
        "Yodacast Predicted Volume" : 195,
        "Yodacast Predicted Football" : 152,
        "Yodacast Predicted Weather" : 175
    }, {
        "period" : 282,
        "Actual Call Volume" : -1,
        "Yodacast Predicted Volume" : 167,
        "Yodacast Predicted Football" : 150,
        "Yodacast Predicted Weather" : 180
    }, {
        "period" : 283,
        "Actual Call Volume" : -1,
        "Yodacast Predicted Volume" : 140,
        "Yodacast Predicted Football" : 140,
        "Yodacast Predicted Weather" : 183
    }, {
        "period" : 284,
        "Actual Call Volume" : -1,
        "Yodacast Predicted Volume" : 114,
        "Yodacast Predicted Football" : 114,
        "Yodacast Predicted Weather" : 158
    }, {
        "period" : 285,
        "Actual Call Volume" : -1,
        "Yodacast Predicted Volume" : 88,
        "Yodacast Predicted Football" : 88,
        "Yodacast Predicted Weather" : 140
    }, {
        "period" : 286,
        "Actual Call Volume" : -1,
        "Yodacast Predicted Volume" : 64,
        "Yodacast Predicted Football" : 64,
        "Yodacast Predicted Weather" : 129
    }, {
        "period" : 287,
        "Actual Call Volume" : -1,
        "Yodacast Predicted Volume" : 39,
        "Yodacast Predicted Football" : 39,
        "Yodacast Predicted Weather" : 113
    }, {
        "period" : 288,
        "Actual Call Volume" : -1,
        "Yodacast Predicted Volume" : 6,
        "Yodacast Predicted Football" : 6,
        "Yodacast Predicted Weather" : 82
    }, {
        "period" : 289,
        "Actual Call Volume" : -1,
        "Yodacast Predicted Volume" : -25,
        "Yodacast Predicted Football" : -25,
        "Yodacast Predicted Weather" : 54
    }, {
        "period" : 290,
        "Actual Call Volume" : -1,
        "Yodacast Predicted Volume" : -87,
        "Yodacast Predicted Football" : -87,
        "Yodacast Predicted Weather" : 23
    }, {
        "period" : 291,
        "Actual Call Volume" : -1,
        "Yodacast Predicted Volume" : -21,
        "Yodacast Predicted Football" : -21,
        "Yodacast Predicted Weather" : -19
    }, {
        "period" : 292,
        "Actual Call Volume" : -1,
        "Yodacast Predicted Volume" : -60,
        "Yodacast Predicted Football" : -60,
        "Yodacast Predicted Weather" : -122
    }, {
        "period" : 293,
        "Actual Call Volume" : -1,
        "Yodacast Predicted Volume" : -60,
        "Yodacast Predicted Football" : -60,
        "Yodacast Predicted Weather" : -82
    }, {
        "period" : 294,
        "Actual Call Volume" : -1,
        "Yodacast Predicted Volume" : -13,
        "Yodacast Predicted Football" : -13,
        "Yodacast Predicted Weather" : -2
    }, {
        "period" : 295,
        "Actual Call Volume" : -1,
        "Yodacast Predicted Volume" : -14,
        "Yodacast Predicted Football" : -14,
        "Yodacast Predicted Weather" : -3
    }, {
        "period" : 296,
        "Actual Call Volume" : -1,
        "Yodacast Predicted Volume" : -15,
        "Yodacast Predicted Football" : -15,
        "Yodacast Predicted Weather" : 0
    }, {
        "period" : 297,
        "Actual Call Volume" : -1,
        "Yodacast Predicted Volume" : -10,
        "Yodacast Predicted Football" : -10,
        "Yodacast Predicted Weather" : 2
    }, {
        "period" : 298,
        "Actual Call Volume" : -1,
        "Yodacast Predicted Volume" : 4,
        "Yodacast Predicted Football" : 4,
        "Yodacast Predicted Weather" : 11
    }, {
        "period" : 299,
        "Actual Call Volume" : -1,
        "Yodacast Predicted Volume" : 28,
        "Yodacast Predicted Football" : 28,
        "Yodacast Predicted Weather" : 29
    }, {
        "period" : 300,
        "Actual Call Volume" : -1,
        "Yodacast Predicted Volume" : 63,
        "Yodacast Predicted Football" : 63,
        "Yodacast Predicted Weather" : 56
    }, {
        "period" : 301,
        "Actual Call Volume" : -1,
        "Yodacast Predicted Volume" : 118,
        "Yodacast Predicted Football" : 118,
        "Yodacast Predicted Weather" : 103
    }, {
        "period" : 302,
        "Actual Call Volume" : -1,
        "Yodacast Predicted Volume" : 199,
        "Yodacast Predicted Football" : 199,
        "Yodacast Predicted Weather" : 176
    }, {
        "period" : 303,
        "Actual Call Volume" : -1,
        "Yodacast Predicted Volume" : 311,
        "Yodacast Predicted Football" : 311,
        "Yodacast Predicted Weather" : 284
    }, {
        "period" : 304,
        "Actual Call Volume" : -1,
        "Yodacast Predicted Volume" : 460,
        "Yodacast Predicted Football" : 460,
        "Yodacast Predicted Weather" : 436
    }, {
        "period" : 305,
        "Actual Call Volume" : -1,
        "Yodacast Predicted Volume" : 644,
        "Yodacast Predicted Football" : 644,
        "Yodacast Predicted Weather" : 626
    }, {
        "period" : 306,
        "Actual Call Volume" : -1,
        "Yodacast Predicted Volume" : 848,
        "Yodacast Predicted Football" : 848,
        "Yodacast Predicted Weather" : 841
    }, {
        "period" : 307,
        "Actual Call Volume" : -1,
        "Yodacast Predicted Volume" : 1045,
        "Yodacast Predicted Football" : 1045,
        "Yodacast Predicted Weather" : 1050
    }, {
        "period" : 308,
        "Actual Call Volume" : -1,
        "Yodacast Predicted Volume" : 1204,
        "Yodacast Predicted Football" : 1204,
        "Yodacast Predicted Weather" : 1218
    }, {
        "period" : 309,
        "Actual Call Volume" : -1,
        "Yodacast Predicted Volume" : 1325,
        "Yodacast Predicted Football" : 1325,
        "Yodacast Predicted Weather" : 1348
    }, {
        "period" : 310,
        "Actual Call Volume" : -1,
        "Yodacast Predicted Volume" : 1401,
        "Yodacast Predicted Football" : 1401,
        "Yodacast Predicted Weather" : 1430
    }, {
        "period" : 311,
        "Actual Call Volume" : -1,
        "Yodacast Predicted Volume" : 1432,
        "Yodacast Predicted Football" : 1432,
        "Yodacast Predicted Weather" : 1477
    }, {
        "period" : 312,
        "Actual Call Volume" : -1,
        "Yodacast Predicted Volume" : 1434,
        "Yodacast Predicted Football" : 1434,
        "Yodacast Predicted Weather" : 1504
    }, {
        "period" : 313,
        "Actual Call Volume" : -1,
        "Yodacast Predicted Volume" : 1416,
        "Yodacast Predicted Football" : 1416,
        "Yodacast Predicted Weather" : 1511
    }, {
        "period" : 314,
        "Actual Call Volume" : -1,
        "Yodacast Predicted Volume" : 1385,
        "Yodacast Predicted Football" : 1385,
        "Yodacast Predicted Weather" : 1506
    }, {
        "period" : 315,
        "Actual Call Volume" : -1,
        "Yodacast Predicted Volume" : 1351,
        "Yodacast Predicted Football" : 1351,
        "Yodacast Predicted Weather" : 1498
    }, {
        "period" : 316,
        "Actual Call Volume" : -1,
        "Yodacast Predicted Volume" : 1329,
        "Yodacast Predicted Football" : 1329,
        "Yodacast Predicted Weather" : 1501
    }, {
        "period" : 317,
        "Actual Call Volume" : -1,
        "Yodacast Predicted Volume" : 1326,
        "Yodacast Predicted Football" : 1326,
        "Yodacast Predicted Weather" : 1516
    }, {
        "period" : 318,
        "Actual Call Volume" : -1,
        "Yodacast Predicted Volume" : 1332,
        "Yodacast Predicted Football" : 1332,
        "Yodacast Predicted Weather" : 1529
    }, {
        "period" : 319,
        "Actual Call Volume" : -1,
        "Yodacast Predicted Volume" : 1339,
        "Yodacast Predicted Football" : 1339,
        "Yodacast Predicted Weather" : 1540
    }, {
        "period" : 320,
        "Actual Call Volume" : -1,
        "Yodacast Predicted Volume" : 1339,
        "Yodacast Predicted Football" : 1339,
        "Yodacast Predicted Weather" : 1542
    }, {
        "period" : 321,
        "Actual Call Volume" : -1,
        "Yodacast Predicted Volume" : 1333,
        "Yodacast Predicted Football" : 1333,
        "Yodacast Predicted Weather" : 1534
    }, {
        "period" : 322,
        "Actual Call Volume" : -1,
        "Yodacast Predicted Volume" : 1304,
        "Yodacast Predicted Football" : 1304,
        "Yodacast Predicted Weather" : 1501
    }, {
        "period" : 323,
        "Actual Call Volume" : -1,
        "Yodacast Predicted Volume" : 1256,
        "Yodacast Predicted Football" : 1256,
        "Yodacast Predicted Weather" : 1449
    }, {
        "period" : 324,
        "Actual Call Volume" : -1,
        "Yodacast Predicted Volume" : 1183,
        "Yodacast Predicted Football" : 1183,
        "Yodacast Predicted Weather" : 1371
    }, {
        "period" : 325,
        "Actual Call Volume" : -1,
        "Yodacast Predicted Volume" : 1104,
        "Yodacast Predicted Football" : 1104,
        "Yodacast Predicted Weather" : 1286
    }, {
        "period" : 326,
        "Actual Call Volume" : -1,
        "Yodacast Predicted Volume" : 1009,
        "Yodacast Predicted Football" : 1009,
        "Yodacast Predicted Weather" : 1185
    }, {
        "period" : 327,
        "Actual Call Volume" : -1,
        "Yodacast Predicted Volume" : 904,
        "Yodacast Predicted Football" : 904,
        "Yodacast Predicted Weather" : 1069
    }, {
        "period" : 328,
        "Actual Call Volume" : -1,
        "Yodacast Predicted Volume" : 790,
        "Yodacast Predicted Football" : 790,
        "Yodacast Predicted Weather" : 942
    }, {
        "period" : 329,
        "Actual Call Volume" : -1,
        "Yodacast Predicted Volume" : 676,
        "Yodacast Predicted Football" : 676,
        "Yodacast Predicted Weather" : 811
    }, {
        "period" : 330,
        "Actual Call Volume" : -1,
        "Yodacast Predicted Volume" : 564,
        "Yodacast Predicted Football" : 564,
        "Yodacast Predicted Weather" : 678
    }, {
        "period" : 331,
        "Actual Call Volume" : -1,
        "Yodacast Predicted Volume" : 454,
        "Yodacast Predicted Football" : 454,
        "Yodacast Predicted Weather" : 545
    }, {
        "period" : 332,
        "Actual Call Volume" : -1,
        "Yodacast Predicted Volume" : 351,
        "Yodacast Predicted Football" : 351,
        "Yodacast Predicted Weather" : 418
    }, {
        "period" : 333,
        "Actual Call Volume" : -1,
        "Yodacast Predicted Volume" : 257,
        "Yodacast Predicted Football" : 257,
        "Yodacast Predicted Weather" : 300
    }, {
        "period" : 334,
        "Actual Call Volume" : -1,
        "Yodacast Predicted Volume" : 174,
        "Yodacast Predicted Football" : 174,
        "Yodacast Predicted Weather" : 193
    }, {
        "period" : 335,
        "Actual Call Volume" : -1,
        "Yodacast Predicted Volume" : 101,
        "Yodacast Predicted Football" : 101,
        "Yodacast Predicted Weather" : 102
    }, {
        "period" : 336,
        "Actual Call Volume" : -1,
        "Yodacast Predicted Volume" : 37,
        "Yodacast Predicted Football" : 37,
        "Yodacast Predicted Weather" : 24
    } ];

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

function drawFirstYoda() {
    $("#morris-area-chart").empty();
    callChart = Morris.Line({
        element : 'morris-area-chart',
        data : getUpdateChart(false, true,false,false),
        xkey : 'period',
        ykeys : [ 'Actual Call Volume', 'Yodacast Predicted Volume',
                'Yodacast Predicted Football', 'Yodacast Predicted Weather' ],
        labels : [ 'Actual Call Volume', 'Yodacast Predicted Volume',
                'Yodacast Predicted Football', 'Yodacast Predicted Weather' ],
        pointSize : 2,
        parseTime : false,
        hideHover : 'auto',
        lineWidth : 4,
        resize : true,
        events : [ 150 ],
        eventStrokeWidth : 2,
        eventLineColors : [ '#000000' ],
        xLabels : "day",
        xLabelFormat : function(d) {
            return '';
        },
        lineColors : [ '#424242', '#7cc359', 'orange', 'blue' ]
    });

    callChart.options.labels.forEach(function(label, i) {
        var legendItem = $('<span></span>').text(label).css('color',
                callChart.options.lineColors[i])
        var checkbox = $('<input type="checkbox" id=' + label.replace(/\s/g, '')
                + ' class="lineCheckbox" checked="">');
        $('#legend').append(checkbox);
        $('#legend').append(legendItem);
    })
    var dashBoard = $('<spanx "></spanx>').text("Today -----").css('color',
            "black");
    $('#ActualCallVolume').attr('checked', false);
    $('#YodacastPredictedVolume').attr('checked', true);
    $('#YodacastPredictedFootball').attr('checked', false);
    $('#YodacastPredictedWeather').attr('checked', false);

    $('#Actual Call Volume').on('change',function() {
        var isChecked1 = $('#ActualCallVolume')
                .is(':checked');
        var isChecked2 = $('#YodacastPredictedVolume').is(
                ':checked');
        var isChecked3 = $('#YodacastPredictedFootball').is(
                ':checked');
        var isChecked4 = $('#YodacastPredictedWeather').is(
                ':checked');

        if (isChecked1) {
            $('#kpiPanel').show()
        } else {
            $('#kpiPanel').hide();
        }
        callChart.setData(getBasicData(isChecked1, isChecked2,
                isChecked3, isChecked4));

    });
    $('#Yodacast Predicted Volume').on('change', function() {
        var isChecked1 = $('#ActualCallVolume').is(':checked');
        var isChecked2 = $('#YodacastPredictedVolume').is(':checked');
        var isChecked3 = $('#YodacastPredictedFootball').is(':checked');
        var isChecked4 = $('#YodacastPredictedWeather').is(':checked');
        callChart.setData(getBasicData(isChecked1, isChecked2,
                isChecked3, isChecked4));
    });
    $('#Yodacast Predicted Volume').on('change', function() {
        var isChecked1 = $('#ActualCallVolume').is(':checked');
        var isChecked2 = $('#YodacastPredictedVolume').is(':checked');
        var isChecked3 = $('#YodacastPredictedFootball').is(':checked');
        var isChecked4 = $('#YodacastPredictedWeather').is(':checked');
        callChart.setData(getBasicData(isChecked1, isChecked2,
                isChecked3, isChecked4));
    });
    $('#Yodacast Predicted Weather').on('change', function() {
        var isChecked1 = $('#ActualCallVolume').is(':checked');
        var isChecked2 = $('#YodacastPredictedVolume').is(':checked');
        var isChecked3 = $('#YodacastPredictedFootball').is(':checked');
        var isChecked4 = $('#YodacastPredictedWeather').is(':checked');
        callChart.setData(getBasicData(isChecked1, isChecked2,
                isChecked3, isChecked4));
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
    $('#kpiPanel').hide();
    drawFirstYoda();
});
