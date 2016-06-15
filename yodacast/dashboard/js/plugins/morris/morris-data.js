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
    "Yodacast" : 72.65763873
}, {
    "period" : 2,
    "Target" : 51,
    "Yodacast" : 31.43306261
}, {
    "period" : 3,
    "Target" : 53,
    "Yodacast" : -5.706477276
}, {
    "period" : 4,
    "Target" : 30,
    "Yodacast" : 28.75377921
}, {
    "period" : 5,
    "Target" : 19,
    "Yodacast" : 21.87533145
}, {
    "period" : 6,
    "Target" : 12,
    "Yodacast" : -12.77139747
}, {
    "period" : 7,
    "Target" : 8,
    "Yodacast" : 0.547022929
}, {
    "period" : 8,
    "Target" : 10,
    "Yodacast" : -120.7808452
}, {
    "period" : 9,
    "Target" : 4,
    "Yodacast" : -78.55718325
}, {
    "period" : 10,
    "Target" : 5,
    "Yodacast" : -41.39891149
}, {
    "period" : 11,
    "Target" : 8,
    "Yodacast" : -7.809904312
}, {
    "period" : 12,
    "Target" : 5,
    "Yodacast" : 23.14212544
}, {
    "period" : 13,
    "Target" : 15,
    "Yodacast" : 55.69672765
}, {
    "period" : 14,
    "Target" : 30,
    "Yodacast" : 98.36064128
}, {
    "period" : 15,
    "Target" : 58,
    "Yodacast" : 160.4869844
}, {
    "period" : 16,
    "Target" : 120,
    "Yodacast" : 250.3341977
}, {
    "period" : 17,
    "Target" : 218,
    "Yodacast" : 374.8101875
}, {
    "period" : 18,
    "Target" : 372,
    "Yodacast" : 534.7241266
}, {
    "period" : 19,
    "Target" : 766,
    "Yodacast" : 715.9654833
}, {
    "period" : 20,
    "Target" : 974,
    "Yodacast" : 899.5937676
}, {
    "period" : 21,
    "Target" : 1223,
    "Yodacast" : 1072.570749
}, {
    "period" : 22,
    "Target" : 1411,
    "Yodacast" : 1222.313669
}, {
    "period" : 23,
    "Target" : 1586,
    "Yodacast" : 1342.581557
}, {
    "period" : 24,
    "Target" : 1576,
    "Yodacast" : 1431.648497
}, {
    "period" : 25,
    "Target" : 1563,
    "Yodacast" : 1495.469239
}, {
    "period" : 26,
    "Target" : 1543,
    "Yodacast" : 1537.984045
}, {
    "period" : 27,
    "Target" : 1543,
    "Yodacast" : 1556.247365
}, {
    "period" : 28,
    "Target" : 1489,
    "Yodacast" : 1521.624159
}, {
    "period" : 29,
    "Target" : 1506,
    "Yodacast" : 1453.178061
}, {
    "period" : 30,
    "Target" : 1525,
    "Yodacast" : 1405.78131
}, {
    "period" : 31,
    "Target" : 1534,
    "Yodacast" : 1353.281455
}, {
    "period" : 32,
    "Target" : 1468,
    "Yodacast" : 1475.781354
}, {
    "period" : 33,
    "Target" : 1422,
    "Yodacast" : 1452.197622
}, {
    "period" : 34,
    "Target" : 1518,
    "Yodacast" : 1427.16073
}, {
    "period" : 35,
    "Target" : 1572,
    "Yodacast" : 1401.995548
}, {
    "period" : 36,
    "Target" : 1582,
    "Yodacast" : 1374.970534
}, {
    "period" : 37,
    "Target" : 1724,
    "Yodacast" : 1344.226617
}, {
    "period" : 38,
    "Target" : 1662,
    "Yodacast" : 1305.6944
}, {
    "period" : 39,
    "Target" : 1401,
    "Yodacast" : 1258.602188
}, {
    "period" : 40,
    "Target" : 1307,
    "Yodacast" : 1196.849576
}, {
    "period" : 41,
    "Target" : 1223,
    "Yodacast" : 1112.265348
}, {
    "period" : 42,
    "Target" : 1151,
    "Yodacast" : 1007.424266
}, {
    "period" : 43,
    "Target" : 937,
    "Yodacast" : 876.6453719
}, {
    "period" : 44,
    "Target" : 831,
    "Yodacast" : 724.4430748
}, {
    "period" : 45,
    "Target" : 584,
    "Yodacast" : 570.00881
}, {
    "period" : 46,
    "Target" : 472,
    "Yodacast" : 426.4534041
}, {
    "period" : 47,
    "Target" : 298,
    "Yodacast" : 301.6564646
}, {
    "period" : 48,
    "Target" : 266,
    "Yodacast" : 196.1744713
}, {
    "period" : 49,
    "Target" : 164,
    "Yodacast" : 109.6714968
}, {
    "period" : 50,
    "Target" : 93,
    "Yodacast" : 39.23187988
}, {
    "period" : 51,
    "Target" : 54,
    "Yodacast" : -18.20237789
}, {
    "period" : 52,
    "Target" : 42,
    "Yodacast" : 66.42544855
}, {
    "period" : 53,
    "Target" : 41,
    "Yodacast" : 29.91518215
}, {
    "period" : 54,
    "Target" : 19,
    "Yodacast" : 8.109039732
}, {
    "period" : 55,
    "Target" : 19,
    "Yodacast" : 2.930737191
}, {
    "period" : 56,
    "Target" : 20,
    "Yodacast" : -162.3353754
}, {
    "period" : 57,
    "Target" : 17,
    "Yodacast" : -81.00612411
}, {
    "period" : 58,
    "Target" : 14,
    "Yodacast" : -25.33822833
}, {
    "period" : 59,
    "Target" : 9,
    "Yodacast" : 11.1649789
}, {
    "period" : 60,
    "Target" : 11,
    "Yodacast" : 35.17867141
}, {
    "period" : 61,
    "Target" : 42,
    "Yodacast" : 54.93353899
}, {
    "period" : 62,
    "Target" : 31,
    "Yodacast" : 82.14720186
}, {
    "period" : 63,
    "Target" : 91,
    "Yodacast" : 128.760453
}, {
    "period" : 64,
    "Target" : 143,
    "Yodacast" : 205.5151684
}, {
    "period" : 65,
    "Target" : 248,
    "Yodacast" : 321.2944164
}, {
    "period" : 66,
    "Target" : 455,
    "Yodacast" : 476.3713902
}, {
    "period" : 67,
    "Target" : 859,
    "Yodacast" : 654.4907057
}, {
    "period" : 68,
    "Target" : 859,
    "Yodacast" : 835.3074251
}, {
    "period" : 69,
    "Target" : 1196,
    "Yodacast" : 1004.249132
}, {
    "period" : 70,
    "Target" : 1298,
    "Yodacast" : 1146.479465
}, {
    "period" : 71,
    "Target" : 1400,
    "Yodacast" : 1255.469474
}, {
    "period" : 72,
    "Target" : 1388,
    "Yodacast" : 1331.019689
}, {
    "period" : 73,
    "Target" : 1418,
    "Yodacast" : 1386.102513
}, {
    "period" : 74,
    "Target" : 1427,
    "Yodacast" : 1425.458055
}, {
    "period" : 75,
    "Target" : 1399,
    "Yodacast" : 1447.153838
}, {
    "period" : 76,
    "Target" : 1345,
    "Yodacast" : 1446.712057
}, {
    "period" : 77,
    "Target" : 1373,
    "Yodacast" : 1437.817022
}, {
    "period" : 78,
    "Target" : 1401,
    "Yodacast" : 1425.433641
}, {
    "period" : 79,
    "Target" : 1189,
    "Yodacast" : 1406.126882
}, {
    "period" : 80,
    "Target" : 1375,
    "Yodacast" : 1402.483455
}, {
    "period" : 81,
    "Target" : 1282,
    "Yodacast" : 1382.682641
}, {
    "period" : 82,
    "Target" : 1416,
    "Yodacast" : 1367.334267
}, {
    "period" : 83,
    "Target" : 1417,
    "Yodacast" : 1352.196648
}, {
    "period" : 84,
    "Target" : 1462,
    "Yodacast" : 1335.564285
}, {
    "period" : 85,
    "Target" : 1417,
    "Yodacast" : 1312.112474
}, {
    "period" : 86,
    "Target" : 1433,
    "Yodacast" : 1278.462974
}, {
    "period" : 87,
    "Target" : 1278,
    "Yodacast" : 1239.87256
}, {
    "period" : 88,
    "Target" : 1170,
    "Yodacast" : 1191.315531
}, {
    "period" : 89,
    "Target" : 1025,
    "Yodacast" : 1123.319024
}, {
    "period" : 90,
    "Target" : 1007,
    "Yodacast" : 1035.921094
}, {
    "period" : 91,
    "Target" : 884,
    "Yodacast" : 922.0027599
}, {
    "period" : 92,
    "Target" : 740,
    "Yodacast" : 783.339356
}, {
    "period" : 93,
    "Target" : 520,
    "Yodacast" : 634.6045767
}, {
    "period" : 94,
    "Target" : 378,
    "Yodacast" : 489.7418866
}, {
    "period" : 95,
    "Target" : 244,
    "Yodacast" : 355.6567916
}, {
    "period" : 96,
    "Target" : 199,
    "Yodacast" : 227.4302011
}, {
    "period" : 97,
    "Target" : 147,
    "Yodacast" : 106.8948949
}, {
    "period" : 98,
    "Target" : 93,
    "Yodacast" : -11.12698444
}, {
    "period" : 99,
    "Target" : 53,
    "Yodacast" : -137.4553284
}, {
    "period" : 100,
    "Target" : 37,
    "Yodacast" : 48.31857058
}, {
    "period" : 101,
    "Target" : 25,
    "Yodacast" : 20.1862843
}, {
    "period" : 102,
    "Target" : 21,
    "Yodacast" : 26.7891107
}, {
    "period" : 103,
    "Target" : 23,
    "Yodacast" : 81.37894
}, {
    "period" : 104,
    "Target" : 6,
    "Yodacast" : -6.648509653
}, {
    "period" : 105,
    "Target" : 16,
    "Yodacast" : 32.80426009
}, {
    "period" : 106,
    "Target" : 12,
    "Yodacast" : 55.11799468
}, {
    "period" : 107,
    "Target" : 7,
    "Yodacast" : 66.13940508
}, {
    "period" : 108,
    "Target" : 15,
    "Yodacast" : 72.02630494
}, {
    "period" : 109,
    "Target" : 20,
    "Yodacast" : 81.73347959
}, {
    "period" : 110,
    "Target" : 26,
    "Yodacast" : 107.4443861
}, {
    "period" : 111,
    "Target" : 68,
    "Yodacast" : 161.1105412
}, {
    "period" : 112,
    "Target" : 120,
    "Yodacast" : 251.3055475
}, {
    "period" : 113,
    "Target" : 249,
    "Yodacast" : 380.9891959
}, {
    "period" : 114,
    "Target" : 394,
    "Yodacast" : 543.892832
}, {
    "period" : 115,
    "Target" : 646,
    "Yodacast" : 723.6278788
}, {
    "period" : 116,
    "Target" : 749,
    "Yodacast" : 902.1249389
}, {
    "period" : 117,
    "Target" : 968,
    "Yodacast" : 1065.94714
}, {
    "period" : 118,
    "Target" : 1238,
    "Yodacast" : 1204.607737
}, {
    "period" : 119,
    "Target" : 1361,
    "Yodacast" : 1312.997426
}, {
    "period" : 120,
    "Target" : 1373,
    "Yodacast" : 1390.767383
}, {
    "period" : 121,
    "Target" : 1353,
    "Yodacast" : 1442.419357
}, {
    "period" : 122,
    "Target" : 1311,
    "Yodacast" : 1471.443719
}, {
    "period" : 123,
    "Target" : 1473,
    "Yodacast" : 1483.457493
}, {
    "period" : 124,
    "Target" : 1341,
    "Yodacast" : 1411.735271
}, {
    "period" : 125,
    "Target" : 1297,
    "Yodacast" : 1371.968071
}, {
    "period" : 126,
    "Target" : 1219,
    "Yodacast" : 1346.210864
}, {
    "period" : 127,
    "Target" : 1284,
    "Yodacast" : 1305.084729
}, {
    "period" : 128,
    "Target" : 1314,
    "Yodacast" : 1392.880617
}, {
    "period" : 129,
    "Target" : 1295,
    "Yodacast" : 1349.439786
}, {
    "period" : 130,
    "Target" : 1205,
    "Yodacast" : 1304.024987
}, {
    "period" : 131,
    "Target" : 1339,
    "Yodacast" : 1261.438606
}, {
    "period" : 132,
    "Target" : 1346,
    "Yodacast" : 1221.602128
}, {
    "period" : 133,
    "Target" : 1247,
    "Yodacast" : 1185.155246
}, {
    "period" : 134,
    "Target" : 1267,
    "Yodacast" : 1149.003603
}, {
    "period" : 135,
    "Target" : 1108,
    "Yodacast" : 1105.275715
}, {
    "period" : 136,
    "Target" : 1091,
    "Yodacast" : 1050.49491
}, {
    "period" : 137,
    "Target" : 960,
    "Yodacast" : 982.6850675
}, {
    "period" : 138,
    "Target" : 918,
    "Yodacast" : 899.4450379
}, {
    "period" : 139,
    "Target" : 761,
    "Yodacast" : 801.5589609
}, {
    "period" : 140,
    "Target" : 610,
    "Yodacast" : 691.441188
}, {
    "period" : 141,
    "Target" : 487,
    "Yodacast" : 572.8014345
}, {
    "period" : 142,
    "Target" : 332,
    "Yodacast" : 454.0757715
}, {
    "period" : 143,
    "Target" : 269,
    "Yodacast" : 342.2965247
}, {
    "period" : 144,
    "Target" : 240,
    "Yodacast" : 239.0848993
}, {
    "period" : 145,
    "Target" : 140,
    "Yodacast" : 143.5298839
}, {
    "period" : 146,
    "Target" : 93,
    "Yodacast" : 51.34298477
}, {
    "period" : 147,
    "Target" : 64,
    "Yodacast" : -40.61794824
}, {
    "period" : 148,
    "Target" : 57,
    "Yodacast" : 66.72285005
}, {
    "period" : 149,
    "Target" : 32,
    "Yodacast" : 67.31165749
}, {
    "period" : 150,
    "Target" : 11,
    "Yodacast" : 77.09105661
}, {
    "period" : 151,
    "Target" : 16,
    "Yodacast" : 83.12429343
}, {
    "period" : 152,
    "Target" : 15,
    "Yodacast" : 51.47558067
}, {
    "period" : 153,
    "Target" : 9,
    "Yodacast" : 43.01431243
}, {
    "period" : 154,
    "Target" : 7,
    "Yodacast" : 28.87156048
}, {
    "period" : 155,
    "Target" : 12,
    "Yodacast" : 6.725505769
}, {
    "period" : 156,
    "Target" : 14,
    "Yodacast" : -14.81853109
}, {
    "period" : 157,
    "Target" : 31,
    "Yodacast" : -23.973166
}, {
    "period" : 158,
    "Target" : 38,
    "Yodacast" : -7.057531572
}, {
    "period" : 159,
    "Target" : 64,
    "Yodacast" : 45.69293574
}, {
    "period" : 160,
    "Target" : 125,
    "Yodacast" : 141.7443341
}, {
    "period" : 161,
    "Target" : 246,
    "Yodacast" : 287.1263554
}, {
    "period" : 162,
    "Target" : 383,
    "Yodacast" : 475.2790136
}, {
    "period" : 163,
    "Target" : 636,
    "Yodacast" : 680.0996183
}, {
    "period" : 164,
    "Target" : 764,
    "Yodacast" : 877.4873637
}, {
    "period" : 165,
    "Target" : 1027,
    "Yodacast" : 1056.298292
}, {
    "period" : 166,
    "Target" : 1146,
    "Yodacast" : 1203.716051
}, {
    "period" : 167,
    "Target" : 1238,
    "Yodacast" : 1313.526104
}, {
    "period" : 168,
    "Target" : 1286,
    "Yodacast" : 1388.253369
}, {
    "period" : 169,
    "Target" : 1448,
    "Yodacast" : 1442.984073
}, {
    "period" : 170,
    "Target" : 1328,
    "Yodacast" : 1481.738759
}, {
    "period" : 171,
    "Target" : 1308,
    "Yodacast" : 1501.469912
}, {
    "period" : 172,
    "Target" : 1232,
    "Yodacast" : 1386.867662
}, {
    "period" : 173,
    "Target" : 1239,
    "Yodacast" : 1332.747908
}, {
    "period" : 174,
    "Target" : 1256,
    "Yodacast" : 1306.976544
}, {
    "period" : 175,
    "Target" : 1256,
    "Yodacast" : 1266.762435
}, {
    "period" : 176,
    "Target" : 1240,
    "Yodacast" : 1431.771982
}, {
    "period" : 177,
    "Target" : 1192,
    "Yodacast" : 1390.396097
}, {
    "period" : 178,
    "Target" : 1195,
    "Yodacast" : 1348.401245
}, {
    "period" : 179,
    "Target" : 1276,
    "Yodacast" : 1306.125414
}, {
    "period" : 180,
    "Target" : 1349,
    "Yodacast" : 1263.266619
}, {
    "period" : 181,
    "Target" : 1272,
    "Yodacast" : 1218.083111
}, {
    "period" : 182,
    "Target" : 1298,
    "Yodacast" : 1168.284524
}, {
    "period" : 183,
    "Target" : 1189,
    "Yodacast" : 1113.313275
}, {
    "period" : 184,
    "Target" : 1000,
    "Yodacast" : 1050.273533
}, {
    "period" : 185,
    "Target" : 922,
    "Yodacast" : 974.9268142
}, {
    "period" : 186,
    "Target" : 823,
    "Yodacast" : 886.5444924
}, {
    "period" : 187,
    "Target" : 757,
    "Yodacast" : 783.5498516
}, {
    "period" : 188,
    "Target" : 719,
    "Yodacast" : 668.2245654
}, {
    "period" : 189,
    "Target" : 543,
    "Yodacast" : 547.9281167
}, {
    "period" : 190,
    "Target" : 427,
    "Yodacast" : 433.9796736
}, {
    "period" : 191,
    "Target" : 282,
    "Yodacast" : 335.9916735
}, {
    "period" : 192,
    "Target" : 263,
    "Yodacast" : 255.2842243
}, {
    "period" : 193,
    "Target" : 176,
    "Yodacast" : 195.9788832
}, {
    "period" : 194,
    "Target" : 122,
    "Yodacast" : 155.7353373
}, {
    "period" : 195,
    "Target" : 80,
    "Yodacast" : 127.402737
}, {
    "period" : 196,
    "Target" : 73,
    "Yodacast" : 63.54501261
}, {
    "period" : 197,
    "Target" : 46,
    "Yodacast" : 58.22501492
}, {
    "period" : 198,
    "Target" : 24,
    "Yodacast" : 56.83393251
}, {
    "period" : 199,
    "Target" : 17,
    "Yodacast" : -19.10852639
}, {
    "period" : 200,
    "Target" : 11,
    "Yodacast" : -34.0535885
}, {
    "period" : 201,
    "Target" : 12,
    "Yodacast" : -42.42967389
}, {
    "period" : 202,
    "Target" : 8,
    "Yodacast" : -43.46423583
}, {
    "period" : 203,
    "Target" : 22,
    "Yodacast" : -45.88026634
}, {
    "period" : 204,
    "Target" : 19,
    "Yodacast" : -44.08175725
}, {
    "period" : 205,
    "Target" : 28,
    "Yodacast" : -30.83433648
}, {
    "period" : 206,
    "Target" : 49,
    "Yodacast" : 1.89844688
}, {
    "period" : 207,
    "Target" : 80,
    "Yodacast" : 61.06631099
}, {
    "period" : 208,
    "Target" : 169,
    "Yodacast" : 152.0077455
}, {
    "period" : 209,
    "Target" : 348,
    "Yodacast" : 277.9431191
}, {
    "period" : 210,
    "Target" : 455,
    "Yodacast" : 435.7483275
}, {
    "period" : 211,
    "Target" : 879,
    "Yodacast" : 612.9228852
}, {
    "period" : 212,
    "Target" : 996,
    "Yodacast" : 794.4069572
}, {
    "period" : 213,
    "Target" : 1171,
    "Yodacast" : 969.0755463
}, {
    "period" : 214,
    "Target" : 1359,
    "Yodacast" : 1126.158133
}, {
    "period" : 215,
    "Target" : 1461,
    "Yodacast" : 1258.245924
}, {
    "period" : 216,
    "Target" : 1469,
    "Yodacast" : 1362.747302
}, {
    "period" : 217,
    "Target" : 1484,
    "Yodacast" : 1442.580374
}, {
    "period" : 218,
    "Target" : 1443,
    "Yodacast" : 1499.133696
}, {
    "period" : 219,
    "Target" : 1490,
    "Yodacast" : 1533.594641
}, {
    "period" : 220,
    "Target" : 1561,
    "Yodacast" : 1419.964262
}, {
    "period" : 221,
    "Target" : 1450,
    "Yodacast" : 1390.151546
}, {
    "period" : 222,
    "Target" : 1370,
    "Yodacast" : 1364.676097
}, {
    "period" : 223,
    "Target" : 1314,
    "Yodacast" : 1312.122342
}, {
    "period" : 224,
    "Target" : 1444,
    "Yodacast" : 1461.160744
}, {
    "period" : 225,
    "Target" : 1365,
    "Yodacast" : 1402.359533
}, {
    "period" : 226,
    "Target" : 1419,
    "Yodacast" : 1335.113818
}, {
    "period" : 227,
    "Target" : 1312,
    "Yodacast" : 1262.92726
}, {
    "period" : 228,
    "Target" : 1312,
    "Yodacast" : 1186.892129
}, {
    "period" : 229,
    "Target" : 1221,
    "Yodacast" : 1108.80861
}, {
    "period" : 230,
    "Target" : 1076,
    "Yodacast" : 1028.966957
}, {
    "period" : 231,
    "Target" : 950,
    "Yodacast" : 945.7227687
}, {
    "period" : 232,
    "Target" : 849,
    "Yodacast" : 859.2100094
}, {
    "period" : 233,
    "Target" : 752,
    "Yodacast" : 769.8202631
}, {
    "period" : 234,
    "Target" : 717,
    "Yodacast" : 678.3842596
}, {
    "period" : 235,
    "Target" : 581,
    "Yodacast" : 586.4244482
}, {
    "period" : 236,
    "Target" : 485,
    "Yodacast" : 496.0571444
}, {
    "period" : 237,
    "Target" : 361,
    "Yodacast" : 409.4874932
}, {
    "period" : 238,
    "Target" : 318,
    "Yodacast" : 328.1202204
}, {
    "period" : 239,
    "Target" : 258,
    "Yodacast" : 250.0787376
}, {
    "period" : 240,
    "Target" : 242,
    "Yodacast" : 172.3323784
}, {
    "period" : 241,
    "Target" : 157,
    "Yodacast" : 98.79934508
}, {
    "period" : 242,
    "Target" : 86,
    "Yodacast" : 37.56562091
}, {
    "period" : 243,
    "Target" : 91,
    "Yodacast" : -2.230654557
}, {
    "period" : 244,
    "Target" : 54,
    "Yodacast" : 48.46918014
}, {
    "period" : 245,
    "Target" : 41,
    "Yodacast" : 54.03634416
}, {
    "period" : 246,
    "Target" : 31,
    "Yodacast" : 42.17684304
}, {
    "period" : 247,
    "Target" : 31,
    "Yodacast" : 25.8787565
}, {
    "period" : 248,
    "Target" : 21,
    "Yodacast" : -7.195841221
}, {
    "period" : 249,
    "Target" : 13,
    "Yodacast" : 6.352454735
}, {
    "period" : 250,
    "Target" : 12,
    "Yodacast" : 10.02326055
}, {
    "period" : 251,
    "Target" : 11,
    "Yodacast" : 9.404420957
}, {
    "period" : 252,
    "Target" : 16,
    "Yodacast" : 9.362944572
}, {
    "period" : 253,
    "Target" : 17,
    "Yodacast" : 12.98365583
}, {
    "period" : 254,
    "Target" : 19,
    "Yodacast" : 25.18939865
}, {
    "period" : 255,
    "Target" : 30,
    "Yodacast" : 50.94670335
}, {
    "period" : 256,
    "Target" : 59,
    "Yodacast" : 94.94069623
}, {
    "period" : 257,
    "Target" : 119,
    "Yodacast" : 164.4576585
}, {
    "period" : 258,
    "Target" : 197,
    "Yodacast" : 263.4505051
}, {
    "period" : 259,
    "Target" : 406,
    "Yodacast" : 383.1779774
}, {
    "period" : 260,
    "Target" : 507,
    "Yodacast" : 509.7983112
}, {
    "period" : 261,
    "Target" : 623,
    "Yodacast" : 634.6374828
}, {
    "period" : 262,
    "Target" : 724,
    "Yodacast" : 746.7714186
}, {
    "period" : 263,
    "Target" : 855,
    "Yodacast" : 837.5655973
}, {
    "period" : 264,
    "Target" : 917,
    "Yodacast" : 903.6346608
}, {
    "period" : 265,
    "Target" : 919,
    "Yodacast" : 948.8623381
}, {
    "period" : 266,
    "Target" : 979,
    "Yodacast" : 975.5061209
}, {
    "period" : 267,
    "Target" : 935,
    "Yodacast" : 984.1568634
}, {
    "period" : 268,
    "Target" : 947,
    "Yodacast" : 960.0929039
}, {
    "period" : 269,
    "Target" : 911,
    "Yodacast" : 934.935688
}, {
    "period" : 270,
    "Target" : 844,
    "Yodacast" : 903.9462151
}, {
    "period" : 271,
    "Target" : 828,
    "Yodacast" : 861.7978141
}, {
    "period" : 272,
    "Target" : 815,
    "Yodacast" : 847.2511871
}, {
    "period" : 273,
    "Target" : 736,
    "Yodacast" : 799.8230629
}, {
    "period" : 274,
    "Target" : 735,
    "Yodacast" : 752.0163901
}, {
    "period" : 275,
    "Target" : 751,
    "Yodacast" : 705.1569993
}, {
    "period" : 276,
    "Target" : 765,
    "Yodacast" : 660.5519367
}, {
    "period" : 277,
    "Target" : 683,
    "Yodacast" : 618.8037615
}, {
    "period" : 278,
    "Target" : 700,
    "Yodacast" : 580.2030364
}, {
    "period" : 279,
    "Target" : 578,
    "Yodacast" : 544.1162149
}, {
    "period" : 280,
    "Target" : 505,
    "Yodacast" : 509.4465439
}, {
    "period" : 281,
    "Target" : 485,
    "Yodacast" : 474.728468
}, {
    "period" : 282,
    "Target" : 424,
    "Yodacast" : 437.1812553
}, {
    "period" : 283,
    "Target" : 371,
    "Yodacast" : 395.7220455
}, {
    "period" : 284,
    "Target" : 300,
    "Yodacast" : 350.0466435
}, {
    "period" : 285,
    "Target" : 273,
    "Yodacast" : 299.4109608
}, {
    "period" : 286,
    "Target" : 218,
    "Yodacast" : 244.9118901
}, {
    "period" : 287,
    "Target" : 161,
    "Yodacast" : 191.4223499
}, {
    "period" : 288,
    "Target" : 136,
    "Yodacast" : 143.2776656
}, {
    "period" : 289,
    "Target" : 105,
    "Yodacast" : 93.58607064
}, {
    "period" : 290,
    "Target" : 70,
    "Yodacast" : 43.48932721
}, {
    "period" : 291,
    "Target" : 39,
    "Yodacast" : 2.228437459
}, {
    "period" : 292,
    "Target" : 39,
    "Yodacast" : 64.28753175
}, {
    "period" : 293,
    "Target" : 35,
    "Yodacast" : 46.33615625
}, {
    "period" : 294,
    "Target" : 31,
    "Yodacast" : 57.2659267
}, {
    "period" : 295,
    "Target" : 26,
    "Yodacast" : 12.32935651
}, {
    "period" : 296,
    "Target" : 19,
    "Yodacast" : -21.31565068
}, {
    "period" : 297,
    "Target" : 22,
    "Yodacast" : 1.635828754
}, {
    "period" : 298,
    "Target" : 20,
    "Yodacast" : 13.35592084
}, {
    "period" : 299,
    "Target" : 14,
    "Yodacast" : 16.91713634
}, {
    "period" : 300,
    "Target" : 5,
    "Yodacast" : 8.831676287
}, {
    "period" : 301,
    "Target" : 13,
    "Yodacast" : -9.339483552
}, {
    "period" : 302,
    "Target" : 9,
    "Yodacast" : -31.31835317
}, {
    "period" : 303,
    "Target" : 10,
    "Yodacast" : -49.18627406
}, {
    "period" : 304,
    "Target" : 36,
    "Yodacast" : -54.63622867
}, {
    "period" : 305,
    "Target" : 57,
    "Yodacast" : -34.65271499
}, {
    "period" : 306,
    "Target" : 73,
    "Yodacast" : 23.06997986
}, {
    "period" : 307,
    "Target" : 150,
    "Yodacast" : 108.1055939
}, {
    "period" : 308,
    "Target" : 201,
    "Yodacast" : 199.8454997
}, {
    "period" : 309,
    "Target" : 267,
    "Yodacast" : 287.6697936
}, {
    "period" : 310,
    "Target" : 335,
    "Yodacast" : 356.6980234
}, {
    "period" : 311,
    "Target" : 424,
    "Yodacast" : 400.7733544
}, {
    "period" : 312,
    "Target" : 522,
    "Yodacast" : 417.2260393
}, {
    "period" : 313,
    "Target" : 534,
    "Yodacast" : 425.1351922
}, {
    "period" : 314,
    "Target" : 538,
    "Yodacast" : 431.9985127
}, {
    "period" : 315,
    "Target" : 500,
    "Yodacast" : 433.171116
}, {
    "period" : 316,
    "Target" : 537,
    "Yodacast" : 430.9121598
}, {
    "period" : 317,
    "Target" : 514,
    "Yodacast" : 425.7375466
}, {
    "period" : 318,
    "Target" : 486,
    "Yodacast" : 419.858834
}, {
    "period" : 319,
    "Target" : 404,
    "Yodacast" : 408.4422217
}, {
    "period" : 320,
    "Target" : 406,
    "Yodacast" : 402.9677888
}, {
    "period" : 321,
    "Target" : 397,
    "Yodacast" : 398.3839074
}, {
    "period" : 322,
    "Target" : 393,
    "Yodacast" : 400.7264885
}, {
    "period" : 323,
    "Target" : 429,
    "Yodacast" : 408.9578832
}, {
    "period" : 324,
    "Target" : 417,
    "Yodacast" : 421.8749164
}, {
    "period" : 325,
    "Target" : 476,
    "Yodacast" : 436.1604133
}, {
    "period" : 326,
    "Target" : 444,
    "Yodacast" : 448.1214876
}, {
    "period" : 327,
    "Target" : 480,
    "Yodacast" : 454.2847798
}, {
    "period" : 328,
    "Target" : 477,
    "Yodacast" : 450.7589027
}, {
    "period" : 329,
    "Target" : 453,
    "Yodacast" : 434.5363542
}, {
    "period" : 330,
    "Target" : 491,
    "Yodacast" : 403.8955905
}, {
    "period" : 331,
    "Target" : 422,
    "Yodacast" : 359.9270114
}, {
    "period" : 332,
    "Target" : 373,
    "Yodacast" : 306.3625756
}, {
    "period" : 333,
    "Target" : 293,
    "Yodacast" : 247.598137
}, {
    "period" : 334,
    "Target" : 247,
    "Yodacast" : 189.5729203
}, {
    "period" : 335,
    "Target" : 166,
    "Yodacast" : 142.8249302
}, {
    "period" : 336,
    "Target" : 122,
    "Yodacast" : 110.691126
}, {
    "period" : 337,
    "Target" : 67,
    "Yodacast" : 80.3435249
}, {
    "period" : 338,
    "Target" : 52,
    "Yodacast" : 44.93973525
}, {
    "period" : 339,
    "Target" : 47,
    "Yodacast" : 9.917936801
}, {
    "period" : 340,
    "Target" : 28,
    "Yodacast" : 27.87932175
}, {
    "period" : 341,
    "Target" : 16,
    "Yodacast" : 30.10060576
}, {
    "period" : 342,
    "Target" : 16,
    "Yodacast" : -6.375270524
}, {
    "period" : 343,
    "Target" : 12,
    "Yodacast" : -10.97576761
}, {
    "period" : 344,
    "Target" : 9,
    "Yodacast" : -109.0908804
}, {
    "period" : 345,
    "Target" : 17,
    "Yodacast" : -67.74500467
}, {
    "period" : 346,
    "Target" : 14,
    "Yodacast" : -29.23982433
} ]
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

    callChart = Morris.Area({
        element : 'morris-area-chart',
        data : basicYodadata,
        xkey : 'period',
        ykeys : [ 'Target', 'Yodacast' ],
        labels : [ 'Target', 'Yodacast' ],
        pointSize : 2,
        parseTime : false,
        hideHover : 'auto',
        resize : true,
        lineColors : [ lineColorsChoose[colorChoice] ]
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
