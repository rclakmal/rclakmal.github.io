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

var weatherYodaData = [ {
    "period" : 1,
    "Yodacast" : 73,
    "BadWeather" : 70,
    "GoodWeather" : 38
}, {
    "period" : 2,
    "Yodacast" : 31,
    "BadWeather" : 42,
    "GoodWeather" : -39
}, {
    "period" : 3,
    "Yodacast" : -6,
    "BadWeather" : 19,
    "GoodWeather" : -104
}, {
    "period" : 4,
    "Yodacast" : 29,
    "BadWeather" : 22,
    "GoodWeather" : 15
}, {
    "period" : 5,
    "Yodacast" : 22,
    "BadWeather" : 24,
    "GoodWeather" : 4
}, {
    "period" : 6,
    "Yodacast" : -13,
    "BadWeather" : -14,
    "GoodWeather" : -30
}, {
    "period" : 7,
    "Yodacast" : 1,
    "BadWeather" : -3,
    "GoodWeather" : -29
}, {
    "period" : 8,
    "Yodacast" : -121,
    "BadWeather" : -102,
    "GoodWeather" : -155
}, {
    "period" : 9,
    "Yodacast" : -79,
    "BadWeather" : -54,
    "GoodWeather" : -106
}, {
    "period" : 10,
    "Yodacast" : -41,
    "BadWeather" : -16,
    "GoodWeather" : -63
}, {
    "period" : 11,
    "Yodacast" : -8,
    "BadWeather" : 11,
    "GoodWeather" : -25
}, {
    "period" : 12,
    "Yodacast" : 23,
    "BadWeather" : 32,
    "GoodWeather" : 10
}, {
    "period" : 13,
    "Yodacast" : 56,
    "BadWeather" : 52,
    "GoodWeather" : 50
}, {
    "period" : 14,
    "Yodacast" : 98,
    "BadWeather" : 81,
    "GoodWeather" : 101
}, {
    "period" : 15,
    "Yodacast" : 160,
    "BadWeather" : 132,
    "GoodWeather" : 172
}, {
    "period" : 16,
    "Yodacast" : 250,
    "BadWeather" : 215,
    "GoodWeather" : 271
}, {
    "period" : 17,
    "Yodacast" : 375,
    "BadWeather" : 336,
    "GoodWeather" : 399
}, {
    "period" : 18,
    "Yodacast" : 535,
    "BadWeather" : 492,
    "GoodWeather" : 554
}, {
    "period" : 19,
    "Yodacast" : 716,
    "BadWeather" : 675,
    "GoodWeather" : 723
}, {
    "period" : 20,
    "Yodacast" : 900,
    "BadWeather" : 868,
    "GoodWeather" : 895
}, {
    "period" : 21,
    "Yodacast" : 1073,
    "BadWeather" : 1055,
    "GoodWeather" : 1055
}, {
    "period" : 22,
    "Yodacast" : 1222,
    "BadWeather" : 1224,
    "GoodWeather" : 1194
}, {
    "period" : 23,
    "Yodacast" : 1343,
    "BadWeather" : 1367,
    "GoodWeather" : 1306
}, {
    "period" : 24,
    "Yodacast" : 1432,
    "BadWeather" : 1480,
    "GoodWeather" : 1390
}, {
    "period" : 25,
    "Yodacast" : 1495,
    "BadWeather" : 1564,
    "GoodWeather" : 1448
}, {
    "period" : 26,
    "Yodacast" : 1538,
    "BadWeather" : 1621,
    "GoodWeather" : 1481
}, {
    "period" : 27,
    "Yodacast" : 1556,
    "BadWeather" : 1655,
    "GoodWeather" : 1496
}, {
    "period" : 28,
    "Yodacast" : 1522,
    "BadWeather" : 1635,
    "GoodWeather" : 1463
}, {
    "period" : 29,
    "Yodacast" : 1453,
    "BadWeather" : 1579,
    "GoodWeather" : 1398
}, {
    "period" : 30,
    "Yodacast" : 1406,
    "BadWeather" : 1545,
    "GoodWeather" : 1353
}, {
    "period" : 31,
    "Yodacast" : 1353,
    "BadWeather" : 1502,
    "GoodWeather" : 1298
}, {
    "period" : 32,
    "Yodacast" : 1476,
    "BadWeather" : 1630,
    "GoodWeather" : 1412
}, {
    "period" : 33,
    "Yodacast" : 1452,
    "BadWeather" : 1610,
    "GoodWeather" : 1384
}, {
    "period" : 34,
    "Yodacast" : 1427,
    "BadWeather" : 1587,
    "GoodWeather" : 1355
}, {
    "period" : 35,
    "Yodacast" : 1402,
    "BadWeather" : 1563,
    "GoodWeather" : 1327
}, {
    "period" : 36,
    "Yodacast" : 1375,
    "BadWeather" : 1534,
    "GoodWeather" : 1298
}, {
    "period" : 37,
    "Yodacast" : 1344,
    "BadWeather" : 1497,
    "GoodWeather" : 1266
}, {
    "period" : 38,
    "Yodacast" : 1306,
    "BadWeather" : 1447,
    "GoodWeather" : 1227
}, {
    "period" : 39,
    "Yodacast" : 1259,
    "BadWeather" : 1381,
    "GoodWeather" : 1178
}, {
    "period" : 40,
    "Yodacast" : 1197,
    "BadWeather" : 1295,
    "GoodWeather" : 1115
}, {
    "period" : 41,
    "Yodacast" : 1112,
    "BadWeather" : 1185,
    "GoodWeather" : 1033
}, {
    "period" : 42,
    "Yodacast" : 1007,
    "BadWeather" : 1052,
    "GoodWeather" : 933
}, {
    "period" : 43,
    "Yodacast" : 877,
    "BadWeather" : 898,
    "GoodWeather" : 816
}, {
    "period" : 44,
    "Yodacast" : 724,
    "BadWeather" : 732,
    "GoodWeather" : 686
}, {
    "period" : 45,
    "Yodacast" : 570,
    "BadWeather" : 565,
    "GoodWeather" : 550
}, {
    "period" : 46,
    "Yodacast" : 426,
    "BadWeather" : 413,
    "GoodWeather" : 418
}, {
    "period" : 47,
    "Yodacast" : 302,
    "BadWeather" : 289,
    "GoodWeather" : 294
}, {
    "period" : 48,
    "Yodacast" : 196,
    "BadWeather" : 197,
    "GoodWeather" : 182
}, {
    "period" : 49,
    "Yodacast" : 110,
    "BadWeather" : 132,
    "GoodWeather" : 81
}, {
    "period" : 50,
    "Yodacast" : 39,
    "BadWeather" : 84,
    "GoodWeather" : -7
}, {
    "period" : 51,
    "Yodacast" : -18,
    "BadWeather" : 47,
    "GoodWeather" : -80
}, {
    "period" : 52,
    "Yodacast" : 66,
    "BadWeather" : 76,
    "GoodWeather" : 52
}, {
    "period" : 53,
    "Yodacast" : 30,
    "BadWeather" : 40,
    "GoodWeather" : 10
}, {
    "period" : 54,
    "Yodacast" : 8,
    "BadWeather" : 9,
    "GoodWeather" : 3
}, {
    "period" : 55,
    "Yodacast" : 3,
    "BadWeather" : 15,
    "GoodWeather" : 4
}, {
    "period" : 56,
    "Yodacast" : -162,
    "BadWeather" : -115,
    "GoodWeather" : -224
}, {
    "period" : 57,
    "Yodacast" : -81,
    "BadWeather" : -50,
    "GoodWeather" : -141
}, {
    "period" : 58,
    "Yodacast" : -25,
    "BadWeather" : -5,
    "GoodWeather" : -75
}, {
    "period" : 59,
    "Yodacast" : 11,
    "BadWeather" : 21,
    "GoodWeather" : -22
}, {
    "period" : 60,
    "Yodacast" : 35,
    "BadWeather" : 32,
    "GoodWeather" : 21
}, {
    "period" : 61,
    "Yodacast" : 55,
    "BadWeather" : 39,
    "GoodWeather" : 63
}, {
    "period" : 62,
    "Yodacast" : 82,
    "BadWeather" : 54,
    "GoodWeather" : 113
}, {
    "period" : 63,
    "Yodacast" : 129,
    "BadWeather" : 91,
    "GoodWeather" : 183
}, {
    "period" : 64,
    "Yodacast" : 206,
    "BadWeather" : 164,
    "GoodWeather" : 280
}, {
    "period" : 65,
    "Yodacast" : 321,
    "BadWeather" : 276,
    "GoodWeather" : 407
}, {
    "period" : 66,
    "Yodacast" : 476,
    "BadWeather" : 425,
    "GoodWeather" : 559
}, {
    "period" : 67,
    "Yodacast" : 654,
    "BadWeather" : 599,
    "GoodWeather" : 724
}, {
    "period" : 68,
    "Yodacast" : 835,
    "BadWeather" : 782,
    "GoodWeather" : 889
}, {
    "period" : 69,
    "Yodacast" : 1004,
    "BadWeather" : 958,
    "GoodWeather" : 1041
}, {
    "period" : 70,
    "Yodacast" : 1146,
    "BadWeather" : 1115,
    "GoodWeather" : 1170
}, {
    "period" : 71,
    "Yodacast" : 1255,
    "BadWeather" : 1246,
    "GoodWeather" : 1273
}, {
    "period" : 72,
    "Yodacast" : 1331,
    "BadWeather" : 1348,
    "GoodWeather" : 1348
}, {
    "period" : 73,
    "Yodacast" : 1386,
    "BadWeather" : 1421,
    "GoodWeather" : 1396
}, {
    "period" : 74,
    "Yodacast" : 1425,
    "BadWeather" : 1470,
    "GoodWeather" : 1422
}, {
    "period" : 75,
    "Yodacast" : 1447,
    "BadWeather" : 1497,
    "GoodWeather" : 1429
}, {
    "period" : 76,
    "Yodacast" : 1447,
    "BadWeather" : 1497,
    "GoodWeather" : 1412
}, {
    "period" : 77,
    "Yodacast" : 1438,
    "BadWeather" : 1488,
    "GoodWeather" : 1387
}, {
    "period" : 78,
    "Yodacast" : 1425,
    "BadWeather" : 1474,
    "GoodWeather" : 1360
}, {
    "period" : 79,
    "Yodacast" : 1406,
    "BadWeather" : 1455,
    "GoodWeather" : 1330
}, {
    "period" : 80,
    "Yodacast" : 1402,
    "BadWeather" : 1454,
    "GoodWeather" : 1319
}, {
    "period" : 81,
    "Yodacast" : 1383,
    "BadWeather" : 1433,
    "GoodWeather" : 1288
}, {
    "period" : 82,
    "Yodacast" : 1367,
    "BadWeather" : 1412,
    "GoodWeather" : 1260
}, {
    "period" : 83,
    "Yodacast" : 1352,
    "BadWeather" : 1391,
    "GoodWeather" : 1234
}, {
    "period" : 84,
    "Yodacast" : 1336,
    "BadWeather" : 1368,
    "GoodWeather" : 1210
}, {
    "period" : 85,
    "Yodacast" : 1312,
    "BadWeather" : 1340,
    "GoodWeather" : 1186
}, {
    "period" : 86,
    "Yodacast" : 1278,
    "BadWeather" : 1305,
    "GoodWeather" : 1159
}, {
    "period" : 87,
    "Yodacast" : 1240,
    "BadWeather" : 1257,
    "GoodWeather" : 1125
}, {
    "period" : 88,
    "Yodacast" : 1191,
    "BadWeather" : 1194,
    "GoodWeather" : 1080
}, {
    "period" : 89,
    "Yodacast" : 1123,
    "BadWeather" : 1111,
    "GoodWeather" : 1020
}, {
    "period" : 90,
    "Yodacast" : 1036,
    "BadWeather" : 1008,
    "GoodWeather" : 942
}, {
    "period" : 91,
    "Yodacast" : 922,
    "BadWeather" : 885,
    "GoodWeather" : 847
}, {
    "period" : 92,
    "Yodacast" : 783,
    "BadWeather" : 746,
    "GoodWeather" : 735
}, {
    "period" : 93,
    "Yodacast" : 635,
    "BadWeather" : 600,
    "GoodWeather" : 611
}, {
    "period" : 94,
    "Yodacast" : 490,
    "BadWeather" : 458,
    "GoodWeather" : 480
}, {
    "period" : 95,
    "Yodacast" : 356,
    "BadWeather" : 332,
    "GoodWeather" : 347
}, {
    "period" : 96,
    "Yodacast" : 227,
    "BadWeather" : 227,
    "GoodWeather" : 212
}, {
    "period" : 97,
    "Yodacast" : 107,
    "BadWeather" : 135,
    "GoodWeather" : 72
}, {
    "period" : 98,
    "Yodacast" : -11,
    "BadWeather" : 43,
    "GoodWeather" : -75
}, {
    "period" : 99,
    "Yodacast" : -137,
    "BadWeather" : -61,
    "GoodWeather" : -228
}, {
    "period" : 100,
    "Yodacast" : 48,
    "BadWeather" : 63,
    "GoodWeather" : 5
}, {
    "period" : 101,
    "Yodacast" : 20,
    "BadWeather" : 48,
    "GoodWeather" : -12
}, {
    "period" : 102,
    "Yodacast" : 27,
    "BadWeather" : 32,
    "GoodWeather" : 11
}, {
    "period" : 103,
    "Yodacast" : 81,
    "BadWeather" : 70,
    "GoodWeather" : 46
}, {
    "period" : 104,
    "Yodacast" : -7,
    "BadWeather" : 74,
    "GoodWeather" : -33
}, {
    "period" : 105,
    "Yodacast" : 33,
    "BadWeather" : 97,
    "GoodWeather" : 7
}, {
    "period" : 106,
    "Yodacast" : 55,
    "BadWeather" : 103,
    "GoodWeather" : 34
}, {
    "period" : 107,
    "Yodacast" : 66,
    "BadWeather" : 94,
    "GoodWeather" : 51
}, {
    "period" : 108,
    "Yodacast" : 72,
    "BadWeather" : 77,
    "GoodWeather" : 63
}, {
    "period" : 109,
    "Yodacast" : 82,
    "BadWeather" : 61,
    "GoodWeather" : 80
}, {
    "period" : 110,
    "Yodacast" : 107,
    "BadWeather" : 63,
    "GoodWeather" : 113
}, {
    "period" : 111,
    "Yodacast" : 161,
    "BadWeather" : 97,
    "GoodWeather" : 173
}, {
    "period" : 112,
    "Yodacast" : 251,
    "BadWeather" : 175,
    "GoodWeather" : 270
}, {
    "period" : 113,
    "Yodacast" : 381,
    "BadWeather" : 299,
    "GoodWeather" : 402
}, {
    "period" : 114,
    "Yodacast" : 544,
    "BadWeather" : 463,
    "GoodWeather" : 561
}, {
    "period" : 115,
    "Yodacast" : 724,
    "BadWeather" : 652,
    "GoodWeather" : 735
}, {
    "period" : 116,
    "Yodacast" : 902,
    "BadWeather" : 847,
    "GoodWeather" : 907
}, {
    "period" : 117,
    "Yodacast" : 1066,
    "BadWeather" : 1032,
    "GoodWeather" : 1064
}, {
    "period" : 118,
    "Yodacast" : 1205,
    "BadWeather" : 1195,
    "GoodWeather" : 1196
}, {
    "period" : 119,
    "Yodacast" : 1313,
    "BadWeather" : 1329,
    "GoodWeather" : 1300
}, {
    "period" : 120,
    "Yodacast" : 1391,
    "BadWeather" : 1433,
    "GoodWeather" : 1375
}, {
    "period" : 121,
    "Yodacast" : 1442,
    "BadWeather" : 1507,
    "GoodWeather" : 1423
}, {
    "period" : 122,
    "Yodacast" : 1471,
    "BadWeather" : 1555,
    "GoodWeather" : 1447
}, {
    "period" : 123,
    "Yodacast" : 1483,
    "BadWeather" : 1580,
    "GoodWeather" : 1451
}, {
    "period" : 124,
    "Yodacast" : 1412,
    "BadWeather" : 1517,
    "GoodWeather" : 1367
}, {
    "period" : 125,
    "Yodacast" : 1372,
    "BadWeather" : 1483,
    "GoodWeather" : 1315
}, {
    "period" : 126,
    "Yodacast" : 1346,
    "BadWeather" : 1461,
    "GoodWeather" : 1279
}, {
    "period" : 127,
    "Yodacast" : 1305,
    "BadWeather" : 1425,
    "GoodWeather" : 1232
}, {
    "period" : 128,
    "Yodacast" : 1393,
    "BadWeather" : 1520,
    "GoodWeather" : 1321
}, {
    "period" : 129,
    "Yodacast" : 1349,
    "BadWeather" : 1490,
    "GoodWeather" : 1281
}, {
    "period" : 130,
    "Yodacast" : 1304,
    "BadWeather" : 1460,
    "GoodWeather" : 1243
}, {
    "period" : 131,
    "Yodacast" : 1261,
    "BadWeather" : 1429,
    "GoodWeather" : 1208
}, {
    "period" : 132,
    "Yodacast" : 1222,
    "BadWeather" : 1397,
    "GoodWeather" : 1176
}, {
    "period" : 133,
    "Yodacast" : 1185,
    "BadWeather" : 1359,
    "GoodWeather" : 1144
}, {
    "period" : 134,
    "Yodacast" : 1149,
    "BadWeather" : 1315,
    "GoodWeather" : 1110
}, {
    "period" : 135,
    "Yodacast" : 1105,
    "BadWeather" : 1259,
    "GoodWeather" : 1071
}, {
    "period" : 136,
    "Yodacast" : 1050,
    "BadWeather" : 1188,
    "GoodWeather" : 1022
}, {
    "period" : 137,
    "Yodacast" : 983,
    "BadWeather" : 1100,
    "GoodWeather" : 960
}, {
    "period" : 138,
    "Yodacast" : 899,
    "BadWeather" : 994,
    "GoodWeather" : 884
}, {
    "period" : 139,
    "Yodacast" : 802,
    "BadWeather" : 869,
    "GoodWeather" : 793
}, {
    "period" : 140,
    "Yodacast" : 691,
    "BadWeather" : 729,
    "GoodWeather" : 688
}, {
    "period" : 141,
    "Yodacast" : 573,
    "BadWeather" : 583,
    "GoodWeather" : 575
}, {
    "period" : 142,
    "Yodacast" : 454,
    "BadWeather" : 445,
    "GoodWeather" : 460
}, {
    "period" : 143,
    "Yodacast" : 342,
    "BadWeather" : 329,
    "GoodWeather" : 349
}, {
    "period" : 144,
    "Yodacast" : 239,
    "BadWeather" : 243,
    "GoodWeather" : 245
}, {
    "period" : 145,
    "Yodacast" : 144,
    "BadWeather" : 185,
    "GoodWeather" : 146
}, {
    "period" : 146,
    "Yodacast" : 51,
    "BadWeather" : 139,
    "GoodWeather" : 47
}, {
    "period" : 147,
    "Yodacast" : -41,
    "BadWeather" : 93,
    "GoodWeather" : -54
}, {
    "period" : 148,
    "Yodacast" : 67,
    "BadWeather" : 99,
    "GoodWeather" : 65
}, {
    "period" : 149,
    "Yodacast" : 67,
    "BadWeather" : 93,
    "GoodWeather" : 65
}, {
    "period" : 150,
    "Yodacast" : 77,
    "BadWeather" : 76,
    "GoodWeather" : 79
}, {
    "period" : 151,
    "Yodacast" : 83,
    "BadWeather" : 84,
    "GoodWeather" : 79
}, {
    "period" : 152,
    "Yodacast" : 51,
    "BadWeather" : 121,
    "GoodWeather" : 26
}, {
    "period" : 153,
    "Yodacast" : 43,
    "BadWeather" : 103,
    "GoodWeather" : 22
}, {
    "period" : 154,
    "Yodacast" : 29,
    "BadWeather" : 72,
    "GoodWeather" : 10
}, {
    "period" : 155,
    "Yodacast" : 7,
    "BadWeather" : 30,
    "GoodWeather" : -7
}, {
    "period" : 156,
    "Yodacast" : -15,
    "BadWeather" : -13,
    "GoodWeather" : -23
}, {
    "period" : 157,
    "Yodacast" : -24,
    "BadWeather" : -46,
    "GoodWeather" : -25
}, {
    "period" : 158,
    "Yodacast" : -7,
    "BadWeather" : -51,
    "GoodWeather" : -2
}, {
    "period" : 159,
    "Yodacast" : 46,
    "BadWeather" : -13,
    "GoodWeather" : 59
}, {
    "period" : 160,
    "Yodacast" : 142,
    "BadWeather" : 78,
    "GoodWeather" : 163
}, {
    "period" : 161,
    "Yodacast" : 287,
    "BadWeather" : 221,
    "GoodWeather" : 310
}, {
    "period" : 162,
    "Yodacast" : 475,
    "BadWeather" : 407,
    "GoodWeather" : 486
}, {
    "period" : 163,
    "Yodacast" : 680,
    "BadWeather" : 616,
    "GoodWeather" : 676
}, {
    "period" : 164,
    "Yodacast" : 877,
    "BadWeather" : 829,
    "GoodWeather" : 864
}, {
    "period" : 165,
    "Yodacast" : 1056,
    "BadWeather" : 1029,
    "GoodWeather" : 1034
}, {
    "period" : 166,
    "Yodacast" : 1204,
    "BadWeather" : 1204,
    "GoodWeather" : 1180
}, {
    "period" : 167,
    "Yodacast" : 1314,
    "BadWeather" : 1350,
    "GoodWeather" : 1296
}, {
    "period" : 168,
    "Yodacast" : 1388,
    "BadWeather" : 1465,
    "GoodWeather" : 1383
}, {
    "period" : 169,
    "Yodacast" : 1443,
    "BadWeather" : 1550,
    "GoodWeather" : 1443
}, {
    "period" : 170,
    "Yodacast" : 1482,
    "BadWeather" : 1607,
    "GoodWeather" : 1478
}, {
    "period" : 171,
    "Yodacast" : 1501,
    "BadWeather" : 1642,
    "GoodWeather" : 1493
}, {
    "period" : 172,
    "Yodacast" : 1387,
    "BadWeather" : 1540,
    "GoodWeather" : 1370
}, {
    "period" : 173,
    "Yodacast" : 1333,
    "BadWeather" : 1493,
    "GoodWeather" : 1308
}, {
    "period" : 174,
    "Yodacast" : 1307,
    "BadWeather" : 1473,
    "GoodWeather" : 1274
}, {
    "period" : 175,
    "Yodacast" : 1267,
    "BadWeather" : 1440,
    "GoodWeather" : 1229
}, {
    "period" : 176,
    "Yodacast" : 1432,
    "BadWeather" : 1611,
    "GoodWeather" : 1391
}, {
    "period" : 177,
    "Yodacast" : 1390,
    "BadWeather" : 1578,
    "GoodWeather" : 1348
}, {
    "period" : 178,
    "Yodacast" : 1348,
    "BadWeather" : 1541,
    "GoodWeather" : 1303
}, {
    "period" : 179,
    "Yodacast" : 1306,
    "BadWeather" : 1501,
    "GoodWeather" : 1260
}, {
    "period" : 180,
    "Yodacast" : 1263,
    "BadWeather" : 1457,
    "GoodWeather" : 1216
}, {
    "period" : 181,
    "Yodacast" : 1218,
    "BadWeather" : 1406,
    "GoodWeather" : 1172
}, {
    "period" : 182,
    "Yodacast" : 1168,
    "BadWeather" : 1346,
    "GoodWeather" : 1125
}, {
    "period" : 183,
    "Yodacast" : 1113,
    "BadWeather" : 1275,
    "GoodWeather" : 1072
}, {
    "period" : 184,
    "Yodacast" : 1050,
    "BadWeather" : 1190,
    "GoodWeather" : 1011
}, {
    "period" : 185,
    "Yodacast" : 975,
    "BadWeather" : 1089,
    "GoodWeather" : 939
}, {
    "period" : 186,
    "Yodacast" : 887,
    "BadWeather" : 971,
    "GoodWeather" : 854
}, {
    "period" : 187,
    "Yodacast" : 784,
    "BadWeather" : 837,
    "GoodWeather" : 758
}, {
    "period" : 188,
    "Yodacast" : 668,
    "BadWeather" : 691,
    "GoodWeather" : 653
}, {
    "period" : 189,
    "Yodacast" : 548,
    "BadWeather" : 541,
    "GoodWeather" : 543
}, {
    "period" : 190,
    "Yodacast" : 434,
    "BadWeather" : 401,
    "GoodWeather" : 437
}, {
    "period" : 191,
    "Yodacast" : 336,
    "BadWeather" : 290,
    "GoodWeather" : 343
}, {
    "period" : 192,
    "Yodacast" : 255,
    "BadWeather" : 220,
    "GoodWeather" : 268
}, {
    "period" : 193,
    "Yodacast" : 196,
    "BadWeather" : 192,
    "GoodWeather" : 211
}, {
    "period" : 194,
    "Yodacast" : 156,
    "BadWeather" : 192,
    "GoodWeather" : 166
}, {
    "period" : 195,
    "Yodacast" : 127,
    "BadWeather" : 206,
    "GoodWeather" : 132
}, {
    "period" : 196,
    "Yodacast" : 64,
    "BadWeather" : 78,
    "GoodWeather" : 80
}, {
    "period" : 197,
    "Yodacast" : 58,
    "BadWeather" : 50,
    "GoodWeather" : 62
}, {
    "period" : 198,
    "Yodacast" : 57,
    "BadWeather" : 62,
    "GoodWeather" : 47
}, {
    "period" : 199,
    "Yodacast" : -19,
    "BadWeather" : 32,
    "GoodWeather" : -34
}, {
    "period" : 200,
    "Yodacast" : -34,
    "BadWeather" : 25,
    "GoodWeather" : -100
}, {
    "period" : 201,
    "Yodacast" : -42,
    "BadWeather" : 19,
    "GoodWeather" : -99
}, {
    "period" : 202,
    "Yodacast" : -43,
    "BadWeather" : 9,
    "GoodWeather" : -99
}, {
    "period" : 203,
    "Yodacast" : -46,
    "BadWeather" : -3,
    "GoodWeather" : -95
}, {
    "period" : 204,
    "Yodacast" : -44,
    "BadWeather" : -13,
    "GoodWeather" : -84
}, {
    "period" : 205,
    "Yodacast" : -31,
    "BadWeather" : -13,
    "GoodWeather" : -60
}, {
    "period" : 206,
    "Yodacast" : 2,
    "BadWeather" : 5,
    "GoodWeather" : -15
}, {
    "period" : 207,
    "Yodacast" : 61,
    "BadWeather" : 52,
    "GoodWeather" : 57
}, {
    "period" : 208,
    "Yodacast" : 152,
    "BadWeather" : 135,
    "GoodWeather" : 160
}, {
    "period" : 209,
    "Yodacast" : 278,
    "BadWeather" : 257,
    "GoodWeather" : 294
}, {
    "period" : 210,
    "Yodacast" : 436,
    "BadWeather" : 414,
    "GoodWeather" : 450
}, {
    "period" : 211,
    "Yodacast" : 613,
    "BadWeather" : 596,
    "GoodWeather" : 620
}, {
    "period" : 212,
    "Yodacast" : 794,
    "BadWeather" : 788,
    "GoodWeather" : 790
}, {
    "period" : 213,
    "Yodacast" : 969,
    "BadWeather" : 976,
    "GoodWeather" : 951
}, {
    "period" : 214,
    "Yodacast" : 1126,
    "BadWeather" : 1150,
    "GoodWeather" : 1094
}, {
    "period" : 215,
    "Yodacast" : 1258,
    "BadWeather" : 1300,
    "GoodWeather" : 1215
}, {
    "period" : 216,
    "Yodacast" : 1363,
    "BadWeather" : 1423,
    "GoodWeather" : 1312
}, {
    "period" : 217,
    "Yodacast" : 1443,
    "BadWeather" : 1517,
    "GoodWeather" : 1384
}, {
    "period" : 218,
    "Yodacast" : 1499,
    "BadWeather" : 1584,
    "GoodWeather" : 1433
}, {
    "period" : 219,
    "Yodacast" : 1534,
    "BadWeather" : 1624,
    "GoodWeather" : 1459
}, {
    "period" : 220,
    "Yodacast" : 1420,
    "BadWeather" : 1513,
    "GoodWeather" : 1339
}, {
    "period" : 221,
    "Yodacast" : 1390,
    "BadWeather" : 1482,
    "GoodWeather" : 1304
}, {
    "period" : 222,
    "Yodacast" : 1365,
    "BadWeather" : 1455,
    "GoodWeather" : 1271
}, {
    "period" : 223,
    "Yodacast" : 1312,
    "BadWeather" : 1403,
    "GoodWeather" : 1213
}, {
    "period" : 224,
    "Yodacast" : 1461,
    "BadWeather" : 1555,
    "GoodWeather" : 1358
}, {
    "period" : 225,
    "Yodacast" : 1402,
    "BadWeather" : 1499,
    "GoodWeather" : 1303
}, {
    "period" : 226,
    "Yodacast" : 1335,
    "BadWeather" : 1436,
    "GoodWeather" : 1242
}, {
    "period" : 227,
    "Yodacast" : 1263,
    "BadWeather" : 1365,
    "GoodWeather" : 1176
}, {
    "period" : 228,
    "Yodacast" : 1187,
    "BadWeather" : 1289,
    "GoodWeather" : 1108
}, {
    "period" : 229,
    "Yodacast" : 1109,
    "BadWeather" : 1207,
    "GoodWeather" : 1037
}, {
    "period" : 230,
    "Yodacast" : 1029,
    "BadWeather" : 1119,
    "GoodWeather" : 964
}, {
    "period" : 231,
    "Yodacast" : 946,
    "BadWeather" : 1026,
    "GoodWeather" : 890
}, {
    "period" : 232,
    "Yodacast" : 859,
    "BadWeather" : 927,
    "GoodWeather" : 814
}, {
    "period" : 233,
    "Yodacast" : 770,
    "BadWeather" : 823,
    "GoodWeather" : 738
}, {
    "period" : 234,
    "Yodacast" : 678,
    "BadWeather" : 714,
    "GoodWeather" : 661
}, {
    "period" : 235,
    "Yodacast" : 586,
    "BadWeather" : 602,
    "GoodWeather" : 586
}, {
    "period" : 236,
    "Yodacast" : 496,
    "BadWeather" : 492,
    "GoodWeather" : 512
}, {
    "period" : 237,
    "Yodacast" : 409,
    "BadWeather" : 389,
    "GoodWeather" : 439
}, {
    "period" : 238,
    "Yodacast" : 328,
    "BadWeather" : 298,
    "GoodWeather" : 365
}, {
    "period" : 239,
    "Yodacast" : 250,
    "BadWeather" : 222,
    "GoodWeather" : 286
}, {
    "period" : 240,
    "Yodacast" : 172,
    "BadWeather" : 161,
    "GoodWeather" : 201
}, {
    "period" : 241,
    "Yodacast" : 99,
    "BadWeather" : 112,
    "GoodWeather" : 113
}, {
    "period" : 242,
    "Yodacast" : 38,
    "BadWeather" : 77,
    "GoodWeather" : 33
}, {
    "period" : 243,
    "Yodacast" : -2,
    "BadWeather" : 58,
    "GoodWeather" : -26
}, {
    "period" : 244,
    "Yodacast" : 48,
    "BadWeather" : 102,
    "GoodWeather" : 64
}, {
    "period" : 245,
    "Yodacast" : 54,
    "BadWeather" : 90,
    "GoodWeather" : 60
}, {
    "period" : 246,
    "Yodacast" : 42,
    "BadWeather" : 68,
    "GoodWeather" : 18
}, {
    "period" : 247,
    "Yodacast" : 26,
    "BadWeather" : 61,
    "GoodWeather" : -17
}, {
    "period" : 248,
    "Yodacast" : -7,
    "BadWeather" : 47,
    "GoodWeather" : -103
}, {
    "period" : 249,
    "Yodacast" : 6,
    "BadWeather" : 50,
    "GoodWeather" : -94
}, {
    "period" : 250,
    "Yodacast" : 10,
    "BadWeather" : 48,
    "GoodWeather" : -86
}, {
    "period" : 251,
    "Yodacast" : 9,
    "BadWeather" : 42,
    "GoodWeather" : -77
}, {
    "period" : 252,
    "Yodacast" : 9,
    "BadWeather" : 34,
    "GoodWeather" : -65
}, {
    "period" : 253,
    "Yodacast" : 13,
    "BadWeather" : 28,
    "GoodWeather" : -46
}, {
    "period" : 254,
    "Yodacast" : 25,
    "BadWeather" : 30,
    "GoodWeather" : -14
}, {
    "period" : 255,
    "Yodacast" : 51,
    "BadWeather" : 48,
    "GoodWeather" : 35
}, {
    "period" : 256,
    "Yodacast" : 95,
    "BadWeather" : 88,
    "GoodWeather" : 105
}, {
    "period" : 257,
    "Yodacast" : 164,
    "BadWeather" : 156,
    "GoodWeather" : 196
}, {
    "period" : 258,
    "Yodacast" : 263,
    "BadWeather" : 250,
    "GoodWeather" : 306
}, {
    "period" : 259,
    "Yodacast" : 383,
    "BadWeather" : 366,
    "GoodWeather" : 426
}, {
    "period" : 260,
    "Yodacast" : 510,
    "BadWeather" : 494,
    "GoodWeather" : 547
}, {
    "period" : 261,
    "Yodacast" : 635,
    "BadWeather" : 621,
    "GoodWeather" : 659
}, {
    "period" : 262,
    "Yodacast" : 747,
    "BadWeather" : 739,
    "GoodWeather" : 755
}, {
    "period" : 263,
    "Yodacast" : 838,
    "BadWeather" : 839,
    "GoodWeather" : 830
}, {
    "period" : 264,
    "Yodacast" : 904,
    "BadWeather" : 917,
    "GoodWeather" : 884
}, {
    "period" : 265,
    "Yodacast" : 949,
    "BadWeather" : 973,
    "GoodWeather" : 915
}, {
    "period" : 266,
    "Yodacast" : 976,
    "BadWeather" : 1006,
    "GoodWeather" : 926
}, {
    "period" : 267,
    "Yodacast" : 984,
    "BadWeather" : 1019,
    "GoodWeather" : 921
}, {
    "period" : 268,
    "Yodacast" : 960,
    "BadWeather" : 997,
    "GoodWeather" : 884
}, {
    "period" : 269,
    "Yodacast" : 935,
    "BadWeather" : 972,
    "GoodWeather" : 847
}, {
    "period" : 270,
    "Yodacast" : 904,
    "BadWeather" : 940,
    "GoodWeather" : 806
}, {
    "period" : 271,
    "Yodacast" : 862,
    "BadWeather" : 898,
    "GoodWeather" : 758
}, {
    "period" : 272,
    "Yodacast" : 847,
    "BadWeather" : 885,
    "GoodWeather" : 739
}, {
    "period" : 273,
    "Yodacast" : 800,
    "BadWeather" : 838,
    "GoodWeather" : 691
}, {
    "period" : 274,
    "Yodacast" : 752,
    "BadWeather" : 790,
    "GoodWeather" : 645
}, {
    "period" : 275,
    "Yodacast" : 705,
    "BadWeather" : 742,
    "GoodWeather" : 601
}, {
    "period" : 276,
    "Yodacast" : 661,
    "BadWeather" : 696,
    "GoodWeather" : 561
}, {
    "period" : 277,
    "Yodacast" : 619,
    "BadWeather" : 653,
    "GoodWeather" : 526
}, {
    "period" : 278,
    "Yodacast" : 580,
    "BadWeather" : 612,
    "GoodWeather" : 497
}, {
    "period" : 279,
    "Yodacast" : 544,
    "BadWeather" : 573,
    "GoodWeather" : 474
}, {
    "period" : 280,
    "Yodacast" : 509,
    "BadWeather" : 534,
    "GoodWeather" : 456
}, {
    "period" : 281,
    "Yodacast" : 475,
    "BadWeather" : 493,
    "GoodWeather" : 442
}, {
    "period" : 282,
    "Yodacast" : 437,
    "BadWeather" : 448,
    "GoodWeather" : 429
}, {
    "period" : 283,
    "Yodacast" : 396,
    "BadWeather" : 398,
    "GoodWeather" : 414
}, {
    "period" : 284,
    "Yodacast" : 350,
    "BadWeather" : 343,
    "GoodWeather" : 393
}, {
    "period" : 285,
    "Yodacast" : 299,
    "BadWeather" : 286,
    "GoodWeather" : 361
}, {
    "period" : 286,
    "Yodacast" : 245,
    "BadWeather" : 229,
    "GoodWeather" : 314
}, {
    "period" : 287,
    "Yodacast" : 191,
    "BadWeather" : 175,
    "GoodWeather" : 249
}, {
    "period" : 288,
    "Yodacast" : 143,
    "BadWeather" : 123,
    "GoodWeather" : 167
}, {
    "period" : 289,
    "Yodacast" : 94,
    "BadWeather" : 74,
    "GoodWeather" : 77
}, {
    "period" : 290,
    "Yodacast" : 43,
    "BadWeather" : 31,
    "GoodWeather" : -6
}, {
    "period" : 291,
    "Yodacast" : 2,
    "BadWeather" : 2,
    "GoodWeather" : -70
}, {
    "period" : 292,
    "Yodacast" : 64,
    "BadWeather" : 69,
    "GoodWeather" : 45
}, {
    "period" : 293,
    "Yodacast" : 46,
    "BadWeather" : 54,
    "GoodWeather" : 13
}, {
    "period" : 294,
    "Yodacast" : 57,
    "BadWeather" : 48,
    "GoodWeather" : 64
}, {
    "period" : 295,
    "Yodacast" : 12,
    "BadWeather" : 23,
    "GoodWeather" : -14
}, {
    "period" : 296,
    "Yodacast" : -21,
    "BadWeather" : -15,
    "GoodWeather" : -66
}, {
    "period" : 297,
    "Yodacast" : 2,
    "BadWeather" : 13,
    "GoodWeather" : -34
}, {
    "period" : 298,
    "Yodacast" : 13,
    "BadWeather" : 27,
    "GoodWeather" : -11
}, {
    "period" : 299,
    "Yodacast" : 17,
    "BadWeather" : 25,
    "GoodWeather" : 0
}, {
    "period" : 300,
    "Yodacast" : 9,
    "BadWeather" : 8,
    "GoodWeather" : 1
}, {
    "period" : 301,
    "Yodacast" : -9,
    "BadWeather" : -20,
    "GoodWeather" : -5
}, {
    "period" : 302,
    "Yodacast" : -31,
    "BadWeather" : -51,
    "GoodWeather" : -11
}, {
    "period" : 303,
    "Yodacast" : -49,
    "BadWeather" : -75,
    "GoodWeather" : -11
}, {
    "period" : 304,
    "Yodacast" : -55,
    "BadWeather" : -79,
    "GoodWeather" : 6
}, {
    "period" : 305,
    "Yodacast" : -35,
    "BadWeather" : -56,
    "GoodWeather" : 42
}, {
    "period" : 306,
    "Yodacast" : 23,
    "BadWeather" : -3,
    "GoodWeather" : 98
}, {
    "period" : 307,
    "Yodacast" : 108,
    "BadWeather" : 74,
    "GoodWeather" : 168
}, {
    "period" : 308,
    "Yodacast" : 200,
    "BadWeather" : 166,
    "GoodWeather" : 242
}, {
    "period" : 309,
    "Yodacast" : 288,
    "BadWeather" : 259,
    "GoodWeather" : 311
}, {
    "period" : 310,
    "Yodacast" : 357,
    "BadWeather" : 343,
    "GoodWeather" : 368
}, {
    "period" : 311,
    "Yodacast" : 401,
    "BadWeather" : 411,
    "GoodWeather" : 407
}, {
    "period" : 312,
    "Yodacast" : 417,
    "BadWeather" : 459,
    "GoodWeather" : 428
}, {
    "period" : 313,
    "Yodacast" : 425,
    "BadWeather" : 488,
    "GoodWeather" : 432
}, {
    "period" : 314,
    "Yodacast" : 432,
    "BadWeather" : 501,
    "GoodWeather" : 423
}, {
    "period" : 315,
    "Yodacast" : 433,
    "BadWeather" : 501,
    "GoodWeather" : 405
}, {
    "period" : 316,
    "Yodacast" : 431,
    "BadWeather" : 491,
    "GoodWeather" : 379
}, {
    "period" : 317,
    "Yodacast" : 426,
    "BadWeather" : 476,
    "GoodWeather" : 352
}, {
    "period" : 318,
    "Yodacast" : 420,
    "BadWeather" : 460,
    "GoodWeather" : 326
}, {
    "period" : 319,
    "Yodacast" : 408,
    "BadWeather" : 443,
    "GoodWeather" : 301
}, {
    "period" : 320,
    "Yodacast" : 403,
    "BadWeather" : 438,
    "GoodWeather" : 290
}, {
    "period" : 321,
    "Yodacast" : 398,
    "BadWeather" : 433,
    "GoodWeather" : 281
}, {
    "period" : 322,
    "Yodacast" : 401,
    "BadWeather" : 434,
    "GoodWeather" : 279
}, {
    "period" : 323,
    "Yodacast" : 409,
    "BadWeather" : 440,
    "GoodWeather" : 285
}, {
    "period" : 324,
    "Yodacast" : 422,
    "BadWeather" : 451,
    "GoodWeather" : 298
}, {
    "period" : 325,
    "Yodacast" : 436,
    "BadWeather" : 462,
    "GoodWeather" : 317
}, {
    "period" : 326,
    "Yodacast" : 448,
    "BadWeather" : 471,
    "GoodWeather" : 340
}, {
    "period" : 327,
    "Yodacast" : 454,
    "BadWeather" : 473,
    "GoodWeather" : 361
}, {
    "period" : 328,
    "Yodacast" : 451,
    "BadWeather" : 465,
    "GoodWeather" : 378
}, {
    "period" : 329,
    "Yodacast" : 435,
    "BadWeather" : 443,
    "GoodWeather" : 386
}, {
    "period" : 330,
    "Yodacast" : 404,
    "BadWeather" : 407,
    "GoodWeather" : 382
}, {
    "period" : 331,
    "Yodacast" : 360,
    "BadWeather" : 356,
    "GoodWeather" : 366
}, {
    "period" : 332,
    "Yodacast" : 306,
    "BadWeather" : 297,
    "GoodWeather" : 337
}, {
    "period" : 333,
    "Yodacast" : 248,
    "BadWeather" : 235,
    "GoodWeather" : 297
}, {
    "period" : 334,
    "Yodacast" : 190,
    "BadWeather" : 180,
    "GoodWeather" : 248
}, {
    "period" : 335,
    "Yodacast" : 143,
    "BadWeather" : 136,
    "GoodWeather" : 190
}, {
    "period" : 336,
    "Yodacast" : 111,
    "BadWeather" : 102,
    "GoodWeather" : 121
}, {
    "period" : 337,
    "Yodacast" : 80,
    "BadWeather" : 71,
    "GoodWeather" : 42
}, {
    "period" : 338,
    "Yodacast" : 45,
    "BadWeather" : 41,
    "GoodWeather" : -37
}, {
    "period" : 339,
    "Yodacast" : 10,
    "BadWeather" : 16,
    "GoodWeather" : -105
}, {
    "period" : 340,
    "Yodacast" : 28,
    "BadWeather" : 19,
    "GoodWeather" : 17
}, {
    "period" : 341,
    "Yodacast" : 30,
    "BadWeather" : 22,
    "GoodWeather" : 6
}, {
    "period" : 342,
    "Yodacast" : -6,
    "BadWeather" : -9,
    "GoodWeather" : -21
}, {
    "period" : 343,
    "Yodacast" : -11,
    "BadWeather" : -2,
    "GoodWeather" : -26
}, {
    "period" : 344,
    "Yodacast" : -109,
    "BadWeather" : -107,
    "GoodWeather" : -158
}, {
    "period" : 345,
    "Yodacast" : -68,
    "BadWeather" : -58,
    "GoodWeather" : -108
}, {
    "period" : 346,
    "Yodacast" : -29,
    "BadWeather" : -19,
    "GoodWeather" : -65
} ];

var footBallData = [ {
    "period" : 1,
    "Yodacast" : 73,
    "Football on Saturday" : 73
}, {
    "period" : 2,
    "Yodacast" : 31,
    "Football on Saturday" : 31
}, {
    "period" : 3,
    "Yodacast" : -6,
    "Football on Saturday" : -6
}, {
    "period" : 4,
    "Yodacast" : 29,
    "Football on Saturday" : 29
}, {
    "period" : 5,
    "Yodacast" : 22,
    "Football on Saturday" : 22
}, {
    "period" : 6,
    "Yodacast" : -13,
    "Football on Saturday" : -13
}, {
    "period" : 7,
    "Yodacast" : 1,
    "Football on Saturday" : 1
}, {
    "period" : 8,
    "Yodacast" : -121,
    "Football on Saturday" : -121
}, {
    "period" : 9,
    "Yodacast" : -79,
    "Football on Saturday" : -79
}, {
    "period" : 10,
    "Yodacast" : -41,
    "Football on Saturday" : -41
}, {
    "period" : 11,
    "Yodacast" : -8,
    "Football on Saturday" : -8
}, {
    "period" : 12,
    "Yodacast" : 23,
    "Football on Saturday" : 23
}, {
    "period" : 13,
    "Yodacast" : 56,
    "Football on Saturday" : 56
}, {
    "period" : 14,
    "Yodacast" : 98,
    "Football on Saturday" : 98
}, {
    "period" : 15,
    "Yodacast" : 160,
    "Football on Saturday" : 160
}, {
    "period" : 16,
    "Yodacast" : 250,
    "Football on Saturday" : 250
}, {
    "period" : 17,
    "Yodacast" : 375,
    "Football on Saturday" : 375
}, {
    "period" : 18,
    "Yodacast" : 535,
    "Football on Saturday" : 535
}, {
    "period" : 19,
    "Yodacast" : 716,
    "Football on Saturday" : 716
}, {
    "period" : 20,
    "Yodacast" : 900,
    "Football on Saturday" : 900
}, {
    "period" : 21,
    "Yodacast" : 1073,
    "Football on Saturday" : 1073
}, {
    "period" : 22,
    "Yodacast" : 1222,
    "Football on Saturday" : 1222
}, {
    "period" : 23,
    "Yodacast" : 1343,
    "Football on Saturday" : 1343
}, {
    "period" : 24,
    "Yodacast" : 1432,
    "Football on Saturday" : 1432
}, {
    "period" : 25,
    "Yodacast" : 1495,
    "Football on Saturday" : 1495
}, {
    "period" : 26,
    "Yodacast" : 1538,
    "Football on Saturday" : 1538
}, {
    "period" : 27,
    "Yodacast" : 1556,
    "Football on Saturday" : 1556
}, {
    "period" : 28,
    "Yodacast" : 1522,
    "Football on Saturday" : 1522
}, {
    "period" : 29,
    "Yodacast" : 1453,
    "Football on Saturday" : 1453
}, {
    "period" : 30,
    "Yodacast" : 1406,
    "Football on Saturday" : 1406
}, {
    "period" : 31,
    "Yodacast" : 1353,
    "Football on Saturday" : 1353
}, {
    "period" : 32,
    "Yodacast" : 1476,
    "Football on Saturday" : 1476
}, {
    "period" : 33,
    "Yodacast" : 1452,
    "Football on Saturday" : 1452
}, {
    "period" : 34,
    "Yodacast" : 1427,
    "Football on Saturday" : 1427
}, {
    "period" : 35,
    "Yodacast" : 1402,
    "Football on Saturday" : 1402
}, {
    "period" : 36,
    "Yodacast" : 1375,
    "Football on Saturday" : 1375
}, {
    "period" : 37,
    "Yodacast" : 1344,
    "Football on Saturday" : 1344
}, {
    "period" : 38,
    "Yodacast" : 1306,
    "Football on Saturday" : 1306
}, {
    "period" : 39,
    "Yodacast" : 1259,
    "Football on Saturday" : 1259
}, {
    "period" : 40,
    "Yodacast" : 1197,
    "Football on Saturday" : 1197
}, {
    "period" : 41,
    "Yodacast" : 1112,
    "Football on Saturday" : 1112
}, {
    "period" : 42,
    "Yodacast" : 1007,
    "Football on Saturday" : 1007
}, {
    "period" : 43,
    "Yodacast" : 877,
    "Football on Saturday" : 877
}, {
    "period" : 44,
    "Yodacast" : 724,
    "Football on Saturday" : 724
}, {
    "period" : 45,
    "Yodacast" : 570,
    "Football on Saturday" : 570
}, {
    "period" : 46,
    "Yodacast" : 426,
    "Football on Saturday" : 426
}, {
    "period" : 47,
    "Yodacast" : 302,
    "Football on Saturday" : 302
}, {
    "period" : 48,
    "Yodacast" : 196,
    "Football on Saturday" : 196
}, {
    "period" : 49,
    "Yodacast" : 110,
    "Football on Saturday" : 110
}, {
    "period" : 50,
    "Yodacast" : 39,
    "Football on Saturday" : 39
}, {
    "period" : 51,
    "Yodacast" : -18,
    "Football on Saturday" : -18
}, {
    "period" : 52,
    "Yodacast" : 66,
    "Football on Saturday" : 66
}, {
    "period" : 53,
    "Yodacast" : 30,
    "Football on Saturday" : 30
}, {
    "period" : 54,
    "Yodacast" : 8,
    "Football on Saturday" : 8
}, {
    "period" : 55,
    "Yodacast" : 3,
    "Football on Saturday" : 3
}, {
    "period" : 56,
    "Yodacast" : -162,
    "Football on Saturday" : -162
}, {
    "period" : 57,
    "Yodacast" : -81,
    "Football on Saturday" : -81
}, {
    "period" : 58,
    "Yodacast" : -25,
    "Football on Saturday" : -25
}, {
    "period" : 59,
    "Yodacast" : 11,
    "Football on Saturday" : 11
}, {
    "period" : 60,
    "Yodacast" : 35,
    "Football on Saturday" : 35
}, {
    "period" : 61,
    "Yodacast" : 55,
    "Football on Saturday" : 55
}, {
    "period" : 62,
    "Yodacast" : 82,
    "Football on Saturday" : 82
}, {
    "period" : 63,
    "Yodacast" : 129,
    "Football on Saturday" : 129
}, {
    "period" : 64,
    "Yodacast" : 206,
    "Football on Saturday" : 206
}, {
    "period" : 65,
    "Yodacast" : 321,
    "Football on Saturday" : 321
}, {
    "period" : 66,
    "Yodacast" : 476,
    "Football on Saturday" : 476
}, {
    "period" : 67,
    "Yodacast" : 654,
    "Football on Saturday" : 654
}, {
    "period" : 68,
    "Yodacast" : 835,
    "Football on Saturday" : 835
}, {
    "period" : 69,
    "Yodacast" : 1004,
    "Football on Saturday" : 1004
}, {
    "period" : 70,
    "Yodacast" : 1146,
    "Football on Saturday" : 1146
}, {
    "period" : 71,
    "Yodacast" : 1255,
    "Football on Saturday" : 1255
}, {
    "period" : 72,
    "Yodacast" : 1331,
    "Football on Saturday" : 1331
}, {
    "period" : 73,
    "Yodacast" : 1386,
    "Football on Saturday" : 1386
}, {
    "period" : 74,
    "Yodacast" : 1425,
    "Football on Saturday" : 1425
}, {
    "period" : 75,
    "Yodacast" : 1447,
    "Football on Saturday" : 1447
}, {
    "period" : 76,
    "Yodacast" : 1447,
    "Football on Saturday" : 1447
}, {
    "period" : 77,
    "Yodacast" : 1438,
    "Football on Saturday" : 1438
}, {
    "period" : 78,
    "Yodacast" : 1425,
    "Football on Saturday" : 1425
}, {
    "period" : 79,
    "Yodacast" : 1406,
    "Football on Saturday" : 1406
}, {
    "period" : 80,
    "Yodacast" : 1402,
    "Football on Saturday" : 1402
}, {
    "period" : 81,
    "Yodacast" : 1383,
    "Football on Saturday" : 1383
}, {
    "period" : 82,
    "Yodacast" : 1367,
    "Football on Saturday" : 1367
}, {
    "period" : 83,
    "Yodacast" : 1352,
    "Football on Saturday" : 1352
}, {
    "period" : 84,
    "Yodacast" : 1336,
    "Football on Saturday" : 1336
}, {
    "period" : 85,
    "Yodacast" : 1312,
    "Football on Saturday" : 1312
}, {
    "period" : 86,
    "Yodacast" : 1278,
    "Football on Saturday" : 1278
}, {
    "period" : 87,
    "Yodacast" : 1240,
    "Football on Saturday" : 1240
}, {
    "period" : 88,
    "Yodacast" : 1191,
    "Football on Saturday" : 1191
}, {
    "period" : 89,
    "Yodacast" : 1123,
    "Football on Saturday" : 1123
}, {
    "period" : 90,
    "Yodacast" : 1036,
    "Football on Saturday" : 1036
}, {
    "period" : 91,
    "Yodacast" : 922,
    "Football on Saturday" : 922
}, {
    "period" : 92,
    "Yodacast" : 783,
    "Football on Saturday" : 783
}, {
    "period" : 93,
    "Yodacast" : 635,
    "Football on Saturday" : 635
}, {
    "period" : 94,
    "Yodacast" : 490,
    "Football on Saturday" : 490
}, {
    "period" : 95,
    "Yodacast" : 356,
    "Football on Saturday" : 356
}, {
    "period" : 96,
    "Yodacast" : 227,
    "Football on Saturday" : 227
}, {
    "period" : 97,
    "Yodacast" : 107,
    "Football on Saturday" : 107
}, {
    "period" : 98,
    "Yodacast" : -11,
    "Football on Saturday" : -11
}, {
    "period" : 99,
    "Yodacast" : -137,
    "Football on Saturday" : -137
}, {
    "period" : 100,
    "Yodacast" : 48,
    "Football on Saturday" : 48
}, {
    "period" : 101,
    "Yodacast" : 20,
    "Football on Saturday" : 20
}, {
    "period" : 102,
    "Yodacast" : 27,
    "Football on Saturday" : 27
}, {
    "period" : 103,
    "Yodacast" : 81,
    "Football on Saturday" : 81
}, {
    "period" : 104,
    "Yodacast" : -7,
    "Football on Saturday" : -7
}, {
    "period" : 105,
    "Yodacast" : 33,
    "Football on Saturday" : 33
}, {
    "period" : 106,
    "Yodacast" : 55,
    "Football on Saturday" : 55
}, {
    "period" : 107,
    "Yodacast" : 66,
    "Football on Saturday" : 66
}, {
    "period" : 108,
    "Yodacast" : 72,
    "Football on Saturday" : 72
}, {
    "period" : 109,
    "Yodacast" : 82,
    "Football on Saturday" : 82
}, {
    "period" : 110,
    "Yodacast" : 107,
    "Football on Saturday" : 107
}, {
    "period" : 111,
    "Yodacast" : 161,
    "Football on Saturday" : 161
}, {
    "period" : 112,
    "Yodacast" : 251,
    "Football on Saturday" : 251
}, {
    "period" : 113,
    "Yodacast" : 381,
    "Football on Saturday" : 381
}, {
    "period" : 114,
    "Yodacast" : 544,
    "Football on Saturday" : 544
}, {
    "period" : 115,
    "Yodacast" : 724,
    "Football on Saturday" : 724
}, {
    "period" : 116,
    "Yodacast" : 902,
    "Football on Saturday" : 902
}, {
    "period" : 117,
    "Yodacast" : 1066,
    "Football on Saturday" : 1066
}, {
    "period" : 118,
    "Yodacast" : 1205,
    "Football on Saturday" : 1205
}, {
    "period" : 119,
    "Yodacast" : 1313,
    "Football on Saturday" : 1313
}, {
    "period" : 120,
    "Yodacast" : 1391,
    "Football on Saturday" : 1391
}, {
    "period" : 121,
    "Yodacast" : 1442,
    "Football on Saturday" : 1442
}, {
    "period" : 122,
    "Yodacast" : 1471,
    "Football on Saturday" : 1471
}, {
    "period" : 123,
    "Yodacast" : 1483,
    "Football on Saturday" : 1483
}, {
    "period" : 124,
    "Yodacast" : 1412,
    "Football on Saturday" : 1412
}, {
    "period" : 125,
    "Yodacast" : 1372,
    "Football on Saturday" : 1372
}, {
    "period" : 126,
    "Yodacast" : 1346,
    "Football on Saturday" : 1346
}, {
    "period" : 127,
    "Yodacast" : 1305,
    "Football on Saturday" : 1305
}, {
    "period" : 128,
    "Yodacast" : 1393,
    "Football on Saturday" : 1393
}, {
    "period" : 129,
    "Yodacast" : 1349,
    "Football on Saturday" : 1349
}, {
    "period" : 130,
    "Yodacast" : 1304,
    "Football on Saturday" : 1304
}, {
    "period" : 131,
    "Yodacast" : 1261,
    "Football on Saturday" : 1261
}, {
    "period" : 132,
    "Yodacast" : 1222,
    "Football on Saturday" : 1222
}, {
    "period" : 133,
    "Yodacast" : 1185,
    "Football on Saturday" : 1185
}, {
    "period" : 134,
    "Yodacast" : 1149,
    "Football on Saturday" : 1149
}, {
    "period" : 135,
    "Yodacast" : 1105,
    "Football on Saturday" : 1105
}, {
    "period" : 136,
    "Yodacast" : 1050,
    "Football on Saturday" : 1050
}, {
    "period" : 137,
    "Yodacast" : 983,
    "Football on Saturday" : 983
}, {
    "period" : 138,
    "Yodacast" : 899,
    "Football on Saturday" : 899
}, {
    "period" : 139,
    "Yodacast" : 802,
    "Football on Saturday" : 802
}, {
    "period" : 140,
    "Yodacast" : 691,
    "Football on Saturday" : 691
}, {
    "period" : 141,
    "Yodacast" : 573,
    "Football on Saturday" : 573
}, {
    "period" : 142,
    "Yodacast" : 454,
    "Football on Saturday" : 454
}, {
    "period" : 143,
    "Yodacast" : 342,
    "Football on Saturday" : 342
}, {
    "period" : 144,
    "Yodacast" : 239,
    "Football on Saturday" : 239
}, {
    "period" : 145,
    "Yodacast" : 144,
    "Football on Saturday" : 144
}, {
    "period" : 146,
    "Yodacast" : 51,
    "Football on Saturday" : 51
}, {
    "period" : 147,
    "Yodacast" : -41,
    "Football on Saturday" : -41
}, {
    "period" : 148,
    "Yodacast" : 67,
    "Football on Saturday" : 67
}, {
    "period" : 149,
    "Yodacast" : 67,
    "Football on Saturday" : 67
}, {
    "period" : 150,
    "Yodacast" : 77,
    "Football on Saturday" : 77
}, {
    "period" : 151,
    "Yodacast" : 83,
    "Football on Saturday" : 83
}, {
    "period" : 152,
    "Yodacast" : 51,
    "Football on Saturday" : 51
}, {
    "period" : 153,
    "Yodacast" : 43,
    "Football on Saturday" : 43
}, {
    "period" : 154,
    "Yodacast" : 29,
    "Football on Saturday" : 29
}, {
    "period" : 155,
    "Yodacast" : 7,
    "Football on Saturday" : 7
}, {
    "period" : 156,
    "Yodacast" : -15,
    "Football on Saturday" : -15
}, {
    "period" : 157,
    "Yodacast" : -24,
    "Football on Saturday" : -24
}, {
    "period" : 158,
    "Yodacast" : -7,
    "Football on Saturday" : -7
}, {
    "period" : 159,
    "Yodacast" : 46,
    "Football on Saturday" : 46
}, {
    "period" : 160,
    "Yodacast" : 142,
    "Football on Saturday" : 142
}, {
    "period" : 161,
    "Yodacast" : 287,
    "Football on Saturday" : 287
}, {
    "period" : 162,
    "Yodacast" : 475,
    "Football on Saturday" : 475
}, {
    "period" : 163,
    "Yodacast" : 680,
    "Football on Saturday" : 680
}, {
    "period" : 164,
    "Yodacast" : 877,
    "Football on Saturday" : 877
}, {
    "period" : 165,
    "Yodacast" : 1056,
    "Football on Saturday" : 1056
}, {
    "period" : 166,
    "Yodacast" : 1204,
    "Football on Saturday" : 1204
}, {
    "period" : 167,
    "Yodacast" : 1314,
    "Football on Saturday" : 1314
}, {
    "period" : 168,
    "Yodacast" : 1388,
    "Football on Saturday" : 1388
}, {
    "period" : 169,
    "Yodacast" : 1443,
    "Football on Saturday" : 1443
}, {
    "period" : 170,
    "Yodacast" : 1482,
    "Football on Saturday" : 1482
}, {
    "period" : 171,
    "Yodacast" : 1501,
    "Football on Saturday" : 1501
}, {
    "period" : 172,
    "Yodacast" : 1387,
    "Football on Saturday" : 1387
}, {
    "period" : 173,
    "Yodacast" : 1333,
    "Football on Saturday" : 1333
}, {
    "period" : 174,
    "Yodacast" : 1307,
    "Football on Saturday" : 1307
}, {
    "period" : 175,
    "Yodacast" : 1267,
    "Football on Saturday" : 1267
}, {
    "period" : 176,
    "Yodacast" : 1432,
    "Football on Saturday" : 1432
}, {
    "period" : 177,
    "Yodacast" : 1390,
    "Football on Saturday" : 1390
}, {
    "period" : 178,
    "Yodacast" : 1348,
    "Football on Saturday" : 1348
}, {
    "period" : 179,
    "Yodacast" : 1306,
    "Football on Saturday" : 1306
}, {
    "period" : 180,
    "Yodacast" : 1263,
    "Football on Saturday" : 1263
}, {
    "period" : 181,
    "Yodacast" : 1218,
    "Football on Saturday" : 1218
}, {
    "period" : 182,
    "Yodacast" : 1168,
    "Football on Saturday" : 1168
}, {
    "period" : 183,
    "Yodacast" : 1113,
    "Football on Saturday" : 1113
}, {
    "period" : 184,
    "Yodacast" : 1050,
    "Football on Saturday" : 1050
}, {
    "period" : 185,
    "Yodacast" : 975,
    "Football on Saturday" : 975
}, {
    "period" : 186,
    "Yodacast" : 887,
    "Football on Saturday" : 887
}, {
    "period" : 187,
    "Yodacast" : 784,
    "Football on Saturday" : 784
}, {
    "period" : 188,
    "Yodacast" : 668,
    "Football on Saturday" : 668
}, {
    "period" : 189,
    "Yodacast" : 548,
    "Football on Saturday" : 548
}, {
    "period" : 190,
    "Yodacast" : 434,
    "Football on Saturday" : 434
}, {
    "period" : 191,
    "Yodacast" : 336,
    "Football on Saturday" : 336
}, {
    "period" : 192,
    "Yodacast" : 255,
    "Football on Saturday" : 255
}, {
    "period" : 193,
    "Yodacast" : 196,
    "Football on Saturday" : 196
}, {
    "period" : 194,
    "Yodacast" : 156,
    "Football on Saturday" : 156
}, {
    "period" : 195,
    "Yodacast" : 127,
    "Football on Saturday" : 127
}, {
    "period" : 196,
    "Yodacast" : 64,
    "Football on Saturday" : 64
}, {
    "period" : 197,
    "Yodacast" : 58,
    "Football on Saturday" : 58
}, {
    "period" : 198,
    "Yodacast" : 57,
    "Football on Saturday" : 57
}, {
    "period" : 199,
    "Yodacast" : -19,
    "Football on Saturday" : -19
}, {
    "period" : 200,
    "Yodacast" : -34,
    "Football on Saturday" : -34
}, {
    "period" : 201,
    "Yodacast" : -42,
    "Football on Saturday" : -42
}, {
    "period" : 202,
    "Yodacast" : -43,
    "Football on Saturday" : -43
}, {
    "period" : 203,
    "Yodacast" : -46,
    "Football on Saturday" : -46
}, {
    "period" : 204,
    "Yodacast" : -44,
    "Football on Saturday" : -44
}, {
    "period" : 205,
    "Yodacast" : -31,
    "Football on Saturday" : -31
}, {
    "period" : 206,
    "Yodacast" : 2,
    "Football on Saturday" : 2
}, {
    "period" : 207,
    "Yodacast" : 61,
    "Football on Saturday" : 61
}, {
    "period" : 208,
    "Yodacast" : 152,
    "Football on Saturday" : 152
}, {
    "period" : 209,
    "Yodacast" : 278,
    "Football on Saturday" : 278
}, {
    "period" : 210,
    "Yodacast" : 436,
    "Football on Saturday" : 436
}, {
    "period" : 211,
    "Yodacast" : 613,
    "Football on Saturday" : 613
}, {
    "period" : 212,
    "Yodacast" : 794,
    "Football on Saturday" : 794
}, {
    "period" : 213,
    "Yodacast" : 969,
    "Football on Saturday" : 969
}, {
    "period" : 214,
    "Yodacast" : 1126,
    "Football on Saturday" : 1126
}, {
    "period" : 215,
    "Yodacast" : 1258,
    "Football on Saturday" : 1258
}, {
    "period" : 216,
    "Yodacast" : 1363,
    "Football on Saturday" : 1363
}, {
    "period" : 217,
    "Yodacast" : 1443,
    "Football on Saturday" : 1443
}, {
    "period" : 218,
    "Yodacast" : 1499,
    "Football on Saturday" : 1499
}, {
    "period" : 219,
    "Yodacast" : 1534,
    "Football on Saturday" : 1534
}, {
    "period" : 220,
    "Yodacast" : 1420,
    "Football on Saturday" : 1420
}, {
    "period" : 221,
    "Yodacast" : 1390,
    "Football on Saturday" : 1390
}, {
    "period" : 222,
    "Yodacast" : 1365,
    "Football on Saturday" : 1365
}, {
    "period" : 223,
    "Yodacast" : 1312,
    "Football on Saturday" : 1312
}, {
    "period" : 224,
    "Yodacast" : 1461,
    "Football on Saturday" : 1461
}, {
    "period" : 225,
    "Yodacast" : 1402,
    "Football on Saturday" : 1402
}, {
    "period" : 226,
    "Yodacast" : 1335,
    "Football on Saturday" : 1335
}, {
    "period" : 227,
    "Yodacast" : 1263,
    "Football on Saturday" : 1263
}, {
    "period" : 228,
    "Yodacast" : 1187,
    "Football on Saturday" : 1187
}, {
    "period" : 229,
    "Yodacast" : 1109,
    "Football on Saturday" : 1109
}, {
    "period" : 230,
    "Yodacast" : 1029,
    "Football on Saturday" : 1029
}, {
    "period" : 231,
    "Yodacast" : 946,
    "Football on Saturday" : 946
}, {
    "period" : 232,
    "Yodacast" : 859,
    "Football on Saturday" : 859
}, {
    "period" : 233,
    "Yodacast" : 770,
    "Football on Saturday" : 770
}, {
    "period" : 234,
    "Yodacast" : 678,
    "Football on Saturday" : 678
}, {
    "period" : 235,
    "Yodacast" : 586,
    "Football on Saturday" : 586
}, {
    "period" : 236,
    "Yodacast" : 496,
    "Football on Saturday" : 496
}, {
    "period" : 237,
    "Yodacast" : 409,
    "Football on Saturday" : 409
}, {
    "period" : 238,
    "Yodacast" : 328,
    "Football on Saturday" : 328
}, {
    "period" : 239,
    "Yodacast" : 250,
    "Football on Saturday" : 250
}, {
    "period" : 240,
    "Yodacast" : 172,
    "Football on Saturday" : 172
}, {
    "period" : 241,
    "Yodacast" : 99,
    "Football on Saturday" : 99
}, {
    "period" : 242,
    "Yodacast" : 38,
    "Football on Saturday" : 38
}, {
    "period" : 243,
    "Yodacast" : -2,
    "Football on Saturday" : -2
}, {
    "period" : 244,
    "Yodacast" : 48,
    "Football on Saturday" : 48
}, {
    "period" : 245,
    "Yodacast" : 54,
    "Football on Saturday" : 54
}, {
    "period" : 246,
    "Yodacast" : 42,
    "Football on Saturday" : 42
}, {
    "period" : 247,
    "Yodacast" : 26,
    "Football on Saturday" : 26
}, {
    "period" : 248,
    "Yodacast" : -7,
    "Football on Saturday" : -7
}, {
    "period" : 249,
    "Yodacast" : 6,
    "Football on Saturday" : 6
}, {
    "period" : 250,
    "Yodacast" : 10,
    "Football on Saturday" : 10
}, {
    "period" : 251,
    "Yodacast" : 9,
    "Football on Saturday" : 9
}, {
    "period" : 252,
    "Yodacast" : 9,
    "Football on Saturday" : 9
}, {
    "period" : 253,
    "Yodacast" : 13,
    "Football on Saturday" : 13
}, {
    "period" : 254,
    "Yodacast" : 25,
    "Football on Saturday" : 25
}, {
    "period" : 255,
    "Yodacast" : 51,
    "Football on Saturday" : 51
}, {
    "period" : 256,
    "Yodacast" : 95,
    "Football on Saturday" : 95
}, {
    "period" : 257,
    "Yodacast" : 164,
    "Football on Saturday" : 164
}, {
    "period" : 258,
    "Yodacast" : 263,
    "Football on Saturday" : 263
}, {
    "period" : 259,
    "Yodacast" : 383,
    "Football on Saturday" : 383
}, {
    "period" : 260,
    "Yodacast" : 510,
    "Football on Saturday" : 510
}, {
    "period" : 261,
    "Yodacast" : 635,
    "Football on Saturday" : 635
}, {
    "period" : 262,
    "Yodacast" : 747,
    "Football on Saturday" : 809
}, {
    "period" : 263,
    "Yodacast" : 838,
    "Football on Saturday" : 891
}, {
    "period" : 264,
    "Yodacast" : 904,
    "Football on Saturday" : 896
}, {
    "period" : 265,
    "Yodacast" : 949,
    "Football on Saturday" : 832
}, {
    "period" : 266,
    "Yodacast" : 976,
    "Football on Saturday" : 737
}, {
    "period" : 267,
    "Yodacast" : 984,
    "Football on Saturday" : 712
}, {
    "period" : 268,
    "Yodacast" : 960,
    "Football on Saturday" : 757
}, {
    "period" : 269,
    "Yodacast" : 935,
    "Football on Saturday" : 797
}, {
    "period" : 270,
    "Yodacast" : 904,
    "Football on Saturday" : 840
}, {
    "period" : 271,
    "Yodacast" : 862,
    "Football on Saturday" : 862
}, {
    "period" : 272,
    "Yodacast" : 847,
    "Football on Saturday" : 847
}, {
    "period" : 273,
    "Yodacast" : 800,
    "Football on Saturday" : 800
}, {
    "period" : 274,
    "Yodacast" : 752,
    "Football on Saturday" : 752
}, {
    "period" : 275,
    "Yodacast" : 705,
    "Football on Saturday" : 705
}, {
    "period" : 276,
    "Yodacast" : 661,
    "Football on Saturday" : 661
}, {
    "period" : 277,
    "Yodacast" : 619,
    "Football on Saturday" : 619
}, {
    "period" : 278,
    "Yodacast" : 580,
    "Football on Saturday" : 580
}, {
    "period" : 279,
    "Yodacast" : 544,
    "Football on Saturday" : 544
}, {
    "period" : 280,
    "Yodacast" : 509,
    "Football on Saturday" : 509
}, {
    "period" : 281,
    "Yodacast" : 475,
    "Football on Saturday" : 475
}, {
    "period" : 282,
    "Yodacast" : 437,
    "Football on Saturday" : 437
}, {
    "period" : 283,
    "Yodacast" : 396,
    "Football on Saturday" : 396
}, {
    "period" : 284,
    "Yodacast" : 350,
    "Football on Saturday" : 350
}, {
    "period" : 285,
    "Yodacast" : 299,
    "Football on Saturday" : 299
}, {
    "period" : 286,
    "Yodacast" : 245,
    "Football on Saturday" : 245
}, {
    "period" : 287,
    "Yodacast" : 191,
    "Football on Saturday" : 191
}, {
    "period" : 288,
    "Yodacast" : 143,
    "Football on Saturday" : 143
}, {
    "period" : 289,
    "Yodacast" : 94,
    "Football on Saturday" : 94
}, {
    "period" : 290,
    "Yodacast" : 43,
    "Football on Saturday" : 43
}, {
    "period" : 291,
    "Yodacast" : 2,
    "Football on Saturday" : 2
}, {
    "period" : 292,
    "Yodacast" : 64,
    "Football on Saturday" : 64
}, {
    "period" : 293,
    "Yodacast" : 46,
    "Football on Saturday" : 46
}, {
    "period" : 294,
    "Yodacast" : 57,
    "Football on Saturday" : 57
}, {
    "period" : 295,
    "Yodacast" : 12,
    "Football on Saturday" : 12
}, {
    "period" : 296,
    "Yodacast" : -21,
    "Football on Saturday" : -21
}, {
    "period" : 297,
    "Yodacast" : 2,
    "Football on Saturday" : 2
}, {
    "period" : 298,
    "Yodacast" : 13,
    "Football on Saturday" : 13
}, {
    "period" : 299,
    "Yodacast" : 17,
    "Football on Saturday" : 17
}, {
    "period" : 300,
    "Yodacast" : 9,
    "Football on Saturday" : 9
}, {
    "period" : 301,
    "Yodacast" : -9,
    "Football on Saturday" : -9
}, {
    "period" : 302,
    "Yodacast" : -31,
    "Football on Saturday" : -31
}, {
    "period" : 303,
    "Yodacast" : -49,
    "Football on Saturday" : -49
}, {
    "period" : 304,
    "Yodacast" : -55,
    "Football on Saturday" : -55
}, {
    "period" : 305,
    "Yodacast" : -35,
    "Football on Saturday" : -35
}, {
    "period" : 306,
    "Yodacast" : 23,
    "Football on Saturday" : 23
}, {
    "period" : 307,
    "Yodacast" : 108,
    "Football on Saturday" : 108
}, {
    "period" : 308,
    "Yodacast" : 200,
    "Football on Saturday" : 200
}, {
    "period" : 309,
    "Yodacast" : 288,
    "Football on Saturday" : 288
}, {
    "period" : 310,
    "Yodacast" : 357,
    "Football on Saturday" : 357
}, {
    "period" : 311,
    "Yodacast" : 401,
    "Football on Saturday" : 401
}, {
    "period" : 312,
    "Yodacast" : 417,
    "Football on Saturday" : 417
}, {
    "period" : 313,
    "Yodacast" : 425,
    "Football on Saturday" : 425
}, {
    "period" : 314,
    "Yodacast" : 432,
    "Football on Saturday" : 432
}, {
    "period" : 315,
    "Yodacast" : 433,
    "Football on Saturday" : 433
}, {
    "period" : 316,
    "Yodacast" : 431,
    "Football on Saturday" : 431
}, {
    "period" : 317,
    "Yodacast" : 426,
    "Football on Saturday" : 426
}, {
    "period" : 318,
    "Yodacast" : 420,
    "Football on Saturday" : 420
}, {
    "period" : 319,
    "Yodacast" : 408,
    "Football on Saturday" : 408
}, {
    "period" : 320,
    "Yodacast" : 403,
    "Football on Saturday" : 403
}, {
    "period" : 321,
    "Yodacast" : 398,
    "Football on Saturday" : 398
}, {
    "period" : 322,
    "Yodacast" : 401,
    "Football on Saturday" : 401
}, {
    "period" : 323,
    "Yodacast" : 409,
    "Football on Saturday" : 409
}, {
    "period" : 324,
    "Yodacast" : 422,
    "Football on Saturday" : 422
}, {
    "period" : 325,
    "Yodacast" : 436,
    "Football on Saturday" : 436
}, {
    "period" : 326,
    "Yodacast" : 448,
    "Football on Saturday" : 448
}, {
    "period" : 327,
    "Yodacast" : 454,
    "Football on Saturday" : 454
}, {
    "period" : 328,
    "Yodacast" : 451,
    "Football on Saturday" : 451
}, {
    "period" : 329,
    "Yodacast" : 435,
    "Football on Saturday" : 435
}, {
    "period" : 330,
    "Yodacast" : 404,
    "Football on Saturday" : 404
}, {
    "period" : 331,
    "Yodacast" : 360,
    "Football on Saturday" : 360
}, {
    "period" : 332,
    "Yodacast" : 306,
    "Football on Saturday" : 306
}, {
    "period" : 333,
    "Yodacast" : 248,
    "Football on Saturday" : 248
}, {
    "period" : 334,
    "Yodacast" : 190,
    "Football on Saturday" : 190
}, {
    "period" : 335,
    "Yodacast" : 143,
    "Football on Saturday" : 143
}, {
    "period" : 336,
    "Yodacast" : 111,
    "Football on Saturday" : 111
}, {
    "period" : 337,
    "Yodacast" : 80,
    "Football on Saturday" : 80
}, {
    "period" : 338,
    "Yodacast" : 45,
    "Football on Saturday" : 45
}, {
    "period" : 339,
    "Yodacast" : 10,
    "Football on Saturday" : 10
}, {
    "period" : 340,
    "Yodacast" : 28,
    "Football on Saturday" : 28
}, {
    "period" : 341,
    "Yodacast" : 30,
    "Football on Saturday" : 30
}, {
    "period" : 342,
    "Yodacast" : -6,
    "Football on Saturday" : -6
}, {
    "period" : 343,
    "Yodacast" : -11,
    "Football on Saturday" : -11
}, {
    "period" : 344,
    "Yodacast" : -109,
    "Football on Saturday" : -109
}, {
    "period" : 345,
    "Yodacast" : -68,
    "Football on Saturday" : -68
}, {
    "period" : 346,
    "Yodacast" : -29,
    "Football on Saturday" : -29
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
        ykeys : [ 'Target', 'Yodacast' ],
        labels : [ 'Target', 'Yodacast' ],
        pointSize : 2,
        parseTime : false,
        hideHover : 'auto',
        resize : true,
        lineColors : [ '#2B431F', '#C359C0' ]
    });
}

function drawWeatherYoda() {
    $("#morris-area-chart").empty();
    callChart = Morris.Line({
        element : 'morris-area-chart',
        data : weatherYodaData,
        xkey : 'period',
        ykeys : [ 'Yodacast', 'BadWeather', 'GoodWeather' ],
        labels : [ 'Yodacast', 'BadWeather', 'GoodWeather' ],
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
        ykeys : [ 'Yodacast', 'FootBall' ],
        labels : [ 'Yodacast', 'FootBall' ],
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

    if (text = "weather") {
        drawWeatherYoda();
    }

    if (text = "football") {
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
