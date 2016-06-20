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
}, {
    period : '1st Week July',
    prediction : 1300
}, {
    period : '2nd Week June',
    prediction : 570
} ];

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
}, {
    period : '18/June',
    prediction : 250
}, {
    period : '19/June',
    prediction : 400
} ];

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
}, {
    period : '12MidNight',
    prediction : 12
}, {
    period : '2AM',
    prediction : 10
} ];

var newData = yearlyData;

basicYodadata = [ {
    "period" : 1,
    "Actual Call Volume" : 71,
    "Yodacast Predicted Volume" : 73
}, {
    "period" : 2,
    "Actual Call Volume" : 8,
    "Yodacast Predicted Volume" : 8
}, {
    "period" : 3,
    "Actual Call Volume" : 1411,
    "Yodacast Predicted Volume" : 1222
}, {
    "period" : 4,
    "Actual Call Volume" : 1422,
    "Yodacast Predicted Volume" : 1452
}, {
    "period" : 5,
    "Actual Call Volume" : 831,
    "Yodacast Predicted Volume" : 724
}, {
    "period" : 6,
    "Actual Call Volume" : 19,
    "Yodacast Predicted Volume" : 3
}, {
    "period" : 7,
    "Actual Call Volume" : 455,
    "Yodacast Predicted Volume" : 476
}, {
    "period" : 8,
    "Actual Call Volume" : 1373,
    "Yodacast Predicted Volume" : 1438
}, {
    "period" : 9,
    "Actual Call Volume" : 1170,
    "Yodacast Predicted Volume" : 1191
}, {
    "period" : 10,
    "Actual Call Volume" : 53,
    "Yodacast Predicted Volume" : 137
}, {
    "period" : 11,
    "Actual Call Volume" : 26,
    "Yodacast Predicted Volume" : 107
}, {
    "period" : 12,
    "Actual Call Volume" : 1353,
    "Yodacast Predicted Volume" : 1442
}, {
    "period" : 13,
    "Actual Call Volume" : 1346,
    "Yodacast Predicted Volume" : 1222
}, {
    "period" : 14,
    "Actual Call Volume" : 269,
    "Yodacast Predicted Volume" : 342
}, {
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
}, {
    "period" : 24,
    // "Actual Call Volume" : 59,
    "Yodacast Predicted Volume" : 95
}, {
    "period" : 25,
    // "Actual Call Volume" : 919,
    "Yodacast Predicted Volume" : 949
}, {
    "period" : 26,
    // "Actual Call Volume" : 765,
    "Yodacast Predicted Volume" : 661
}, {
    "period" : 27,
    // "Actual Call Volume" : 136,
    "Yodacast Predicted Volume" : 143
}, {
    "period" : 28,
    // "Actual Call Volume" : 14,
    "Yodacast Predicted Volume" : 17
}, {
    "period" : 29,
    // "Actual Call Volume" : 424,
    "Yodacast Predicted Volume" : 401
}, {
    "period" : 30,
    // "Actual Call Volume" : 429,
    "Yodacast Predicted Volume" : 409
} ];

var weatherYodaData = [ {
    "period" : 1,
    "Yodacast Predicted Volume" : 73,
    "BadWeather" : 70,
    "GoodWeather" : 38
}, {
    "period" : 2,
    "Yodacast Predicted Volume" : 31,
    "BadWeather" : 42,
    "GoodWeather" : -39
}, {
    "period" : 3,
    "Yodacast Predicted Volume" : -6,
    "BadWeather" : 19,
    "GoodWeather" : -104
}, {
    "period" : 4,
    "Yodacast Predicted Volume" : 29,
    "BadWeather" : 22,
    "GoodWeather" : 15
}, {
    "period" : 5,
    "Yodacast Predicted Volume" : 22,
    "BadWeather" : 24,
    "GoodWeather" : 4
}, {
    "period" : 6,
    "Yodacast Predicted Volume" : -13,
    "BadWeather" : -14,
    "GoodWeather" : -30
}, {
    "period" : 7,
    "Yodacast Predicted Volume" : 1,
    "BadWeather" : -3,
    "GoodWeather" : -29
}, {
    "period" : 8,
    "Yodacast Predicted Volume" : -121,
    "BadWeather" : -102,
    "GoodWeather" : -155
}, {
    "period" : 9,
    "Yodacast Predicted Volume" : -79,
    "BadWeather" : -54,
    "GoodWeather" : -106
}, {
    "period" : 10,
    "Yodacast Predicted Volume" : -41,
    "BadWeather" : -16,
    "GoodWeather" : -63
}, {
    "period" : 11,
    "Yodacast Predicted Volume" : -8,
    "BadWeather" : 11,
    "GoodWeather" : -25
}, {
    "period" : 12,
    "Yodacast Predicted Volume" : 23,
    "BadWeather" : 32,
    "GoodWeather" : 10
}, {
    "period" : 13,
    "Yodacast Predicted Volume" : 56,
    "BadWeather" : 52,
    "GoodWeather" : 50
}, {
    "period" : 14,
    "Yodacast Predicted Volume" : 98,
    "BadWeather" : 81,
    "GoodWeather" : 101
}, {
    "period" : 15,
    "Yodacast Predicted Volume" : 160,
    "BadWeather" : 132,
    "GoodWeather" : 172
}, {
    "period" : 16,
    "Yodacast Predicted Volume" : 250,
    "BadWeather" : 215,
    "GoodWeather" : 271
}, {
    "period" : 17,
    "Yodacast Predicted Volume" : 375,
    "BadWeather" : 336,
    "GoodWeather" : 399
}, {
    "period" : 18,
    "Yodacast Predicted Volume" : 535,
    "BadWeather" : 492,
    "GoodWeather" : 554
}, {
    "period" : 19,
    "Yodacast Predicted Volume" : 716,
    "BadWeather" : 675,
    "GoodWeather" : 723
}, {
    "period" : 20,
    "Yodacast Predicted Volume" : 900,
    "BadWeather" : 868,
    "GoodWeather" : 895
}, {
    "period" : 21,
    "Yodacast Predicted Volume" : 1073,
    "BadWeather" : 1055,
    "GoodWeather" : 1055
}, {
    "period" : 22,
    "Yodacast Predicted Volume" : 1222,
    "BadWeather" : 1224,
    "GoodWeather" : 1194
}, {
    "period" : 23,
    "Yodacast Predicted Volume" : 1343,
    "BadWeather" : 1367,
    "GoodWeather" : 1306
}, {
    "period" : 24,
    "Yodacast Predicted Volume" : 1432,
    "BadWeather" : 1480,
    "GoodWeather" : 1390
}, {
    "period" : 25,
    "Yodacast Predicted Volume" : 1495,
    "BadWeather" : 1564,
    "GoodWeather" : 1448
}, {
    "period" : 26,
    "Yodacast Predicted Volume" : 1538,
    "BadWeather" : 1621,
    "GoodWeather" : 1481
}, {
    "period" : 27,
    "Yodacast Predicted Volume" : 1556,
    "BadWeather" : 1655,
    "GoodWeather" : 1496
}, {
    "period" : 28,
    "Yodacast Predicted Volume" : 1522,
    "BadWeather" : 1635,
    "GoodWeather" : 1463
}, {
    "period" : 29,
    "Yodacast Predicted Volume" : 1453,
    "BadWeather" : 1579,
    "GoodWeather" : 1398
}, {
    "period" : 30,
    "Yodacast Predicted Volume" : 1406,
    "BadWeather" : 1545,
    "GoodWeather" : 1353
}, {
    "period" : 31,
    "Yodacast Predicted Volume" : 1353,
    "BadWeather" : 1502,
    "GoodWeather" : 1298
}, {
    "period" : 32,
    "Yodacast Predicted Volume" : 1476,
    "BadWeather" : 1630,
    "GoodWeather" : 1412
}, {
    "period" : 33,
    "Yodacast Predicted Volume" : 1452,
    "BadWeather" : 1610,
    "GoodWeather" : 1384
}, {
    "period" : 34,
    "Yodacast Predicted Volume" : 1427,
    "BadWeather" : 1587,
    "GoodWeather" : 1355
}, {
    "period" : 35,
    "Yodacast Predicted Volume" : 1402,
    "BadWeather" : 1563,
    "GoodWeather" : 1327
}, {
    "period" : 36,
    "Yodacast Predicted Volume" : 1375,
    "BadWeather" : 1534,
    "GoodWeather" : 1298
}, {
    "period" : 37,
    "Yodacast Predicted Volume" : 1344,
    "BadWeather" : 1497,
    "GoodWeather" : 1266
}, {
    "period" : 38,
    "Yodacast Predicted Volume" : 1306,
    "BadWeather" : 1447,
    "GoodWeather" : 1227
}, {
    "period" : 39,
    "Yodacast Predicted Volume" : 1259,
    "BadWeather" : 1381,
    "GoodWeather" : 1178
}, {
    "period" : 40,
    "Yodacast Predicted Volume" : 1197,
    "BadWeather" : 1295,
    "GoodWeather" : 1115
}, {
    "period" : 41,
    "Yodacast Predicted Volume" : 1112,
    "BadWeather" : 1185,
    "GoodWeather" : 1033
}, {
    "period" : 42,
    "Yodacast Predicted Volume" : 1007,
    "BadWeather" : 1052,
    "GoodWeather" : 933
}, {
    "period" : 43,
    "Yodacast Predicted Volume" : 877,
    "BadWeather" : 898,
    "GoodWeather" : 816
}, {
    "period" : 44,
    "Yodacast Predicted Volume" : 724,
    "BadWeather" : 732,
    "GoodWeather" : 686
}, {
    "period" : 45,
    "Yodacast Predicted Volume" : 570,
    "BadWeather" : 565,
    "GoodWeather" : 550
}, {
    "period" : 46,
    "Yodacast Predicted Volume" : 426,
    "BadWeather" : 413,
    "GoodWeather" : 418
}, {
    "period" : 47,
    "Yodacast Predicted Volume" : 302,
    "BadWeather" : 289,
    "GoodWeather" : 294
}, {
    "period" : 48,
    "Yodacast Predicted Volume" : 196,
    "BadWeather" : 197,
    "GoodWeather" : 182
}, {
    "period" : 49,
    "Yodacast Predicted Volume" : 110,
    "BadWeather" : 132,
    "GoodWeather" : 81
}, {
    "period" : 50,
    "Yodacast Predicted Volume" : 39,
    "BadWeather" : 84,
    "GoodWeather" : -7
}, {
    "period" : 51,
    "Yodacast Predicted Volume" : -18,
    "BadWeather" : 47,
    "GoodWeather" : -80
}, {
    "period" : 52,
    "Yodacast Predicted Volume" : 66,
    "BadWeather" : 76,
    "GoodWeather" : 52
}, {
    "period" : 53,
    "Yodacast Predicted Volume" : 30,
    "BadWeather" : 40,
    "GoodWeather" : 10
}, {
    "period" : 54,
    "Yodacast Predicted Volume" : 8,
    "BadWeather" : 9,
    "GoodWeather" : 3
}, {
    "period" : 55,
    "Yodacast Predicted Volume" : 3,
    "BadWeather" : 15,
    "GoodWeather" : 4
}, {
    "period" : 56,
    "Yodacast Predicted Volume" : -162,
    "BadWeather" : -115,
    "GoodWeather" : -224
}, {
    "period" : 57,
    "Yodacast Predicted Volume" : -81,
    "BadWeather" : -50,
    "GoodWeather" : -141
}, {
    "period" : 58,
    "Yodacast Predicted Volume" : -25,
    "BadWeather" : -5,
    "GoodWeather" : -75
}, {
    "period" : 59,
    "Yodacast Predicted Volume" : 11,
    "BadWeather" : 21,
    "GoodWeather" : -22
}, {
    "period" : 60,
    "Yodacast Predicted Volume" : 35,
    "BadWeather" : 32,
    "GoodWeather" : 21
}, {
    "period" : 61,
    "Yodacast Predicted Volume" : 55,
    "BadWeather" : 39,
    "GoodWeather" : 63
}, {
    "period" : 62,
    "Yodacast Predicted Volume" : 82,
    "BadWeather" : 54,
    "GoodWeather" : 113
}, {
    "period" : 63,
    "Yodacast Predicted Volume" : 129,
    "BadWeather" : 91,
    "GoodWeather" : 183
}, {
    "period" : 64,
    "Yodacast Predicted Volume" : 206,
    "BadWeather" : 164,
    "GoodWeather" : 280
}, {
    "period" : 65,
    "Yodacast Predicted Volume" : 321,
    "BadWeather" : 276,
    "GoodWeather" : 407
}, {
    "period" : 66,
    "Yodacast Predicted Volume" : 476,
    "BadWeather" : 425,
    "GoodWeather" : 559
}, {
    "period" : 67,
    "Yodacast Predicted Volume" : 654,
    "BadWeather" : 599,
    "GoodWeather" : 724
}, {
    "period" : 68,
    "Yodacast Predicted Volume" : 835,
    "BadWeather" : 782,
    "GoodWeather" : 889
}, {
    "period" : 69,
    "Yodacast Predicted Volume" : 1004,
    "BadWeather" : 958,
    "GoodWeather" : 1041
}, {
    "period" : 70,
    "Yodacast Predicted Volume" : 1146,
    "BadWeather" : 1115,
    "GoodWeather" : 1170
}, {
    "period" : 71,
    "Yodacast Predicted Volume" : 1255,
    "BadWeather" : 1246,
    "GoodWeather" : 1273
}, {
    "period" : 72,
    "Yodacast Predicted Volume" : 1331,
    "BadWeather" : 1348,
    "GoodWeather" : 1348
}, {
    "period" : 73,
    "Yodacast Predicted Volume" : 1386,
    "BadWeather" : 1421,
    "GoodWeather" : 1396
}, {
    "period" : 74,
    "Yodacast Predicted Volume" : 1425,
    "BadWeather" : 1470,
    "GoodWeather" : 1422
}, {
    "period" : 75,
    "Yodacast Predicted Volume" : 1447,
    "BadWeather" : 1497,
    "GoodWeather" : 1429
}, {
    "period" : 76,
    "Yodacast Predicted Volume" : 1447,
    "BadWeather" : 1497,
    "GoodWeather" : 1412
}, {
    "period" : 77,
    "Yodacast Predicted Volume" : 1438,
    "BadWeather" : 1488,
    "GoodWeather" : 1387
}, {
    "period" : 78,
    "Yodacast Predicted Volume" : 1425,
    "BadWeather" : 1474,
    "GoodWeather" : 1360
}, {
    "period" : 79,
    "Yodacast Predicted Volume" : 1406,
    "BadWeather" : 1455,
    "GoodWeather" : 1330
}, {
    "period" : 80,
    "Yodacast Predicted Volume" : 1402,
    "BadWeather" : 1454,
    "GoodWeather" : 1319
}, {
    "period" : 81,
    "Yodacast Predicted Volume" : 1383,
    "BadWeather" : 1433,
    "GoodWeather" : 1288
}, {
    "period" : 82,
    "Yodacast Predicted Volume" : 1367,
    "BadWeather" : 1412,
    "GoodWeather" : 1260
}, {
    "period" : 83,
    "Yodacast Predicted Volume" : 1352,
    "BadWeather" : 1391,
    "GoodWeather" : 1234
}, {
    "period" : 84,
    "Yodacast Predicted Volume" : 1336,
    "BadWeather" : 1368,
    "GoodWeather" : 1210
}, {
    "period" : 85,
    "Yodacast Predicted Volume" : 1312,
    "BadWeather" : 1340,
    "GoodWeather" : 1186
}, {
    "period" : 86,
    "Yodacast Predicted Volume" : 1278,
    "BadWeather" : 1305,
    "GoodWeather" : 1159
}, {
    "period" : 87,
    "Yodacast Predicted Volume" : 1240,
    "BadWeather" : 1257,
    "GoodWeather" : 1125
}, {
    "period" : 88,
    "Yodacast Predicted Volume" : 1191,
    "BadWeather" : 1194,
    "GoodWeather" : 1080
}, {
    "period" : 89,
    "Yodacast Predicted Volume" : 1123,
    "BadWeather" : 1111,
    "GoodWeather" : 1020
}, {
    "period" : 90,
    "Yodacast Predicted Volume" : 1036,
    "BadWeather" : 1008,
    "GoodWeather" : 942
}, {
    "period" : 91,
    "Yodacast Predicted Volume" : 922,
    "BadWeather" : 885,
    "GoodWeather" : 847
}, {
    "period" : 92,
    "Yodacast Predicted Volume" : 783,
    "BadWeather" : 746,
    "GoodWeather" : 735
}, {
    "period" : 93,
    "Yodacast Predicted Volume" : 635,
    "BadWeather" : 600,
    "GoodWeather" : 611
}, {
    "period" : 94,
    "Yodacast Predicted Volume" : 490,
    "BadWeather" : 458,
    "GoodWeather" : 480
}, {
    "period" : 95,
    "Yodacast Predicted Volume" : 356,
    "BadWeather" : 332,
    "GoodWeather" : 347
}, {
    "period" : 96,
    "Yodacast Predicted Volume" : 227,
    "BadWeather" : 227,
    "GoodWeather" : 212
}, {
    "period" : 97,
    "Yodacast Predicted Volume" : 107,
    "BadWeather" : 135,
    "GoodWeather" : 72
}, {
    "period" : 98,
    "Yodacast Predicted Volume" : -11,
    "BadWeather" : 43,
    "GoodWeather" : -75
}, {
    "period" : 99,
    "Yodacast Predicted Volume" : -137,
    "BadWeather" : -61,
    "GoodWeather" : -228
}, {
    "period" : 100,
    "Yodacast Predicted Volume" : 48,
    "BadWeather" : 63,
    "GoodWeather" : 5
}, {
    "period" : 101,
    "Yodacast Predicted Volume" : 20,
    "BadWeather" : 48,
    "GoodWeather" : -12
}, {
    "period" : 102,
    "Yodacast Predicted Volume" : 27,
    "BadWeather" : 32,
    "GoodWeather" : 11
}, {
    "period" : 103,
    "Yodacast Predicted Volume" : 81,
    "BadWeather" : 70,
    "GoodWeather" : 46
}, {
    "period" : 104,
    "Yodacast Predicted Volume" : -7,
    "BadWeather" : 74,
    "GoodWeather" : -33
}, {
    "period" : 105,
    "Yodacast Predicted Volume" : 33,
    "BadWeather" : 97,
    "GoodWeather" : 7
}, {
    "period" : 106,
    "Yodacast Predicted Volume" : 55,
    "BadWeather" : 103,
    "GoodWeather" : 34
}, {
    "period" : 107,
    "Yodacast Predicted Volume" : 66,
    "BadWeather" : 94,
    "GoodWeather" : 51
}, {
    "period" : 108,
    "Yodacast Predicted Volume" : 72,
    "BadWeather" : 77,
    "GoodWeather" : 63
}, {
    "period" : 109,
    "Yodacast Predicted Volume" : 82,
    "BadWeather" : 61,
    "GoodWeather" : 80
}, {
    "period" : 110,
    "Yodacast Predicted Volume" : 107,
    "BadWeather" : 63,
    "GoodWeather" : 113
}, {
    "period" : 111,
    "Yodacast Predicted Volume" : 161,
    "BadWeather" : 97,
    "GoodWeather" : 173
}, {
    "period" : 112,
    "Yodacast Predicted Volume" : 251,
    "BadWeather" : 175,
    "GoodWeather" : 270
}, {
    "period" : 113,
    "Yodacast Predicted Volume" : 381,
    "BadWeather" : 299,
    "GoodWeather" : 402
}, {
    "period" : 114,
    "Yodacast Predicted Volume" : 544,
    "BadWeather" : 463,
    "GoodWeather" : 561
}, {
    "period" : 115,
    "Yodacast Predicted Volume" : 724,
    "BadWeather" : 652,
    "GoodWeather" : 735
}, {
    "period" : 116,
    "Yodacast Predicted Volume" : 902,
    "BadWeather" : 847,
    "GoodWeather" : 907
}, {
    "period" : 117,
    "Yodacast Predicted Volume" : 1066,
    "BadWeather" : 1032,
    "GoodWeather" : 1064
}, {
    "period" : 118,
    "Yodacast Predicted Volume" : 1205,
    "BadWeather" : 1195,
    "GoodWeather" : 1196
}, {
    "period" : 119,
    "Yodacast Predicted Volume" : 1313,
    "BadWeather" : 1329,
    "GoodWeather" : 1300
}, {
    "period" : 120,
    "Yodacast Predicted Volume" : 1391,
    "BadWeather" : 1433,
    "GoodWeather" : 1375
}, {
    "period" : 121,
    "Yodacast Predicted Volume" : 1442,
    "BadWeather" : 1507,
    "GoodWeather" : 1423
}, {
    "period" : 122,
    "Yodacast Predicted Volume" : 1471,
    "BadWeather" : 1555,
    "GoodWeather" : 1447
}, {
    "period" : 123,
    "Yodacast Predicted Volume" : 1483,
    "BadWeather" : 1580,
    "GoodWeather" : 1451
}, {
    "period" : 124,
    "Yodacast Predicted Volume" : 1412,
    "BadWeather" : 1517,
    "GoodWeather" : 1367
}, {
    "period" : 125,
    "Yodacast Predicted Volume" : 1372,
    "BadWeather" : 1483,
    "GoodWeather" : 1315
}, {
    "period" : 126,
    "Yodacast Predicted Volume" : 1346,
    "BadWeather" : 1461,
    "GoodWeather" : 1279
}, {
    "period" : 127,
    "Yodacast Predicted Volume" : 1305,
    "BadWeather" : 1425,
    "GoodWeather" : 1232
}, {
    "period" : 128,
    "Yodacast Predicted Volume" : 1393,
    "BadWeather" : 1520,
    "GoodWeather" : 1321
}, {
    "period" : 129,
    "Yodacast Predicted Volume" : 1349,
    "BadWeather" : 1490,
    "GoodWeather" : 1281
}, {
    "period" : 130,
    "Yodacast Predicted Volume" : 1304,
    "BadWeather" : 1460,
    "GoodWeather" : 1243
}, {
    "period" : 131,
    "Yodacast Predicted Volume" : 1261,
    "BadWeather" : 1429,
    "GoodWeather" : 1208
}, {
    "period" : 132,
    "Yodacast Predicted Volume" : 1222,
    "BadWeather" : 1397,
    "GoodWeather" : 1176
}, {
    "period" : 133,
    "Yodacast Predicted Volume" : 1185,
    "BadWeather" : 1359,
    "GoodWeather" : 1144
}, {
    "period" : 134,
    "Yodacast Predicted Volume" : 1149,
    "BadWeather" : 1315,
    "GoodWeather" : 1110
}, {
    "period" : 135,
    "Yodacast Predicted Volume" : 1105,
    "BadWeather" : 1259,
    "GoodWeather" : 1071
}, {
    "period" : 136,
    "Yodacast Predicted Volume" : 1050,
    "BadWeather" : 1188,
    "GoodWeather" : 1022
}, {
    "period" : 137,
    "Yodacast Predicted Volume" : 983,
    "BadWeather" : 1100,
    "GoodWeather" : 960
}, {
    "period" : 138,
    "Yodacast Predicted Volume" : 899,
    "BadWeather" : 994,
    "GoodWeather" : 884
}, {
    "period" : 139,
    "Yodacast Predicted Volume" : 802,
    "BadWeather" : 869,
    "GoodWeather" : 793
}, {
    "period" : 140,
    "Yodacast Predicted Volume" : 691,
    "BadWeather" : 729,
    "GoodWeather" : 688
}, {
    "period" : 141,
    "Yodacast Predicted Volume" : 573,
    "BadWeather" : 583,
    "GoodWeather" : 575
}, {
    "period" : 142,
    "Yodacast Predicted Volume" : 454,
    "BadWeather" : 445,
    "GoodWeather" : 460
}, {
    "period" : 143,
    "Yodacast Predicted Volume" : 342,
    "BadWeather" : 329,
    "GoodWeather" : 349
}, {
    "period" : 144,
    "Yodacast Predicted Volume" : 239,
    "BadWeather" : 243,
    "GoodWeather" : 245
}, {
    "period" : 145,
    "Yodacast Predicted Volume" : 144,
    "BadWeather" : 185,
    "GoodWeather" : 146
}, {
    "period" : 146,
    "Yodacast Predicted Volume" : 51,
    "BadWeather" : 139,
    "GoodWeather" : 47
}, {
    "period" : 147,
    "Yodacast Predicted Volume" : -41,
    "BadWeather" : 93,
    "GoodWeather" : -54
}, {
    "period" : 148,
    "Yodacast Predicted Volume" : 67,
    "BadWeather" : 99,
    "GoodWeather" : 65
}, {
    "period" : 149,
    "Yodacast Predicted Volume" : 67,
    "BadWeather" : 93,
    "GoodWeather" : 65
}, {
    "period" : 150,
    "Yodacast Predicted Volume" : 77,
    "BadWeather" : 76,
    "GoodWeather" : 79
}, {
    "period" : 151,
    "Yodacast Predicted Volume" : 83,
    "BadWeather" : 84,
    "GoodWeather" : 79
}, {
    "period" : 152,
    "Yodacast Predicted Volume" : 51,
    "BadWeather" : 121,
    "GoodWeather" : 26
}, {
    "period" : 153,
    "Yodacast Predicted Volume" : 43,
    "BadWeather" : 103,
    "GoodWeather" : 22
}, {
    "period" : 154,
    "Yodacast Predicted Volume" : 29,
    "BadWeather" : 72,
    "GoodWeather" : 10
}, {
    "period" : 155,
    "Yodacast Predicted Volume" : 7,
    "BadWeather" : 30,
    "GoodWeather" : -7
}, {
    "period" : 156,
    "Yodacast Predicted Volume" : -15,
    "BadWeather" : -13,
    "GoodWeather" : -23
}, {
    "period" : 157,
    "Yodacast Predicted Volume" : -24,
    "BadWeather" : -46,
    "GoodWeather" : -25
}, {
    "period" : 158,
    "Yodacast Predicted Volume" : -7,
    "BadWeather" : -51,
    "GoodWeather" : -2
}, {
    "period" : 159,
    "Yodacast Predicted Volume" : 46,
    "BadWeather" : -13,
    "GoodWeather" : 59
}, {
    "period" : 160,
    "Yodacast Predicted Volume" : 142,
    "BadWeather" : 78,
    "GoodWeather" : 163
}, {
    "period" : 161,
    "Yodacast Predicted Volume" : 287,
    "BadWeather" : 221,
    "GoodWeather" : 310
}, {
    "period" : 162,
    "Yodacast Predicted Volume" : 475,
    "BadWeather" : 407,
    "GoodWeather" : 486
}, {
    "period" : 163,
    "Yodacast Predicted Volume" : 680,
    "BadWeather" : 616,
    "GoodWeather" : 676
}, {
    "period" : 164,
    "Yodacast Predicted Volume" : 877,
    "BadWeather" : 829,
    "GoodWeather" : 864
}, {
    "period" : 165,
    "Yodacast Predicted Volume" : 1056,
    "BadWeather" : 1029,
    "GoodWeather" : 1034
}, {
    "period" : 166,
    "Yodacast Predicted Volume" : 1204,
    "BadWeather" : 1204,
    "GoodWeather" : 1180
}, {
    "period" : 167,
    "Yodacast Predicted Volume" : 1314,
    "BadWeather" : 1350,
    "GoodWeather" : 1296
}, {
    "period" : 168,
    "Yodacast Predicted Volume" : 1388,
    "BadWeather" : 1465,
    "GoodWeather" : 1383
}, {
    "period" : 169,
    "Yodacast Predicted Volume" : 1443,
    "BadWeather" : 1550,
    "GoodWeather" : 1443
}, {
    "period" : 170,
    "Yodacast Predicted Volume" : 1482,
    "BadWeather" : 1607,
    "GoodWeather" : 1478
}, {
    "period" : 171,
    "Yodacast Predicted Volume" : 1501,
    "BadWeather" : 1642,
    "GoodWeather" : 1493
}, {
    "period" : 172,
    "Yodacast Predicted Volume" : 1387,
    "BadWeather" : 1540,
    "GoodWeather" : 1370
}, {
    "period" : 173,
    "Yodacast Predicted Volume" : 1333,
    "BadWeather" : 1493,
    "GoodWeather" : 1308
}, {
    "period" : 174,
    "Yodacast Predicted Volume" : 1307,
    "BadWeather" : 1473,
    "GoodWeather" : 1274
}, {
    "period" : 175,
    "Yodacast Predicted Volume" : 1267,
    "BadWeather" : 1440,
    "GoodWeather" : 1229
}, {
    "period" : 176,
    "Yodacast Predicted Volume" : 1432,
    "BadWeather" : 1611,
    "GoodWeather" : 1391
}, {
    "period" : 177,
    "Yodacast Predicted Volume" : 1390,
    "BadWeather" : 1578,
    "GoodWeather" : 1348
}, {
    "period" : 178,
    "Yodacast Predicted Volume" : 1348,
    "BadWeather" : 1541,
    "GoodWeather" : 1303
}, {
    "period" : 179,
    "Yodacast Predicted Volume" : 1306,
    "BadWeather" : 1501,
    "GoodWeather" : 1260
}, {
    "period" : 180,
    "Yodacast Predicted Volume" : 1263,
    "BadWeather" : 1457,
    "GoodWeather" : 1216
}, {
    "period" : 181,
    "Yodacast Predicted Volume" : 1218,
    "BadWeather" : 1406,
    "GoodWeather" : 1172
}, {
    "period" : 182,
    "Yodacast Predicted Volume" : 1168,
    "BadWeather" : 1346,
    "GoodWeather" : 1125
}, {
    "period" : 183,
    "Yodacast Predicted Volume" : 1113,
    "BadWeather" : 1275,
    "GoodWeather" : 1072
}, {
    "period" : 184,
    "Yodacast Predicted Volume" : 1050,
    "BadWeather" : 1190,
    "GoodWeather" : 1011
}, {
    "period" : 185,
    "Yodacast Predicted Volume" : 975,
    "BadWeather" : 1089,
    "GoodWeather" : 939
}, {
    "period" : 186,
    "Yodacast Predicted Volume" : 887,
    "BadWeather" : 971,
    "GoodWeather" : 854
}, {
    "period" : 187,
    "Yodacast Predicted Volume" : 784,
    "BadWeather" : 837,
    "GoodWeather" : 758
}, {
    "period" : 188,
    "Yodacast Predicted Volume" : 668,
    "BadWeather" : 691,
    "GoodWeather" : 653
}, {
    "period" : 189,
    "Yodacast Predicted Volume" : 548,
    "BadWeather" : 541,
    "GoodWeather" : 543
}, {
    "period" : 190,
    "Yodacast Predicted Volume" : 434,
    "BadWeather" : 401,
    "GoodWeather" : 437
}, {
    "period" : 191,
    "Yodacast Predicted Volume" : 336,
    "BadWeather" : 290,
    "GoodWeather" : 343
}, {
    "period" : 192,
    "Yodacast Predicted Volume" : 255,
    "BadWeather" : 220,
    "GoodWeather" : 268
}, {
    "period" : 193,
    "Yodacast Predicted Volume" : 196,
    "BadWeather" : 192,
    "GoodWeather" : 211
}, {
    "period" : 194,
    "Yodacast Predicted Volume" : 156,
    "BadWeather" : 192,
    "GoodWeather" : 166
}, {
    "period" : 195,
    "Yodacast Predicted Volume" : 127,
    "BadWeather" : 206,
    "GoodWeather" : 132
}, {
    "period" : 196,
    "Yodacast Predicted Volume" : 64,
    "BadWeather" : 78,
    "GoodWeather" : 80
}, {
    "period" : 197,
    "Yodacast Predicted Volume" : 58,
    "BadWeather" : 50,
    "GoodWeather" : 62
}, {
    "period" : 198,
    "Yodacast Predicted Volume" : 57,
    "BadWeather" : 62,
    "GoodWeather" : 47
}, {
    "period" : 199,
    "Yodacast Predicted Volume" : -19,
    "BadWeather" : 32,
    "GoodWeather" : -34
}, {
    "period" : 200,
    "Yodacast Predicted Volume" : -34,
    "BadWeather" : 25,
    "GoodWeather" : -100
}, {
    "period" : 201,
    "Yodacast Predicted Volume" : -42,
    "BadWeather" : 19,
    "GoodWeather" : -99
}, {
    "period" : 202,
    "Yodacast Predicted Volume" : -43,
    "BadWeather" : 9,
    "GoodWeather" : -99
}, {
    "period" : 203,
    "Yodacast Predicted Volume" : -46,
    "BadWeather" : -3,
    "GoodWeather" : -95
}, {
    "period" : 204,
    "Yodacast Predicted Volume" : -44,
    "BadWeather" : -13,
    "GoodWeather" : -84
}, {
    "period" : 205,
    "Yodacast Predicted Volume" : -31,
    "BadWeather" : -13,
    "GoodWeather" : -60
}, {
    "period" : 206,
    "Yodacast Predicted Volume" : 2,
    "BadWeather" : 5,
    "GoodWeather" : -15
}, {
    "period" : 207,
    "Yodacast Predicted Volume" : 61,
    "BadWeather" : 52,
    "GoodWeather" : 57
}, {
    "period" : 208,
    "Yodacast Predicted Volume" : 152,
    "BadWeather" : 135,
    "GoodWeather" : 160
}, {
    "period" : 209,
    "Yodacast Predicted Volume" : 278,
    "BadWeather" : 257,
    "GoodWeather" : 294
}, {
    "period" : 210,
    "Yodacast Predicted Volume" : 436,
    "BadWeather" : 414,
    "GoodWeather" : 450
}, {
    "period" : 211,
    "Yodacast Predicted Volume" : 613,
    "BadWeather" : 596,
    "GoodWeather" : 620
}, {
    "period" : 212,
    "Yodacast Predicted Volume" : 794,
    "BadWeather" : 788,
    "GoodWeather" : 790
}, {
    "period" : 213,
    "Yodacast Predicted Volume" : 969,
    "BadWeather" : 976,
    "GoodWeather" : 951
}, {
    "period" : 214,
    "Yodacast Predicted Volume" : 1126,
    "BadWeather" : 1150,
    "GoodWeather" : 1094
}, {
    "period" : 215,
    "Yodacast Predicted Volume" : 1258,
    "BadWeather" : 1300,
    "GoodWeather" : 1215
}, {
    "period" : 216,
    "Yodacast Predicted Volume" : 1363,
    "BadWeather" : 1423,
    "GoodWeather" : 1312
}, {
    "period" : 217,
    "Yodacast Predicted Volume" : 1443,
    "BadWeather" : 1517,
    "GoodWeather" : 1384
}, {
    "period" : 218,
    "Yodacast Predicted Volume" : 1499,
    "BadWeather" : 1584,
    "GoodWeather" : 1433
}, {
    "period" : 219,
    "Yodacast Predicted Volume" : 1534,
    "BadWeather" : 1624,
    "GoodWeather" : 1459
}, {
    "period" : 220,
    "Yodacast Predicted Volume" : 1420,
    "BadWeather" : 1513,
    "GoodWeather" : 1339
}, {
    "period" : 221,
    "Yodacast Predicted Volume" : 1390,
    "BadWeather" : 1482,
    "GoodWeather" : 1304
}, {
    "period" : 222,
    "Yodacast Predicted Volume" : 1365,
    "BadWeather" : 1455,
    "GoodWeather" : 1271
}, {
    "period" : 223,
    "Yodacast Predicted Volume" : 1312,
    "BadWeather" : 1403,
    "GoodWeather" : 1213
}, {
    "period" : 224,
    "Yodacast Predicted Volume" : 1461,
    "BadWeather" : 1555,
    "GoodWeather" : 1358
}, {
    "period" : 225,
    "Yodacast Predicted Volume" : 1402,
    "BadWeather" : 1499,
    "GoodWeather" : 1303
}, {
    "period" : 226,
    "Yodacast Predicted Volume" : 1335,
    "BadWeather" : 1436,
    "GoodWeather" : 1242
}, {
    "period" : 227,
    "Yodacast Predicted Volume" : 1263,
    "BadWeather" : 1365,
    "GoodWeather" : 1176
}, {
    "period" : 228,
    "Yodacast Predicted Volume" : 1187,
    "BadWeather" : 1289,
    "GoodWeather" : 1108
}, {
    "period" : 229,
    "Yodacast Predicted Volume" : 1109,
    "BadWeather" : 1207,
    "GoodWeather" : 1037
}, {
    "period" : 230,
    "Yodacast Predicted Volume" : 1029,
    "BadWeather" : 1119,
    "GoodWeather" : 964
}, {
    "period" : 231,
    "Yodacast Predicted Volume" : 946,
    "BadWeather" : 1026,
    "GoodWeather" : 890
}, {
    "period" : 232,
    "Yodacast Predicted Volume" : 859,
    "BadWeather" : 927,
    "GoodWeather" : 814
}, {
    "period" : 233,
    "Yodacast Predicted Volume" : 770,
    "BadWeather" : 823,
    "GoodWeather" : 738
}, {
    "period" : 234,
    "Yodacast Predicted Volume" : 678,
    "BadWeather" : 714,
    "GoodWeather" : 661
}, {
    "period" : 235,
    "Yodacast Predicted Volume" : 586,
    "BadWeather" : 602,
    "GoodWeather" : 586
}, {
    "period" : 236,
    "Yodacast Predicted Volume" : 496,
    "BadWeather" : 492,
    "GoodWeather" : 512
}, {
    "period" : 237,
    "Yodacast Predicted Volume" : 409,
    "BadWeather" : 389,
    "GoodWeather" : 439
}, {
    "period" : 238,
    "Yodacast Predicted Volume" : 328,
    "BadWeather" : 298,
    "GoodWeather" : 365
}, {
    "period" : 239,
    "Yodacast Predicted Volume" : 250,
    "BadWeather" : 222,
    "GoodWeather" : 286
}, {
    "period" : 240,
    "Yodacast Predicted Volume" : 172,
    "BadWeather" : 161,
    "GoodWeather" : 201
}, {
    "period" : 241,
    "Yodacast Predicted Volume" : 99,
    "BadWeather" : 112,
    "GoodWeather" : 113
}, {
    "period" : 242,
    "Yodacast Predicted Volume" : 38,
    "BadWeather" : 77,
    "GoodWeather" : 33
}, {
    "period" : 243,
    "Yodacast Predicted Volume" : -2,
    "BadWeather" : 58,
    "GoodWeather" : -26
}, {
    "period" : 244,
    "Yodacast Predicted Volume" : 48,
    "BadWeather" : 102,
    "GoodWeather" : 64
}, {
    "period" : 245,
    "Yodacast Predicted Volume" : 54,
    "BadWeather" : 90,
    "GoodWeather" : 60
}, {
    "period" : 246,
    "Yodacast Predicted Volume" : 42,
    "BadWeather" : 68,
    "GoodWeather" : 18
}, {
    "period" : 247,
    "Yodacast Predicted Volume" : 26,
    "BadWeather" : 61,
    "GoodWeather" : -17
}, {
    "period" : 248,
    "Yodacast Predicted Volume" : -7,
    "BadWeather" : 47,
    "GoodWeather" : -103
}, {
    "period" : 249,
    "Yodacast Predicted Volume" : 6,
    "BadWeather" : 50,
    "GoodWeather" : -94
}, {
    "period" : 250,
    "Yodacast Predicted Volume" : 10,
    "BadWeather" : 48,
    "GoodWeather" : -86
}, {
    "period" : 251,
    "Yodacast Predicted Volume" : 9,
    "BadWeather" : 42,
    "GoodWeather" : -77
}, {
    "period" : 252,
    "Yodacast Predicted Volume" : 9,
    "BadWeather" : 34,
    "GoodWeather" : -65
}, {
    "period" : 253,
    "Yodacast Predicted Volume" : 13,
    "BadWeather" : 28,
    "GoodWeather" : -46
}, {
    "period" : 254,
    "Yodacast Predicted Volume" : 25,
    "BadWeather" : 30,
    "GoodWeather" : -14
}, {
    "period" : 255,
    "Yodacast Predicted Volume" : 51,
    "BadWeather" : 48,
    "GoodWeather" : 35
}, {
    "period" : 256,
    "Yodacast Predicted Volume" : 95,
    "BadWeather" : 88,
    "GoodWeather" : 105
}, {
    "period" : 257,
    "Yodacast Predicted Volume" : 164,
    "BadWeather" : 156,
    "GoodWeather" : 196
}, {
    "period" : 258,
    "Yodacast Predicted Volume" : 263,
    "BadWeather" : 250,
    "GoodWeather" : 306
}, {
    "period" : 259,
    "Yodacast Predicted Volume" : 383,
    "BadWeather" : 366,
    "GoodWeather" : 426
}, {
    "period" : 260,
    "Yodacast Predicted Volume" : 510,
    "BadWeather" : 494,
    "GoodWeather" : 547
}, {
    "period" : 261,
    "Yodacast Predicted Volume" : 635,
    "BadWeather" : 621,
    "GoodWeather" : 659
}, {
    "period" : 262,
    "Yodacast Predicted Volume" : 747,
    "BadWeather" : 739,
    "GoodWeather" : 755
}, {
    "period" : 263,
    "Yodacast Predicted Volume" : 838,
    "BadWeather" : 839,
    "GoodWeather" : 830
}, {
    "period" : 264,
    "Yodacast Predicted Volume" : 904,
    "BadWeather" : 917,
    "GoodWeather" : 884
}, {
    "period" : 265,
    "Yodacast Predicted Volume" : 949,
    "BadWeather" : 973,
    "GoodWeather" : 915
}, {
    "period" : 266,
    "Yodacast Predicted Volume" : 976,
    "BadWeather" : 1006,
    "GoodWeather" : 926
}, {
    "period" : 267,
    "Yodacast Predicted Volume" : 984,
    "BadWeather" : 1019,
    "GoodWeather" : 921
}, {
    "period" : 268,
    "Yodacast Predicted Volume" : 960,
    "BadWeather" : 997,
    "GoodWeather" : 884
}, {
    "period" : 269,
    "Yodacast Predicted Volume" : 935,
    "BadWeather" : 972,
    "GoodWeather" : 847
}, {
    "period" : 270,
    "Yodacast Predicted Volume" : 904,
    "BadWeather" : 940,
    "GoodWeather" : 806
}, {
    "period" : 271,
    "Yodacast Predicted Volume" : 862,
    "BadWeather" : 898,
    "GoodWeather" : 758
}, {
    "period" : 272,
    "Yodacast Predicted Volume" : 847,
    "BadWeather" : 885,
    "GoodWeather" : 739
}, {
    "period" : 273,
    "Yodacast Predicted Volume" : 800,
    "BadWeather" : 838,
    "GoodWeather" : 691
}, {
    "period" : 274,
    "Yodacast Predicted Volume" : 752,
    "BadWeather" : 790,
    "GoodWeather" : 645
}, {
    "period" : 275,
    "Yodacast Predicted Volume" : 705,
    "BadWeather" : 742,
    "GoodWeather" : 601
}, {
    "period" : 276,
    "Yodacast Predicted Volume" : 661,
    "BadWeather" : 696,
    "GoodWeather" : 561
}, {
    "period" : 277,
    "Yodacast Predicted Volume" : 619,
    "BadWeather" : 653,
    "GoodWeather" : 526
}, {
    "period" : 278,
    "Yodacast Predicted Volume" : 580,
    "BadWeather" : 612,
    "GoodWeather" : 497
}, {
    "period" : 279,
    "Yodacast Predicted Volume" : 544,
    "BadWeather" : 573,
    "GoodWeather" : 474
}, {
    "period" : 280,
    "Yodacast Predicted Volume" : 509,
    "BadWeather" : 534,
    "GoodWeather" : 456
}, {
    "period" : 281,
    "Yodacast Predicted Volume" : 475,
    "BadWeather" : 493,
    "GoodWeather" : 442
}, {
    "period" : 282,
    "Yodacast Predicted Volume" : 437,
    "BadWeather" : 448,
    "GoodWeather" : 429
}, {
    "period" : 283,
    "Yodacast Predicted Volume" : 396,
    "BadWeather" : 398,
    "GoodWeather" : 414
}, {
    "period" : 284,
    "Yodacast Predicted Volume" : 350,
    "BadWeather" : 343,
    "GoodWeather" : 393
}, {
    "period" : 285,
    "Yodacast Predicted Volume" : 299,
    "BadWeather" : 286,
    "GoodWeather" : 361
}, {
    "period" : 286,
    "Yodacast Predicted Volume" : 245,
    "BadWeather" : 229,
    "GoodWeather" : 314
}, {
    "period" : 287,
    "Yodacast Predicted Volume" : 191,
    "BadWeather" : 175,
    "GoodWeather" : 249
}, {
    "period" : 288,
    "Yodacast Predicted Volume" : 143,
    "BadWeather" : 123,
    "GoodWeather" : 167
}, {
    "period" : 289,
    "Yodacast Predicted Volume" : 94,
    "BadWeather" : 74,
    "GoodWeather" : 77
}, {
    "period" : 290,
    "Yodacast Predicted Volume" : 43,
    "BadWeather" : 31,
    "GoodWeather" : -6
}, {
    "period" : 291,
    "Yodacast Predicted Volume" : 2,
    "BadWeather" : 2,
    "GoodWeather" : -70
}, {
    "period" : 292,
    "Yodacast Predicted Volume" : 64,
    "BadWeather" : 69,
    "GoodWeather" : 45
}, {
    "period" : 293,
    "Yodacast Predicted Volume" : 46,
    "BadWeather" : 54,
    "GoodWeather" : 13
}, {
    "period" : 294,
    "Yodacast Predicted Volume" : 57,
    "BadWeather" : 48,
    "GoodWeather" : 64
}, {
    "period" : 295,
    "Yodacast Predicted Volume" : 12,
    "BadWeather" : 23,
    "GoodWeather" : -14
}, {
    "period" : 296,
    "Yodacast Predicted Volume" : -21,
    "BadWeather" : -15,
    "GoodWeather" : -66
}, {
    "period" : 297,
    "Yodacast Predicted Volume" : 2,
    "BadWeather" : 13,
    "GoodWeather" : -34
}, {
    "period" : 298,
    "Yodacast Predicted Volume" : 13,
    "BadWeather" : 27,
    "GoodWeather" : -11
}, {
    "period" : 299,
    "Yodacast Predicted Volume" : 17,
    "BadWeather" : 25,
    "GoodWeather" : 0
}, {
    "period" : 300,
    "Yodacast Predicted Volume" : 9,
    "BadWeather" : 8,
    "GoodWeather" : 1
}, {
    "period" : 301,
    "Yodacast Predicted Volume" : -9,
    "BadWeather" : -20,
    "GoodWeather" : -5
}, {
    "period" : 302,
    "Yodacast Predicted Volume" : -31,
    "BadWeather" : -51,
    "GoodWeather" : -11
}, {
    "period" : 303,
    "Yodacast Predicted Volume" : -49,
    "BadWeather" : -75,
    "GoodWeather" : -11
}, {
    "period" : 304,
    "Yodacast Predicted Volume" : -55,
    "BadWeather" : -79,
    "GoodWeather" : 6
}, {
    "period" : 305,
    "Yodacast Predicted Volume" : -35,
    "BadWeather" : -56,
    "GoodWeather" : 42
}, {
    "period" : 306,
    "Yodacast Predicted Volume" : 23,
    "BadWeather" : -3,
    "GoodWeather" : 98
}, {
    "period" : 307,
    "Yodacast Predicted Volume" : 108,
    "BadWeather" : 74,
    "GoodWeather" : 168
}, {
    "period" : 308,
    "Yodacast Predicted Volume" : 200,
    "BadWeather" : 166,
    "GoodWeather" : 242
}, {
    "period" : 309,
    "Yodacast Predicted Volume" : 288,
    "BadWeather" : 259,
    "GoodWeather" : 311
}, {
    "period" : 310,
    "Yodacast Predicted Volume" : 357,
    "BadWeather" : 343,
    "GoodWeather" : 368
}, {
    "period" : 311,
    "Yodacast Predicted Volume" : 401,
    "BadWeather" : 411,
    "GoodWeather" : 407
}, {
    "period" : 312,
    "Yodacast Predicted Volume" : 417,
    "BadWeather" : 459,
    "GoodWeather" : 428
}, {
    "period" : 313,
    "Yodacast Predicted Volume" : 425,
    "BadWeather" : 488,
    "GoodWeather" : 432
}, {
    "period" : 314,
    "Yodacast Predicted Volume" : 432,
    "BadWeather" : 501,
    "GoodWeather" : 423
}, {
    "period" : 315,
    "Yodacast Predicted Volume" : 433,
    "BadWeather" : 501,
    "GoodWeather" : 405
}, {
    "period" : 316,
    "Yodacast Predicted Volume" : 431,
    "BadWeather" : 491,
    "GoodWeather" : 379
}, {
    "period" : 317,
    "Yodacast Predicted Volume" : 426,
    "BadWeather" : 476,
    "GoodWeather" : 352
}, {
    "period" : 318,
    "Yodacast Predicted Volume" : 420,
    "BadWeather" : 460,
    "GoodWeather" : 326
}, {
    "period" : 319,
    "Yodacast Predicted Volume" : 408,
    "BadWeather" : 443,
    "GoodWeather" : 301
}, {
    "period" : 320,
    "Yodacast Predicted Volume" : 403,
    "BadWeather" : 438,
    "GoodWeather" : 290
}, {
    "period" : 321,
    "Yodacast Predicted Volume" : 398,
    "BadWeather" : 433,
    "GoodWeather" : 281
}, {
    "period" : 322,
    "Yodacast Predicted Volume" : 401,
    "BadWeather" : 434,
    "GoodWeather" : 279
}, {
    "period" : 323,
    "Yodacast Predicted Volume" : 409,
    "BadWeather" : 440,
    "GoodWeather" : 285
}, {
    "period" : 324,
    "Yodacast Predicted Volume" : 422,
    "BadWeather" : 451,
    "GoodWeather" : 298
}, {
    "period" : 325,
    "Yodacast Predicted Volume" : 436,
    "BadWeather" : 462,
    "GoodWeather" : 317
}, {
    "period" : 326,
    "Yodacast Predicted Volume" : 448,
    "BadWeather" : 471,
    "GoodWeather" : 340
}, {
    "period" : 327,
    "Yodacast Predicted Volume" : 454,
    "BadWeather" : 473,
    "GoodWeather" : 361
}, {
    "period" : 328,
    "Yodacast Predicted Volume" : 451,
    "BadWeather" : 465,
    "GoodWeather" : 378
}, {
    "period" : 329,
    "Yodacast Predicted Volume" : 435,
    "BadWeather" : 443,
    "GoodWeather" : 386
}, {
    "period" : 330,
    "Yodacast Predicted Volume" : 404,
    "BadWeather" : 407,
    "GoodWeather" : 382
}, {
    "period" : 331,
    "Yodacast Predicted Volume" : 360,
    "BadWeather" : 356,
    "GoodWeather" : 366
}, {
    "period" : 332,
    "Yodacast Predicted Volume" : 306,
    "BadWeather" : 297,
    "GoodWeather" : 337
}, {
    "period" : 333,
    "Yodacast Predicted Volume" : 248,
    "BadWeather" : 235,
    "GoodWeather" : 297
}, {
    "period" : 334,
    "Yodacast Predicted Volume" : 190,
    "BadWeather" : 180,
    "GoodWeather" : 248
}, {
    "period" : 335,
    "Yodacast Predicted Volume" : 143,
    "BadWeather" : 136,
    "GoodWeather" : 190
}, {
    "period" : 336,
    "Yodacast Predicted Volume" : 111,
    "BadWeather" : 102,
    "GoodWeather" : 121
}, {
    "period" : 337,
    "Yodacast Predicted Volume" : 80,
    "BadWeather" : 71,
    "GoodWeather" : 42
}, {
    "period" : 338,
    "Yodacast Predicted Volume" : 45,
    "BadWeather" : 41,
    "GoodWeather" : -37
}, {
    "period" : 339,
    "Yodacast Predicted Volume" : 10,
    "BadWeather" : 16,
    "GoodWeather" : -105
}, {
    "period" : 340,
    "Yodacast Predicted Volume" : 28,
    "BadWeather" : 19,
    "GoodWeather" : 17
}, {
    "period" : 341,
    "Yodacast Predicted Volume" : 30,
    "BadWeather" : 22,
    "GoodWeather" : 6
}, {
    "period" : 342,
    "Yodacast Predicted Volume" : -6,
    "BadWeather" : -9,
    "GoodWeather" : -21
}, {
    "period" : 343,
    "Yodacast Predicted Volume" : -11,
    "BadWeather" : -2,
    "GoodWeather" : -26
}, {
    "period" : 344,
    "Yodacast Predicted Volume" : -109,
    "BadWeather" : -107,
    "GoodWeather" : -158
}, {
    "period" : 345,
    "Yodacast Predicted Volume" : -68,
    "BadWeather" : -58,
    "GoodWeather" : -108
}, {
    "period" : 346,
    "Yodacast Predicted Volume" : -29,
    "BadWeather" : -19,
    "GoodWeather" : -65
} ];

var footBallData = [ {
    "period" : 1,
    "Yodacast Predicted Volume" : 73,
    "Football" : 73
}, {
    "period" : 2,
    "Yodacast Predicted Volume" : 31,
    "Football" : 31
}, {
    "period" : 3,
    "Yodacast Predicted Volume" : -6,
    "Football" : -6
}, {
    "period" : 4,
    "Yodacast Predicted Volume" : 29,
    "Football" : 29
}, {
    "period" : 5,
    "Yodacast Predicted Volume" : 22,
    "Football" : 22
}, {
    "period" : 6,
    "Yodacast Predicted Volume" : -13,
    "Football" : -13
}, {
    "period" : 7,
    "Yodacast Predicted Volume" : 1,
    "Football" : 1
}, {
    "period" : 8,
    "Yodacast Predicted Volume" : -121,
    "Football" : -121
}, {
    "period" : 9,
    "Yodacast Predicted Volume" : -79,
    "Football" : -79
}, {
    "period" : 10,
    "Yodacast Predicted Volume" : -41,
    "Football" : -41
}, {
    "period" : 11,
    "Yodacast Predicted Volume" : -8,
    "Football" : -8
}, {
    "period" : 12,
    "Yodacast Predicted Volume" : 23,
    "Football" : 23
}, {
    "period" : 13,
    "Yodacast Predicted Volume" : 56,
    "Football" : 56
}, {
    "period" : 14,
    "Yodacast Predicted Volume" : 98,
    "Football" : 98
}, {
    "period" : 15,
    "Yodacast Predicted Volume" : 160,
    "Football" : 160
}, {
    "period" : 16,
    "Yodacast Predicted Volume" : 250,
    "Football" : 250
}, {
    "period" : 17,
    "Yodacast Predicted Volume" : 375,
    "Football" : 375
}, {
    "period" : 18,
    "Yodacast Predicted Volume" : 535,
    "Football" : 535
}, {
    "period" : 19,
    "Yodacast Predicted Volume" : 716,
    "Football" : 716
}, {
    "period" : 20,
    "Yodacast Predicted Volume" : 900,
    "Football" : 900
}, {
    "period" : 21,
    "Yodacast Predicted Volume" : 1073,
    "Football" : 1073
}, {
    "period" : 22,
    "Yodacast Predicted Volume" : 1222,
    "Football" : 1222
}, {
    "period" : 23,
    "Yodacast Predicted Volume" : 1343,
    "Football" : 1343
}, {
    "period" : 24,
    "Yodacast Predicted Volume" : 1432,
    "Football" : 1432
}, {
    "period" : 25,
    "Yodacast Predicted Volume" : 1495,
    "Football" : 1495
}, {
    "period" : 26,
    "Yodacast Predicted Volume" : 1538,
    "Football" : 1538
}, {
    "period" : 27,
    "Yodacast Predicted Volume" : 1556,
    "Football" : 1556
}, {
    "period" : 28,
    "Yodacast Predicted Volume" : 1522,
    "Football" : 1522
}, {
    "period" : 29,
    "Yodacast Predicted Volume" : 1453,
    "Football" : 1453
}, {
    "period" : 30,
    "Yodacast Predicted Volume" : 1406,
    "Football" : 1406
}, {
    "period" : 31,
    "Yodacast Predicted Volume" : 1353,
    "Football" : 1353
}, {
    "period" : 32,
    "Yodacast Predicted Volume" : 1476,
    "Football" : 1476
}, {
    "period" : 33,
    "Yodacast Predicted Volume" : 1452,
    "Football" : 1452
}, {
    "period" : 34,
    "Yodacast Predicted Volume" : 1427,
    "Football" : 1427
}, {
    "period" : 35,
    "Yodacast Predicted Volume" : 1402,
    "Football" : 1402
}, {
    "period" : 36,
    "Yodacast Predicted Volume" : 1375,
    "Football" : 1375
}, {
    "period" : 37,
    "Yodacast Predicted Volume" : 1344,
    "Football" : 1344
}, {
    "period" : 38,
    "Yodacast Predicted Volume" : 1306,
    "Football" : 1306
}, {
    "period" : 39,
    "Yodacast Predicted Volume" : 1259,
    "Football" : 1259
}, {
    "period" : 40,
    "Yodacast Predicted Volume" : 1197,
    "Football" : 1197
}, {
    "period" : 41,
    "Yodacast Predicted Volume" : 1112,
    "Football" : 1112
}, {
    "period" : 42,
    "Yodacast Predicted Volume" : 1007,
    "Football" : 1007
}, {
    "period" : 43,
    "Yodacast Predicted Volume" : 877,
    "Football" : 877
}, {
    "period" : 44,
    "Yodacast Predicted Volume" : 724,
    "Football" : 724
}, {
    "period" : 45,
    "Yodacast Predicted Volume" : 570,
    "Football" : 570
}, {
    "period" : 46,
    "Yodacast Predicted Volume" : 426,
    "Football" : 426
}, {
    "period" : 47,
    "Yodacast Predicted Volume" : 302,
    "Football" : 302
}, {
    "period" : 48,
    "Yodacast Predicted Volume" : 196,
    "Football" : 196
}, {
    "period" : 49,
    "Yodacast Predicted Volume" : 110,
    "Football" : 110
}, {
    "period" : 50,
    "Yodacast Predicted Volume" : 39,
    "Football" : 39
}, {
    "period" : 51,
    "Yodacast Predicted Volume" : -18,
    "Football" : -18
}, {
    "period" : 52,
    "Yodacast Predicted Volume" : 66,
    "Football" : 66
}, {
    "period" : 53,
    "Yodacast Predicted Volume" : 30,
    "Football" : 30
}, {
    "period" : 54,
    "Yodacast Predicted Volume" : 8,
    "Football" : 8
}, {
    "period" : 55,
    "Yodacast Predicted Volume" : 3,
    "Football" : 3
}, {
    "period" : 56,
    "Yodacast Predicted Volume" : -162,
    "Football" : -162
}, {
    "period" : 57,
    "Yodacast Predicted Volume" : -81,
    "Football" : -81
}, {
    "period" : 58,
    "Yodacast Predicted Volume" : -25,
    "Football" : -25
}, {
    "period" : 59,
    "Yodacast Predicted Volume" : 11,
    "Football" : 11
}, {
    "period" : 60,
    "Yodacast Predicted Volume" : 35,
    "Football" : 35
}, {
    "period" : 61,
    "Yodacast Predicted Volume" : 55,
    "Football" : 55
}, {
    "period" : 62,
    "Yodacast Predicted Volume" : 82,
    "Football" : 82
}, {
    "period" : 63,
    "Yodacast Predicted Volume" : 129,
    "Football" : 129
}, {
    "period" : 64,
    "Yodacast Predicted Volume" : 206,
    "Football" : 206
}, {
    "period" : 65,
    "Yodacast Predicted Volume" : 321,
    "Football" : 321
}, {
    "period" : 66,
    "Yodacast Predicted Volume" : 476,
    "Football" : 476
}, {
    "period" : 67,
    "Yodacast Predicted Volume" : 654,
    "Football" : 654
}, {
    "period" : 68,
    "Yodacast Predicted Volume" : 835,
    "Football" : 835
}, {
    "period" : 69,
    "Yodacast Predicted Volume" : 1004,
    "Football" : 1004
}, {
    "period" : 70,
    "Yodacast Predicted Volume" : 1146,
    "Football" : 1146
}, {
    "period" : 71,
    "Yodacast Predicted Volume" : 1255,
    "Football" : 1255
}, {
    "period" : 72,
    "Yodacast Predicted Volume" : 1331,
    "Football" : 1331
}, {
    "period" : 73,
    "Yodacast Predicted Volume" : 1386,
    "Football" : 1386
}, {
    "period" : 74,
    "Yodacast Predicted Volume" : 1425,
    "Football" : 1425
}, {
    "period" : 75,
    "Yodacast Predicted Volume" : 1447,
    "Football" : 1447
}, {
    "period" : 76,
    "Yodacast Predicted Volume" : 1447,
    "Football" : 1447
}, {
    "period" : 77,
    "Yodacast Predicted Volume" : 1438,
    "Football" : 1438
}, {
    "period" : 78,
    "Yodacast Predicted Volume" : 1425,
    "Football" : 1425
}, {
    "period" : 79,
    "Yodacast Predicted Volume" : 1406,
    "Football" : 1406
}, {
    "period" : 80,
    "Yodacast Predicted Volume" : 1402,
    "Football" : 1402
}, {
    "period" : 81,
    "Yodacast Predicted Volume" : 1383,
    "Football" : 1383
}, {
    "period" : 82,
    "Yodacast Predicted Volume" : 1367,
    "Football" : 1367
}, {
    "period" : 83,
    "Yodacast Predicted Volume" : 1352,
    "Football" : 1352
}, {
    "period" : 84,
    "Yodacast Predicted Volume" : 1336,
    "Football" : 1336
}, {
    "period" : 85,
    "Yodacast Predicted Volume" : 1312,
    "Football" : 1312
}, {
    "period" : 86,
    "Yodacast Predicted Volume" : 1278,
    "Football" : 1278
}, {
    "period" : 87,
    "Yodacast Predicted Volume" : 1240,
    "Football" : 1240
}, {
    "period" : 88,
    "Yodacast Predicted Volume" : 1191,
    "Football" : 1191
}, {
    "period" : 89,
    "Yodacast Predicted Volume" : 1123,
    "Football" : 1123
}, {
    "period" : 90,
    "Yodacast Predicted Volume" : 1036,
    "Football" : 1036
}, {
    "period" : 91,
    "Yodacast Predicted Volume" : 922,
    "Football" : 922
}, {
    "period" : 92,
    "Yodacast Predicted Volume" : 783,
    "Football" : 783
}, {
    "period" : 93,
    "Yodacast Predicted Volume" : 635,
    "Football" : 635
}, {
    "period" : 94,
    "Yodacast Predicted Volume" : 490,
    "Football" : 490
}, {
    "period" : 95,
    "Yodacast Predicted Volume" : 356,
    "Football" : 356
}, {
    "period" : 96,
    "Yodacast Predicted Volume" : 227,
    "Football" : 227
}, {
    "period" : 97,
    "Yodacast Predicted Volume" : 107,
    "Football" : 107
}, {
    "period" : 98,
    "Yodacast Predicted Volume" : -11,
    "Football" : -11
}, {
    "period" : 99,
    "Yodacast Predicted Volume" : -137,
    "Football" : -137
}, {
    "period" : 100,
    "Yodacast Predicted Volume" : 48,
    "Football" : 48
}, {
    "period" : 101,
    "Yodacast Predicted Volume" : 20,
    "Football" : 20
}, {
    "period" : 102,
    "Yodacast Predicted Volume" : 27,
    "Football" : 27
}, {
    "period" : 103,
    "Yodacast Predicted Volume" : 81,
    "Football" : 81
}, {
    "period" : 104,
    "Yodacast Predicted Volume" : -7,
    "Football" : -7
}, {
    "period" : 105,
    "Yodacast Predicted Volume" : 33,
    "Football" : 33
}, {
    "period" : 106,
    "Yodacast Predicted Volume" : 55,
    "Football" : 55
}, {
    "period" : 107,
    "Yodacast Predicted Volume" : 66,
    "Football" : 66
}, {
    "period" : 108,
    "Yodacast Predicted Volume" : 72,
    "Football" : 72
}, {
    "period" : 109,
    "Yodacast Predicted Volume" : 82,
    "Football" : 82
}, {
    "period" : 110,
    "Yodacast Predicted Volume" : 107,
    "Football" : 107
}, {
    "period" : 111,
    "Yodacast Predicted Volume" : 161,
    "Football" : 161
}, {
    "period" : 112,
    "Yodacast Predicted Volume" : 251,
    "Football" : 251
}, {
    "period" : 113,
    "Yodacast Predicted Volume" : 381,
    "Football" : 381
}, {
    "period" : 114,
    "Yodacast Predicted Volume" : 544,
    "Football" : 544
}, {
    "period" : 115,
    "Yodacast Predicted Volume" : 724,
    "Football" : 724
}, {
    "period" : 116,
    "Yodacast Predicted Volume" : 902,
    "Football" : 902
}, {
    "period" : 117,
    "Yodacast Predicted Volume" : 1066,
    "Football" : 1066
}, {
    "period" : 118,
    "Yodacast Predicted Volume" : 1205,
    "Football" : 1205
}, {
    "period" : 119,
    "Yodacast Predicted Volume" : 1313,
    "Football" : 1313
}, {
    "period" : 120,
    "Yodacast Predicted Volume" : 1391,
    "Football" : 1391
}, {
    "period" : 121,
    "Yodacast Predicted Volume" : 1442,
    "Football" : 1442
}, {
    "period" : 122,
    "Yodacast Predicted Volume" : 1471,
    "Football" : 1471
}, {
    "period" : 123,
    "Yodacast Predicted Volume" : 1483,
    "Football" : 1483
}, {
    "period" : 124,
    "Yodacast Predicted Volume" : 1412,
    "Football" : 1412
}, {
    "period" : 125,
    "Yodacast Predicted Volume" : 1372,
    "Football" : 1372
}, {
    "period" : 126,
    "Yodacast Predicted Volume" : 1346,
    "Football" : 1346
}, {
    "period" : 127,
    "Yodacast Predicted Volume" : 1305,
    "Football" : 1305
}, {
    "period" : 128,
    "Yodacast Predicted Volume" : 1393,
    "Football" : 1393
}, {
    "period" : 129,
    "Yodacast Predicted Volume" : 1349,
    "Football" : 1349
}, {
    "period" : 130,
    "Yodacast Predicted Volume" : 1304,
    "Football" : 1304
}, {
    "period" : 131,
    "Yodacast Predicted Volume" : 1261,
    "Football" : 1261
}, {
    "period" : 132,
    "Yodacast Predicted Volume" : 1222,
    "Football" : 1222
}, {
    "period" : 133,
    "Yodacast Predicted Volume" : 1185,
    "Football" : 1185
}, {
    "period" : 134,
    "Yodacast Predicted Volume" : 1149,
    "Football" : 1149
}, {
    "period" : 135,
    "Yodacast Predicted Volume" : 1105,
    "Football" : 1105
}, {
    "period" : 136,
    "Yodacast Predicted Volume" : 1050,
    "Football" : 1050
}, {
    "period" : 137,
    "Yodacast Predicted Volume" : 983,
    "Football" : 983
}, {
    "period" : 138,
    "Yodacast Predicted Volume" : 899,
    "Football" : 899
}, {
    "period" : 139,
    "Yodacast Predicted Volume" : 802,
    "Football" : 802
}, {
    "period" : 140,
    "Yodacast Predicted Volume" : 691,
    "Football" : 691
}, {
    "period" : 141,
    "Yodacast Predicted Volume" : 573,
    "Football" : 573
}, {
    "period" : 142,
    "Yodacast Predicted Volume" : 454,
    "Football" : 454
}, {
    "period" : 143,
    "Yodacast Predicted Volume" : 342,
    "Football" : 342
}, {
    "period" : 144,
    "Yodacast Predicted Volume" : 239,
    "Football" : 239
}, {
    "period" : 145,
    "Yodacast Predicted Volume" : 144,
    "Football" : 144
}, {
    "period" : 146,
    "Yodacast Predicted Volume" : 51,
    "Football" : 51
}, {
    "period" : 147,
    "Yodacast Predicted Volume" : -41,
    "Football" : -41
}, {
    "period" : 148,
    "Yodacast Predicted Volume" : 67,
    "Football" : 67
}, {
    "period" : 149,
    "Yodacast Predicted Volume" : 67,
    "Football" : 67
}, {
    "period" : 150,
    "Yodacast Predicted Volume" : 77,
    "Football" : 77
}, {
    "period" : 151,
    "Yodacast Predicted Volume" : 83,
    "Football" : 83
}, {
    "period" : 152,
    "Yodacast Predicted Volume" : 51,
    "Football" : 51
}, {
    "period" : 153,
    "Yodacast Predicted Volume" : 43,
    "Football" : 43
}, {
    "period" : 154,
    "Yodacast Predicted Volume" : 29,
    "Football" : 29
}, {
    "period" : 155,
    "Yodacast Predicted Volume" : 7,
    "Football" : 7
}, {
    "period" : 156,
    "Yodacast Predicted Volume" : -15,
    "Football" : -15
}, {
    "period" : 157,
    "Yodacast Predicted Volume" : -24,
    "Football" : -24
}, {
    "period" : 158,
    "Yodacast Predicted Volume" : -7,
    "Football" : -7
}, {
    "period" : 159,
    "Yodacast Predicted Volume" : 46,
    "Football" : 46
}, {
    "period" : 160,
    "Yodacast Predicted Volume" : 142,
    "Football" : 142
}, {
    "period" : 161,
    "Yodacast Predicted Volume" : 287,
    "Football" : 287
}, {
    "period" : 162,
    "Yodacast Predicted Volume" : 475,
    "Football" : 475
}, {
    "period" : 163,
    "Yodacast Predicted Volume" : 680,
    "Football" : 680
}, {
    "period" : 164,
    "Yodacast Predicted Volume" : 877,
    "Football" : 877
}, {
    "period" : 165,
    "Yodacast Predicted Volume" : 1056,
    "Football" : 1056
}, {
    "period" : 166,
    "Yodacast Predicted Volume" : 1204,
    "Football" : 1204
}, {
    "period" : 167,
    "Yodacast Predicted Volume" : 1314,
    "Football" : 1314
}, {
    "period" : 168,
    "Yodacast Predicted Volume" : 1388,
    "Football" : 1388
}, {
    "period" : 169,
    "Yodacast Predicted Volume" : 1443,
    "Football" : 1443
}, {
    "period" : 170,
    "Yodacast Predicted Volume" : 1482,
    "Football" : 1482
}, {
    "period" : 171,
    "Yodacast Predicted Volume" : 1501,
    "Football" : 1501
}, {
    "period" : 172,
    "Yodacast Predicted Volume" : 1387,
    "Football" : 1387
}, {
    "period" : 173,
    "Yodacast Predicted Volume" : 1333,
    "Football" : 1333
}, {
    "period" : 174,
    "Yodacast Predicted Volume" : 1307,
    "Football" : 1307
}, {
    "period" : 175,
    "Yodacast Predicted Volume" : 1267,
    "Football" : 1267
}, {
    "period" : 176,
    "Yodacast Predicted Volume" : 1432,
    "Football" : 1432
}, {
    "period" : 177,
    "Yodacast Predicted Volume" : 1390,
    "Football" : 1390
}, {
    "period" : 178,
    "Yodacast Predicted Volume" : 1348,
    "Football" : 1348
}, {
    "period" : 179,
    "Yodacast Predicted Volume" : 1306,
    "Football" : 1306
}, {
    "period" : 180,
    "Yodacast Predicted Volume" : 1263,
    "Football" : 1263
}, {
    "period" : 181,
    "Yodacast Predicted Volume" : 1218,
    "Football" : 1218
}, {
    "period" : 182,
    "Yodacast Predicted Volume" : 1168,
    "Football" : 1168
}, {
    "period" : 183,
    "Yodacast Predicted Volume" : 1113,
    "Football" : 1113
}, {
    "period" : 184,
    "Yodacast Predicted Volume" : 1050,
    "Football" : 1050
}, {
    "period" : 185,
    "Yodacast Predicted Volume" : 975,
    "Football" : 975
}, {
    "period" : 186,
    "Yodacast Predicted Volume" : 887,
    "Football" : 887
}, {
    "period" : 187,
    "Yodacast Predicted Volume" : 784,
    "Football" : 784
}, {
    "period" : 188,
    "Yodacast Predicted Volume" : 668,
    "Football" : 668
}, {
    "period" : 189,
    "Yodacast Predicted Volume" : 548,
    "Football" : 548
}, {
    "period" : 190,
    "Yodacast Predicted Volume" : 434,
    "Football" : 434
}, {
    "period" : 191,
    "Yodacast Predicted Volume" : 336,
    "Football" : 336
}, {
    "period" : 192,
    "Yodacast Predicted Volume" : 255,
    "Football" : 255
}, {
    "period" : 193,
    "Yodacast Predicted Volume" : 196,
    "Football" : 196
}, {
    "period" : 194,
    "Yodacast Predicted Volume" : 156,
    "Football" : 156
}, {
    "period" : 195,
    "Yodacast Predicted Volume" : 127,
    "Football" : 127
}, {
    "period" : 196,
    "Yodacast Predicted Volume" : 64,
    "Football" : 64
}, {
    "period" : 197,
    "Yodacast Predicted Volume" : 58,
    "Football" : 58
}, {
    "period" : 198,
    "Yodacast Predicted Volume" : 57,
    "Football" : 57
}, {
    "period" : 199,
    "Yodacast Predicted Volume" : -19,
    "Football" : -19
}, {
    "period" : 200,
    "Yodacast Predicted Volume" : -34,
    "Football" : -34
}, {
    "period" : 201,
    "Yodacast Predicted Volume" : -42,
    "Football" : -42
}, {
    "period" : 202,
    "Yodacast Predicted Volume" : -43,
    "Football" : -43
}, {
    "period" : 203,
    "Yodacast Predicted Volume" : -46,
    "Football" : -46
}, {
    "period" : 204,
    "Yodacast Predicted Volume" : -44,
    "Football" : -44
}, {
    "period" : 205,
    "Yodacast Predicted Volume" : -31,
    "Football" : -31
}, {
    "period" : 206,
    "Yodacast Predicted Volume" : 2,
    "Football" : 2
}, {
    "period" : 207,
    "Yodacast Predicted Volume" : 61,
    "Football" : 61
}, {
    "period" : 208,
    "Yodacast Predicted Volume" : 152,
    "Football" : 152
}, {
    "period" : 209,
    "Yodacast Predicted Volume" : 278,
    "Football" : 278
}, {
    "period" : 210,
    "Yodacast Predicted Volume" : 436,
    "Football" : 436
}, {
    "period" : 211,
    "Yodacast Predicted Volume" : 613,
    "Football" : 613
}, {
    "period" : 212,
    "Yodacast Predicted Volume" : 794,
    "Football" : 794
}, {
    "period" : 213,
    "Yodacast Predicted Volume" : 969,
    "Football" : 969
}, {
    "period" : 214,
    "Yodacast Predicted Volume" : 1126,
    "Football" : 1126
}, {
    "period" : 215,
    "Yodacast Predicted Volume" : 1258,
    "Football" : 1258
}, {
    "period" : 216,
    "Yodacast Predicted Volume" : 1363,
    "Football" : 1363
}, {
    "period" : 217,
    "Yodacast Predicted Volume" : 1443,
    "Football" : 1443
}, {
    "period" : 218,
    "Yodacast Predicted Volume" : 1499,
    "Football" : 1499
}, {
    "period" : 219,
    "Yodacast Predicted Volume" : 1534,
    "Football" : 1534
}, {
    "period" : 220,
    "Yodacast Predicted Volume" : 1420,
    "Football" : 1420
}, {
    "period" : 221,
    "Yodacast Predicted Volume" : 1390,
    "Football" : 1390
}, {
    "period" : 222,
    "Yodacast Predicted Volume" : 1365,
    "Football" : 1365
}, {
    "period" : 223,
    "Yodacast Predicted Volume" : 1312,
    "Football" : 1312
}, {
    "period" : 224,
    "Yodacast Predicted Volume" : 1461,
    "Football" : 1461
}, {
    "period" : 225,
    "Yodacast Predicted Volume" : 1402,
    "Football" : 1402
}, {
    "period" : 226,
    "Yodacast Predicted Volume" : 1335,
    "Football" : 1335
}, {
    "period" : 227,
    "Yodacast Predicted Volume" : 1263,
    "Football" : 1263
}, {
    "period" : 228,
    "Yodacast Predicted Volume" : 1187,
    "Football" : 1187
}, {
    "period" : 229,
    "Yodacast Predicted Volume" : 1109,
    "Football" : 1109
}, {
    "period" : 230,
    "Yodacast Predicted Volume" : 1029,
    "Football" : 1029
}, {
    "period" : 231,
    "Yodacast Predicted Volume" : 946,
    "Football" : 946
}, {
    "period" : 232,
    "Yodacast Predicted Volume" : 859,
    "Football" : 859
}, {
    "period" : 233,
    "Yodacast Predicted Volume" : 770,
    "Football" : 770
}, {
    "period" : 234,
    "Yodacast Predicted Volume" : 678,
    "Football" : 678
}, {
    "period" : 235,
    "Yodacast Predicted Volume" : 586,
    "Football" : 586
}, {
    "period" : 236,
    "Yodacast Predicted Volume" : 496,
    "Football" : 496
}, {
    "period" : 237,
    "Yodacast Predicted Volume" : 409,
    "Football" : 409
}, {
    "period" : 238,
    "Yodacast Predicted Volume" : 328,
    "Football" : 328
}, {
    "period" : 239,
    "Yodacast Predicted Volume" : 250,
    "Football" : 250
}, {
    "period" : 240,
    "Yodacast Predicted Volume" : 172,
    "Football" : 172
}, {
    "period" : 241,
    "Yodacast Predicted Volume" : 99,
    "Football" : 99
}, {
    "period" : 242,
    "Yodacast Predicted Volume" : 38,
    "Football" : 38
}, {
    "period" : 243,
    "Yodacast Predicted Volume" : -2,
    "Football" : -2
}, {
    "period" : 244,
    "Yodacast Predicted Volume" : 48,
    "Football" : 48
}, {
    "period" : 245,
    "Yodacast Predicted Volume" : 54,
    "Football" : 54
}, {
    "period" : 246,
    "Yodacast Predicted Volume" : 42,
    "Football" : 42
}, {
    "period" : 247,
    "Yodacast Predicted Volume" : 26,
    "Football" : 26
}, {
    "period" : 248,
    "Yodacast Predicted Volume" : -7,
    "Football" : -7
}, {
    "period" : 249,
    "Yodacast Predicted Volume" : 6,
    "Football" : 6
}, {
    "period" : 250,
    "Yodacast Predicted Volume" : 10,
    "Football" : 10
}, {
    "period" : 251,
    "Yodacast Predicted Volume" : 9,
    "Football" : 9
}, {
    "period" : 252,
    "Yodacast Predicted Volume" : 9,
    "Football" : 9
}, {
    "period" : 253,
    "Yodacast Predicted Volume" : 13,
    "Football" : 13
}, {
    "period" : 254,
    "Yodacast Predicted Volume" : 25,
    "Football" : 25
}, {
    "period" : 255,
    "Yodacast Predicted Volume" : 51,
    "Football" : 51
}, {
    "period" : 256,
    "Yodacast Predicted Volume" : 95,
    "Football" : 95
}, {
    "period" : 257,
    "Yodacast Predicted Volume" : 164,
    "Football" : 164
}, {
    "period" : 258,
    "Yodacast Predicted Volume" : 263,
    "Football" : 263
}, {
    "period" : 259,
    "Yodacast Predicted Volume" : 383,
    "Football" : 383
}, {
    "period" : 260,
    "Yodacast Predicted Volume" : 510,
    "Football" : 510
}, {
    "period" : 261,
    "Yodacast Predicted Volume" : 635,
    "Football" : 635
}, {
    "period" : 262,
    "Yodacast Predicted Volume" : 747,
    "Football" : 809
}, {
    "period" : 263,
    "Yodacast Predicted Volume" : 838,
    "Football" : 891
}, {
    "period" : 264,
    "Yodacast Predicted Volume" : 904,
    "Football" : 896
}, {
    "period" : 265,
    "Yodacast Predicted Volume" : 949,
    "Football" : 832
}, {
    "period" : 266,
    "Yodacast Predicted Volume" : 976,
    "Football" : 737
}, {
    "period" : 267,
    "Yodacast Predicted Volume" : 984,
    "Football" : 712
}, {
    "period" : 268,
    "Yodacast Predicted Volume" : 960,
    "Football" : 757
}, {
    "period" : 269,
    "Yodacast Predicted Volume" : 935,
    "Football" : 797
}, {
    "period" : 270,
    "Yodacast Predicted Volume" : 904,
    "Football" : 840
}, {
    "period" : 271,
    "Yodacast Predicted Volume" : 862,
    "Football" : 862
}, {
    "period" : 272,
    "Yodacast Predicted Volume" : 847,
    "Football" : 847
}, {
    "period" : 273,
    "Yodacast Predicted Volume" : 800,
    "Football" : 800
}, {
    "period" : 274,
    "Yodacast Predicted Volume" : 752,
    "Football" : 752
}, {
    "period" : 275,
    "Yodacast Predicted Volume" : 705,
    "Football" : 705
}, {
    "period" : 276,
    "Yodacast Predicted Volume" : 661,
    "Football" : 661
}, {
    "period" : 277,
    "Yodacast Predicted Volume" : 619,
    "Football" : 619
}, {
    "period" : 278,
    "Yodacast Predicted Volume" : 580,
    "Football" : 580
}, {
    "period" : 279,
    "Yodacast Predicted Volume" : 544,
    "Football" : 544
}, {
    "period" : 280,
    "Yodacast Predicted Volume" : 509,
    "Football" : 509
}, {
    "period" : 281,
    "Yodacast Predicted Volume" : 475,
    "Football" : 475
}, {
    "period" : 282,
    "Yodacast Predicted Volume" : 437,
    "Football" : 437
}, {
    "period" : 283,
    "Yodacast Predicted Volume" : 396,
    "Football" : 396
}, {
    "period" : 284,
    "Yodacast Predicted Volume" : 350,
    "Football" : 350
}, {
    "period" : 285,
    "Yodacast Predicted Volume" : 299,
    "Football" : 299
}, {
    "period" : 286,
    "Yodacast Predicted Volume" : 245,
    "Football" : 245
}, {
    "period" : 287,
    "Yodacast Predicted Volume" : 191,
    "Football" : 191
}, {
    "period" : 288,
    "Yodacast Predicted Volume" : 143,
    "Football" : 143
}, {
    "period" : 289,
    "Yodacast Predicted Volume" : 94,
    "Football" : 94
}, {
    "period" : 290,
    "Yodacast Predicted Volume" : 43,
    "Football" : 43
}, {
    "period" : 291,
    "Yodacast Predicted Volume" : 2,
    "Football" : 2
}, {
    "period" : 292,
    "Yodacast Predicted Volume" : 64,
    "Football" : 64
}, {
    "period" : 293,
    "Yodacast Predicted Volume" : 46,
    "Football" : 46
}, {
    "period" : 294,
    "Yodacast Predicted Volume" : 57,
    "Football" : 57
}, {
    "period" : 295,
    "Yodacast Predicted Volume" : 12,
    "Football" : 12
}, {
    "period" : 296,
    "Yodacast Predicted Volume" : -21,
    "Football" : -21
}, {
    "period" : 297,
    "Yodacast Predicted Volume" : 2,
    "Football" : 2
}, {
    "period" : 298,
    "Yodacast Predicted Volume" : 13,
    "Football" : 13
}, {
    "period" : 299,
    "Yodacast Predicted Volume" : 17,
    "Football" : 17
}, {
    "period" : 300,
    "Yodacast Predicted Volume" : 9,
    "Football" : 9
}, {
    "period" : 301,
    "Yodacast Predicted Volume" : -9,
    "Football" : -9
}, {
    "period" : 302,
    "Yodacast Predicted Volume" : -31,
    "Football" : -31
}, {
    "period" : 303,
    "Yodacast Predicted Volume" : -49,
    "Football" : -49
}, {
    "period" : 304,
    "Yodacast Predicted Volume" : -55,
    "Football" : -55
}, {
    "period" : 305,
    "Yodacast Predicted Volume" : -35,
    "Football" : -35
}, {
    "period" : 306,
    "Yodacast Predicted Volume" : 23,
    "Football" : 23
}, {
    "period" : 307,
    "Yodacast Predicted Volume" : 108,
    "Football" : 108
}, {
    "period" : 308,
    "Yodacast Predicted Volume" : 200,
    "Football" : 200
}, {
    "period" : 309,
    "Yodacast Predicted Volume" : 288,
    "Football" : 288
}, {
    "period" : 310,
    "Yodacast Predicted Volume" : 357,
    "Football" : 357
}, {
    "period" : 311,
    "Yodacast Predicted Volume" : 401,
    "Football" : 401
}, {
    "period" : 312,
    "Yodacast Predicted Volume" : 417,
    "Football" : 417
}, {
    "period" : 313,
    "Yodacast Predicted Volume" : 425,
    "Football" : 425
}, {
    "period" : 314,
    "Yodacast Predicted Volume" : 432,
    "Football" : 432
}, {
    "period" : 315,
    "Yodacast Predicted Volume" : 433,
    "Football" : 433
}, {
    "period" : 316,
    "Yodacast Predicted Volume" : 431,
    "Football" : 431
}, {
    "period" : 317,
    "Yodacast Predicted Volume" : 426,
    "Football" : 426
}, {
    "period" : 318,
    "Yodacast Predicted Volume" : 420,
    "Football" : 420
}, {
    "period" : 319,
    "Yodacast Predicted Volume" : 408,
    "Football" : 408
}, {
    "period" : 320,
    "Yodacast Predicted Volume" : 403,
    "Football" : 403
}, {
    "period" : 321,
    "Yodacast Predicted Volume" : 398,
    "Football" : 398
}, {
    "period" : 322,
    "Yodacast Predicted Volume" : 401,
    "Football" : 401
}, {
    "period" : 323,
    "Yodacast Predicted Volume" : 409,
    "Football" : 409
}, {
    "period" : 324,
    "Yodacast Predicted Volume" : 422,
    "Football" : 422
}, {
    "period" : 325,
    "Yodacast Predicted Volume" : 436,
    "Football" : 436
}, {
    "period" : 326,
    "Yodacast Predicted Volume" : 448,
    "Football" : 448
}, {
    "period" : 327,
    "Yodacast Predicted Volume" : 454,
    "Football" : 454
}, {
    "period" : 328,
    "Yodacast Predicted Volume" : 451,
    "Football" : 451
}, {
    "period" : 329,
    "Yodacast Predicted Volume" : 435,
    "Football" : 435
}, {
    "period" : 330,
    "Yodacast Predicted Volume" : 404,
    "Football" : 404
}, {
    "period" : 331,
    "Yodacast Predicted Volume" : 360,
    "Football" : 360
}, {
    "period" : 332,
    "Yodacast Predicted Volume" : 306,
    "Football" : 306
}, {
    "period" : 333,
    "Yodacast Predicted Volume" : 248,
    "Football" : 248
}, {
    "period" : 334,
    "Yodacast Predicted Volume" : 190,
    "Football" : 190
}, {
    "period" : 335,
    "Yodacast Predicted Volume" : 143,
    "Football" : 143
}, {
    "period" : 336,
    "Yodacast Predicted Volume" : 111,
    "Football" : 111
}, {
    "period" : 337,
    "Yodacast Predicted Volume" : 80,
    "Football" : 80
}, {
    "period" : 338,
    "Yodacast Predicted Volume" : 45,
    "Football" : 45
}, {
    "period" : 339,
    "Yodacast Predicted Volume" : 10,
    "Football" : 10
}, {
    "period" : 340,
    "Yodacast Predicted Volume" : 28,
    "Football" : 28
}, {
    "period" : 341,
    "Yodacast Predicted Volume" : 30,
    "Football" : 30
}, {
    "period" : 342,
    "Yodacast Predicted Volume" : -6,
    "Football" : -6
}, {
    "period" : 343,
    "Yodacast Predicted Volume" : -11,
    "Football" : -11
}, {
    "period" : 344,
    "Yodacast Predicted Volume" : -109,
    "Football" : -109
}, {
    "period" : 345,
    "Yodacast Predicted Volume" : -68,
    "Football" : -68
}, {
    "period" : 346,
    "Yodacast Predicted Volume" : -29,
    "Football" : -29
} ];
;
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
        data : basicYodadata,
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
        var checkbox = $('<input type="checkbox" name='+label+' checked="">');
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

var hot1 = {
    label : "Accuracy",
    value : 80
}
var hot2 = {
    label : "Hotline 1414",
    value : 3200
}
var hot3 = {
    label : "Hotline 2122",
    value : 3200
}
var hot4 = {
    label : "Hotline 9919",
    value : 3200
}

var hotLineData = [ {
    label : "Accuracy",
    value : 80
} ]

function drawHotLine(hotLineData) {
    // Donut Chart
    hotLineChart = Morris.Donut({
        element : 'morris-donut-chart',
        data : hotLineData,
        colors : [ '#7cc359', '#696969' ],
        resize : false
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

function updateHotLine(valuesTs) {
    $("#morris-donut-chart").empty();
    var hotLineDataNew = [];
    if ($.inArray('HotLine 1212', valuesTs) > -1) {
        hotLineDataNew.push(hot1);
    }
    if ($.inArray('HotLine 1414', valuesTs) > -1) {
        hotLineDataNew.push(hot2);
    }
    if ($.inArray('HotLine 2212', valuesTs) > -1) {
        hotLineDataNew.push(hot3);
    }
    if ($.inArray('HotLine 9919', valuesTs) > -1) {
        hotLineDataNew.push(hot4);
    }
    drawHotLine(hotLineDataNew);
    updateTable("Hotline");
}
$(document).ready(function() {
    drawFirstYoda();
    drawHotLine(hotLineData);
});
