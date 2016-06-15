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
    "Target" : 71,
    "Yodacast" : 73
}, {
    "period" : 2,
    "Target" : 51,
    "Yodacast" : 31
}, {
    "period" : 3,
    "Target" : 53,
    "Yodacast" : 6
}, {
    "period" : 4,
    "Target" : 30,
    "Yodacast" : 29
}, {
    "period" : 5,
    "Target" : 19,
    "Yodacast" : 22
}, {
    "period" : 6,
    "Target" : 12,
    "Yodacast" : 13
}, {
    "period" : 7,
    "Target" : 8,
    "Yodacast" : 1
}, {
    "period" : 8,
    "Target" : 10,
    "Yodacast" : 121
}, {
    "period" : 9,
    "Target" : 4,
    "Yodacast" : 79
}, {
    "period" : 10,
    "Target" : 5,
    "Yodacast" : 41
}, {
    "period" : 11,
    "Target" : 8,
    "Yodacast" : 8
}, {
    "period" : 12,
    "Target" : 5,
    "Yodacast" : 23
}, {
    "period" : 13,
    "Target" : 15,
    "Yodacast" : 56
}, {
    "period" : 14,
    "Target" : 30,
    "Yodacast" : 98
}, {
    "period" : 15,
    "Target" : 58,
    "Yodacast" : 160
}, {
    "period" : 16,
    "Target" : 120,
    "Yodacast" : 250
}, {
    "period" : 17,
    "Target" : 218,
    "Yodacast" : 375
}, {
    "period" : 18,
    "Target" : 372,
    "Yodacast" : 535
}, {
    "period" : 19,
    "Target" : 766,
    "Yodacast" : 716
}, {
    "period" : 20,
    "Target" : 974,
    "Yodacast" : 900
}, {
    "period" : 21,
    "Target" : 1223,
    "Yodacast" : 1073
}, {
    "period" : 22,
    "Target" : 1411,
    "Yodacast" : 1222
}, {
    "period" : 23,
    "Target" : 1586,
    "Yodacast" : 1343
}, {
    "period" : 24,
    "Target" : 1576,
    "Yodacast" : 1432
}, {
    "period" : 25,
    "Target" : 1563,
    "Yodacast" : 1495
}, {
    "period" : 26,
    "Target" : 1543,
    "Yodacast" : 1538
}, {
    "period" : 27,
    "Target" : 1543,
    "Yodacast" : 1556
}, {
    "period" : 28,
    "Target" : 1489,
    "Yodacast" : 1522
}, {
    "period" : 29,
    "Target" : 1506,
    "Yodacast" : 1453
}, {
    "period" : 30,
    "Target" : 1525,
    "Yodacast" : 1406
}, {
    "period" : 31,
    "Target" : 1534,
    "Yodacast" : 1353
}, {
    "period" : 32,
    "Target" : 1468,
    "Yodacast" : 1476
}, {
    "period" : 33,
    "Target" : 1422,
    "Yodacast" : 1452
}, {
    "period" : 34,
    "Target" : 1518,
    "Yodacast" : 1427
}, {
    "period" : 35,
    "Target" : 1572,
    "Yodacast" : 1402
}, {
    "period" : 36,
    "Target" : 1582,
    "Yodacast" : 1375
}, {
    "period" : 37,
    "Target" : 1724,
    "Yodacast" : 1344
}, {
    "period" : 38,
    "Target" : 1662,
    "Yodacast" : 1306
}, {
    "period" : 39,
    "Target" : 1401,
    "Yodacast" : 1259
}, {
    "period" : 40,
    "Target" : 1307,
    "Yodacast" : 1197
}, {
    "period" : 41,
    "Target" : 1223,
    "Yodacast" : 1112
}, {
    "period" : 42,
    "Target" : 1151,
    "Yodacast" : 1007
}, {
    "period" : 43,
    "Target" : 937,
    "Yodacast" : 877
}, {
    "period" : 44,
    "Target" : 831,
    "Yodacast" : 724
}, {
    "period" : 45,
    "Target" : 584,
    "Yodacast" : 570
}, {
    "period" : 46,
    "Target" : 472,
    "Yodacast" : 426
}, {
    "period" : 47,
    "Target" : 298,
    "Yodacast" : 302
}, {
    "period" : 48,
    "Target" : 266,
    "Yodacast" : 196
}, {
    "period" : 49,
    "Target" : 164,
    "Yodacast" : 110
}, {
    "period" : 50,
    "Target" : 93,
    "Yodacast" : 39
}, {
    "period" : 51,
    "Target" : 54,
    "Yodacast" : 18
}, {
    "period" : 52,
    "Target" : 42,
    "Yodacast" : 66
}, {
    "period" : 53,
    "Target" : 41,
    "Yodacast" : 30
}, {
    "period" : 54,
    "Target" : 19,
    "Yodacast" : 8
}, {
    "period" : 55,
    "Target" : 19,
    "Yodacast" : 3
}, {
    "period" : 56,
    "Target" : 20,
    "Yodacast" : 162
}, {
    "period" : 57,
    "Target" : 17,
    "Yodacast" : 81
}, {
    "period" : 58,
    "Target" : 14,
    "Yodacast" : 25
}, {
    "period" : 59,
    "Target" : 9,
    "Yodacast" : 11
}, {
    "period" : 60,
    "Target" : 11,
    "Yodacast" : 35
}, {
    "period" : 61,
    "Target" : 42,
    "Yodacast" : 55
}, {
    "period" : 62,
    "Target" : 31,
    "Yodacast" : 82
}, {
    "period" : 63,
    "Target" : 91,
    "Yodacast" : 129
}, {
    "period" : 64,
    "Target" : 143,
    "Yodacast" : 206
}, {
    "period" : 65,
    "Target" : 248,
    "Yodacast" : 321
}, {
    "period" : 66,
    "Target" : 455,
    "Yodacast" : 476
}, {
    "period" : 67,
    "Target" : 859,
    "Yodacast" : 654
}, {
    "period" : 68,
    "Target" : 859,
    "Yodacast" : 835
}, {
    "period" : 69,
    "Target" : 1196,
    "Yodacast" : 1004
}, {
    "period" : 70,
    "Target" : 1298,
    "Yodacast" : 1146
}, {
    "period" : 71,
    "Target" : 1400,
    "Yodacast" : 1255
}, {
    "period" : 72,
    "Target" : 1388,
    "Yodacast" : 1331
}, {
    "period" : 73,
    "Target" : 1418,
    "Yodacast" : 1386
}, {
    "period" : 74,
    "Target" : 1427,
    "Yodacast" : 1425
}, {
    "period" : 75,
    "Target" : 1399,
    "Yodacast" : 1447
}, {
    "period" : 76,
    "Target" : 1345,
    "Yodacast" : 1447
}, {
    "period" : 77,
    "Target" : 1373,
    "Yodacast" : 1438
}, {
    "period" : 78,
    "Target" : 1401,
    "Yodacast" : 1425
}, {
    "period" : 79,
    "Target" : 1189,
    "Yodacast" : 1406
}, {
    "period" : 80,
    "Target" : 1375,
    "Yodacast" : 1402
}, {
    "period" : 81,
    "Target" : 1282,
    "Yodacast" : 1383
}, {
    "period" : 82,
    "Target" : 1416,
    "Yodacast" : 1367
}, {
    "period" : 83,
    "Target" : 1417,
    "Yodacast" : 1352
}, {
    "period" : 84,
    "Target" : 1462,
    "Yodacast" : 1336
}, {
    "period" : 85,
    "Target" : 1417,
    "Yodacast" : 1312
}, {
    "period" : 86,
    "Target" : 1433,
    "Yodacast" : 1278
}, {
    "period" : 87,
    "Target" : 1278,
    "Yodacast" : 1240
}, {
    "period" : 88,
    "Target" : 1170,
    "Yodacast" : 1191
}, {
    "period" : 89,
    "Target" : 1025,
    "Yodacast" : 1123
}, {
    "period" : 90,
    "Target" : 1007,
    "Yodacast" : 1036
}, {
    "period" : 91,
    "Target" : 884,
    "Yodacast" : 922
}, {
    "period" : 92,
    "Target" : 740,
    "Yodacast" : 783
}, {
    "period" : 93,
    "Target" : 520,
    "Yodacast" : 635
}, {
    "period" : 94,
    "Target" : 378,
    "Yodacast" : 490
}, {
    "period" : 95,
    "Target" : 244,
    "Yodacast" : 356
}, {
    "period" : 96,
    "Target" : 199,
    "Yodacast" : 227
}, {
    "period" : 97,
    "Target" : 147,
    "Yodacast" : 107
}, {
    "period" : 98,
    "Target" : 93,
    "Yodacast" : 11
}, {
    "period" : 99,
    "Target" : 53,
    "Yodacast" : 137
}, {
    "period" : 100,
    "Target" : 37,
    "Yodacast" : 48
}, {
    "period" : 101,
    "Target" : 25,
    "Yodacast" : 20
}, {
    "period" : 102,
    "Target" : 21,
    "Yodacast" : 27
}, {
    "period" : 103,
    "Target" : 23,
    "Yodacast" : 81
}, {
    "period" : 104,
    "Target" : 6,
    "Yodacast" : 7
}, {
    "period" : 105,
    "Target" : 16,
    "Yodacast" : 33
}, {
    "period" : 106,
    "Target" : 12,
    "Yodacast" : 55
}, {
    "period" : 107,
    "Target" : 7,
    "Yodacast" : 66
}, {
    "period" : 108,
    "Target" : 15,
    "Yodacast" : 72
}, {
    "period" : 109,
    "Target" : 20,
    "Yodacast" : 82
}, {
    "period" : 110,
    "Target" : 26,
    "Yodacast" : 107
}, {
    "period" : 111,
    "Target" : 68,
    "Yodacast" : 161
}, {
    "period" : 112,
    "Target" : 120,
    "Yodacast" : 251
}, {
    "period" : 113,
    "Target" : 249,
    "Yodacast" : 381
}, {
    "period" : 114,
    "Target" : 394,
    "Yodacast" : 544
}, {
    "period" : 115,
    "Target" : 646,
    "Yodacast" : 724
}, {
    "period" : 116,
    "Target" : 749,
    "Yodacast" : 902
}, {
    "period" : 117,
    "Target" : 968,
    "Yodacast" : 1066
}, {
    "period" : 118,
    "Target" : 1238,
    "Yodacast" : 1205
}, {
    "period" : 119,
    "Target" : 1361,
    "Yodacast" : 1313
}, {
    "period" : 120,
    "Target" : 1373,
    "Yodacast" : 1391
}, {
    "period" : 121,
    "Target" : 1353,
    "Yodacast" : 1442
}, {
    "period" : 122,
    "Target" : 1311,
    "Yodacast" : 1471
}, {
    "period" : 123,
    "Target" : 1473,
    "Yodacast" : 1483
}, {
    "period" : 124,
    "Target" : 1341,
    "Yodacast" : 1412
}, {
    "period" : 125,
    "Target" : 1297,
    "Yodacast" : 1372
}, {
    "period" : 126,
    "Target" : 1219,
    "Yodacast" : 1346
}, {
    "period" : 127,
    "Target" : 1284,
    "Yodacast" : 1305
}, {
    "period" : 128,
    "Target" : 1314,
    "Yodacast" : 1393
}, {
    "period" : 129,
    "Target" : 1295,
    "Yodacast" : 1349
}, {
    "period" : 130,
    "Target" : 1205,
    "Yodacast" : 1304
}, {
    "period" : 131,
    "Target" : 1339,
    "Yodacast" : 1261
}, {
    "period" : 132,
    "Target" : 1346,
    "Yodacast" : 1222
}, {
    "period" : 133,
    "Target" : 1247,
    "Yodacast" : 1185
}, {
    "period" : 134,
    "Target" : 1267,
    "Yodacast" : 1149
}, {
    "period" : 135,
    "Target" : 1108,
    "Yodacast" : 1105
}, {
    "period" : 136,
    "Target" : 1091,
    "Yodacast" : 1050
}, {
    "period" : 137,
    "Target" : 960,
    "Yodacast" : 983
}, {
    "period" : 138,
    "Target" : 918,
    "Yodacast" : 899
}, {
    "period" : 139,
    "Target" : 761,
    "Yodacast" : 802
}, {
    "period" : 140,
    "Target" : 610,
    "Yodacast" : 691
}, {
    "period" : 141,
    "Target" : 487,
    "Yodacast" : 573
}, {
    "period" : 142,
    "Target" : 332,
    "Yodacast" : 454
}, {
    "period" : 143,
    "Target" : 269,
    "Yodacast" : 342
}, {
    "period" : 144,
    "Target" : 240,
    "Yodacast" : 239
}, {
    "period" : 145,
    "Target" : 140,
    "Yodacast" : 144
}, {
    "period" : 146,
    "Target" : 93,
    "Yodacast" : 51
}, {
    "period" : 147,
    "Target" : 64,
    "Yodacast" : 41
}, {
    "period" : 148,
    "Target" : 57,
    "Yodacast" : 67
}, {
    "period" : 149,
    "Target" : 32,
    "Yodacast" : 67
}, {
    "period" : 150,
    "Target" : 11,
    "Yodacast" : 77
}, {
    "period" : 151,
    "Target" : 16,
    "Yodacast" : 83
}, {
    "period" : 152,
    "Target" : 15,
    "Yodacast" : 51
}, {
    "period" : 153,
    "Target" : 9,
    "Yodacast" : 43
}, {
    "period" : 154,
    "Target" : 7,
    "Yodacast" : 29
}, {
    "period" : 155,
    "Target" : 12,
    "Yodacast" : 7
}, {
    "period" : 156,
    "Target" : 14,
    "Yodacast" : 15
}, {
    "period" : 157,
    "Target" : 31,
    "Yodacast" : 24
}, {
    "period" : 158,
    "Target" : 38,
    "Yodacast" : 7
}, {
    "period" : 159,
    "Target" : 64,
    "Yodacast" : 46
}, {
    "period" : 160,
    "Target" : 125,
    "Yodacast" : 142
}, {
    "period" : 161,
    "Target" : 246,
    "Yodacast" : 287
}, {
    "period" : 162,
    "Target" : 383,
    "Yodacast" : 475
}, {
    "period" : 163,
    "Target" : 636,
    "Yodacast" : 680
}, {
    "period" : 164,
    "Target" : 764,
    "Yodacast" : 877
}, {
    "period" : 165,
    "Target" : 1027,
    "Yodacast" : 1056
}, {
    "period" : 166,
    "Target" : 1146,
    "Yodacast" : 1204
}, {
    "period" : 167,
    "Target" : 1238,
    "Yodacast" : 1314
}, {
    "period" : 168,
    "Target" : 1286,
    "Yodacast" : 1388
}, {
    "period" : 169,
    "Target" : 1448,
    "Yodacast" : 1443
}, {
    "period" : 170,
    "Target" : 1328,
    "Yodacast" : 1482
}, {
    "period" : 171,
    "Target" : 1308,
    "Yodacast" : 1501
}, {
    "period" : 172,
    "Target" : 1232,
    "Yodacast" : 1387
}, {
    "period" : 173,
    "Target" : 1239,
    "Yodacast" : 1333
}, {
    "period" : 174,
    "Target" : 1256,
    "Yodacast" : 1307
}, {
    "period" : 175,
    "Target" : 1256,
    "Yodacast" : 1267
}, {
    "period" : 176,
    "Target" : 1240,
    "Yodacast" : 1432
}, {
    "period" : 177,
    "Target" : 1192,
    "Yodacast" : 1390
}, {
    "period" : 178,
    "Target" : 1195,
    "Yodacast" : 1348
}, {
    "period" : 179,
    "Target" : 1276,
    "Yodacast" : 1306
}, {
    "period" : 180,
    "Target" : 1349,
    "Yodacast" : 1263
}, {
    "period" : 181,
    "Target" : 1272,
    "Yodacast" : 1218
}, {
    "period" : 182,
    "Target" : 1298,
    "Yodacast" : 1168
}, {
    "period" : 183,
    "Target" : 1189,
    "Yodacast" : 1113
}, {
    "period" : 184,
    "Target" : 1000,
    "Yodacast" : 1050
}, {
    "period" : 185,
    "Target" : 922,
    "Yodacast" : 975
}, {
    "period" : 186,
    "Target" : 823,
    "Yodacast" : 887
}, {
    "period" : 187,
    "Target" : 757,
    "Yodacast" : 784
}, {
    "period" : 188,
    "Target" : 719,
    "Yodacast" : 668
}, {
    "period" : 189,
    "Target" : 543,
    "Yodacast" : 548
}, {
    "period" : 190,
    "Target" : 427,
    "Yodacast" : 434
}, {
    "period" : 191,
    "Target" : 282,
    "Yodacast" : 336
}, {
    "period" : 192,
    "Target" : 263,
    "Yodacast" : 255
}, {
    "period" : 193,
    "Target" : 176,
    "Yodacast" : 196
}, {
    "period" : 194,
    "Target" : 122,
    "Yodacast" : 156
}, {
    "period" : 195,
    "Target" : 80,
    "Yodacast" : 127
}, {
    "period" : 196,
    "Target" : 73,
    "Yodacast" : 64
}, {
    "period" : 197,
    "Target" : 46,
    "Yodacast" : 58
}, {
    "period" : 198,
    "Target" : 24,
    "Yodacast" : 57
}, {
    "period" : 199,
    "Target" : 17,
    "Yodacast" : 19
}, {
    "period" : 200,
    "Target" : 11,
    "Yodacast" : 34
}, {
    "period" : 201,
    "Target" : 12,
    "Yodacast" : 42
}, {
    "period" : 202,
    "Target" : 8,
    "Yodacast" : 43
}, {
    "period" : 203,
    "Target" : 22,
    "Yodacast" : 46
}, {
    "period" : 204,
    "Target" : 19,
    "Yodacast" : 44
}, {
    "period" : 205,
    "Target" : 28,
    "Yodacast" : 31
}, {
    "period" : 206,
    "Target" : 49,
    "Yodacast" : 2
}, {
    "period" : 207,
    "Target" : 80,
    "Yodacast" : 61
}, {
    "period" : 208,
    "Target" : 169,
    "Yodacast" : 152
}, {
    "period" : 209,
    "Target" : 348,
    "Yodacast" : 278
}, {
    "period" : 210,
    "Target" : 455,
    "Yodacast" : 436
}, {
    "period" : 211,
    "Target" : 879,
    "Yodacast" : 613
}, {
    "period" : 212,
    "Target" : 996,
    "Yodacast" : 794
}, {
    "period" : 213,
    "Target" : 1171,
    "Yodacast" : 969
}, {
    "period" : 214,
    "Target" : 1359,
    "Yodacast" : 1126
}, {
    "period" : 215,
    "Target" : 1461,
    "Yodacast" : 1258
}, {
    "period" : 216,
    "Target" : 1469,
    "Yodacast" : 1363
}, {
    "period" : 217,
    "Target" : 1484,
    "Yodacast" : 1443
}, {
    "period" : 218,
    "Target" : 1443,
    "Yodacast" : 1499
}, {
    "period" : 219,
    "Target" : 1490,
    "Yodacast" : 1534
}, {
    "period" : 220,
    "Target" : 1561,
    "Yodacast" : 1420
}, {
    "period" : 221,
    "Target" : 1450,
    "Yodacast" : 1390
}, {
    "period" : 222,
    "Target" : 1370,
    "Yodacast" : 1365
}, {
    "period" : 223,
    "Target" : 1314,
    "Yodacast" : 1312
}, {
    "period" : 224,
    "Target" : 1444,
    "Yodacast" : 1461
}, {
    "period" : 225,
    "Target" : 1365,
    "Yodacast" : 1402
}, {
    "period" : 226,
    "Target" : 1419,
    "Yodacast" : 1335
}, {
    "period" : 227,
    "Target" : 1312,
    "Yodacast" : 1263
}, {
    "period" : 228,
    "Target" : 1312,
    "Yodacast" : 1187
}, {
    "period" : 229,
    "Target" : 1221,
    "Yodacast" : 1109
}, {
    "period" : 230,
    "Target" : 1076,
    "Yodacast" : 1029
}, {
    "period" : 231,
    "Target" : 950,
    "Yodacast" : 946
}, {
    "period" : 232,
    "Target" : 849,
    "Yodacast" : 859
}, {
    "period" : 233,
    "Target" : 752,
    "Yodacast" : 770
}, {
    "period" : 234,
    "Target" : 717,
    "Yodacast" : 678
}, {
    "period" : 235,
    "Target" : 581,
    "Yodacast" : 586
}, {
    "period" : 236,
    "Target" : 485,
    "Yodacast" : 496
}, {
    "period" : 237,
    "Target" : 361,
    "Yodacast" : 409
}, {
    "period" : 238,
    "Target" : 318,
    "Yodacast" : 328
}, {
    "period" : 239,
    "Target" : 258,
    "Yodacast" : 250
}, {
    "period" : 240,
    "Target" : 242,
    "Yodacast" : 172
}, {
    "period" : 241,
    "Target" : 157,
    "Yodacast" : 99
}, {
    "period" : 242,
    "Target" : 86,
    "Yodacast" : 38
}, {
    "period" : 243,
    "Target" : 91,
    "Yodacast" : 2
}, {
    "period" : 244,
    "Target" : 54,
    "Yodacast" : 48
}, {
    "period" : 245,
    "Target" : 41,
    "Yodacast" : 54
}, {
    "period" : 246,
    "Target" : 31,
    "Yodacast" : 42
}, {
    "period" : 247,
    "Target" : 31,
    "Yodacast" : 26
}, {
    "period" : 248,
    "Target" : 21,
    "Yodacast" : 7
}, {
    "period" : 249,
    "Target" : 13,
    "Yodacast" : 6
}, {
    "period" : 250,
    "Target" : 12,
    "Yodacast" : 10
}, {
    "period" : 251,
    "Target" : 11,
    "Yodacast" : 9
}, {
    "period" : 252,
    "Target" : 16,
    "Yodacast" : 9
}, {
    "period" : 253,
    "Target" : 17,
    "Yodacast" : 13
}, {
    "period" : 254,
    "Target" : 19,
    "Yodacast" : 25
}, {
    "period" : 255,
    "Target" : 30,
    "Yodacast" : 51
}, {
    "period" : 256,
    "Target" : 59,
    "Yodacast" : 95
}, {
    "period" : 257,
    "Target" : 119,
    "Yodacast" : 164
}, {
    "period" : 258,
    "Target" : 197,
    "Yodacast" : 263
}, {
    "period" : 259,
    "Target" : 406,
    "Yodacast" : 383
}, {
    "period" : 260,
    "Target" : 507,
    "Yodacast" : 510
}, {
    "period" : 261,
    "Target" : 623,
    "Yodacast" : 635
}, {
    "period" : 262,
    "Target" : 724,
    "Yodacast" : 747
}, {
    "period" : 263,
    "Target" : 855,
    "Yodacast" : 838
}, {
    "period" : 264,
    "Target" : 917,
    "Yodacast" : 904
}, {
    "period" : 265,
    "Target" : 919,
    "Yodacast" : 949
}, {
    "period" : 266,
    "Target" : 979,
    "Yodacast" : 976
}, {
    "period" : 267,
    "Target" : 935,
    "Yodacast" : 984
}, {
    "period" : 268,
    "Target" : 947,
    "Yodacast" : 960
}, {
    "period" : 269,
    "Target" : 911,
    "Yodacast" : 935
}, {
    "period" : 270,
    "Target" : 844,
    "Yodacast" : 904
}, {
    "period" : 271,
    "Target" : 828,
    "Yodacast" : 862
}, {
    "period" : 272,
    "Target" : 815,
    "Yodacast" : 847
}, {
    "period" : 273,
    "Target" : 736,
    "Yodacast" : 800
}, {
    "period" : 274,
    "Target" : 735,
    "Yodacast" : 752
}, {
    "period" : 275,
    "Target" : 751,
    "Yodacast" : 705
}, {
    "period" : 276,
    "Target" : 765,
    "Yodacast" : 661
}, {
    "period" : 277,
    "Target" : 683,
    "Yodacast" : 619
}, {
    "period" : 278,
    "Target" : 700,
    "Yodacast" : 580
}, {
    "period" : 279,
    "Target" : 578,
    "Yodacast" : 544
}, {
    "period" : 280,
    "Target" : 505,
    "Yodacast" : 509
}, {
    "period" : 281,
    "Target" : 485,
    "Yodacast" : 475
}, {
    "period" : 282,
    "Target" : 424,
    "Yodacast" : 437
}, {
    "period" : 283,
    "Target" : 371,
    "Yodacast" : 396
}, {
    "period" : 284,
    "Target" : 300,
    "Yodacast" : 350
}, {
    "period" : 285,
    "Target" : 273,
    "Yodacast" : 299
}, {
    "period" : 286,
    "Target" : 218,
    "Yodacast" : 245
}, {
    "period" : 287,
    "Target" : 161,
    "Yodacast" : 191
}, {
    "period" : 288,
    "Target" : 136,
    "Yodacast" : 143
}, {
    "period" : 289,
    "Target" : 105,
    "Yodacast" : 94
}, {
    "period" : 290,
    "Target" : 70,
    "Yodacast" : 43
}, {
    "period" : 291,
    "Target" : 39,
    "Yodacast" : 2
}, {
    "period" : 292,
    "Target" : 39,
    "Yodacast" : 64
}, {
    "period" : 293,
    "Target" : 35,
    "Yodacast" : 46
}, {
    "period" : 294,
    "Target" : 31,
    "Yodacast" : 57
}, {
    "period" : 295,
    "Target" : 26,
    "Yodacast" : 12
}, {
    "period" : 296,
    "Target" : 19,
    "Yodacast" : 21
}, {
    "period" : 297,
    "Target" : 22,
    "Yodacast" : 2
}, {
    "period" : 298,
    "Target" : 20,
    "Yodacast" : 13
}, {
    "period" : 299,
    "Target" : 14,
    "Yodacast" : 17
}, {
    "period" : 300,
    "Target" : 5,
    "Yodacast" : 9
}, {
    "period" : 301,
    "Target" : 13,
    "Yodacast" : 9
}, {
    "period" : 302,
    "Target" : 9,
    "Yodacast" : 31
}, {
    "period" : 303,
    "Target" : 10,
    "Yodacast" : 49
}, {
    "period" : 304,
    "Target" : 36,
    "Yodacast" : 55
}, {
    "period" : 305,
    "Target" : 57,
    "Yodacast" : 35
}, {
    "period" : 306,
    "Target" : 73,
    "Yodacast" : 23
}, {
    "period" : 307,
    "Target" : 150,
    "Yodacast" : 108
}, {
    "period" : 308,
    "Target" : 201,
    "Yodacast" : 200
}, {
    "period" : 309,
    "Target" : 267,
    "Yodacast" : 288
}, {
    "period" : 310,
    "Target" : 335,
    "Yodacast" : 357
}, {
    "period" : 311,
    "Target" : 424,
    "Yodacast" : 401
}, {
    "period" : 312,
    "Target" : 522,
    "Yodacast" : 417
}, {
    "period" : 313,
    "Target" : 534,
    "Yodacast" : 425
}, {
    "period" : 314,
    "Target" : 538,
    "Yodacast" : 432
}, {
    "period" : 315,
    "Target" : 500,
    "Yodacast" : 433
}, {
    "period" : 316,
    "Target" : 537,
    "Yodacast" : 431
}, {
    "period" : 317,
    "Target" : 514,
    "Yodacast" : 426
}, {
    "period" : 318,
    "Target" : 486,
    "Yodacast" : 420
}, {
    "period" : 319,
    "Target" : 404,
    "Yodacast" : 408
}, {
    "period" : 320,
    "Target" : 406,
    "Yodacast" : 403
}, {
    "period" : 321,
    "Target" : 397,
    "Yodacast" : 398
}, {
    "period" : 322,
    "Target" : 393,
    "Yodacast" : 401
}, {
    "period" : 323,
    "Target" : 429,
    "Yodacast" : 409
}, {
    "period" : 324,
    "Target" : 417,
    "Yodacast" : 422
}, {
    "period" : 325,
    "Target" : 476,
    "Yodacast" : 436
}, {
    "period" : 326,
    "Target" : 444,
    "Yodacast" : 448
}, {
    "period" : 327,
    "Target" : 480,
    "Yodacast" : 454
}, {
    "period" : 328,
    "Target" : 477,
    "Yodacast" : 451
}, {
    "period" : 329,
    "Target" : 453,
    "Yodacast" : 435
}, {
    "period" : 330,
    "Target" : 491,
    "Yodacast" : 404
}, {
    "period" : 331,
    "Target" : 422,
    "Yodacast" : 360
}, {
    "period" : 332,
    "Target" : 373,
    "Yodacast" : 306
}, {
    "period" : 333,
    "Target" : 293,
    "Yodacast" : 248
}, {
    "period" : 334,
    "Target" : 247,
    "Yodacast" : 190
}, {
    "period" : 335,
    "Target" : 166,
    "Yodacast" : 143
}, {
    "period" : 336,
    "Target" : 122,
    "Yodacast" : 111
}, {
    "period" : 337,
    "Target" : 67,
    "Yodacast" : 80
}, {
    "period" : 338,
    "Target" : 52,
    "Yodacast" : 45
}, {
    "period" : 339,
    "Target" : 47,
    "Yodacast" : 10
}, {
    "period" : 340,
    "Target" : 28,
    "Yodacast" : 28
}, {
    "period" : 341,
    "Target" : 16,
    "Yodacast" : 30
}, {
    "period" : 342,
    "Target" : 16,
    "Yodacast" : 6
}, {
    "period" : 343,
    "Target" : 12,
    "Yodacast" : 11
}, {
    "period" : 344,
    "Target" : 9,
    "Yodacast" : 109
}, {
    "period" : 345,
    "Target" : 17,
    "Yodacast" : 68
}, {
    "period" : 346,
    "Target" : 14,
    "Yodacast" : 29
} ];
// Area Chart
function drawGraph() {

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

    callChart = Morris.Line({
        element : 'morris-area-chart',
        data : basicYodadata,
        xkey : 'period',
        ykeys : [ 'Target', 'Yodacast' ],
        labels : [ 'Target', 'Yodacast' ],
        pointSize : 2,
        parseTime : false,
        hideHover : 'auto',
        resize : true,
        lineColors : [ '#2B431F', '#C359C0' ]
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
