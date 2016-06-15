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
    "Yodacast" : 73,
    "BadWeather" : 70,
    "GoodWeather" : 38
}, {
    "Yodacast" : 31,
    "BadWeather" : 42,
    "GoodWeather" : -39
}, {
    "Yodacast" : -6,
    "BadWeather" : 19,
    "GoodWeather" : -104
}, {
    "Yodacast" : 29,
    "BadWeather" : 22,
    "GoodWeather" : 15
}, {
    "Yodacast" : 22,
    "BadWeather" : 24,
    "GoodWeather" : 4
}, {
    "Yodacast" : -13,
    "BadWeather" : -14,
    "GoodWeather" : -30
}, {
    "Yodacast" : 1,
    "BadWeather" : -3,
    "GoodWeather" : -29
}, {
    "Yodacast" : -121,
    "BadWeather" : -102,
    "GoodWeather" : -155
}, {
    "Yodacast" : -79,
    "BadWeather" : -54,
    "GoodWeather" : -106
}, {
    "Yodacast" : -41,
    "BadWeather" : -16,
    "GoodWeather" : -63
}, {
    "Yodacast" : -8,
    "BadWeather" : 11,
    "GoodWeather" : -25
}, {
    "Yodacast" : 23,
    "BadWeather" : 32,
    "GoodWeather" : 10
}, {
    "Yodacast" : 56,
    "BadWeather" : 52,
    "GoodWeather" : 50
}, {
    "Yodacast" : 98,
    "BadWeather" : 81,
    "GoodWeather" : 101
}, {
    "Yodacast" : 160,
    "BadWeather" : 132,
    "GoodWeather" : 172
}, {
    "Yodacast" : 250,
    "BadWeather" : 215,
    "GoodWeather" : 271
}, {
    "Yodacast" : 375,
    "BadWeather" : 336,
    "GoodWeather" : 399
}, {
    "Yodacast" : 535,
    "BadWeather" : 492,
    "GoodWeather" : 554
}, {
    "Yodacast" : 716,
    "BadWeather" : 675,
    "GoodWeather" : 723
}, {
    "Yodacast" : 900,
    "BadWeather" : 868,
    "GoodWeather" : 895
}, {
    "Yodacast" : 1073,
    "BadWeather" : 1055,
    "GoodWeather" : 1055
}, {
    "Yodacast" : 1222,
    "BadWeather" : 1224,
    "GoodWeather" : 1194
}, {
    "Yodacast" : 1343,
    "BadWeather" : 1367,
    "GoodWeather" : 1306
}, {
    "Yodacast" : 1432,
    "BadWeather" : 1480,
    "GoodWeather" : 1390
}, {
    "Yodacast" : 1495,
    "BadWeather" : 1564,
    "GoodWeather" : 1448
}, {
    "Yodacast" : 1538,
    "BadWeather" : 1621,
    "GoodWeather" : 1481
}, {
    "Yodacast" : 1556,
    "BadWeather" : 1655,
    "GoodWeather" : 1496
}, {
    "Yodacast" : 1522,
    "BadWeather" : 1635,
    "GoodWeather" : 1463
}, {
    "Yodacast" : 1453,
    "BadWeather" : 1579,
    "GoodWeather" : 1398
}, {
    "Yodacast" : 1406,
    "BadWeather" : 1545,
    "GoodWeather" : 1353
}, {
    "Yodacast" : 1353,
    "BadWeather" : 1502,
    "GoodWeather" : 1298
}, {
    "Yodacast" : 1476,
    "BadWeather" : 1630,
    "GoodWeather" : 1412
}, {
    "Yodacast" : 1452,
    "BadWeather" : 1610,
    "GoodWeather" : 1384
}, {
    "Yodacast" : 1427,
    "BadWeather" : 1587,
    "GoodWeather" : 1355
}, {
    "Yodacast" : 1402,
    "BadWeather" : 1563,
    "GoodWeather" : 1327
}, {
    "Yodacast" : 1375,
    "BadWeather" : 1534,
    "GoodWeather" : 1298
}, {
    "Yodacast" : 1344,
    "BadWeather" : 1497,
    "GoodWeather" : 1266
}, {
    "Yodacast" : 1306,
    "BadWeather" : 1447,
    "GoodWeather" : 1227
}, {
    "Yodacast" : 1259,
    "BadWeather" : 1381,
    "GoodWeather" : 1178
}, {
    "Yodacast" : 1197,
    "BadWeather" : 1295,
    "GoodWeather" : 1115
}, {
    "Yodacast" : 1112,
    "BadWeather" : 1185,
    "GoodWeather" : 1033
}, {
    "Yodacast" : 1007,
    "BadWeather" : 1052,
    "GoodWeather" : 933
}, {
    "Yodacast" : 877,
    "BadWeather" : 898,
    "GoodWeather" : 816
}, {
    "Yodacast" : 724,
    "BadWeather" : 732,
    "GoodWeather" : 686
}, {
    "Yodacast" : 570,
    "BadWeather" : 565,
    "GoodWeather" : 550
}, {
    "Yodacast" : 426,
    "BadWeather" : 413,
    "GoodWeather" : 418
}, {
    "Yodacast" : 302,
    "BadWeather" : 289,
    "GoodWeather" : 294
}, {
    "Yodacast" : 196,
    "BadWeather" : 197,
    "GoodWeather" : 182
}, {
    "Yodacast" : 110,
    "BadWeather" : 132,
    "GoodWeather" : 81
}, {
    "Yodacast" : 39,
    "BadWeather" : 84,
    "GoodWeather" : -7
}, {
    "Yodacast" : -18,
    "BadWeather" : 47,
    "GoodWeather" : -80
}, {
    "Yodacast" : 66,
    "BadWeather" : 76,
    "GoodWeather" : 52
}, {
    "Yodacast" : 30,
    "BadWeather" : 40,
    "GoodWeather" : 10
}, {
    "Yodacast" : 8,
    "BadWeather" : 9,
    "GoodWeather" : 3
}, {
    "Yodacast" : 3,
    "BadWeather" : 15,
    "GoodWeather" : 4
}, {
    "Yodacast" : -162,
    "BadWeather" : -115,
    "GoodWeather" : -224
}, {
    "Yodacast" : -81,
    "BadWeather" : -50,
    "GoodWeather" : -141
}, {
    "Yodacast" : -25,
    "BadWeather" : -5,
    "GoodWeather" : -75
}, {
    "Yodacast" : 11,
    "BadWeather" : 21,
    "GoodWeather" : -22
}, {
    "Yodacast" : 35,
    "BadWeather" : 32,
    "GoodWeather" : 21
}, {
    "Yodacast" : 55,
    "BadWeather" : 39,
    "GoodWeather" : 63
}, {
    "Yodacast" : 82,
    "BadWeather" : 54,
    "GoodWeather" : 113
}, {
    "Yodacast" : 129,
    "BadWeather" : 91,
    "GoodWeather" : 183
}, {
    "Yodacast" : 206,
    "BadWeather" : 164,
    "GoodWeather" : 280
}, {
    "Yodacast" : 321,
    "BadWeather" : 276,
    "GoodWeather" : 407
}, {
    "Yodacast" : 476,
    "BadWeather" : 425,
    "GoodWeather" : 559
}, {
    "Yodacast" : 654,
    "BadWeather" : 599,
    "GoodWeather" : 724
}, {
    "Yodacast" : 835,
    "BadWeather" : 782,
    "GoodWeather" : 889
}, {
    "Yodacast" : 1004,
    "BadWeather" : 958,
    "GoodWeather" : 1041
}, {
    "Yodacast" : 1146,
    "BadWeather" : 1115,
    "GoodWeather" : 1170
}, {
    "Yodacast" : 1255,
    "BadWeather" : 1246,
    "GoodWeather" : 1273
}, {
    "Yodacast" : 1331,
    "BadWeather" : 1348,
    "GoodWeather" : 1348
}, {
    "Yodacast" : 1386,
    "BadWeather" : 1421,
    "GoodWeather" : 1396
}, {
    "Yodacast" : 1425,
    "BadWeather" : 1470,
    "GoodWeather" : 1422
}, {
    "Yodacast" : 1447,
    "BadWeather" : 1497,
    "GoodWeather" : 1429
}, {
    "Yodacast" : 1447,
    "BadWeather" : 1497,
    "GoodWeather" : 1412
}, {
    "Yodacast" : 1438,
    "BadWeather" : 1488,
    "GoodWeather" : 1387
}, {
    "Yodacast" : 1425,
    "BadWeather" : 1474,
    "GoodWeather" : 1360
}, {
    "Yodacast" : 1406,
    "BadWeather" : 1455,
    "GoodWeather" : 1330
}, {
    "Yodacast" : 1402,
    "BadWeather" : 1454,
    "GoodWeather" : 1319
}, {
    "Yodacast" : 1383,
    "BadWeather" : 1433,
    "GoodWeather" : 1288
}, {
    "Yodacast" : 1367,
    "BadWeather" : 1412,
    "GoodWeather" : 1260
}, {
    "Yodacast" : 1352,
    "BadWeather" : 1391,
    "GoodWeather" : 1234
}, {
    "Yodacast" : 1336,
    "BadWeather" : 1368,
    "GoodWeather" : 1210
}, {
    "Yodacast" : 1312,
    "BadWeather" : 1340,
    "GoodWeather" : 1186
}, {
    "Yodacast" : 1278,
    "BadWeather" : 1305,
    "GoodWeather" : 1159
}, {
    "Yodacast" : 1240,
    "BadWeather" : 1257,
    "GoodWeather" : 1125
}, {
    "Yodacast" : 1191,
    "BadWeather" : 1194,
    "GoodWeather" : 1080
}, {
    "Yodacast" : 1123,
    "BadWeather" : 1111,
    "GoodWeather" : 1020
}, {
    "Yodacast" : 1036,
    "BadWeather" : 1008,
    "GoodWeather" : 942
}, {
    "Yodacast" : 922,
    "BadWeather" : 885,
    "GoodWeather" : 847
}, {
    "Yodacast" : 783,
    "BadWeather" : 746,
    "GoodWeather" : 735
}, {
    "Yodacast" : 635,
    "BadWeather" : 600,
    "GoodWeather" : 611
}, {
    "Yodacast" : 490,
    "BadWeather" : 458,
    "GoodWeather" : 480
}, {
    "Yodacast" : 356,
    "BadWeather" : 332,
    "GoodWeather" : 347
}, {
    "Yodacast" : 227,
    "BadWeather" : 227,
    "GoodWeather" : 212
}, {
    "Yodacast" : 107,
    "BadWeather" : 135,
    "GoodWeather" : 72
}, {
    "Yodacast" : -11,
    "BadWeather" : 43,
    "GoodWeather" : -75
}, {
    "Yodacast" : -137,
    "BadWeather" : -61,
    "GoodWeather" : -228
}, {
    "Yodacast" : 48,
    "BadWeather" : 63,
    "GoodWeather" : 5
}, {
    "Yodacast" : 20,
    "BadWeather" : 48,
    "GoodWeather" : -12
}, {
    "Yodacast" : 27,
    "BadWeather" : 32,
    "GoodWeather" : 11
}, {
    "Yodacast" : 81,
    "BadWeather" : 70,
    "GoodWeather" : 46
}, {
    "Yodacast" : -7,
    "BadWeather" : 74,
    "GoodWeather" : -33
}, {
    "Yodacast" : 33,
    "BadWeather" : 97,
    "GoodWeather" : 7
}, {
    "Yodacast" : 55,
    "BadWeather" : 103,
    "GoodWeather" : 34
}, {
    "Yodacast" : 66,
    "BadWeather" : 94,
    "GoodWeather" : 51
}, {
    "Yodacast" : 72,
    "BadWeather" : 77,
    "GoodWeather" : 63
}, {
    "Yodacast" : 82,
    "BadWeather" : 61,
    "GoodWeather" : 80
}, {
    "Yodacast" : 107,
    "BadWeather" : 63,
    "GoodWeather" : 113
}, {
    "Yodacast" : 161,
    "BadWeather" : 97,
    "GoodWeather" : 173
}, {
    "Yodacast" : 251,
    "BadWeather" : 175,
    "GoodWeather" : 270
}, {
    "Yodacast" : 381,
    "BadWeather" : 299,
    "GoodWeather" : 402
}, {
    "Yodacast" : 544,
    "BadWeather" : 463,
    "GoodWeather" : 561
}, {
    "Yodacast" : 724,
    "BadWeather" : 652,
    "GoodWeather" : 735
}, {
    "Yodacast" : 902,
    "BadWeather" : 847,
    "GoodWeather" : 907
}, {
    "Yodacast" : 1066,
    "BadWeather" : 1032,
    "GoodWeather" : 1064
}, {
    "Yodacast" : 1205,
    "BadWeather" : 1195,
    "GoodWeather" : 1196
}, {
    "Yodacast" : 1313,
    "BadWeather" : 1329,
    "GoodWeather" : 1300
}, {
    "Yodacast" : 1391,
    "BadWeather" : 1433,
    "GoodWeather" : 1375
}, {
    "Yodacast" : 1442,
    "BadWeather" : 1507,
    "GoodWeather" : 1423
}, {
    "Yodacast" : 1471,
    "BadWeather" : 1555,
    "GoodWeather" : 1447
}, {
    "Yodacast" : 1483,
    "BadWeather" : 1580,
    "GoodWeather" : 1451
}, {
    "Yodacast" : 1412,
    "BadWeather" : 1517,
    "GoodWeather" : 1367
}, {
    "Yodacast" : 1372,
    "BadWeather" : 1483,
    "GoodWeather" : 1315
}, {
    "Yodacast" : 1346,
    "BadWeather" : 1461,
    "GoodWeather" : 1279
}, {
    "Yodacast" : 1305,
    "BadWeather" : 1425,
    "GoodWeather" : 1232
}, {
    "Yodacast" : 1393,
    "BadWeather" : 1520,
    "GoodWeather" : 1321
}, {
    "Yodacast" : 1349,
    "BadWeather" : 1490,
    "GoodWeather" : 1281
}, {
    "Yodacast" : 1304,
    "BadWeather" : 1460,
    "GoodWeather" : 1243
}, {
    "Yodacast" : 1261,
    "BadWeather" : 1429,
    "GoodWeather" : 1208
}, {
    "Yodacast" : 1222,
    "BadWeather" : 1397,
    "GoodWeather" : 1176
}, {
    "Yodacast" : 1185,
    "BadWeather" : 1359,
    "GoodWeather" : 1144
}, {
    "Yodacast" : 1149,
    "BadWeather" : 1315,
    "GoodWeather" : 1110
}, {
    "Yodacast" : 1105,
    "BadWeather" : 1259,
    "GoodWeather" : 1071
}, {
    "Yodacast" : 1050,
    "BadWeather" : 1188,
    "GoodWeather" : 1022
}, {
    "Yodacast" : 983,
    "BadWeather" : 1100,
    "GoodWeather" : 960
}, {
    "Yodacast" : 899,
    "BadWeather" : 994,
    "GoodWeather" : 884
}, {
    "Yodacast" : 802,
    "BadWeather" : 869,
    "GoodWeather" : 793
}, {
    "Yodacast" : 691,
    "BadWeather" : 729,
    "GoodWeather" : 688
}, {
    "Yodacast" : 573,
    "BadWeather" : 583,
    "GoodWeather" : 575
}, {
    "Yodacast" : 454,
    "BadWeather" : 445,
    "GoodWeather" : 460
}, {
    "Yodacast" : 342,
    "BadWeather" : 329,
    "GoodWeather" : 349
}, {
    "Yodacast" : 239,
    "BadWeather" : 243,
    "GoodWeather" : 245
}, {
    "Yodacast" : 144,
    "BadWeather" : 185,
    "GoodWeather" : 146
}, {
    "Yodacast" : 51,
    "BadWeather" : 139,
    "GoodWeather" : 47
}, {
    "Yodacast" : -41,
    "BadWeather" : 93,
    "GoodWeather" : -54
}, {
    "Yodacast" : 67,
    "BadWeather" : 99,
    "GoodWeather" : 65
}, {
    "Yodacast" : 67,
    "BadWeather" : 93,
    "GoodWeather" : 65
}, {
    "Yodacast" : 77,
    "BadWeather" : 76,
    "GoodWeather" : 79
}, {
    "Yodacast" : 83,
    "BadWeather" : 84,
    "GoodWeather" : 79
}, {
    "Yodacast" : 51,
    "BadWeather" : 121,
    "GoodWeather" : 26
}, {
    "Yodacast" : 43,
    "BadWeather" : 103,
    "GoodWeather" : 22
}, {
    "Yodacast" : 29,
    "BadWeather" : 72,
    "GoodWeather" : 10
}, {
    "Yodacast" : 7,
    "BadWeather" : 30,
    "GoodWeather" : -7
}, {
    "Yodacast" : -15,
    "BadWeather" : -13,
    "GoodWeather" : -23
}, {
    "Yodacast" : -24,
    "BadWeather" : -46,
    "GoodWeather" : -25
}, {
    "Yodacast" : -7,
    "BadWeather" : -51,
    "GoodWeather" : -2
}, {
    "Yodacast" : 46,
    "BadWeather" : -13,
    "GoodWeather" : 59
}, {
    "Yodacast" : 142,
    "BadWeather" : 78,
    "GoodWeather" : 163
}, {
    "Yodacast" : 287,
    "BadWeather" : 221,
    "GoodWeather" : 310
}, {
    "Yodacast" : 475,
    "BadWeather" : 407,
    "GoodWeather" : 486
}, {
    "Yodacast" : 680,
    "BadWeather" : 616,
    "GoodWeather" : 676
}, {
    "Yodacast" : 877,
    "BadWeather" : 829,
    "GoodWeather" : 864
}, {
    "Yodacast" : 1056,
    "BadWeather" : 1029,
    "GoodWeather" : 1034
}, {
    "Yodacast" : 1204,
    "BadWeather" : 1204,
    "GoodWeather" : 1180
}, {
    "Yodacast" : 1314,
    "BadWeather" : 1350,
    "GoodWeather" : 1296
}, {
    "Yodacast" : 1388,
    "BadWeather" : 1465,
    "GoodWeather" : 1383
}, {
    "Yodacast" : 1443,
    "BadWeather" : 1550,
    "GoodWeather" : 1443
}, {
    "Yodacast" : 1482,
    "BadWeather" : 1607,
    "GoodWeather" : 1478
}, {
    "Yodacast" : 1501,
    "BadWeather" : 1642,
    "GoodWeather" : 1493
}, {
    "Yodacast" : 1387,
    "BadWeather" : 1540,
    "GoodWeather" : 1370
}, {
    "Yodacast" : 1333,
    "BadWeather" : 1493,
    "GoodWeather" : 1308
}, {
    "Yodacast" : 1307,
    "BadWeather" : 1473,
    "GoodWeather" : 1274
}, {
    "Yodacast" : 1267,
    "BadWeather" : 1440,
    "GoodWeather" : 1229
}, {
    "Yodacast" : 1432,
    "BadWeather" : 1611,
    "GoodWeather" : 1391
}, {
    "Yodacast" : 1390,
    "BadWeather" : 1578,
    "GoodWeather" : 1348
}, {
    "Yodacast" : 1348,
    "BadWeather" : 1541,
    "GoodWeather" : 1303
}, {
    "Yodacast" : 1306,
    "BadWeather" : 1501,
    "GoodWeather" : 1260
}, {
    "Yodacast" : 1263,
    "BadWeather" : 1457,
    "GoodWeather" : 1216
}, {
    "Yodacast" : 1218,
    "BadWeather" : 1406,
    "GoodWeather" : 1172
}, {
    "Yodacast" : 1168,
    "BadWeather" : 1346,
    "GoodWeather" : 1125
}, {
    "Yodacast" : 1113,
    "BadWeather" : 1275,
    "GoodWeather" : 1072
}, {
    "Yodacast" : 1050,
    "BadWeather" : 1190,
    "GoodWeather" : 1011
}, {
    "Yodacast" : 975,
    "BadWeather" : 1089,
    "GoodWeather" : 939
}, {
    "Yodacast" : 887,
    "BadWeather" : 971,
    "GoodWeather" : 854
}, {
    "Yodacast" : 784,
    "BadWeather" : 837,
    "GoodWeather" : 758
}, {
    "Yodacast" : 668,
    "BadWeather" : 691,
    "GoodWeather" : 653
}, {
    "Yodacast" : 548,
    "BadWeather" : 541,
    "GoodWeather" : 543
}, {
    "Yodacast" : 434,
    "BadWeather" : 401,
    "GoodWeather" : 437
}, {
    "Yodacast" : 336,
    "BadWeather" : 290,
    "GoodWeather" : 343
}, {
    "Yodacast" : 255,
    "BadWeather" : 220,
    "GoodWeather" : 268
}, {
    "Yodacast" : 196,
    "BadWeather" : 192,
    "GoodWeather" : 211
}, {
    "Yodacast" : 156,
    "BadWeather" : 192,
    "GoodWeather" : 166
}, {
    "Yodacast" : 127,
    "BadWeather" : 206,
    "GoodWeather" : 132
}, {
    "Yodacast" : 64,
    "BadWeather" : 78,
    "GoodWeather" : 80
}, {
    "Yodacast" : 58,
    "BadWeather" : 50,
    "GoodWeather" : 62
}, {
    "Yodacast" : 57,
    "BadWeather" : 62,
    "GoodWeather" : 47
}, {
    "Yodacast" : -19,
    "BadWeather" : 32,
    "GoodWeather" : -34
}, {
    "Yodacast" : -34,
    "BadWeather" : 25,
    "GoodWeather" : -100
}, {
    "Yodacast" : -42,
    "BadWeather" : 19,
    "GoodWeather" : -99
}, {
    "Yodacast" : -43,
    "BadWeather" : 9,
    "GoodWeather" : -99
}, {
    "Yodacast" : -46,
    "BadWeather" : -3,
    "GoodWeather" : -95
}, {
    "Yodacast" : -44,
    "BadWeather" : -13,
    "GoodWeather" : -84
}, {
    "Yodacast" : -31,
    "BadWeather" : -13,
    "GoodWeather" : -60
}, {
    "Yodacast" : 2,
    "BadWeather" : 5,
    "GoodWeather" : -15
}, {
    "Yodacast" : 61,
    "BadWeather" : 52,
    "GoodWeather" : 57
}, {
    "Yodacast" : 152,
    "BadWeather" : 135,
    "GoodWeather" : 160
}, {
    "Yodacast" : 278,
    "BadWeather" : 257,
    "GoodWeather" : 294
}, {
    "Yodacast" : 436,
    "BadWeather" : 414,
    "GoodWeather" : 450
}, {
    "Yodacast" : 613,
    "BadWeather" : 596,
    "GoodWeather" : 620
}, {
    "Yodacast" : 794,
    "BadWeather" : 788,
    "GoodWeather" : 790
}, {
    "Yodacast" : 969,
    "BadWeather" : 976,
    "GoodWeather" : 951
}, {
    "Yodacast" : 1126,
    "BadWeather" : 1150,
    "GoodWeather" : 1094
}, {
    "Yodacast" : 1258,
    "BadWeather" : 1300,
    "GoodWeather" : 1215
}, {
    "Yodacast" : 1363,
    "BadWeather" : 1423,
    "GoodWeather" : 1312
}, {
    "Yodacast" : 1443,
    "BadWeather" : 1517,
    "GoodWeather" : 1384
}, {
    "Yodacast" : 1499,
    "BadWeather" : 1584,
    "GoodWeather" : 1433
}, {
    "Yodacast" : 1534,
    "BadWeather" : 1624,
    "GoodWeather" : 1459
}, {
    "Yodacast" : 1420,
    "BadWeather" : 1513,
    "GoodWeather" : 1339
}, {
    "Yodacast" : 1390,
    "BadWeather" : 1482,
    "GoodWeather" : 1304
}, {
    "Yodacast" : 1365,
    "BadWeather" : 1455,
    "GoodWeather" : 1271
}, {
    "Yodacast" : 1312,
    "BadWeather" : 1403,
    "GoodWeather" : 1213
}, {
    "Yodacast" : 1461,
    "BadWeather" : 1555,
    "GoodWeather" : 1358
}, {
    "Yodacast" : 1402,
    "BadWeather" : 1499,
    "GoodWeather" : 1303
}, {
    "Yodacast" : 1335,
    "BadWeather" : 1436,
    "GoodWeather" : 1242
}, {
    "Yodacast" : 1263,
    "BadWeather" : 1365,
    "GoodWeather" : 1176
}, {
    "Yodacast" : 1187,
    "BadWeather" : 1289,
    "GoodWeather" : 1108
}, {
    "Yodacast" : 1109,
    "BadWeather" : 1207,
    "GoodWeather" : 1037
}, {
    "Yodacast" : 1029,
    "BadWeather" : 1119,
    "GoodWeather" : 964
}, {
    "Yodacast" : 946,
    "BadWeather" : 1026,
    "GoodWeather" : 890
}, {
    "Yodacast" : 859,
    "BadWeather" : 927,
    "GoodWeather" : 814
}, {
    "Yodacast" : 770,
    "BadWeather" : 823,
    "GoodWeather" : 738
}, {
    "Yodacast" : 678,
    "BadWeather" : 714,
    "GoodWeather" : 661
}, {
    "Yodacast" : 586,
    "BadWeather" : 602,
    "GoodWeather" : 586
}, {
    "Yodacast" : 496,
    "BadWeather" : 492,
    "GoodWeather" : 512
}, {
    "Yodacast" : 409,
    "BadWeather" : 389,
    "GoodWeather" : 439
}, {
    "Yodacast" : 328,
    "BadWeather" : 298,
    "GoodWeather" : 365
}, {
    "Yodacast" : 250,
    "BadWeather" : 222,
    "GoodWeather" : 286
}, {
    "Yodacast" : 172,
    "BadWeather" : 161,
    "GoodWeather" : 201
}, {
    "Yodacast" : 99,
    "BadWeather" : 112,
    "GoodWeather" : 113
}, {
    "Yodacast" : 38,
    "BadWeather" : 77,
    "GoodWeather" : 33
}, {
    "Yodacast" : -2,
    "BadWeather" : 58,
    "GoodWeather" : -26
}, {
    "Yodacast" : 48,
    "BadWeather" : 102,
    "GoodWeather" : 64
}, {
    "Yodacast" : 54,
    "BadWeather" : 90,
    "GoodWeather" : 60
}, {
    "Yodacast" : 42,
    "BadWeather" : 68,
    "GoodWeather" : 18
}, {
    "Yodacast" : 26,
    "BadWeather" : 61,
    "GoodWeather" : -17
}, {
    "Yodacast" : -7,
    "BadWeather" : 47,
    "GoodWeather" : -103
}, {
    "Yodacast" : 6,
    "BadWeather" : 50,
    "GoodWeather" : -94
}, {
    "Yodacast" : 10,
    "BadWeather" : 48,
    "GoodWeather" : -86
}, {
    "Yodacast" : 9,
    "BadWeather" : 42,
    "GoodWeather" : -77
}, {
    "Yodacast" : 9,
    "BadWeather" : 34,
    "GoodWeather" : -65
}, {
    "Yodacast" : 13,
    "BadWeather" : 28,
    "GoodWeather" : -46
}, {
    "Yodacast" : 25,
    "BadWeather" : 30,
    "GoodWeather" : -14
}, {
    "Yodacast" : 51,
    "BadWeather" : 48,
    "GoodWeather" : 35
}, {
    "Yodacast" : 95,
    "BadWeather" : 88,
    "GoodWeather" : 105
}, {
    "Yodacast" : 164,
    "BadWeather" : 156,
    "GoodWeather" : 196
}, {
    "Yodacast" : 263,
    "BadWeather" : 250,
    "GoodWeather" : 306
}, {
    "Yodacast" : 383,
    "BadWeather" : 366,
    "GoodWeather" : 426
}, {
    "Yodacast" : 510,
    "BadWeather" : 494,
    "GoodWeather" : 547
}, {
    "Yodacast" : 635,
    "BadWeather" : 621,
    "GoodWeather" : 659
}, {
    "Yodacast" : 747,
    "BadWeather" : 739,
    "GoodWeather" : 755
}, {
    "Yodacast" : 838,
    "BadWeather" : 839,
    "GoodWeather" : 830
}, {
    "Yodacast" : 904,
    "BadWeather" : 917,
    "GoodWeather" : 884
}, {
    "Yodacast" : 949,
    "BadWeather" : 973,
    "GoodWeather" : 915
}, {
    "Yodacast" : 976,
    "BadWeather" : 1006,
    "GoodWeather" : 926
}, {
    "Yodacast" : 984,
    "BadWeather" : 1019,
    "GoodWeather" : 921
}, {
    "Yodacast" : 960,
    "BadWeather" : 997,
    "GoodWeather" : 884
}, {
    "Yodacast" : 935,
    "BadWeather" : 972,
    "GoodWeather" : 847
}, {
    "Yodacast" : 904,
    "BadWeather" : 940,
    "GoodWeather" : 806
}, {
    "Yodacast" : 862,
    "BadWeather" : 898,
    "GoodWeather" : 758
}, {
    "Yodacast" : 847,
    "BadWeather" : 885,
    "GoodWeather" : 739
}, {
    "Yodacast" : 800,
    "BadWeather" : 838,
    "GoodWeather" : 691
}, {
    "Yodacast" : 752,
    "BadWeather" : 790,
    "GoodWeather" : 645
}, {
    "Yodacast" : 705,
    "BadWeather" : 742,
    "GoodWeather" : 601
}, {
    "Yodacast" : 661,
    "BadWeather" : 696,
    "GoodWeather" : 561
}, {
    "Yodacast" : 619,
    "BadWeather" : 653,
    "GoodWeather" : 526
}, {
    "Yodacast" : 580,
    "BadWeather" : 612,
    "GoodWeather" : 497
}, {
    "Yodacast" : 544,
    "BadWeather" : 573,
    "GoodWeather" : 474
}, {
    "Yodacast" : 509,
    "BadWeather" : 534,
    "GoodWeather" : 456
}, {
    "Yodacast" : 475,
    "BadWeather" : 493,
    "GoodWeather" : 442
}, {
    "Yodacast" : 437,
    "BadWeather" : 448,
    "GoodWeather" : 429
}, {
    "Yodacast" : 396,
    "BadWeather" : 398,
    "GoodWeather" : 414
}, {
    "Yodacast" : 350,
    "BadWeather" : 343,
    "GoodWeather" : 393
}, {
    "Yodacast" : 299,
    "BadWeather" : 286,
    "GoodWeather" : 361
}, {
    "Yodacast" : 245,
    "BadWeather" : 229,
    "GoodWeather" : 314
}, {
    "Yodacast" : 191,
    "BadWeather" : 175,
    "GoodWeather" : 249
}, {
    "Yodacast" : 143,
    "BadWeather" : 123,
    "GoodWeather" : 167
}, {
    "Yodacast" : 94,
    "BadWeather" : 74,
    "GoodWeather" : 77
}, {
    "Yodacast" : 43,
    "BadWeather" : 31,
    "GoodWeather" : -6
}, {
    "Yodacast" : 2,
    "BadWeather" : 2,
    "GoodWeather" : -70
}, {
    "Yodacast" : 64,
    "BadWeather" : 69,
    "GoodWeather" : 45
}, {
    "Yodacast" : 46,
    "BadWeather" : 54,
    "GoodWeather" : 13
}, {
    "Yodacast" : 57,
    "BadWeather" : 48,
    "GoodWeather" : 64
}, {
    "Yodacast" : 12,
    "BadWeather" : 23,
    "GoodWeather" : -14
}, {
    "Yodacast" : -21,
    "BadWeather" : -15,
    "GoodWeather" : -66
}, {
    "Yodacast" : 2,
    "BadWeather" : 13,
    "GoodWeather" : -34
}, {
    "Yodacast" : 13,
    "BadWeather" : 27,
    "GoodWeather" : -11
}, {
    "Yodacast" : 17,
    "BadWeather" : 25,
    "GoodWeather" : 0
}, {
    "Yodacast" : 9,
    "BadWeather" : 8,
    "GoodWeather" : 1
}, {
    "Yodacast" : -9,
    "BadWeather" : -20,
    "GoodWeather" : -5
}, {
    "Yodacast" : -31,
    "BadWeather" : -51,
    "GoodWeather" : -11
}, {
    "Yodacast" : -49,
    "BadWeather" : -75,
    "GoodWeather" : -11
}, {
    "Yodacast" : -55,
    "BadWeather" : -79,
    "GoodWeather" : 6
}, {
    "Yodacast" : -35,
    "BadWeather" : -56,
    "GoodWeather" : 42
}, {
    "Yodacast" : 23,
    "BadWeather" : -3,
    "GoodWeather" : 98
}, {
    "Yodacast" : 108,
    "BadWeather" : 74,
    "GoodWeather" : 168
}, {
    "Yodacast" : 200,
    "BadWeather" : 166,
    "GoodWeather" : 242
}, {
    "Yodacast" : 288,
    "BadWeather" : 259,
    "GoodWeather" : 311
}, {
    "Yodacast" : 357,
    "BadWeather" : 343,
    "GoodWeather" : 368
}, {
    "Yodacast" : 401,
    "BadWeather" : 411,
    "GoodWeather" : 407
}, {
    "Yodacast" : 417,
    "BadWeather" : 459,
    "GoodWeather" : 428
}, {
    "Yodacast" : 425,
    "BadWeather" : 488,
    "GoodWeather" : 432
}, {
    "Yodacast" : 432,
    "BadWeather" : 501,
    "GoodWeather" : 423
}, {
    "Yodacast" : 433,
    "BadWeather" : 501,
    "GoodWeather" : 405
}, {
    "Yodacast" : 431,
    "BadWeather" : 491,
    "GoodWeather" : 379
}, {
    "Yodacast" : 426,
    "BadWeather" : 476,
    "GoodWeather" : 352
}, {
    "Yodacast" : 420,
    "BadWeather" : 460,
    "GoodWeather" : 326
}, {
    "Yodacast" : 408,
    "BadWeather" : 443,
    "GoodWeather" : 301
}, {
    "Yodacast" : 403,
    "BadWeather" : 438,
    "GoodWeather" : 290
}, {
    "Yodacast" : 398,
    "BadWeather" : 433,
    "GoodWeather" : 281
}, {
    "Yodacast" : 401,
    "BadWeather" : 434,
    "GoodWeather" : 279
}, {
    "Yodacast" : 409,
    "BadWeather" : 440,
    "GoodWeather" : 285
}, {
    "Yodacast" : 422,
    "BadWeather" : 451,
    "GoodWeather" : 298
}, {
    "Yodacast" : 436,
    "BadWeather" : 462,
    "GoodWeather" : 317
}, {
    "Yodacast" : 448,
    "BadWeather" : 471,
    "GoodWeather" : 340
}, {
    "Yodacast" : 454,
    "BadWeather" : 473,
    "GoodWeather" : 361
}, {
    "Yodacast" : 451,
    "BadWeather" : 465,
    "GoodWeather" : 378
}, {
    "Yodacast" : 435,
    "BadWeather" : 443,
    "GoodWeather" : 386
}, {
    "Yodacast" : 404,
    "BadWeather" : 407,
    "GoodWeather" : 382
}, {
    "Yodacast" : 360,
    "BadWeather" : 356,
    "GoodWeather" : 366
}, {
    "Yodacast" : 306,
    "BadWeather" : 297,
    "GoodWeather" : 337
}, {
    "Yodacast" : 248,
    "BadWeather" : 235,
    "GoodWeather" : 297
}, {
    "Yodacast" : 190,
    "BadWeather" : 180,
    "GoodWeather" : 248
}, {
    "Yodacast" : 143,
    "BadWeather" : 136,
    "GoodWeather" : 190
}, {
    "Yodacast" : 111,
    "BadWeather" : 102,
    "GoodWeather" : 121
}, {
    "Yodacast" : 80,
    "BadWeather" : 71,
    "GoodWeather" : 42
}, {
    "Yodacast" : 45,
    "BadWeather" : 41,
    "GoodWeather" : -37
}, {
    "Yodacast" : 10,
    "BadWeather" : 16,
    "GoodWeather" : -105
}, {
    "Yodacast" : 28,
    "BadWeather" : 19,
    "GoodWeather" : 17
}, {
    "Yodacast" : 30,
    "BadWeather" : 22,
    "GoodWeather" : 6
}, {
    "Yodacast" : -6,
    "BadWeather" : -9,
    "GoodWeather" : -21
}, {
    "Yodacast" : -11,
    "BadWeather" : -2,
    "GoodWeather" : -26
}, {
    "Yodacast" : -109,
    "BadWeather" : -107,
    "GoodWeather" : -158
}, {
    "Yodacast" : -68,
    "BadWeather" : -58,
    "GoodWeather" : -108
}, {
    "Yodacast" : -29,
    "BadWeather" : -19,
    "GoodWeather" : -65
} ];

var footBallData = [ {
    "Yodacast" : 73,
    "FootBall" : 73
}, {
    "Yodacast" : 31,
    "FootBall" : 31
}, {
    "Yodacast" : -6,
    "FootBall" : -6
}, {
    "Yodacast" : 29,
    "FootBall" : 29
}, {
    "Yodacast" : 22,
    "FootBall" : 22
}, {
    "Yodacast" : -13,
    "FootBall" : -13
}, {
    "Yodacast" : 1,
    "FootBall" : 1
}, {
    "Yodacast" : -121,
    "FootBall" : -121
}, {
    "Yodacast" : -79,
    "FootBall" : -79
}, {
    "Yodacast" : -41,
    "FootBall" : -41
}, {
    "Yodacast" : -8,
    "FootBall" : -8
}, {
    "Yodacast" : 23,
    "FootBall" : 23
}, {
    "Yodacast" : 56,
    "FootBall" : 56
}, {
    "Yodacast" : 98,
    "FootBall" : 98
}, {
    "Yodacast" : 160,
    "FootBall" : 160
}, {
    "Yodacast" : 250,
    "FootBall" : 250
}, {
    "Yodacast" : 375,
    "FootBall" : 375
}, {
    "Yodacast" : 535,
    "FootBall" : 535
}, {
    "Yodacast" : 716,
    "FootBall" : 716
}, {
    "Yodacast" : 900,
    "FootBall" : 900
}, {
    "Yodacast" : 1073,
    "FootBall" : 1073
}, {
    "Yodacast" : 1222,
    "FootBall" : 1222
}, {
    "Yodacast" : 1343,
    "FootBall" : 1343
}, {
    "Yodacast" : 1432,
    "FootBall" : 1432
}, {
    "Yodacast" : 1495,
    "FootBall" : 1495
}, {
    "Yodacast" : 1538,
    "FootBall" : 1538
}, {
    "Yodacast" : 1556,
    "FootBall" : 1556
}, {
    "Yodacast" : 1522,
    "FootBall" : 1522
}, {
    "Yodacast" : 1453,
    "FootBall" : 1453
}, {
    "Yodacast" : 1406,
    "FootBall" : 1406
}, {
    "Yodacast" : 1353,
    "FootBall" : 1353
}, {
    "Yodacast" : 1476,
    "FootBall" : 1476
}, {
    "Yodacast" : 1452,
    "FootBall" : 1452
}, {
    "Yodacast" : 1427,
    "FootBall" : 1427
}, {
    "Yodacast" : 1402,
    "FootBall" : 1402
}, {
    "Yodacast" : 1375,
    "FootBall" : 1375
}, {
    "Yodacast" : 1344,
    "FootBall" : 1344
}, {
    "Yodacast" : 1306,
    "FootBall" : 1306
}, {
    "Yodacast" : 1259,
    "FootBall" : 1259
}, {
    "Yodacast" : 1197,
    "FootBall" : 1197
}, {
    "Yodacast" : 1112,
    "FootBall" : 1112
}, {
    "Yodacast" : 1007,
    "FootBall" : 1007
}, {
    "Yodacast" : 877,
    "FootBall" : 877
}, {
    "Yodacast" : 724,
    "FootBall" : 724
}, {
    "Yodacast" : 570,
    "FootBall" : 570
}, {
    "Yodacast" : 426,
    "FootBall" : 426
}, {
    "Yodacast" : 302,
    "FootBall" : 302
}, {
    "Yodacast" : 196,
    "FootBall" : 196
}, {
    "Yodacast" : 110,
    "FootBall" : 110
}, {
    "Yodacast" : 39,
    "FootBall" : 39
}, {
    "Yodacast" : -18,
    "FootBall" : -18
}, {
    "Yodacast" : 66,
    "FootBall" : 66
}, {
    "Yodacast" : 30,
    "FootBall" : 30
}, {
    "Yodacast" : 8,
    "FootBall" : 8
}, {
    "Yodacast" : 3,
    "FootBall" : 3
}, {
    "Yodacast" : -162,
    "FootBall" : -162
}, {
    "Yodacast" : -81,
    "FootBall" : -81
}, {
    "Yodacast" : -25,
    "FootBall" : -25
}, {
    "Yodacast" : 11,
    "FootBall" : 11
}, {
    "Yodacast" : 35,
    "FootBall" : 35
}, {
    "Yodacast" : 55,
    "FootBall" : 55
}, {
    "Yodacast" : 82,
    "FootBall" : 82
}, {
    "Yodacast" : 129,
    "FootBall" : 129
}, {
    "Yodacast" : 206,
    "FootBall" : 206
}, {
    "Yodacast" : 321,
    "FootBall" : 321
}, {
    "Yodacast" : 476,
    "FootBall" : 476
}, {
    "Yodacast" : 654,
    "FootBall" : 654
}, {
    "Yodacast" : 835,
    "FootBall" : 835
}, {
    "Yodacast" : 1004,
    "FootBall" : 1004
}, {
    "Yodacast" : 1146,
    "FootBall" : 1146
}, {
    "Yodacast" : 1255,
    "FootBall" : 1255
}, {
    "Yodacast" : 1331,
    "FootBall" : 1331
}, {
    "Yodacast" : 1386,
    "FootBall" : 1386
}, {
    "Yodacast" : 1425,
    "FootBall" : 1425
}, {
    "Yodacast" : 1447,
    "FootBall" : 1447
}, {
    "Yodacast" : 1447,
    "FootBall" : 1447
}, {
    "Yodacast" : 1438,
    "FootBall" : 1438
}, {
    "Yodacast" : 1425,
    "FootBall" : 1425
}, {
    "Yodacast" : 1406,
    "FootBall" : 1406
}, {
    "Yodacast" : 1402,
    "FootBall" : 1402
}, {
    "Yodacast" : 1383,
    "FootBall" : 1383
}, {
    "Yodacast" : 1367,
    "FootBall" : 1367
}, {
    "Yodacast" : 1352,
    "FootBall" : 1352
}, {
    "Yodacast" : 1336,
    "FootBall" : 1336
}, {
    "Yodacast" : 1312,
    "FootBall" : 1312
}, {
    "Yodacast" : 1278,
    "FootBall" : 1278
}, {
    "Yodacast" : 1240,
    "FootBall" : 1240
}, {
    "Yodacast" : 1191,
    "FootBall" : 1191
}, {
    "Yodacast" : 1123,
    "FootBall" : 1123
}, {
    "Yodacast" : 1036,
    "FootBall" : 1036
}, {
    "Yodacast" : 922,
    "FootBall" : 922
}, {
    "Yodacast" : 783,
    "FootBall" : 783
}, {
    "Yodacast" : 635,
    "FootBall" : 635
}, {
    "Yodacast" : 490,
    "FootBall" : 490
}, {
    "Yodacast" : 356,
    "FootBall" : 356
}, {
    "Yodacast" : 227,
    "FootBall" : 227
}, {
    "Yodacast" : 107,
    "FootBall" : 107
}, {
    "Yodacast" : -11,
    "FootBall" : -11
}, {
    "Yodacast" : -137,
    "FootBall" : -137
}, {
    "Yodacast" : 48,
    "FootBall" : 48
}, {
    "Yodacast" : 20,
    "FootBall" : 20
}, {
    "Yodacast" : 27,
    "FootBall" : 27
}, {
    "Yodacast" : 81,
    "FootBall" : 81
}, {
    "Yodacast" : -7,
    "FootBall" : -7
}, {
    "Yodacast" : 33,
    "FootBall" : 33
}, {
    "Yodacast" : 55,
    "FootBall" : 55
}, {
    "Yodacast" : 66,
    "FootBall" : 66
}, {
    "Yodacast" : 72,
    "FootBall" : 72
}, {
    "Yodacast" : 82,
    "FootBall" : 82
}, {
    "Yodacast" : 107,
    "FootBall" : 107
}, {
    "Yodacast" : 161,
    "FootBall" : 161
}, {
    "Yodacast" : 251,
    "FootBall" : 251
}, {
    "Yodacast" : 381,
    "FootBall" : 381
}, {
    "Yodacast" : 544,
    "FootBall" : 544
}, {
    "Yodacast" : 724,
    "FootBall" : 724
}, {
    "Yodacast" : 902,
    "FootBall" : 902
}, {
    "Yodacast" : 1066,
    "FootBall" : 1066
}, {
    "Yodacast" : 1205,
    "FootBall" : 1205
}, {
    "Yodacast" : 1313,
    "FootBall" : 1313
}, {
    "Yodacast" : 1391,
    "FootBall" : 1391
}, {
    "Yodacast" : 1442,
    "FootBall" : 1442
}, {
    "Yodacast" : 1471,
    "FootBall" : 1471
}, {
    "Yodacast" : 1483,
    "FootBall" : 1483
}, {
    "Yodacast" : 1412,
    "FootBall" : 1412
}, {
    "Yodacast" : 1372,
    "FootBall" : 1372
}, {
    "Yodacast" : 1346,
    "FootBall" : 1346
}, {
    "Yodacast" : 1305,
    "FootBall" : 1305
}, {
    "Yodacast" : 1393,
    "FootBall" : 1393
}, {
    "Yodacast" : 1349,
    "FootBall" : 1349
}, {
    "Yodacast" : 1304,
    "FootBall" : 1304
}, {
    "Yodacast" : 1261,
    "FootBall" : 1261
}, {
    "Yodacast" : 1222,
    "FootBall" : 1222
}, {
    "Yodacast" : 1185,
    "FootBall" : 1185
}, {
    "Yodacast" : 1149,
    "FootBall" : 1149
}, {
    "Yodacast" : 1105,
    "FootBall" : 1105
}, {
    "Yodacast" : 1050,
    "FootBall" : 1050
}, {
    "Yodacast" : 983,
    "FootBall" : 983
}, {
    "Yodacast" : 899,
    "FootBall" : 899
}, {
    "Yodacast" : 802,
    "FootBall" : 802
}, {
    "Yodacast" : 691,
    "FootBall" : 691
}, {
    "Yodacast" : 573,
    "FootBall" : 573
}, {
    "Yodacast" : 454,
    "FootBall" : 454
}, {
    "Yodacast" : 342,
    "FootBall" : 342
}, {
    "Yodacast" : 239,
    "FootBall" : 239
}, {
    "Yodacast" : 144,
    "FootBall" : 144
}, {
    "Yodacast" : 51,
    "FootBall" : 51
}, {
    "Yodacast" : -41,
    "FootBall" : -41
}, {
    "Yodacast" : 67,
    "FootBall" : 67
}, {
    "Yodacast" : 67,
    "FootBall" : 67
}, {
    "Yodacast" : 77,
    "FootBall" : 77
}, {
    "Yodacast" : 83,
    "FootBall" : 83
}, {
    "Yodacast" : 51,
    "FootBall" : 51
}, {
    "Yodacast" : 43,
    "FootBall" : 43
}, {
    "Yodacast" : 29,
    "FootBall" : 29
}, {
    "Yodacast" : 7,
    "FootBall" : 7
}, {
    "Yodacast" : -15,
    "FootBall" : -15
}, {
    "Yodacast" : -24,
    "FootBall" : -24
}, {
    "Yodacast" : -7,
    "FootBall" : -7
}, {
    "Yodacast" : 46,
    "FootBall" : 46
}, {
    "Yodacast" : 142,
    "FootBall" : 142
}, {
    "Yodacast" : 287,
    "FootBall" : 287
}, {
    "Yodacast" : 475,
    "FootBall" : 475
}, {
    "Yodacast" : 680,
    "FootBall" : 680
}, {
    "Yodacast" : 877,
    "FootBall" : 877
}, {
    "Yodacast" : 1056,
    "FootBall" : 1056
}, {
    "Yodacast" : 1204,
    "FootBall" : 1204
}, {
    "Yodacast" : 1314,
    "FootBall" : 1314
}, {
    "Yodacast" : 1388,
    "FootBall" : 1388
}, {
    "Yodacast" : 1443,
    "FootBall" : 1443
}, {
    "Yodacast" : 1482,
    "FootBall" : 1482
}, {
    "Yodacast" : 1501,
    "FootBall" : 1501
}, {
    "Yodacast" : 1387,
    "FootBall" : 1387
}, {
    "Yodacast" : 1333,
    "FootBall" : 1333
}, {
    "Yodacast" : 1307,
    "FootBall" : 1307
}, {
    "Yodacast" : 1267,
    "FootBall" : 1267
}, {
    "Yodacast" : 1432,
    "FootBall" : 1432
}, {
    "Yodacast" : 1390,
    "FootBall" : 1390
}, {
    "Yodacast" : 1348,
    "FootBall" : 1348
}, {
    "Yodacast" : 1306,
    "FootBall" : 1306
}, {
    "Yodacast" : 1263,
    "FootBall" : 1263
}, {
    "Yodacast" : 1218,
    "FootBall" : 1218
}, {
    "Yodacast" : 1168,
    "FootBall" : 1168
}, {
    "Yodacast" : 1113,
    "FootBall" : 1113
}, {
    "Yodacast" : 1050,
    "FootBall" : 1050
}, {
    "Yodacast" : 975,
    "FootBall" : 975
}, {
    "Yodacast" : 887,
    "FootBall" : 887
}, {
    "Yodacast" : 784,
    "FootBall" : 784
}, {
    "Yodacast" : 668,
    "FootBall" : 668
}, {
    "Yodacast" : 548,
    "FootBall" : 548
}, {
    "Yodacast" : 434,
    "FootBall" : 434
}, {
    "Yodacast" : 336,
    "FootBall" : 336
}, {
    "Yodacast" : 255,
    "FootBall" : 255
}, {
    "Yodacast" : 196,
    "FootBall" : 196
}, {
    "Yodacast" : 156,
    "FootBall" : 156
}, {
    "Yodacast" : 127,
    "FootBall" : 127
}, {
    "Yodacast" : 64,
    "FootBall" : 64
}, {
    "Yodacast" : 58,
    "FootBall" : 58
}, {
    "Yodacast" : 57,
    "FootBall" : 57
}, {
    "Yodacast" : -19,
    "FootBall" : -19
}, {
    "Yodacast" : -34,
    "FootBall" : -34
}, {
    "Yodacast" : -42,
    "FootBall" : -42
}, {
    "Yodacast" : -43,
    "FootBall" : -43
}, {
    "Yodacast" : -46,
    "FootBall" : -46
}, {
    "Yodacast" : -44,
    "FootBall" : -44
}, {
    "Yodacast" : -31,
    "FootBall" : -31
}, {
    "Yodacast" : 2,
    "FootBall" : 2
}, {
    "Yodacast" : 61,
    "FootBall" : 61
}, {
    "Yodacast" : 152,
    "FootBall" : 152
}, {
    "Yodacast" : 278,
    "FootBall" : 278
}, {
    "Yodacast" : 436,
    "FootBall" : 436
}, {
    "Yodacast" : 613,
    "FootBall" : 613
}, {
    "Yodacast" : 794,
    "FootBall" : 794
}, {
    "Yodacast" : 969,
    "FootBall" : 969
}, {
    "Yodacast" : 1126,
    "FootBall" : 1126
}, {
    "Yodacast" : 1258,
    "FootBall" : 1258
}, {
    "Yodacast" : 1363,
    "FootBall" : 1363
}, {
    "Yodacast" : 1443,
    "FootBall" : 1443
}, {
    "Yodacast" : 1499,
    "FootBall" : 1499
}, {
    "Yodacast" : 1534,
    "FootBall" : 1534
}, {
    "Yodacast" : 1420,
    "FootBall" : 1420
}, {
    "Yodacast" : 1390,
    "FootBall" : 1390
}, {
    "Yodacast" : 1365,
    "FootBall" : 1365
}, {
    "Yodacast" : 1312,
    "FootBall" : 1312
}, {
    "Yodacast" : 1461,
    "FootBall" : 1461
}, {
    "Yodacast" : 1402,
    "FootBall" : 1402
}, {
    "Yodacast" : 1335,
    "FootBall" : 1335
}, {
    "Yodacast" : 1263,
    "FootBall" : 1263
}, {
    "Yodacast" : 1187,
    "FootBall" : 1187
}, {
    "Yodacast" : 1109,
    "FootBall" : 1109
}, {
    "Yodacast" : 1029,
    "FootBall" : 1029
}, {
    "Yodacast" : 946,
    "FootBall" : 946
}, {
    "Yodacast" : 859,
    "FootBall" : 859
}, {
    "Yodacast" : 770,
    "FootBall" : 770
}, {
    "Yodacast" : 678,
    "FootBall" : 678
}, {
    "Yodacast" : 586,
    "FootBall" : 586
}, {
    "Yodacast" : 496,
    "FootBall" : 496
}, {
    "Yodacast" : 409,
    "FootBall" : 409
}, {
    "Yodacast" : 328,
    "FootBall" : 328
}, {
    "Yodacast" : 250,
    "FootBall" : 250
}, {
    "Yodacast" : 172,
    "FootBall" : 172
}, {
    "Yodacast" : 99,
    "FootBall" : 99
}, {
    "Yodacast" : 38,
    "FootBall" : 38
}, {
    "Yodacast" : -2,
    "FootBall" : -2
}, {
    "Yodacast" : 48,
    "FootBall" : 48
}, {
    "Yodacast" : 54,
    "FootBall" : 54
}, {
    "Yodacast" : 42,
    "FootBall" : 42
}, {
    "Yodacast" : 26,
    "FootBall" : 26
}, {
    "Yodacast" : -7,
    "FootBall" : -7
}, {
    "Yodacast" : 6,
    "FootBall" : 6
}, {
    "Yodacast" : 10,
    "FootBall" : 10
}, {
    "Yodacast" : 9,
    "FootBall" : 9
}, {
    "Yodacast" : 9,
    "FootBall" : 9
}, {
    "Yodacast" : 13,
    "FootBall" : 13
}, {
    "Yodacast" : 25,
    "FootBall" : 25
}, {
    "Yodacast" : 51,
    "FootBall" : 51
}, {
    "Yodacast" : 95,
    "FootBall" : 95
}, {
    "Yodacast" : 164,
    "FootBall" : 164
}, {
    "Yodacast" : 263,
    "FootBall" : 263
}, {
    "Yodacast" : 383,
    "FootBall" : 383
}, {
    "Yodacast" : 510,
    "FootBall" : 510
}, {
    "Yodacast" : 635,
    "FootBall" : 635
}, {
    "Yodacast" : 747,
    "FootBall" : 809
}, {
    "Yodacast" : 838,
    "FootBall" : 891
}, {
    "Yodacast" : 904,
    "FootBall" : 896
}, {
    "Yodacast" : 949,
    "FootBall" : 832
}, {
    "Yodacast" : 976,
    "FootBall" : 737
}, {
    "Yodacast" : 984,
    "FootBall" : 712
}, {
    "Yodacast" : 960,
    "FootBall" : 757
}, {
    "Yodacast" : 935,
    "FootBall" : 797
}, {
    "Yodacast" : 904,
    "FootBall" : 840
}, {
    "Yodacast" : 862,
    "FootBall" : 862
}, {
    "Yodacast" : 847,
    "FootBall" : 847
}, {
    "Yodacast" : 800,
    "FootBall" : 800
}, {
    "Yodacast" : 752,
    "FootBall" : 752
}, {
    "Yodacast" : 705,
    "FootBall" : 705
}, {
    "Yodacast" : 661,
    "FootBall" : 661
}, {
    "Yodacast" : 619,
    "FootBall" : 619
}, {
    "Yodacast" : 580,
    "FootBall" : 580
}, {
    "Yodacast" : 544,
    "FootBall" : 544
}, {
    "Yodacast" : 509,
    "FootBall" : 509
}, {
    "Yodacast" : 475,
    "FootBall" : 475
}, {
    "Yodacast" : 437,
    "FootBall" : 437
}, {
    "Yodacast" : 396,
    "FootBall" : 396
}, {
    "Yodacast" : 350,
    "FootBall" : 350
}, {
    "Yodacast" : 299,
    "FootBall" : 299
}, {
    "Yodacast" : 245,
    "FootBall" : 245
}, {
    "Yodacast" : 191,
    "FootBall" : 191
}, {
    "Yodacast" : 143,
    "FootBall" : 143
}, {
    "Yodacast" : 94,
    "FootBall" : 94
}, {
    "Yodacast" : 43,
    "FootBall" : 43
}, {
    "Yodacast" : 2,
    "FootBall" : 2
}, {
    "Yodacast" : 64,
    "FootBall" : 64
}, {
    "Yodacast" : 46,
    "FootBall" : 46
}, {
    "Yodacast" : 57,
    "FootBall" : 57
}, {
    "Yodacast" : 12,
    "FootBall" : 12
}, {
    "Yodacast" : -21,
    "FootBall" : -21
}, {
    "Yodacast" : 2,
    "FootBall" : 2
}, {
    "Yodacast" : 13,
    "FootBall" : 13
}, {
    "Yodacast" : 17,
    "FootBall" : 17
}, {
    "Yodacast" : 9,
    "FootBall" : 9
}, {
    "Yodacast" : -9,
    "FootBall" : -9
}, {
    "Yodacast" : -31,
    "FootBall" : -31
}, {
    "Yodacast" : -49,
    "FootBall" : -49
}, {
    "Yodacast" : -55,
    "FootBall" : -55
}, {
    "Yodacast" : -35,
    "FootBall" : -35
}, {
    "Yodacast" : 23,
    "FootBall" : 23
}, {
    "Yodacast" : 108,
    "FootBall" : 108
}, {
    "Yodacast" : 200,
    "FootBall" : 200
}, {
    "Yodacast" : 288,
    "FootBall" : 288
}, {
    "Yodacast" : 357,
    "FootBall" : 357
}, {
    "Yodacast" : 401,
    "FootBall" : 401
}, {
    "Yodacast" : 417,
    "FootBall" : 417
}, {
    "Yodacast" : 425,
    "FootBall" : 425
}, {
    "Yodacast" : 432,
    "FootBall" : 432
}, {
    "Yodacast" : 433,
    "FootBall" : 433
}, {
    "Yodacast" : 431,
    "FootBall" : 431
}, {
    "Yodacast" : 426,
    "FootBall" : 426
}, {
    "Yodacast" : 420,
    "FootBall" : 420
}, {
    "Yodacast" : 408,
    "FootBall" : 408
}, {
    "Yodacast" : 403,
    "FootBall" : 403
}, {
    "Yodacast" : 398,
    "FootBall" : 398
}, {
    "Yodacast" : 401,
    "FootBall" : 401
}, {
    "Yodacast" : 409,
    "FootBall" : 409
}, {
    "Yodacast" : 422,
    "FootBall" : 422
}, {
    "Yodacast" : 436,
    "FootBall" : 436
}, {
    "Yodacast" : 448,
    "FootBall" : 448
}, {
    "Yodacast" : 454,
    "FootBall" : 454
}, {
    "Yodacast" : 451,
    "FootBall" : 451
}, {
    "Yodacast" : 435,
    "FootBall" : 435
}, {
    "Yodacast" : 404,
    "FootBall" : 404
}, {
    "Yodacast" : 360,
    "FootBall" : 360
}, {
    "Yodacast" : 306,
    "FootBall" : 306
}, {
    "Yodacast" : 248,
    "FootBall" : 248
}, {
    "Yodacast" : 190,
    "FootBall" : 190
}, {
    "Yodacast" : 143,
    "FootBall" : 143
}, {
    "Yodacast" : 111,
    "FootBall" : 111
}, {
    "Yodacast" : 80,
    "FootBall" : 80
}, {
    "Yodacast" : 45,
    "FootBall" : 45
}, {
    "Yodacast" : 10,
    "FootBall" : 10
}, {
    "Yodacast" : 28,
    "FootBall" : 28
}, {
    "Yodacast" : 30,
    "FootBall" : 30
}, {
    "Yodacast" : -6,
    "FootBall" : -6
}, {
    "Yodacast" : -11,
    "FootBall" : -11
}, {
    "Yodacast" : -109,
    "FootBall" : -109
}, {
    "Yodacast" : -68,
    "FootBall" : -68
}, {
    "Yodacast" : -29,
    "FootBall" : -29
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

function drawWeatherYoda() {
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
