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
    "HandledCallVolume" : 71,
    "YodacastPredictedVolume" : 73
}, {
    "period" : 2,
    "HandledCallVolume" : 8,
    "YodacastPredictedVolume" : 8
}, {
    "period" : 3,
    "HandledCallVolume" : 1411,
    "YodacastPredictedVolume" : 1222
}, {
    "period" : 4,
    "HandledCallVolume" : 1422,
    "YodacastPredictedVolume" : 1452
}, {
    "period" : 5,
    "HandledCallVolume" : 831,
    "YodacastPredictedVolume" : 724
}, {
    "period" : 6,
    "HandledCallVolume" : 19,
    "YodacastPredictedVolume" : 3
}, {
    "period" : 7,
    "HandledCallVolume" : 455,
    "YodacastPredictedVolume" : 476
}, {
    "period" : 8,
    "HandledCallVolume" : 1373,
    "YodacastPredictedVolume" : 1438
}, {
    "period" : 9,
    "HandledCallVolume" : 1170,
    "YodacastPredictedVolume" : 1191
}, {
    "period" : 10,
    "HandledCallVolume" : 53,
    "YodacastPredictedVolume" : 137
}, {
    "period" : 11,
    "HandledCallVolume" : 26,
    "YodacastPredictedVolume" : 107
}, {
    "period" : 12,
    "HandledCallVolume" : 1353,
    "YodacastPredictedVolume" : 1442
}, {
    "period" : 13,
    "HandledCallVolume" : 1346,
    "YodacastPredictedVolume" : 1222
}, {
    "period" : 14,
    "HandledCallVolume" : 269,
    "YodacastPredictedVolume" : 342
}, {
    "period" : 15,
    "HandledCallVolume" : 7,
    "YodacastPredictedVolume" : 29
}, {
    "period" : 16,
    "HandledCallVolume" : 1027,
    "YodacastPredictedVolume" : 1056
}, {
    "period" : 17,
    "HandledCallVolume" : 1240,
    "YodacastPredictedVolume" : 1432
}, {
    "period" : 18,
    "HandledCallVolume" : 757,
    "YodacastPredictedVolume" : 784
}, {
    "period" : 19,
    "HandledCallVolume" : 24,
    "YodacastPredictedVolume" : 57
}, {
    "period" : 20,
    "HandledCallVolume" : 348,
    "YodacastPredictedVolume" : 278
}, {
    "period" : 21,
    "HandledCallVolume" : 1561,
    "YodacastPredictedVolume" : 1420
}, {
    "period" : 22,
    "HandledCallVolume" : 849,
    "YodacastPredictedVolume" : 859
}, {
    "period" : 23,
    "HandledCallVolume" : 54,
    "YodacastPredictedVolume" : 48
}, {
    "period" : 24,
    "HandledCallVolume" : 59,
    "YodacastPredictedVolume" : 95
}, {
    "period" : 25,
    "HandledCallVolume" : 919,
    "YodacastPredictedVolume" : 949
}, {
    "period" : 26,
    "HandledCallVolume" : 765,
    "YodacastPredictedVolume" : 661
}, {
    "period" : 27,
    "HandledCallVolume" : 136,
    "YodacastPredictedVolume" : 143
}, {
    "period" : 28,
    "HandledCallVolume" : 14,
    "YodacastPredictedVolume" : 17
}, {
    "period" : 29,
    "HandledCallVolume" : 424,
    "YodacastPredictedVolume" : 401
}, {
    "period" : 30,
    "HandledCallVolume" : 429,
    "YodacastPredictedVolume" : 409
} ];

var weatherYodaData = [ {
    "period" : 1,
    "YodacastPredictedVolume" : 73,
    "BadWeather" : 70,
    "GoodWeather" : 38
}, {
    "period" : 2,
    "YodacastPredictedVolume" : 31,
    "BadWeather" : 42,
    "GoodWeather" : -39
}, {
    "period" : 3,
    "YodacastPredictedVolume" : -6,
    "BadWeather" : 19,
    "GoodWeather" : -104
}, {
    "period" : 4,
    "YodacastPredictedVolume" : 29,
    "BadWeather" : 22,
    "GoodWeather" : 15
}, {
    "period" : 5,
    "YodacastPredictedVolume" : 22,
    "BadWeather" : 24,
    "GoodWeather" : 4
}, {
    "period" : 6,
    "YodacastPredictedVolume" : -13,
    "BadWeather" : -14,
    "GoodWeather" : -30
}, {
    "period" : 7,
    "YodacastPredictedVolume" : 1,
    "BadWeather" : -3,
    "GoodWeather" : -29
}, {
    "period" : 8,
    "YodacastPredictedVolume" : -121,
    "BadWeather" : -102,
    "GoodWeather" : -155
}, {
    "period" : 9,
    "YodacastPredictedVolume" : -79,
    "BadWeather" : -54,
    "GoodWeather" : -106
}, {
    "period" : 10,
    "YodacastPredictedVolume" : -41,
    "BadWeather" : -16,
    "GoodWeather" : -63
}, {
    "period" : 11,
    "YodacastPredictedVolume" : -8,
    "BadWeather" : 11,
    "GoodWeather" : -25
}, {
    "period" : 12,
    "YodacastPredictedVolume" : 23,
    "BadWeather" : 32,
    "GoodWeather" : 10
}, {
    "period" : 13,
    "YodacastPredictedVolume" : 56,
    "BadWeather" : 52,
    "GoodWeather" : 50
}, {
    "period" : 14,
    "YodacastPredictedVolume" : 98,
    "BadWeather" : 81,
    "GoodWeather" : 101
}, {
    "period" : 15,
    "YodacastPredictedVolume" : 160,
    "BadWeather" : 132,
    "GoodWeather" : 172
}, {
    "period" : 16,
    "YodacastPredictedVolume" : 250,
    "BadWeather" : 215,
    "GoodWeather" : 271
}, {
    "period" : 17,
    "YodacastPredictedVolume" : 375,
    "BadWeather" : 336,
    "GoodWeather" : 399
}, {
    "period" : 18,
    "YodacastPredictedVolume" : 535,
    "BadWeather" : 492,
    "GoodWeather" : 554
}, {
    "period" : 19,
    "YodacastPredictedVolume" : 716,
    "BadWeather" : 675,
    "GoodWeather" : 723
}, {
    "period" : 20,
    "YodacastPredictedVolume" : 900,
    "BadWeather" : 868,
    "GoodWeather" : 895
}, {
    "period" : 21,
    "YodacastPredictedVolume" : 1073,
    "BadWeather" : 1055,
    "GoodWeather" : 1055
}, {
    "period" : 22,
    "YodacastPredictedVolume" : 1222,
    "BadWeather" : 1224,
    "GoodWeather" : 1194
}, {
    "period" : 23,
    "YodacastPredictedVolume" : 1343,
    "BadWeather" : 1367,
    "GoodWeather" : 1306
}, {
    "period" : 24,
    "YodacastPredictedVolume" : 1432,
    "BadWeather" : 1480,
    "GoodWeather" : 1390
}, {
    "period" : 25,
    "YodacastPredictedVolume" : 1495,
    "BadWeather" : 1564,
    "GoodWeather" : 1448
}, {
    "period" : 26,
    "YodacastPredictedVolume" : 1538,
    "BadWeather" : 1621,
    "GoodWeather" : 1481
}, {
    "period" : 27,
    "YodacastPredictedVolume" : 1556,
    "BadWeather" : 1655,
    "GoodWeather" : 1496
}, {
    "period" : 28,
    "YodacastPredictedVolume" : 1522,
    "BadWeather" : 1635,
    "GoodWeather" : 1463
}, {
    "period" : 29,
    "YodacastPredictedVolume" : 1453,
    "BadWeather" : 1579,
    "GoodWeather" : 1398
}, {
    "period" : 30,
    "YodacastPredictedVolume" : 1406,
    "BadWeather" : 1545,
    "GoodWeather" : 1353
}, {
    "period" : 31,
    "YodacastPredictedVolume" : 1353,
    "BadWeather" : 1502,
    "GoodWeather" : 1298
}, {
    "period" : 32,
    "YodacastPredictedVolume" : 1476,
    "BadWeather" : 1630,
    "GoodWeather" : 1412
}, {
    "period" : 33,
    "YodacastPredictedVolume" : 1452,
    "BadWeather" : 1610,
    "GoodWeather" : 1384
}, {
    "period" : 34,
    "YodacastPredictedVolume" : 1427,
    "BadWeather" : 1587,
    "GoodWeather" : 1355
}, {
    "period" : 35,
    "YodacastPredictedVolume" : 1402,
    "BadWeather" : 1563,
    "GoodWeather" : 1327
}, {
    "period" : 36,
    "YodacastPredictedVolume" : 1375,
    "BadWeather" : 1534,
    "GoodWeather" : 1298
}, {
    "period" : 37,
    "YodacastPredictedVolume" : 1344,
    "BadWeather" : 1497,
    "GoodWeather" : 1266
}, {
    "period" : 38,
    "YodacastPredictedVolume" : 1306,
    "BadWeather" : 1447,
    "GoodWeather" : 1227
}, {
    "period" : 39,
    "YodacastPredictedVolume" : 1259,
    "BadWeather" : 1381,
    "GoodWeather" : 1178
}, {
    "period" : 40,
    "YodacastPredictedVolume" : 1197,
    "BadWeather" : 1295,
    "GoodWeather" : 1115
}, {
    "period" : 41,
    "YodacastPredictedVolume" : 1112,
    "BadWeather" : 1185,
    "GoodWeather" : 1033
}, {
    "period" : 42,
    "YodacastPredictedVolume" : 1007,
    "BadWeather" : 1052,
    "GoodWeather" : 933
}, {
    "period" : 43,
    "YodacastPredictedVolume" : 877,
    "BadWeather" : 898,
    "GoodWeather" : 816
}, {
    "period" : 44,
    "YodacastPredictedVolume" : 724,
    "BadWeather" : 732,
    "GoodWeather" : 686
}, {
    "period" : 45,
    "YodacastPredictedVolume" : 570,
    "BadWeather" : 565,
    "GoodWeather" : 550
}, {
    "period" : 46,
    "YodacastPredictedVolume" : 426,
    "BadWeather" : 413,
    "GoodWeather" : 418
}, {
    "period" : 47,
    "YodacastPredictedVolume" : 302,
    "BadWeather" : 289,
    "GoodWeather" : 294
}, {
    "period" : 48,
    "YodacastPredictedVolume" : 196,
    "BadWeather" : 197,
    "GoodWeather" : 182
}, {
    "period" : 49,
    "YodacastPredictedVolume" : 110,
    "BadWeather" : 132,
    "GoodWeather" : 81
}, {
    "period" : 50,
    "YodacastPredictedVolume" : 39,
    "BadWeather" : 84,
    "GoodWeather" : -7
}, {
    "period" : 51,
    "YodacastPredictedVolume" : -18,
    "BadWeather" : 47,
    "GoodWeather" : -80
}, {
    "period" : 52,
    "YodacastPredictedVolume" : 66,
    "BadWeather" : 76,
    "GoodWeather" : 52
}, {
    "period" : 53,
    "YodacastPredictedVolume" : 30,
    "BadWeather" : 40,
    "GoodWeather" : 10
}, {
    "period" : 54,
    "YodacastPredictedVolume" : 8,
    "BadWeather" : 9,
    "GoodWeather" : 3
}, {
    "period" : 55,
    "YodacastPredictedVolume" : 3,
    "BadWeather" : 15,
    "GoodWeather" : 4
}, {
    "period" : 56,
    "YodacastPredictedVolume" : -162,
    "BadWeather" : -115,
    "GoodWeather" : -224
}, {
    "period" : 57,
    "YodacastPredictedVolume" : -81,
    "BadWeather" : -50,
    "GoodWeather" : -141
}, {
    "period" : 58,
    "YodacastPredictedVolume" : -25,
    "BadWeather" : -5,
    "GoodWeather" : -75
}, {
    "period" : 59,
    "YodacastPredictedVolume" : 11,
    "BadWeather" : 21,
    "GoodWeather" : -22
}, {
    "period" : 60,
    "YodacastPredictedVolume" : 35,
    "BadWeather" : 32,
    "GoodWeather" : 21
}, {
    "period" : 61,
    "YodacastPredictedVolume" : 55,
    "BadWeather" : 39,
    "GoodWeather" : 63
}, {
    "period" : 62,
    "YodacastPredictedVolume" : 82,
    "BadWeather" : 54,
    "GoodWeather" : 113
}, {
    "period" : 63,
    "YodacastPredictedVolume" : 129,
    "BadWeather" : 91,
    "GoodWeather" : 183
}, {
    "period" : 64,
    "YodacastPredictedVolume" : 206,
    "BadWeather" : 164,
    "GoodWeather" : 280
}, {
    "period" : 65,
    "YodacastPredictedVolume" : 321,
    "BadWeather" : 276,
    "GoodWeather" : 407
}, {
    "period" : 66,
    "YodacastPredictedVolume" : 476,
    "BadWeather" : 425,
    "GoodWeather" : 559
}, {
    "period" : 67,
    "YodacastPredictedVolume" : 654,
    "BadWeather" : 599,
    "GoodWeather" : 724
}, {
    "period" : 68,
    "YodacastPredictedVolume" : 835,
    "BadWeather" : 782,
    "GoodWeather" : 889
}, {
    "period" : 69,
    "YodacastPredictedVolume" : 1004,
    "BadWeather" : 958,
    "GoodWeather" : 1041
}, {
    "period" : 70,
    "YodacastPredictedVolume" : 1146,
    "BadWeather" : 1115,
    "GoodWeather" : 1170
}, {
    "period" : 71,
    "YodacastPredictedVolume" : 1255,
    "BadWeather" : 1246,
    "GoodWeather" : 1273
}, {
    "period" : 72,
    "YodacastPredictedVolume" : 1331,
    "BadWeather" : 1348,
    "GoodWeather" : 1348
}, {
    "period" : 73,
    "YodacastPredictedVolume" : 1386,
    "BadWeather" : 1421,
    "GoodWeather" : 1396
}, {
    "period" : 74,
    "YodacastPredictedVolume" : 1425,
    "BadWeather" : 1470,
    "GoodWeather" : 1422
}, {
    "period" : 75,
    "YodacastPredictedVolume" : 1447,
    "BadWeather" : 1497,
    "GoodWeather" : 1429
}, {
    "period" : 76,
    "YodacastPredictedVolume" : 1447,
    "BadWeather" : 1497,
    "GoodWeather" : 1412
}, {
    "period" : 77,
    "YodacastPredictedVolume" : 1438,
    "BadWeather" : 1488,
    "GoodWeather" : 1387
}, {
    "period" : 78,
    "YodacastPredictedVolume" : 1425,
    "BadWeather" : 1474,
    "GoodWeather" : 1360
}, {
    "period" : 79,
    "YodacastPredictedVolume" : 1406,
    "BadWeather" : 1455,
    "GoodWeather" : 1330
}, {
    "period" : 80,
    "YodacastPredictedVolume" : 1402,
    "BadWeather" : 1454,
    "GoodWeather" : 1319
}, {
    "period" : 81,
    "YodacastPredictedVolume" : 1383,
    "BadWeather" : 1433,
    "GoodWeather" : 1288
}, {
    "period" : 82,
    "YodacastPredictedVolume" : 1367,
    "BadWeather" : 1412,
    "GoodWeather" : 1260
}, {
    "period" : 83,
    "YodacastPredictedVolume" : 1352,
    "BadWeather" : 1391,
    "GoodWeather" : 1234
}, {
    "period" : 84,
    "YodacastPredictedVolume" : 1336,
    "BadWeather" : 1368,
    "GoodWeather" : 1210
}, {
    "period" : 85,
    "YodacastPredictedVolume" : 1312,
    "BadWeather" : 1340,
    "GoodWeather" : 1186
}, {
    "period" : 86,
    "YodacastPredictedVolume" : 1278,
    "BadWeather" : 1305,
    "GoodWeather" : 1159
}, {
    "period" : 87,
    "YodacastPredictedVolume" : 1240,
    "BadWeather" : 1257,
    "GoodWeather" : 1125
}, {
    "period" : 88,
    "YodacastPredictedVolume" : 1191,
    "BadWeather" : 1194,
    "GoodWeather" : 1080
}, {
    "period" : 89,
    "YodacastPredictedVolume" : 1123,
    "BadWeather" : 1111,
    "GoodWeather" : 1020
}, {
    "period" : 90,
    "YodacastPredictedVolume" : 1036,
    "BadWeather" : 1008,
    "GoodWeather" : 942
}, {
    "period" : 91,
    "YodacastPredictedVolume" : 922,
    "BadWeather" : 885,
    "GoodWeather" : 847
}, {
    "period" : 92,
    "YodacastPredictedVolume" : 783,
    "BadWeather" : 746,
    "GoodWeather" : 735
}, {
    "period" : 93,
    "YodacastPredictedVolume" : 635,
    "BadWeather" : 600,
    "GoodWeather" : 611
}, {
    "period" : 94,
    "YodacastPredictedVolume" : 490,
    "BadWeather" : 458,
    "GoodWeather" : 480
}, {
    "period" : 95,
    "YodacastPredictedVolume" : 356,
    "BadWeather" : 332,
    "GoodWeather" : 347
}, {
    "period" : 96,
    "YodacastPredictedVolume" : 227,
    "BadWeather" : 227,
    "GoodWeather" : 212
}, {
    "period" : 97,
    "YodacastPredictedVolume" : 107,
    "BadWeather" : 135,
    "GoodWeather" : 72
}, {
    "period" : 98,
    "YodacastPredictedVolume" : -11,
    "BadWeather" : 43,
    "GoodWeather" : -75
}, {
    "period" : 99,
    "YodacastPredictedVolume" : -137,
    "BadWeather" : -61,
    "GoodWeather" : -228
}, {
    "period" : 100,
    "YodacastPredictedVolume" : 48,
    "BadWeather" : 63,
    "GoodWeather" : 5
}, {
    "period" : 101,
    "YodacastPredictedVolume" : 20,
    "BadWeather" : 48,
    "GoodWeather" : -12
}, {
    "period" : 102,
    "YodacastPredictedVolume" : 27,
    "BadWeather" : 32,
    "GoodWeather" : 11
}, {
    "period" : 103,
    "YodacastPredictedVolume" : 81,
    "BadWeather" : 70,
    "GoodWeather" : 46
}, {
    "period" : 104,
    "YodacastPredictedVolume" : -7,
    "BadWeather" : 74,
    "GoodWeather" : -33
}, {
    "period" : 105,
    "YodacastPredictedVolume" : 33,
    "BadWeather" : 97,
    "GoodWeather" : 7
}, {
    "period" : 106,
    "YodacastPredictedVolume" : 55,
    "BadWeather" : 103,
    "GoodWeather" : 34
}, {
    "period" : 107,
    "YodacastPredictedVolume" : 66,
    "BadWeather" : 94,
    "GoodWeather" : 51
}, {
    "period" : 108,
    "YodacastPredictedVolume" : 72,
    "BadWeather" : 77,
    "GoodWeather" : 63
}, {
    "period" : 109,
    "YodacastPredictedVolume" : 82,
    "BadWeather" : 61,
    "GoodWeather" : 80
}, {
    "period" : 110,
    "YodacastPredictedVolume" : 107,
    "BadWeather" : 63,
    "GoodWeather" : 113
}, {
    "period" : 111,
    "YodacastPredictedVolume" : 161,
    "BadWeather" : 97,
    "GoodWeather" : 173
}, {
    "period" : 112,
    "YodacastPredictedVolume" : 251,
    "BadWeather" : 175,
    "GoodWeather" : 270
}, {
    "period" : 113,
    "YodacastPredictedVolume" : 381,
    "BadWeather" : 299,
    "GoodWeather" : 402
}, {
    "period" : 114,
    "YodacastPredictedVolume" : 544,
    "BadWeather" : 463,
    "GoodWeather" : 561
}, {
    "period" : 115,
    "YodacastPredictedVolume" : 724,
    "BadWeather" : 652,
    "GoodWeather" : 735
}, {
    "period" : 116,
    "YodacastPredictedVolume" : 902,
    "BadWeather" : 847,
    "GoodWeather" : 907
}, {
    "period" : 117,
    "YodacastPredictedVolume" : 1066,
    "BadWeather" : 1032,
    "GoodWeather" : 1064
}, {
    "period" : 118,
    "YodacastPredictedVolume" : 1205,
    "BadWeather" : 1195,
    "GoodWeather" : 1196
}, {
    "period" : 119,
    "YodacastPredictedVolume" : 1313,
    "BadWeather" : 1329,
    "GoodWeather" : 1300
}, {
    "period" : 120,
    "YodacastPredictedVolume" : 1391,
    "BadWeather" : 1433,
    "GoodWeather" : 1375
}, {
    "period" : 121,
    "YodacastPredictedVolume" : 1442,
    "BadWeather" : 1507,
    "GoodWeather" : 1423
}, {
    "period" : 122,
    "YodacastPredictedVolume" : 1471,
    "BadWeather" : 1555,
    "GoodWeather" : 1447
}, {
    "period" : 123,
    "YodacastPredictedVolume" : 1483,
    "BadWeather" : 1580,
    "GoodWeather" : 1451
}, {
    "period" : 124,
    "YodacastPredictedVolume" : 1412,
    "BadWeather" : 1517,
    "GoodWeather" : 1367
}, {
    "period" : 125,
    "YodacastPredictedVolume" : 1372,
    "BadWeather" : 1483,
    "GoodWeather" : 1315
}, {
    "period" : 126,
    "YodacastPredictedVolume" : 1346,
    "BadWeather" : 1461,
    "GoodWeather" : 1279
}, {
    "period" : 127,
    "YodacastPredictedVolume" : 1305,
    "BadWeather" : 1425,
    "GoodWeather" : 1232
}, {
    "period" : 128,
    "YodacastPredictedVolume" : 1393,
    "BadWeather" : 1520,
    "GoodWeather" : 1321
}, {
    "period" : 129,
    "YodacastPredictedVolume" : 1349,
    "BadWeather" : 1490,
    "GoodWeather" : 1281
}, {
    "period" : 130,
    "YodacastPredictedVolume" : 1304,
    "BadWeather" : 1460,
    "GoodWeather" : 1243
}, {
    "period" : 131,
    "YodacastPredictedVolume" : 1261,
    "BadWeather" : 1429,
    "GoodWeather" : 1208
}, {
    "period" : 132,
    "YodacastPredictedVolume" : 1222,
    "BadWeather" : 1397,
    "GoodWeather" : 1176
}, {
    "period" : 133,
    "YodacastPredictedVolume" : 1185,
    "BadWeather" : 1359,
    "GoodWeather" : 1144
}, {
    "period" : 134,
    "YodacastPredictedVolume" : 1149,
    "BadWeather" : 1315,
    "GoodWeather" : 1110
}, {
    "period" : 135,
    "YodacastPredictedVolume" : 1105,
    "BadWeather" : 1259,
    "GoodWeather" : 1071
}, {
    "period" : 136,
    "YodacastPredictedVolume" : 1050,
    "BadWeather" : 1188,
    "GoodWeather" : 1022
}, {
    "period" : 137,
    "YodacastPredictedVolume" : 983,
    "BadWeather" : 1100,
    "GoodWeather" : 960
}, {
    "period" : 138,
    "YodacastPredictedVolume" : 899,
    "BadWeather" : 994,
    "GoodWeather" : 884
}, {
    "period" : 139,
    "YodacastPredictedVolume" : 802,
    "BadWeather" : 869,
    "GoodWeather" : 793
}, {
    "period" : 140,
    "YodacastPredictedVolume" : 691,
    "BadWeather" : 729,
    "GoodWeather" : 688
}, {
    "period" : 141,
    "YodacastPredictedVolume" : 573,
    "BadWeather" : 583,
    "GoodWeather" : 575
}, {
    "period" : 142,
    "YodacastPredictedVolume" : 454,
    "BadWeather" : 445,
    "GoodWeather" : 460
}, {
    "period" : 143,
    "YodacastPredictedVolume" : 342,
    "BadWeather" : 329,
    "GoodWeather" : 349
}, {
    "period" : 144,
    "YodacastPredictedVolume" : 239,
    "BadWeather" : 243,
    "GoodWeather" : 245
}, {
    "period" : 145,
    "YodacastPredictedVolume" : 144,
    "BadWeather" : 185,
    "GoodWeather" : 146
}, {
    "period" : 146,
    "YodacastPredictedVolume" : 51,
    "BadWeather" : 139,
    "GoodWeather" : 47
}, {
    "period" : 147,
    "YodacastPredictedVolume" : -41,
    "BadWeather" : 93,
    "GoodWeather" : -54
}, {
    "period" : 148,
    "YodacastPredictedVolume" : 67,
    "BadWeather" : 99,
    "GoodWeather" : 65
}, {
    "period" : 149,
    "YodacastPredictedVolume" : 67,
    "BadWeather" : 93,
    "GoodWeather" : 65
}, {
    "period" : 150,
    "YodacastPredictedVolume" : 77,
    "BadWeather" : 76,
    "GoodWeather" : 79
}, {
    "period" : 151,
    "YodacastPredictedVolume" : 83,
    "BadWeather" : 84,
    "GoodWeather" : 79
}, {
    "period" : 152,
    "YodacastPredictedVolume" : 51,
    "BadWeather" : 121,
    "GoodWeather" : 26
}, {
    "period" : 153,
    "YodacastPredictedVolume" : 43,
    "BadWeather" : 103,
    "GoodWeather" : 22
}, {
    "period" : 154,
    "YodacastPredictedVolume" : 29,
    "BadWeather" : 72,
    "GoodWeather" : 10
}, {
    "period" : 155,
    "YodacastPredictedVolume" : 7,
    "BadWeather" : 30,
    "GoodWeather" : -7
}, {
    "period" : 156,
    "YodacastPredictedVolume" : -15,
    "BadWeather" : -13,
    "GoodWeather" : -23
}, {
    "period" : 157,
    "YodacastPredictedVolume" : -24,
    "BadWeather" : -46,
    "GoodWeather" : -25
}, {
    "period" : 158,
    "YodacastPredictedVolume" : -7,
    "BadWeather" : -51,
    "GoodWeather" : -2
}, {
    "period" : 159,
    "YodacastPredictedVolume" : 46,
    "BadWeather" : -13,
    "GoodWeather" : 59
}, {
    "period" : 160,
    "YodacastPredictedVolume" : 142,
    "BadWeather" : 78,
    "GoodWeather" : 163
}, {
    "period" : 161,
    "YodacastPredictedVolume" : 287,
    "BadWeather" : 221,
    "GoodWeather" : 310
}, {
    "period" : 162,
    "YodacastPredictedVolume" : 475,
    "BadWeather" : 407,
    "GoodWeather" : 486
}, {
    "period" : 163,
    "YodacastPredictedVolume" : 680,
    "BadWeather" : 616,
    "GoodWeather" : 676
}, {
    "period" : 164,
    "YodacastPredictedVolume" : 877,
    "BadWeather" : 829,
    "GoodWeather" : 864
}, {
    "period" : 165,
    "YodacastPredictedVolume" : 1056,
    "BadWeather" : 1029,
    "GoodWeather" : 1034
}, {
    "period" : 166,
    "YodacastPredictedVolume" : 1204,
    "BadWeather" : 1204,
    "GoodWeather" : 1180
}, {
    "period" : 167,
    "YodacastPredictedVolume" : 1314,
    "BadWeather" : 1350,
    "GoodWeather" : 1296
}, {
    "period" : 168,
    "YodacastPredictedVolume" : 1388,
    "BadWeather" : 1465,
    "GoodWeather" : 1383
}, {
    "period" : 169,
    "YodacastPredictedVolume" : 1443,
    "BadWeather" : 1550,
    "GoodWeather" : 1443
}, {
    "period" : 170,
    "YodacastPredictedVolume" : 1482,
    "BadWeather" : 1607,
    "GoodWeather" : 1478
}, {
    "period" : 171,
    "YodacastPredictedVolume" : 1501,
    "BadWeather" : 1642,
    "GoodWeather" : 1493
}, {
    "period" : 172,
    "YodacastPredictedVolume" : 1387,
    "BadWeather" : 1540,
    "GoodWeather" : 1370
}, {
    "period" : 173,
    "YodacastPredictedVolume" : 1333,
    "BadWeather" : 1493,
    "GoodWeather" : 1308
}, {
    "period" : 174,
    "YodacastPredictedVolume" : 1307,
    "BadWeather" : 1473,
    "GoodWeather" : 1274
}, {
    "period" : 175,
    "YodacastPredictedVolume" : 1267,
    "BadWeather" : 1440,
    "GoodWeather" : 1229
}, {
    "period" : 176,
    "YodacastPredictedVolume" : 1432,
    "BadWeather" : 1611,
    "GoodWeather" : 1391
}, {
    "period" : 177,
    "YodacastPredictedVolume" : 1390,
    "BadWeather" : 1578,
    "GoodWeather" : 1348
}, {
    "period" : 178,
    "YodacastPredictedVolume" : 1348,
    "BadWeather" : 1541,
    "GoodWeather" : 1303
}, {
    "period" : 179,
    "YodacastPredictedVolume" : 1306,
    "BadWeather" : 1501,
    "GoodWeather" : 1260
}, {
    "period" : 180,
    "YodacastPredictedVolume" : 1263,
    "BadWeather" : 1457,
    "GoodWeather" : 1216
}, {
    "period" : 181,
    "YodacastPredictedVolume" : 1218,
    "BadWeather" : 1406,
    "GoodWeather" : 1172
}, {
    "period" : 182,
    "YodacastPredictedVolume" : 1168,
    "BadWeather" : 1346,
    "GoodWeather" : 1125
}, {
    "period" : 183,
    "YodacastPredictedVolume" : 1113,
    "BadWeather" : 1275,
    "GoodWeather" : 1072
}, {
    "period" : 184,
    "YodacastPredictedVolume" : 1050,
    "BadWeather" : 1190,
    "GoodWeather" : 1011
}, {
    "period" : 185,
    "YodacastPredictedVolume" : 975,
    "BadWeather" : 1089,
    "GoodWeather" : 939
}, {
    "period" : 186,
    "YodacastPredictedVolume" : 887,
    "BadWeather" : 971,
    "GoodWeather" : 854
}, {
    "period" : 187,
    "YodacastPredictedVolume" : 784,
    "BadWeather" : 837,
    "GoodWeather" : 758
}, {
    "period" : 188,
    "YodacastPredictedVolume" : 668,
    "BadWeather" : 691,
    "GoodWeather" : 653
}, {
    "period" : 189,
    "YodacastPredictedVolume" : 548,
    "BadWeather" : 541,
    "GoodWeather" : 543
}, {
    "period" : 190,
    "YodacastPredictedVolume" : 434,
    "BadWeather" : 401,
    "GoodWeather" : 437
}, {
    "period" : 191,
    "YodacastPredictedVolume" : 336,
    "BadWeather" : 290,
    "GoodWeather" : 343
}, {
    "period" : 192,
    "YodacastPredictedVolume" : 255,
    "BadWeather" : 220,
    "GoodWeather" : 268
}, {
    "period" : 193,
    "YodacastPredictedVolume" : 196,
    "BadWeather" : 192,
    "GoodWeather" : 211
}, {
    "period" : 194,
    "YodacastPredictedVolume" : 156,
    "BadWeather" : 192,
    "GoodWeather" : 166
}, {
    "period" : 195,
    "YodacastPredictedVolume" : 127,
    "BadWeather" : 206,
    "GoodWeather" : 132
}, {
    "period" : 196,
    "YodacastPredictedVolume" : 64,
    "BadWeather" : 78,
    "GoodWeather" : 80
}, {
    "period" : 197,
    "YodacastPredictedVolume" : 58,
    "BadWeather" : 50,
    "GoodWeather" : 62
}, {
    "period" : 198,
    "YodacastPredictedVolume" : 57,
    "BadWeather" : 62,
    "GoodWeather" : 47
}, {
    "period" : 199,
    "YodacastPredictedVolume" : -19,
    "BadWeather" : 32,
    "GoodWeather" : -34
}, {
    "period" : 200,
    "YodacastPredictedVolume" : -34,
    "BadWeather" : 25,
    "GoodWeather" : -100
}, {
    "period" : 201,
    "YodacastPredictedVolume" : -42,
    "BadWeather" : 19,
    "GoodWeather" : -99
}, {
    "period" : 202,
    "YodacastPredictedVolume" : -43,
    "BadWeather" : 9,
    "GoodWeather" : -99
}, {
    "period" : 203,
    "YodacastPredictedVolume" : -46,
    "BadWeather" : -3,
    "GoodWeather" : -95
}, {
    "period" : 204,
    "YodacastPredictedVolume" : -44,
    "BadWeather" : -13,
    "GoodWeather" : -84
}, {
    "period" : 205,
    "YodacastPredictedVolume" : -31,
    "BadWeather" : -13,
    "GoodWeather" : -60
}, {
    "period" : 206,
    "YodacastPredictedVolume" : 2,
    "BadWeather" : 5,
    "GoodWeather" : -15
}, {
    "period" : 207,
    "YodacastPredictedVolume" : 61,
    "BadWeather" : 52,
    "GoodWeather" : 57
}, {
    "period" : 208,
    "YodacastPredictedVolume" : 152,
    "BadWeather" : 135,
    "GoodWeather" : 160
}, {
    "period" : 209,
    "YodacastPredictedVolume" : 278,
    "BadWeather" : 257,
    "GoodWeather" : 294
}, {
    "period" : 210,
    "YodacastPredictedVolume" : 436,
    "BadWeather" : 414,
    "GoodWeather" : 450
}, {
    "period" : 211,
    "YodacastPredictedVolume" : 613,
    "BadWeather" : 596,
    "GoodWeather" : 620
}, {
    "period" : 212,
    "YodacastPredictedVolume" : 794,
    "BadWeather" : 788,
    "GoodWeather" : 790
}, {
    "period" : 213,
    "YodacastPredictedVolume" : 969,
    "BadWeather" : 976,
    "GoodWeather" : 951
}, {
    "period" : 214,
    "YodacastPredictedVolume" : 1126,
    "BadWeather" : 1150,
    "GoodWeather" : 1094
}, {
    "period" : 215,
    "YodacastPredictedVolume" : 1258,
    "BadWeather" : 1300,
    "GoodWeather" : 1215
}, {
    "period" : 216,
    "YodacastPredictedVolume" : 1363,
    "BadWeather" : 1423,
    "GoodWeather" : 1312
}, {
    "period" : 217,
    "YodacastPredictedVolume" : 1443,
    "BadWeather" : 1517,
    "GoodWeather" : 1384
}, {
    "period" : 218,
    "YodacastPredictedVolume" : 1499,
    "BadWeather" : 1584,
    "GoodWeather" : 1433
}, {
    "period" : 219,
    "YodacastPredictedVolume" : 1534,
    "BadWeather" : 1624,
    "GoodWeather" : 1459
}, {
    "period" : 220,
    "YodacastPredictedVolume" : 1420,
    "BadWeather" : 1513,
    "GoodWeather" : 1339
}, {
    "period" : 221,
    "YodacastPredictedVolume" : 1390,
    "BadWeather" : 1482,
    "GoodWeather" : 1304
}, {
    "period" : 222,
    "YodacastPredictedVolume" : 1365,
    "BadWeather" : 1455,
    "GoodWeather" : 1271
}, {
    "period" : 223,
    "YodacastPredictedVolume" : 1312,
    "BadWeather" : 1403,
    "GoodWeather" : 1213
}, {
    "period" : 224,
    "YodacastPredictedVolume" : 1461,
    "BadWeather" : 1555,
    "GoodWeather" : 1358
}, {
    "period" : 225,
    "YodacastPredictedVolume" : 1402,
    "BadWeather" : 1499,
    "GoodWeather" : 1303
}, {
    "period" : 226,
    "YodacastPredictedVolume" : 1335,
    "BadWeather" : 1436,
    "GoodWeather" : 1242
}, {
    "period" : 227,
    "YodacastPredictedVolume" : 1263,
    "BadWeather" : 1365,
    "GoodWeather" : 1176
}, {
    "period" : 228,
    "YodacastPredictedVolume" : 1187,
    "BadWeather" : 1289,
    "GoodWeather" : 1108
}, {
    "period" : 229,
    "YodacastPredictedVolume" : 1109,
    "BadWeather" : 1207,
    "GoodWeather" : 1037
}, {
    "period" : 230,
    "YodacastPredictedVolume" : 1029,
    "BadWeather" : 1119,
    "GoodWeather" : 964
}, {
    "period" : 231,
    "YodacastPredictedVolume" : 946,
    "BadWeather" : 1026,
    "GoodWeather" : 890
}, {
    "period" : 232,
    "YodacastPredictedVolume" : 859,
    "BadWeather" : 927,
    "GoodWeather" : 814
}, {
    "period" : 233,
    "YodacastPredictedVolume" : 770,
    "BadWeather" : 823,
    "GoodWeather" : 738
}, {
    "period" : 234,
    "YodacastPredictedVolume" : 678,
    "BadWeather" : 714,
    "GoodWeather" : 661
}, {
    "period" : 235,
    "YodacastPredictedVolume" : 586,
    "BadWeather" : 602,
    "GoodWeather" : 586
}, {
    "period" : 236,
    "YodacastPredictedVolume" : 496,
    "BadWeather" : 492,
    "GoodWeather" : 512
}, {
    "period" : 237,
    "YodacastPredictedVolume" : 409,
    "BadWeather" : 389,
    "GoodWeather" : 439
}, {
    "period" : 238,
    "YodacastPredictedVolume" : 328,
    "BadWeather" : 298,
    "GoodWeather" : 365
}, {
    "period" : 239,
    "YodacastPredictedVolume" : 250,
    "BadWeather" : 222,
    "GoodWeather" : 286
}, {
    "period" : 240,
    "YodacastPredictedVolume" : 172,
    "BadWeather" : 161,
    "GoodWeather" : 201
}, {
    "period" : 241,
    "YodacastPredictedVolume" : 99,
    "BadWeather" : 112,
    "GoodWeather" : 113
}, {
    "period" : 242,
    "YodacastPredictedVolume" : 38,
    "BadWeather" : 77,
    "GoodWeather" : 33
}, {
    "period" : 243,
    "YodacastPredictedVolume" : -2,
    "BadWeather" : 58,
    "GoodWeather" : -26
}, {
    "period" : 244,
    "YodacastPredictedVolume" : 48,
    "BadWeather" : 102,
    "GoodWeather" : 64
}, {
    "period" : 245,
    "YodacastPredictedVolume" : 54,
    "BadWeather" : 90,
    "GoodWeather" : 60
}, {
    "period" : 246,
    "YodacastPredictedVolume" : 42,
    "BadWeather" : 68,
    "GoodWeather" : 18
}, {
    "period" : 247,
    "YodacastPredictedVolume" : 26,
    "BadWeather" : 61,
    "GoodWeather" : -17
}, {
    "period" : 248,
    "YodacastPredictedVolume" : -7,
    "BadWeather" : 47,
    "GoodWeather" : -103
}, {
    "period" : 249,
    "YodacastPredictedVolume" : 6,
    "BadWeather" : 50,
    "GoodWeather" : -94
}, {
    "period" : 250,
    "YodacastPredictedVolume" : 10,
    "BadWeather" : 48,
    "GoodWeather" : -86
}, {
    "period" : 251,
    "YodacastPredictedVolume" : 9,
    "BadWeather" : 42,
    "GoodWeather" : -77
}, {
    "period" : 252,
    "YodacastPredictedVolume" : 9,
    "BadWeather" : 34,
    "GoodWeather" : -65
}, {
    "period" : 253,
    "YodacastPredictedVolume" : 13,
    "BadWeather" : 28,
    "GoodWeather" : -46
}, {
    "period" : 254,
    "YodacastPredictedVolume" : 25,
    "BadWeather" : 30,
    "GoodWeather" : -14
}, {
    "period" : 255,
    "YodacastPredictedVolume" : 51,
    "BadWeather" : 48,
    "GoodWeather" : 35
}, {
    "period" : 256,
    "YodacastPredictedVolume" : 95,
    "BadWeather" : 88,
    "GoodWeather" : 105
}, {
    "period" : 257,
    "YodacastPredictedVolume" : 164,
    "BadWeather" : 156,
    "GoodWeather" : 196
}, {
    "period" : 258,
    "YodacastPredictedVolume" : 263,
    "BadWeather" : 250,
    "GoodWeather" : 306
}, {
    "period" : 259,
    "YodacastPredictedVolume" : 383,
    "BadWeather" : 366,
    "GoodWeather" : 426
}, {
    "period" : 260,
    "YodacastPredictedVolume" : 510,
    "BadWeather" : 494,
    "GoodWeather" : 547
}, {
    "period" : 261,
    "YodacastPredictedVolume" : 635,
    "BadWeather" : 621,
    "GoodWeather" : 659
}, {
    "period" : 262,
    "YodacastPredictedVolume" : 747,
    "BadWeather" : 739,
    "GoodWeather" : 755
}, {
    "period" : 263,
    "YodacastPredictedVolume" : 838,
    "BadWeather" : 839,
    "GoodWeather" : 830
}, {
    "period" : 264,
    "YodacastPredictedVolume" : 904,
    "BadWeather" : 917,
    "GoodWeather" : 884
}, {
    "period" : 265,
    "YodacastPredictedVolume" : 949,
    "BadWeather" : 973,
    "GoodWeather" : 915
}, {
    "period" : 266,
    "YodacastPredictedVolume" : 976,
    "BadWeather" : 1006,
    "GoodWeather" : 926
}, {
    "period" : 267,
    "YodacastPredictedVolume" : 984,
    "BadWeather" : 1019,
    "GoodWeather" : 921
}, {
    "period" : 268,
    "YodacastPredictedVolume" : 960,
    "BadWeather" : 997,
    "GoodWeather" : 884
}, {
    "period" : 269,
    "YodacastPredictedVolume" : 935,
    "BadWeather" : 972,
    "GoodWeather" : 847
}, {
    "period" : 270,
    "YodacastPredictedVolume" : 904,
    "BadWeather" : 940,
    "GoodWeather" : 806
}, {
    "period" : 271,
    "YodacastPredictedVolume" : 862,
    "BadWeather" : 898,
    "GoodWeather" : 758
}, {
    "period" : 272,
    "YodacastPredictedVolume" : 847,
    "BadWeather" : 885,
    "GoodWeather" : 739
}, {
    "period" : 273,
    "YodacastPredictedVolume" : 800,
    "BadWeather" : 838,
    "GoodWeather" : 691
}, {
    "period" : 274,
    "YodacastPredictedVolume" : 752,
    "BadWeather" : 790,
    "GoodWeather" : 645
}, {
    "period" : 275,
    "YodacastPredictedVolume" : 705,
    "BadWeather" : 742,
    "GoodWeather" : 601
}, {
    "period" : 276,
    "YodacastPredictedVolume" : 661,
    "BadWeather" : 696,
    "GoodWeather" : 561
}, {
    "period" : 277,
    "YodacastPredictedVolume" : 619,
    "BadWeather" : 653,
    "GoodWeather" : 526
}, {
    "period" : 278,
    "YodacastPredictedVolume" : 580,
    "BadWeather" : 612,
    "GoodWeather" : 497
}, {
    "period" : 279,
    "YodacastPredictedVolume" : 544,
    "BadWeather" : 573,
    "GoodWeather" : 474
}, {
    "period" : 280,
    "YodacastPredictedVolume" : 509,
    "BadWeather" : 534,
    "GoodWeather" : 456
}, {
    "period" : 281,
    "YodacastPredictedVolume" : 475,
    "BadWeather" : 493,
    "GoodWeather" : 442
}, {
    "period" : 282,
    "YodacastPredictedVolume" : 437,
    "BadWeather" : 448,
    "GoodWeather" : 429
}, {
    "period" : 283,
    "YodacastPredictedVolume" : 396,
    "BadWeather" : 398,
    "GoodWeather" : 414
}, {
    "period" : 284,
    "YodacastPredictedVolume" : 350,
    "BadWeather" : 343,
    "GoodWeather" : 393
}, {
    "period" : 285,
    "YodacastPredictedVolume" : 299,
    "BadWeather" : 286,
    "GoodWeather" : 361
}, {
    "period" : 286,
    "YodacastPredictedVolume" : 245,
    "BadWeather" : 229,
    "GoodWeather" : 314
}, {
    "period" : 287,
    "YodacastPredictedVolume" : 191,
    "BadWeather" : 175,
    "GoodWeather" : 249
}, {
    "period" : 288,
    "YodacastPredictedVolume" : 143,
    "BadWeather" : 123,
    "GoodWeather" : 167
}, {
    "period" : 289,
    "YodacastPredictedVolume" : 94,
    "BadWeather" : 74,
    "GoodWeather" : 77
}, {
    "period" : 290,
    "YodacastPredictedVolume" : 43,
    "BadWeather" : 31,
    "GoodWeather" : -6
}, {
    "period" : 291,
    "YodacastPredictedVolume" : 2,
    "BadWeather" : 2,
    "GoodWeather" : -70
}, {
    "period" : 292,
    "YodacastPredictedVolume" : 64,
    "BadWeather" : 69,
    "GoodWeather" : 45
}, {
    "period" : 293,
    "YodacastPredictedVolume" : 46,
    "BadWeather" : 54,
    "GoodWeather" : 13
}, {
    "period" : 294,
    "YodacastPredictedVolume" : 57,
    "BadWeather" : 48,
    "GoodWeather" : 64
}, {
    "period" : 295,
    "YodacastPredictedVolume" : 12,
    "BadWeather" : 23,
    "GoodWeather" : -14
}, {
    "period" : 296,
    "YodacastPredictedVolume" : -21,
    "BadWeather" : -15,
    "GoodWeather" : -66
}, {
    "period" : 297,
    "YodacastPredictedVolume" : 2,
    "BadWeather" : 13,
    "GoodWeather" : -34
}, {
    "period" : 298,
    "YodacastPredictedVolume" : 13,
    "BadWeather" : 27,
    "GoodWeather" : -11
}, {
    "period" : 299,
    "YodacastPredictedVolume" : 17,
    "BadWeather" : 25,
    "GoodWeather" : 0
}, {
    "period" : 300,
    "YodacastPredictedVolume" : 9,
    "BadWeather" : 8,
    "GoodWeather" : 1
}, {
    "period" : 301,
    "YodacastPredictedVolume" : -9,
    "BadWeather" : -20,
    "GoodWeather" : -5
}, {
    "period" : 302,
    "YodacastPredictedVolume" : -31,
    "BadWeather" : -51,
    "GoodWeather" : -11
}, {
    "period" : 303,
    "YodacastPredictedVolume" : -49,
    "BadWeather" : -75,
    "GoodWeather" : -11
}, {
    "period" : 304,
    "YodacastPredictedVolume" : -55,
    "BadWeather" : -79,
    "GoodWeather" : 6
}, {
    "period" : 305,
    "YodacastPredictedVolume" : -35,
    "BadWeather" : -56,
    "GoodWeather" : 42
}, {
    "period" : 306,
    "YodacastPredictedVolume" : 23,
    "BadWeather" : -3,
    "GoodWeather" : 98
}, {
    "period" : 307,
    "YodacastPredictedVolume" : 108,
    "BadWeather" : 74,
    "GoodWeather" : 168
}, {
    "period" : 308,
    "YodacastPredictedVolume" : 200,
    "BadWeather" : 166,
    "GoodWeather" : 242
}, {
    "period" : 309,
    "YodacastPredictedVolume" : 288,
    "BadWeather" : 259,
    "GoodWeather" : 311
}, {
    "period" : 310,
    "YodacastPredictedVolume" : 357,
    "BadWeather" : 343,
    "GoodWeather" : 368
}, {
    "period" : 311,
    "YodacastPredictedVolume" : 401,
    "BadWeather" : 411,
    "GoodWeather" : 407
}, {
    "period" : 312,
    "YodacastPredictedVolume" : 417,
    "BadWeather" : 459,
    "GoodWeather" : 428
}, {
    "period" : 313,
    "YodacastPredictedVolume" : 425,
    "BadWeather" : 488,
    "GoodWeather" : 432
}, {
    "period" : 314,
    "YodacastPredictedVolume" : 432,
    "BadWeather" : 501,
    "GoodWeather" : 423
}, {
    "period" : 315,
    "YodacastPredictedVolume" : 433,
    "BadWeather" : 501,
    "GoodWeather" : 405
}, {
    "period" : 316,
    "YodacastPredictedVolume" : 431,
    "BadWeather" : 491,
    "GoodWeather" : 379
}, {
    "period" : 317,
    "YodacastPredictedVolume" : 426,
    "BadWeather" : 476,
    "GoodWeather" : 352
}, {
    "period" : 318,
    "YodacastPredictedVolume" : 420,
    "BadWeather" : 460,
    "GoodWeather" : 326
}, {
    "period" : 319,
    "YodacastPredictedVolume" : 408,
    "BadWeather" : 443,
    "GoodWeather" : 301
}, {
    "period" : 320,
    "YodacastPredictedVolume" : 403,
    "BadWeather" : 438,
    "GoodWeather" : 290
}, {
    "period" : 321,
    "YodacastPredictedVolume" : 398,
    "BadWeather" : 433,
    "GoodWeather" : 281
}, {
    "period" : 322,
    "YodacastPredictedVolume" : 401,
    "BadWeather" : 434,
    "GoodWeather" : 279
}, {
    "period" : 323,
    "YodacastPredictedVolume" : 409,
    "BadWeather" : 440,
    "GoodWeather" : 285
}, {
    "period" : 324,
    "YodacastPredictedVolume" : 422,
    "BadWeather" : 451,
    "GoodWeather" : 298
}, {
    "period" : 325,
    "YodacastPredictedVolume" : 436,
    "BadWeather" : 462,
    "GoodWeather" : 317
}, {
    "period" : 326,
    "YodacastPredictedVolume" : 448,
    "BadWeather" : 471,
    "GoodWeather" : 340
}, {
    "period" : 327,
    "YodacastPredictedVolume" : 454,
    "BadWeather" : 473,
    "GoodWeather" : 361
}, {
    "period" : 328,
    "YodacastPredictedVolume" : 451,
    "BadWeather" : 465,
    "GoodWeather" : 378
}, {
    "period" : 329,
    "YodacastPredictedVolume" : 435,
    "BadWeather" : 443,
    "GoodWeather" : 386
}, {
    "period" : 330,
    "YodacastPredictedVolume" : 404,
    "BadWeather" : 407,
    "GoodWeather" : 382
}, {
    "period" : 331,
    "YodacastPredictedVolume" : 360,
    "BadWeather" : 356,
    "GoodWeather" : 366
}, {
    "period" : 332,
    "YodacastPredictedVolume" : 306,
    "BadWeather" : 297,
    "GoodWeather" : 337
}, {
    "period" : 333,
    "YodacastPredictedVolume" : 248,
    "BadWeather" : 235,
    "GoodWeather" : 297
}, {
    "period" : 334,
    "YodacastPredictedVolume" : 190,
    "BadWeather" : 180,
    "GoodWeather" : 248
}, {
    "period" : 335,
    "YodacastPredictedVolume" : 143,
    "BadWeather" : 136,
    "GoodWeather" : 190
}, {
    "period" : 336,
    "YodacastPredictedVolume" : 111,
    "BadWeather" : 102,
    "GoodWeather" : 121
}, {
    "period" : 337,
    "YodacastPredictedVolume" : 80,
    "BadWeather" : 71,
    "GoodWeather" : 42
}, {
    "period" : 338,
    "YodacastPredictedVolume" : 45,
    "BadWeather" : 41,
    "GoodWeather" : -37
}, {
    "period" : 339,
    "YodacastPredictedVolume" : 10,
    "BadWeather" : 16,
    "GoodWeather" : -105
}, {
    "period" : 340,
    "YodacastPredictedVolume" : 28,
    "BadWeather" : 19,
    "GoodWeather" : 17
}, {
    "period" : 341,
    "YodacastPredictedVolume" : 30,
    "BadWeather" : 22,
    "GoodWeather" : 6
}, {
    "period" : 342,
    "YodacastPredictedVolume" : -6,
    "BadWeather" : -9,
    "GoodWeather" : -21
}, {
    "period" : 343,
    "YodacastPredictedVolume" : -11,
    "BadWeather" : -2,
    "GoodWeather" : -26
}, {
    "period" : 344,
    "YodacastPredictedVolume" : -109,
    "BadWeather" : -107,
    "GoodWeather" : -158
}, {
    "period" : 345,
    "YodacastPredictedVolume" : -68,
    "BadWeather" : -58,
    "GoodWeather" : -108
}, {
    "period" : 346,
    "YodacastPredictedVolume" : -29,
    "BadWeather" : -19,
    "GoodWeather" : -65
} ];

var footBallData = [ {
    "period" : 1,
    "YodacastPredictedVolume" : 73,
    "Football" : 73
}, {
    "period" : 2,
    "YodacastPredictedVolume" : 31,
    "Football" : 31
}, {
    "period" : 3,
    "YodacastPredictedVolume" : -6,
    "Football" : -6
}, {
    "period" : 4,
    "YodacastPredictedVolume" : 29,
    "Football" : 29
}, {
    "period" : 5,
    "YodacastPredictedVolume" : 22,
    "Football" : 22
}, {
    "period" : 6,
    "YodacastPredictedVolume" : -13,
    "Football" : -13
}, {
    "period" : 7,
    "YodacastPredictedVolume" : 1,
    "Football" : 1
}, {
    "period" : 8,
    "YodacastPredictedVolume" : -121,
    "Football" : -121
}, {
    "period" : 9,
    "YodacastPredictedVolume" : -79,
    "Football" : -79
}, {
    "period" : 10,
    "YodacastPredictedVolume" : -41,
    "Football" : -41
}, {
    "period" : 11,
    "YodacastPredictedVolume" : -8,
    "Football" : -8
}, {
    "period" : 12,
    "YodacastPredictedVolume" : 23,
    "Football" : 23
}, {
    "period" : 13,
    "YodacastPredictedVolume" : 56,
    "Football" : 56
}, {
    "period" : 14,
    "YodacastPredictedVolume" : 98,
    "Football" : 98
}, {
    "period" : 15,
    "YodacastPredictedVolume" : 160,
    "Football" : 160
}, {
    "period" : 16,
    "YodacastPredictedVolume" : 250,
    "Football" : 250
}, {
    "period" : 17,
    "YodacastPredictedVolume" : 375,
    "Football" : 375
}, {
    "period" : 18,
    "YodacastPredictedVolume" : 535,
    "Football" : 535
}, {
    "period" : 19,
    "YodacastPredictedVolume" : 716,
    "Football" : 716
}, {
    "period" : 20,
    "YodacastPredictedVolume" : 900,
    "Football" : 900
}, {
    "period" : 21,
    "YodacastPredictedVolume" : 1073,
    "Football" : 1073
}, {
    "period" : 22,
    "YodacastPredictedVolume" : 1222,
    "Football" : 1222
}, {
    "period" : 23,
    "YodacastPredictedVolume" : 1343,
    "Football" : 1343
}, {
    "period" : 24,
    "YodacastPredictedVolume" : 1432,
    "Football" : 1432
}, {
    "period" : 25,
    "YodacastPredictedVolume" : 1495,
    "Football" : 1495
}, {
    "period" : 26,
    "YodacastPredictedVolume" : 1538,
    "Football" : 1538
}, {
    "period" : 27,
    "YodacastPredictedVolume" : 1556,
    "Football" : 1556
}, {
    "period" : 28,
    "YodacastPredictedVolume" : 1522,
    "Football" : 1522
}, {
    "period" : 29,
    "YodacastPredictedVolume" : 1453,
    "Football" : 1453
}, {
    "period" : 30,
    "YodacastPredictedVolume" : 1406,
    "Football" : 1406
}, {
    "period" : 31,
    "YodacastPredictedVolume" : 1353,
    "Football" : 1353
}, {
    "period" : 32,
    "YodacastPredictedVolume" : 1476,
    "Football" : 1476
}, {
    "period" : 33,
    "YodacastPredictedVolume" : 1452,
    "Football" : 1452
}, {
    "period" : 34,
    "YodacastPredictedVolume" : 1427,
    "Football" : 1427
}, {
    "period" : 35,
    "YodacastPredictedVolume" : 1402,
    "Football" : 1402
}, {
    "period" : 36,
    "YodacastPredictedVolume" : 1375,
    "Football" : 1375
}, {
    "period" : 37,
    "YodacastPredictedVolume" : 1344,
    "Football" : 1344
}, {
    "period" : 38,
    "YodacastPredictedVolume" : 1306,
    "Football" : 1306
}, {
    "period" : 39,
    "YodacastPredictedVolume" : 1259,
    "Football" : 1259
}, {
    "period" : 40,
    "YodacastPredictedVolume" : 1197,
    "Football" : 1197
}, {
    "period" : 41,
    "YodacastPredictedVolume" : 1112,
    "Football" : 1112
}, {
    "period" : 42,
    "YodacastPredictedVolume" : 1007,
    "Football" : 1007
}, {
    "period" : 43,
    "YodacastPredictedVolume" : 877,
    "Football" : 877
}, {
    "period" : 44,
    "YodacastPredictedVolume" : 724,
    "Football" : 724
}, {
    "period" : 45,
    "YodacastPredictedVolume" : 570,
    "Football" : 570
}, {
    "period" : 46,
    "YodacastPredictedVolume" : 426,
    "Football" : 426
}, {
    "period" : 47,
    "YodacastPredictedVolume" : 302,
    "Football" : 302
}, {
    "period" : 48,
    "YodacastPredictedVolume" : 196,
    "Football" : 196
}, {
    "period" : 49,
    "YodacastPredictedVolume" : 110,
    "Football" : 110
}, {
    "period" : 50,
    "YodacastPredictedVolume" : 39,
    "Football" : 39
}, {
    "period" : 51,
    "YodacastPredictedVolume" : -18,
    "Football" : -18
}, {
    "period" : 52,
    "YodacastPredictedVolume" : 66,
    "Football" : 66
}, {
    "period" : 53,
    "YodacastPredictedVolume" : 30,
    "Football" : 30
}, {
    "period" : 54,
    "YodacastPredictedVolume" : 8,
    "Football" : 8
}, {
    "period" : 55,
    "YodacastPredictedVolume" : 3,
    "Football" : 3
}, {
    "period" : 56,
    "YodacastPredictedVolume" : -162,
    "Football" : -162
}, {
    "period" : 57,
    "YodacastPredictedVolume" : -81,
    "Football" : -81
}, {
    "period" : 58,
    "YodacastPredictedVolume" : -25,
    "Football" : -25
}, {
    "period" : 59,
    "YodacastPredictedVolume" : 11,
    "Football" : 11
}, {
    "period" : 60,
    "YodacastPredictedVolume" : 35,
    "Football" : 35
}, {
    "period" : 61,
    "YodacastPredictedVolume" : 55,
    "Football" : 55
}, {
    "period" : 62,
    "YodacastPredictedVolume" : 82,
    "Football" : 82
}, {
    "period" : 63,
    "YodacastPredictedVolume" : 129,
    "Football" : 129
}, {
    "period" : 64,
    "YodacastPredictedVolume" : 206,
    "Football" : 206
}, {
    "period" : 65,
    "YodacastPredictedVolume" : 321,
    "Football" : 321
}, {
    "period" : 66,
    "YodacastPredictedVolume" : 476,
    "Football" : 476
}, {
    "period" : 67,
    "YodacastPredictedVolume" : 654,
    "Football" : 654
}, {
    "period" : 68,
    "YodacastPredictedVolume" : 835,
    "Football" : 835
}, {
    "period" : 69,
    "YodacastPredictedVolume" : 1004,
    "Football" : 1004
}, {
    "period" : 70,
    "YodacastPredictedVolume" : 1146,
    "Football" : 1146
}, {
    "period" : 71,
    "YodacastPredictedVolume" : 1255,
    "Football" : 1255
}, {
    "period" : 72,
    "YodacastPredictedVolume" : 1331,
    "Football" : 1331
}, {
    "period" : 73,
    "YodacastPredictedVolume" : 1386,
    "Football" : 1386
}, {
    "period" : 74,
    "YodacastPredictedVolume" : 1425,
    "Football" : 1425
}, {
    "period" : 75,
    "YodacastPredictedVolume" : 1447,
    "Football" : 1447
}, {
    "period" : 76,
    "YodacastPredictedVolume" : 1447,
    "Football" : 1447
}, {
    "period" : 77,
    "YodacastPredictedVolume" : 1438,
    "Football" : 1438
}, {
    "period" : 78,
    "YodacastPredictedVolume" : 1425,
    "Football" : 1425
}, {
    "period" : 79,
    "YodacastPredictedVolume" : 1406,
    "Football" : 1406
}, {
    "period" : 80,
    "YodacastPredictedVolume" : 1402,
    "Football" : 1402
}, {
    "period" : 81,
    "YodacastPredictedVolume" : 1383,
    "Football" : 1383
}, {
    "period" : 82,
    "YodacastPredictedVolume" : 1367,
    "Football" : 1367
}, {
    "period" : 83,
    "YodacastPredictedVolume" : 1352,
    "Football" : 1352
}, {
    "period" : 84,
    "YodacastPredictedVolume" : 1336,
    "Football" : 1336
}, {
    "period" : 85,
    "YodacastPredictedVolume" : 1312,
    "Football" : 1312
}, {
    "period" : 86,
    "YodacastPredictedVolume" : 1278,
    "Football" : 1278
}, {
    "period" : 87,
    "YodacastPredictedVolume" : 1240,
    "Football" : 1240
}, {
    "period" : 88,
    "YodacastPredictedVolume" : 1191,
    "Football" : 1191
}, {
    "period" : 89,
    "YodacastPredictedVolume" : 1123,
    "Football" : 1123
}, {
    "period" : 90,
    "YodacastPredictedVolume" : 1036,
    "Football" : 1036
}, {
    "period" : 91,
    "YodacastPredictedVolume" : 922,
    "Football" : 922
}, {
    "period" : 92,
    "YodacastPredictedVolume" : 783,
    "Football" : 783
}, {
    "period" : 93,
    "YodacastPredictedVolume" : 635,
    "Football" : 635
}, {
    "period" : 94,
    "YodacastPredictedVolume" : 490,
    "Football" : 490
}, {
    "period" : 95,
    "YodacastPredictedVolume" : 356,
    "Football" : 356
}, {
    "period" : 96,
    "YodacastPredictedVolume" : 227,
    "Football" : 227
}, {
    "period" : 97,
    "YodacastPredictedVolume" : 107,
    "Football" : 107
}, {
    "period" : 98,
    "YodacastPredictedVolume" : -11,
    "Football" : -11
}, {
    "period" : 99,
    "YodacastPredictedVolume" : -137,
    "Football" : -137
}, {
    "period" : 100,
    "YodacastPredictedVolume" : 48,
    "Football" : 48
}, {
    "period" : 101,
    "YodacastPredictedVolume" : 20,
    "Football" : 20
}, {
    "period" : 102,
    "YodacastPredictedVolume" : 27,
    "Football" : 27
}, {
    "period" : 103,
    "YodacastPredictedVolume" : 81,
    "Football" : 81
}, {
    "period" : 104,
    "YodacastPredictedVolume" : -7,
    "Football" : -7
}, {
    "period" : 105,
    "YodacastPredictedVolume" : 33,
    "Football" : 33
}, {
    "period" : 106,
    "YodacastPredictedVolume" : 55,
    "Football" : 55
}, {
    "period" : 107,
    "YodacastPredictedVolume" : 66,
    "Football" : 66
}, {
    "period" : 108,
    "YodacastPredictedVolume" : 72,
    "Football" : 72
}, {
    "period" : 109,
    "YodacastPredictedVolume" : 82,
    "Football" : 82
}, {
    "period" : 110,
    "YodacastPredictedVolume" : 107,
    "Football" : 107
}, {
    "period" : 111,
    "YodacastPredictedVolume" : 161,
    "Football" : 161
}, {
    "period" : 112,
    "YodacastPredictedVolume" : 251,
    "Football" : 251
}, {
    "period" : 113,
    "YodacastPredictedVolume" : 381,
    "Football" : 381
}, {
    "period" : 114,
    "YodacastPredictedVolume" : 544,
    "Football" : 544
}, {
    "period" : 115,
    "YodacastPredictedVolume" : 724,
    "Football" : 724
}, {
    "period" : 116,
    "YodacastPredictedVolume" : 902,
    "Football" : 902
}, {
    "period" : 117,
    "YodacastPredictedVolume" : 1066,
    "Football" : 1066
}, {
    "period" : 118,
    "YodacastPredictedVolume" : 1205,
    "Football" : 1205
}, {
    "period" : 119,
    "YodacastPredictedVolume" : 1313,
    "Football" : 1313
}, {
    "period" : 120,
    "YodacastPredictedVolume" : 1391,
    "Football" : 1391
}, {
    "period" : 121,
    "YodacastPredictedVolume" : 1442,
    "Football" : 1442
}, {
    "period" : 122,
    "YodacastPredictedVolume" : 1471,
    "Football" : 1471
}, {
    "period" : 123,
    "YodacastPredictedVolume" : 1483,
    "Football" : 1483
}, {
    "period" : 124,
    "YodacastPredictedVolume" : 1412,
    "Football" : 1412
}, {
    "period" : 125,
    "YodacastPredictedVolume" : 1372,
    "Football" : 1372
}, {
    "period" : 126,
    "YodacastPredictedVolume" : 1346,
    "Football" : 1346
}, {
    "period" : 127,
    "YodacastPredictedVolume" : 1305,
    "Football" : 1305
}, {
    "period" : 128,
    "YodacastPredictedVolume" : 1393,
    "Football" : 1393
}, {
    "period" : 129,
    "YodacastPredictedVolume" : 1349,
    "Football" : 1349
}, {
    "period" : 130,
    "YodacastPredictedVolume" : 1304,
    "Football" : 1304
}, {
    "period" : 131,
    "YodacastPredictedVolume" : 1261,
    "Football" : 1261
}, {
    "period" : 132,
    "YodacastPredictedVolume" : 1222,
    "Football" : 1222
}, {
    "period" : 133,
    "YodacastPredictedVolume" : 1185,
    "Football" : 1185
}, {
    "period" : 134,
    "YodacastPredictedVolume" : 1149,
    "Football" : 1149
}, {
    "period" : 135,
    "YodacastPredictedVolume" : 1105,
    "Football" : 1105
}, {
    "period" : 136,
    "YodacastPredictedVolume" : 1050,
    "Football" : 1050
}, {
    "period" : 137,
    "YodacastPredictedVolume" : 983,
    "Football" : 983
}, {
    "period" : 138,
    "YodacastPredictedVolume" : 899,
    "Football" : 899
}, {
    "period" : 139,
    "YodacastPredictedVolume" : 802,
    "Football" : 802
}, {
    "period" : 140,
    "YodacastPredictedVolume" : 691,
    "Football" : 691
}, {
    "period" : 141,
    "YodacastPredictedVolume" : 573,
    "Football" : 573
}, {
    "period" : 142,
    "YodacastPredictedVolume" : 454,
    "Football" : 454
}, {
    "period" : 143,
    "YodacastPredictedVolume" : 342,
    "Football" : 342
}, {
    "period" : 144,
    "YodacastPredictedVolume" : 239,
    "Football" : 239
}, {
    "period" : 145,
    "YodacastPredictedVolume" : 144,
    "Football" : 144
}, {
    "period" : 146,
    "YodacastPredictedVolume" : 51,
    "Football" : 51
}, {
    "period" : 147,
    "YodacastPredictedVolume" : -41,
    "Football" : -41
}, {
    "period" : 148,
    "YodacastPredictedVolume" : 67,
    "Football" : 67
}, {
    "period" : 149,
    "YodacastPredictedVolume" : 67,
    "Football" : 67
}, {
    "period" : 150,
    "YodacastPredictedVolume" : 77,
    "Football" : 77
}, {
    "period" : 151,
    "YodacastPredictedVolume" : 83,
    "Football" : 83
}, {
    "period" : 152,
    "YodacastPredictedVolume" : 51,
    "Football" : 51
}, {
    "period" : 153,
    "YodacastPredictedVolume" : 43,
    "Football" : 43
}, {
    "period" : 154,
    "YodacastPredictedVolume" : 29,
    "Football" : 29
}, {
    "period" : 155,
    "YodacastPredictedVolume" : 7,
    "Football" : 7
}, {
    "period" : 156,
    "YodacastPredictedVolume" : -15,
    "Football" : -15
}, {
    "period" : 157,
    "YodacastPredictedVolume" : -24,
    "Football" : -24
}, {
    "period" : 158,
    "YodacastPredictedVolume" : -7,
    "Football" : -7
}, {
    "period" : 159,
    "YodacastPredictedVolume" : 46,
    "Football" : 46
}, {
    "period" : 160,
    "YodacastPredictedVolume" : 142,
    "Football" : 142
}, {
    "period" : 161,
    "YodacastPredictedVolume" : 287,
    "Football" : 287
}, {
    "period" : 162,
    "YodacastPredictedVolume" : 475,
    "Football" : 475
}, {
    "period" : 163,
    "YodacastPredictedVolume" : 680,
    "Football" : 680
}, {
    "period" : 164,
    "YodacastPredictedVolume" : 877,
    "Football" : 877
}, {
    "period" : 165,
    "YodacastPredictedVolume" : 1056,
    "Football" : 1056
}, {
    "period" : 166,
    "YodacastPredictedVolume" : 1204,
    "Football" : 1204
}, {
    "period" : 167,
    "YodacastPredictedVolume" : 1314,
    "Football" : 1314
}, {
    "period" : 168,
    "YodacastPredictedVolume" : 1388,
    "Football" : 1388
}, {
    "period" : 169,
    "YodacastPredictedVolume" : 1443,
    "Football" : 1443
}, {
    "period" : 170,
    "YodacastPredictedVolume" : 1482,
    "Football" : 1482
}, {
    "period" : 171,
    "YodacastPredictedVolume" : 1501,
    "Football" : 1501
}, {
    "period" : 172,
    "YodacastPredictedVolume" : 1387,
    "Football" : 1387
}, {
    "period" : 173,
    "YodacastPredictedVolume" : 1333,
    "Football" : 1333
}, {
    "period" : 174,
    "YodacastPredictedVolume" : 1307,
    "Football" : 1307
}, {
    "period" : 175,
    "YodacastPredictedVolume" : 1267,
    "Football" : 1267
}, {
    "period" : 176,
    "YodacastPredictedVolume" : 1432,
    "Football" : 1432
}, {
    "period" : 177,
    "YodacastPredictedVolume" : 1390,
    "Football" : 1390
}, {
    "period" : 178,
    "YodacastPredictedVolume" : 1348,
    "Football" : 1348
}, {
    "period" : 179,
    "YodacastPredictedVolume" : 1306,
    "Football" : 1306
}, {
    "period" : 180,
    "YodacastPredictedVolume" : 1263,
    "Football" : 1263
}, {
    "period" : 181,
    "YodacastPredictedVolume" : 1218,
    "Football" : 1218
}, {
    "period" : 182,
    "YodacastPredictedVolume" : 1168,
    "Football" : 1168
}, {
    "period" : 183,
    "YodacastPredictedVolume" : 1113,
    "Football" : 1113
}, {
    "period" : 184,
    "YodacastPredictedVolume" : 1050,
    "Football" : 1050
}, {
    "period" : 185,
    "YodacastPredictedVolume" : 975,
    "Football" : 975
}, {
    "period" : 186,
    "YodacastPredictedVolume" : 887,
    "Football" : 887
}, {
    "period" : 187,
    "YodacastPredictedVolume" : 784,
    "Football" : 784
}, {
    "period" : 188,
    "YodacastPredictedVolume" : 668,
    "Football" : 668
}, {
    "period" : 189,
    "YodacastPredictedVolume" : 548,
    "Football" : 548
}, {
    "period" : 190,
    "YodacastPredictedVolume" : 434,
    "Football" : 434
}, {
    "period" : 191,
    "YodacastPredictedVolume" : 336,
    "Football" : 336
}, {
    "period" : 192,
    "YodacastPredictedVolume" : 255,
    "Football" : 255
}, {
    "period" : 193,
    "YodacastPredictedVolume" : 196,
    "Football" : 196
}, {
    "period" : 194,
    "YodacastPredictedVolume" : 156,
    "Football" : 156
}, {
    "period" : 195,
    "YodacastPredictedVolume" : 127,
    "Football" : 127
}, {
    "period" : 196,
    "YodacastPredictedVolume" : 64,
    "Football" : 64
}, {
    "period" : 197,
    "YodacastPredictedVolume" : 58,
    "Football" : 58
}, {
    "period" : 198,
    "YodacastPredictedVolume" : 57,
    "Football" : 57
}, {
    "period" : 199,
    "YodacastPredictedVolume" : -19,
    "Football" : -19
}, {
    "period" : 200,
    "YodacastPredictedVolume" : -34,
    "Football" : -34
}, {
    "period" : 201,
    "YodacastPredictedVolume" : -42,
    "Football" : -42
}, {
    "period" : 202,
    "YodacastPredictedVolume" : -43,
    "Football" : -43
}, {
    "period" : 203,
    "YodacastPredictedVolume" : -46,
    "Football" : -46
}, {
    "period" : 204,
    "YodacastPredictedVolume" : -44,
    "Football" : -44
}, {
    "period" : 205,
    "YodacastPredictedVolume" : -31,
    "Football" : -31
}, {
    "period" : 206,
    "YodacastPredictedVolume" : 2,
    "Football" : 2
}, {
    "period" : 207,
    "YodacastPredictedVolume" : 61,
    "Football" : 61
}, {
    "period" : 208,
    "YodacastPredictedVolume" : 152,
    "Football" : 152
}, {
    "period" : 209,
    "YodacastPredictedVolume" : 278,
    "Football" : 278
}, {
    "period" : 210,
    "YodacastPredictedVolume" : 436,
    "Football" : 436
}, {
    "period" : 211,
    "YodacastPredictedVolume" : 613,
    "Football" : 613
}, {
    "period" : 212,
    "YodacastPredictedVolume" : 794,
    "Football" : 794
}, {
    "period" : 213,
    "YodacastPredictedVolume" : 969,
    "Football" : 969
}, {
    "period" : 214,
    "YodacastPredictedVolume" : 1126,
    "Football" : 1126
}, {
    "period" : 215,
    "YodacastPredictedVolume" : 1258,
    "Football" : 1258
}, {
    "period" : 216,
    "YodacastPredictedVolume" : 1363,
    "Football" : 1363
}, {
    "period" : 217,
    "YodacastPredictedVolume" : 1443,
    "Football" : 1443
}, {
    "period" : 218,
    "YodacastPredictedVolume" : 1499,
    "Football" : 1499
}, {
    "period" : 219,
    "YodacastPredictedVolume" : 1534,
    "Football" : 1534
}, {
    "period" : 220,
    "YodacastPredictedVolume" : 1420,
    "Football" : 1420
}, {
    "period" : 221,
    "YodacastPredictedVolume" : 1390,
    "Football" : 1390
}, {
    "period" : 222,
    "YodacastPredictedVolume" : 1365,
    "Football" : 1365
}, {
    "period" : 223,
    "YodacastPredictedVolume" : 1312,
    "Football" : 1312
}, {
    "period" : 224,
    "YodacastPredictedVolume" : 1461,
    "Football" : 1461
}, {
    "period" : 225,
    "YodacastPredictedVolume" : 1402,
    "Football" : 1402
}, {
    "period" : 226,
    "YodacastPredictedVolume" : 1335,
    "Football" : 1335
}, {
    "period" : 227,
    "YodacastPredictedVolume" : 1263,
    "Football" : 1263
}, {
    "period" : 228,
    "YodacastPredictedVolume" : 1187,
    "Football" : 1187
}, {
    "period" : 229,
    "YodacastPredictedVolume" : 1109,
    "Football" : 1109
}, {
    "period" : 230,
    "YodacastPredictedVolume" : 1029,
    "Football" : 1029
}, {
    "period" : 231,
    "YodacastPredictedVolume" : 946,
    "Football" : 946
}, {
    "period" : 232,
    "YodacastPredictedVolume" : 859,
    "Football" : 859
}, {
    "period" : 233,
    "YodacastPredictedVolume" : 770,
    "Football" : 770
}, {
    "period" : 234,
    "YodacastPredictedVolume" : 678,
    "Football" : 678
}, {
    "period" : 235,
    "YodacastPredictedVolume" : 586,
    "Football" : 586
}, {
    "period" : 236,
    "YodacastPredictedVolume" : 496,
    "Football" : 496
}, {
    "period" : 237,
    "YodacastPredictedVolume" : 409,
    "Football" : 409
}, {
    "period" : 238,
    "YodacastPredictedVolume" : 328,
    "Football" : 328
}, {
    "period" : 239,
    "YodacastPredictedVolume" : 250,
    "Football" : 250
}, {
    "period" : 240,
    "YodacastPredictedVolume" : 172,
    "Football" : 172
}, {
    "period" : 241,
    "YodacastPredictedVolume" : 99,
    "Football" : 99
}, {
    "period" : 242,
    "YodacastPredictedVolume" : 38,
    "Football" : 38
}, {
    "period" : 243,
    "YodacastPredictedVolume" : -2,
    "Football" : -2
}, {
    "period" : 244,
    "YodacastPredictedVolume" : 48,
    "Football" : 48
}, {
    "period" : 245,
    "YodacastPredictedVolume" : 54,
    "Football" : 54
}, {
    "period" : 246,
    "YodacastPredictedVolume" : 42,
    "Football" : 42
}, {
    "period" : 247,
    "YodacastPredictedVolume" : 26,
    "Football" : 26
}, {
    "period" : 248,
    "YodacastPredictedVolume" : -7,
    "Football" : -7
}, {
    "period" : 249,
    "YodacastPredictedVolume" : 6,
    "Football" : 6
}, {
    "period" : 250,
    "YodacastPredictedVolume" : 10,
    "Football" : 10
}, {
    "period" : 251,
    "YodacastPredictedVolume" : 9,
    "Football" : 9
}, {
    "period" : 252,
    "YodacastPredictedVolume" : 9,
    "Football" : 9
}, {
    "period" : 253,
    "YodacastPredictedVolume" : 13,
    "Football" : 13
}, {
    "period" : 254,
    "YodacastPredictedVolume" : 25,
    "Football" : 25
}, {
    "period" : 255,
    "YodacastPredictedVolume" : 51,
    "Football" : 51
}, {
    "period" : 256,
    "YodacastPredictedVolume" : 95,
    "Football" : 95
}, {
    "period" : 257,
    "YodacastPredictedVolume" : 164,
    "Football" : 164
}, {
    "period" : 258,
    "YodacastPredictedVolume" : 263,
    "Football" : 263
}, {
    "period" : 259,
    "YodacastPredictedVolume" : 383,
    "Football" : 383
}, {
    "period" : 260,
    "YodacastPredictedVolume" : 510,
    "Football" : 510
}, {
    "period" : 261,
    "YodacastPredictedVolume" : 635,
    "Football" : 635
}, {
    "period" : 262,
    "YodacastPredictedVolume" : 747,
    "Football" : 809
}, {
    "period" : 263,
    "YodacastPredictedVolume" : 838,
    "Football" : 891
}, {
    "period" : 264,
    "YodacastPredictedVolume" : 904,
    "Football" : 896
}, {
    "period" : 265,
    "YodacastPredictedVolume" : 949,
    "Football" : 832
}, {
    "period" : 266,
    "YodacastPredictedVolume" : 976,
    "Football" : 737
}, {
    "period" : 267,
    "YodacastPredictedVolume" : 984,
    "Football" : 712
}, {
    "period" : 268,
    "YodacastPredictedVolume" : 960,
    "Football" : 757
}, {
    "period" : 269,
    "YodacastPredictedVolume" : 935,
    "Football" : 797
}, {
    "period" : 270,
    "YodacastPredictedVolume" : 904,
    "Football" : 840
}, {
    "period" : 271,
    "YodacastPredictedVolume" : 862,
    "Football" : 862
}, {
    "period" : 272,
    "YodacastPredictedVolume" : 847,
    "Football" : 847
}, {
    "period" : 273,
    "YodacastPredictedVolume" : 800,
    "Football" : 800
}, {
    "period" : 274,
    "YodacastPredictedVolume" : 752,
    "Football" : 752
}, {
    "period" : 275,
    "YodacastPredictedVolume" : 705,
    "Football" : 705
}, {
    "period" : 276,
    "YodacastPredictedVolume" : 661,
    "Football" : 661
}, {
    "period" : 277,
    "YodacastPredictedVolume" : 619,
    "Football" : 619
}, {
    "period" : 278,
    "YodacastPredictedVolume" : 580,
    "Football" : 580
}, {
    "period" : 279,
    "YodacastPredictedVolume" : 544,
    "Football" : 544
}, {
    "period" : 280,
    "YodacastPredictedVolume" : 509,
    "Football" : 509
}, {
    "period" : 281,
    "YodacastPredictedVolume" : 475,
    "Football" : 475
}, {
    "period" : 282,
    "YodacastPredictedVolume" : 437,
    "Football" : 437
}, {
    "period" : 283,
    "YodacastPredictedVolume" : 396,
    "Football" : 396
}, {
    "period" : 284,
    "YodacastPredictedVolume" : 350,
    "Football" : 350
}, {
    "period" : 285,
    "YodacastPredictedVolume" : 299,
    "Football" : 299
}, {
    "period" : 286,
    "YodacastPredictedVolume" : 245,
    "Football" : 245
}, {
    "period" : 287,
    "YodacastPredictedVolume" : 191,
    "Football" : 191
}, {
    "period" : 288,
    "YodacastPredictedVolume" : 143,
    "Football" : 143
}, {
    "period" : 289,
    "YodacastPredictedVolume" : 94,
    "Football" : 94
}, {
    "period" : 290,
    "YodacastPredictedVolume" : 43,
    "Football" : 43
}, {
    "period" : 291,
    "YodacastPredictedVolume" : 2,
    "Football" : 2
}, {
    "period" : 292,
    "YodacastPredictedVolume" : 64,
    "Football" : 64
}, {
    "period" : 293,
    "YodacastPredictedVolume" : 46,
    "Football" : 46
}, {
    "period" : 294,
    "YodacastPredictedVolume" : 57,
    "Football" : 57
}, {
    "period" : 295,
    "YodacastPredictedVolume" : 12,
    "Football" : 12
}, {
    "period" : 296,
    "YodacastPredictedVolume" : -21,
    "Football" : -21
}, {
    "period" : 297,
    "YodacastPredictedVolume" : 2,
    "Football" : 2
}, {
    "period" : 298,
    "YodacastPredictedVolume" : 13,
    "Football" : 13
}, {
    "period" : 299,
    "YodacastPredictedVolume" : 17,
    "Football" : 17
}, {
    "period" : 300,
    "YodacastPredictedVolume" : 9,
    "Football" : 9
}, {
    "period" : 301,
    "YodacastPredictedVolume" : -9,
    "Football" : -9
}, {
    "period" : 302,
    "YodacastPredictedVolume" : -31,
    "Football" : -31
}, {
    "period" : 303,
    "YodacastPredictedVolume" : -49,
    "Football" : -49
}, {
    "period" : 304,
    "YodacastPredictedVolume" : -55,
    "Football" : -55
}, {
    "period" : 305,
    "YodacastPredictedVolume" : -35,
    "Football" : -35
}, {
    "period" : 306,
    "YodacastPredictedVolume" : 23,
    "Football" : 23
}, {
    "period" : 307,
    "YodacastPredictedVolume" : 108,
    "Football" : 108
}, {
    "period" : 308,
    "YodacastPredictedVolume" : 200,
    "Football" : 200
}, {
    "period" : 309,
    "YodacastPredictedVolume" : 288,
    "Football" : 288
}, {
    "period" : 310,
    "YodacastPredictedVolume" : 357,
    "Football" : 357
}, {
    "period" : 311,
    "YodacastPredictedVolume" : 401,
    "Football" : 401
}, {
    "period" : 312,
    "YodacastPredictedVolume" : 417,
    "Football" : 417
}, {
    "period" : 313,
    "YodacastPredictedVolume" : 425,
    "Football" : 425
}, {
    "period" : 314,
    "YodacastPredictedVolume" : 432,
    "Football" : 432
}, {
    "period" : 315,
    "YodacastPredictedVolume" : 433,
    "Football" : 433
}, {
    "period" : 316,
    "YodacastPredictedVolume" : 431,
    "Football" : 431
}, {
    "period" : 317,
    "YodacastPredictedVolume" : 426,
    "Football" : 426
}, {
    "period" : 318,
    "YodacastPredictedVolume" : 420,
    "Football" : 420
}, {
    "period" : 319,
    "YodacastPredictedVolume" : 408,
    "Football" : 408
}, {
    "period" : 320,
    "YodacastPredictedVolume" : 403,
    "Football" : 403
}, {
    "period" : 321,
    "YodacastPredictedVolume" : 398,
    "Football" : 398
}, {
    "period" : 322,
    "YodacastPredictedVolume" : 401,
    "Football" : 401
}, {
    "period" : 323,
    "YodacastPredictedVolume" : 409,
    "Football" : 409
}, {
    "period" : 324,
    "YodacastPredictedVolume" : 422,
    "Football" : 422
}, {
    "period" : 325,
    "YodacastPredictedVolume" : 436,
    "Football" : 436
}, {
    "period" : 326,
    "YodacastPredictedVolume" : 448,
    "Football" : 448
}, {
    "period" : 327,
    "YodacastPredictedVolume" : 454,
    "Football" : 454
}, {
    "period" : 328,
    "YodacastPredictedVolume" : 451,
    "Football" : 451
}, {
    "period" : 329,
    "YodacastPredictedVolume" : 435,
    "Football" : 435
}, {
    "period" : 330,
    "YodacastPredictedVolume" : 404,
    "Football" : 404
}, {
    "period" : 331,
    "YodacastPredictedVolume" : 360,
    "Football" : 360
}, {
    "period" : 332,
    "YodacastPredictedVolume" : 306,
    "Football" : 306
}, {
    "period" : 333,
    "YodacastPredictedVolume" : 248,
    "Football" : 248
}, {
    "period" : 334,
    "YodacastPredictedVolume" : 190,
    "Football" : 190
}, {
    "period" : 335,
    "YodacastPredictedVolume" : 143,
    "Football" : 143
}, {
    "period" : 336,
    "YodacastPredictedVolume" : 111,
    "Football" : 111
}, {
    "period" : 337,
    "YodacastPredictedVolume" : 80,
    "Football" : 80
}, {
    "period" : 338,
    "YodacastPredictedVolume" : 45,
    "Football" : 45
}, {
    "period" : 339,
    "YodacastPredictedVolume" : 10,
    "Football" : 10
}, {
    "period" : 340,
    "YodacastPredictedVolume" : 28,
    "Football" : 28
}, {
    "period" : 341,
    "YodacastPredictedVolume" : 30,
    "Football" : 30
}, {
    "period" : 342,
    "YodacastPredictedVolume" : -6,
    "Football" : -6
}, {
    "period" : 343,
    "YodacastPredictedVolume" : -11,
    "Football" : -11
}, {
    "period" : 344,
    "YodacastPredictedVolume" : -109,
    "Football" : -109
}, {
    "period" : 345,
    "YodacastPredictedVolume" : -68,
    "Football" : -68
}, {
    "period" : 346,
    "YodacastPredictedVolume" : -29,
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
        ykeys : [ 'HandledCallVolume', 'YodacastPredictedVolume' ],
        labels : [ 'HandledCallVolume', 'YodacastPredictedVolume' ],
        pointSize : 2,
        parseTime : false,
        hideHover : 'auto',
        resize : true,
        events: [18],
        xLabels:"day",
        xLabelFormat: function(d) {
            console.log(d);
            return d.toString()+'/06'; 
            },
        lineColors : [ '#43762A', '#696969' ]
    });
    
    callChart.options.labels.forEach(function(label, i){
        var legendItem = $('<span></span>').text(label).css('color', callChart.options.lineColors[i])
        $('#legend').append(legendItem)
    })
}

function drawWeatherYoda() {
    $("#morris-area-chart").empty();
    callChart = Morris.Line({
        element : 'morris-area-chart',
        data : weatherYodaData,
        xkey : 'period',
        ykeys : [ 'YodacastPredictedVolume', 'BadWeather', 'GoodWeather' ],
        labels : [ 'YodacastPredictedVolume', 'BadWeather', 'GoodWeather' ],
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
        ykeys : [ 'YodacastPredictedVolume', 'Football' ],
        labels : [ 'YodacastPredictedVolume', 'Football' ],
        pointSize : 2,
        parseTime : false,
        hideHover : 'auto',
        resize : true,
        lineColors : [ '#2B431F', '#761E74' ]
    });
}

var hot1 = {
    label : "Hotline 1212",
    value : 4567
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
    label : "Hotline 1212",
    value : 4567
} ]

function drawHotLine(hotLineData) {
    // Donut Chart
    hotLineChart = Morris.Donut({
        element : 'morris-donut-chart',
        data : hotLineData,
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
