const Classes = {
  Bowmaster: "archer",
  Marksman: "archer",
  Shadower: "thief",
  Buccaneer: "bucc",
  Corsair: "corsair",
  "Dark Knight": "warrior",
  Hero: "warrior",
  Paladin: "warrior",
  Magician: "magician",
  Beginner: "beginner",
  "Night Lord": "thief",
};


const HealthPointGainMinimumResetAP = {
  archer: 16,
  thief: 16,
  corsair: 16,
  bucc: 36,
  warrior: 50,
  magician: 6,
  beginner: 8,
};

const HealthPointGainAverageResetAP = {
  archer: 18,
  thief: 18,
  corsair: 18,
  bucc: 38,
  warrior: 52,
  magician: 8,
  beginner: 10,
};

const HealthPointGainMinimumFreshAP = {
  archer: 16,
  thief: 20,
  corsair: 20,
  bucc: 40,
  warrior: 50,
  magician: 10,
  beginner: 8,
};

const HealthPointGainAverageFreshAP = {
  archer: 18,
  thief: 22,
  corsair: 20,
  bucc: 40,
  warrior: 52.5,
  magician: 15,
  beginner: 10,
};

const ManaPointLoss = {
  archer: 12,
  thief: 12,
  corsair: 16,
  bucc: 16,
  warrior: 4,
  magician: 30,
  beginner: 8,
};

// minimumManaPointsRanged is the minimum MP numbers for archers and thieves
const MinimumManaPointsRanged = [
  //                  5                        10                       15
  162, 176, 190, 204, 218, 232, 246, 260, 274, 288, 302, 316, 330, 344, 358,
  //                  20                       25                       30
  372, 386, 400, 414, 428, 442, 456, 470, 484, 498, 512, 526, 540, 554, 568,
  //                  35                       40                       45
  582, 596, 610, 624, 638, 652, 666, 680, 694, 708, 722, 736, 750, 764, 778,
  //                  50                       55                       60
  792, 806, 820, 834, 848, 862, 876, 890, 904, 918, 932, 946, 960, 974, 988,
  //                      65                            70
  1002, 1016, 1030, 1044, 1058, 1072, 1086, 1100, 1114, 1128, 1142, 1156,
  //                      77                            82
  1170, 1184, 1198, 1212, 1226, 1240, 1254, 1268, 1282, 1296, 1310, 1324,
  //                      89                            94
  1338, 1352, 1366, 1380, 1394, 1408, 1422, 1436, 1450, 1464, 1478, 1492,
  //                      101                           106
  1506, 1520, 1534, 1548, 1562, 1576, 1590, 1604, 1618, 1632, 1646, 1660,
  //                      113                           118
  1674, 1688, 1702, 1716, 1730, 1744, 1758, 1772, 1786, 1800, 1814, 1828,
  //                      125                           130
  1842, 1856, 1870, 1884, 1898, 1912, 1926, 1940, 1954, 1968, 1982, 1996,
  //                      137                           142
  2010, 2024, 2038, 2052, 2066, 2080, 2094, 2108, 2122, 2136, 2150, 2164,
  //                      149                           154
  2178, 2192, 2206, 2220, 2234, 2248, 2262, 2276, 2290, 2304, 2318, 2332,
  //                      161                           166
  2346, 2360, 2374, 2388, 2402, 2416, 2430, 2444, 2458, 2472, 2486, 2500,
  //                      173                           178
  2514, 2528, 2542, 2556, 2570, 2584, 2598, 2612, 2626, 2640, 2654, 2668,
  //                      185                           190
  2682, 2696, 2710, 2724, 2738, 2752, 2766, 2780, 2794, 2808, 2822, 2836,
  //                      197
  2850, 2864, 2878, 2892, 2906, 2920, 2934, 2948,
];

// minimumManaPointsPirates is the minimum MP numbers for buccaneers and corsairs
const MinimumManaPointsPirates = [
  //                  5                        10                       15
  129, 147, 165, 183, 201, 219, 237, 255, 273, 291, 309, 327, 345, 363, 381,
  //                  20                       25                       30
  399, 417, 435, 453, 471, 489, 507, 525, 543, 561, 579, 597, 615, 633, 651,
  //                  35                       40                       45
  669, 687, 705, 723, 741, 759, 777, 795, 813, 831, 849, 867, 885, 903, 921,
  //                  50                            55
  939, 957, 975, 993, 1011, 1029, 1047, 1065, 1083, 1101, 1119, 1137, 1155,
  //                      63                            68
  1173, 1191, 1209, 1227, 1245, 1263, 1281, 1299, 1317, 1335, 1353, 1371, 1389,
  //                      76                            81
  1407, 1425, 1443, 1461, 1479, 1497, 1515, 1533, 1551, 1569, 1587, 1605, 1623,
  //                      89                            94
  1641, 1659, 1677, 1695, 1713, 1731, 1749, 1767, 1785, 1803, 1821, 1839, 1857,
  //                      102                           107
  1875, 1893, 1911, 1929, 1947, 1965, 1983, 2001, 2019, 2037, 2055, 2073, 2091,
  //                      115                           120
  2109, 2127, 2145, 2163, 2181, 2199, 2217, 2235, 2253, 2271, 2289, 2307, 2325,
  //                      128                           133
  2343, 2361, 2379, 2397, 2415, 2433, 2451, 2469, 2487, 2505, 2523, 2541, 2559,
  //                      141                           146
  2577, 2595, 2613, 2631, 2649, 2667, 2685, 2703, 2721, 2739, 2757, 2775, 2793,
  //                      154                           159
  2811, 2829, 2847, 2865, 2883, 2901, 2919, 2937, 2955, 2973, 2991, 3009, 3027,
  //                      167                           172
  3045, 3063, 3081, 3099, 3117, 3135, 3153, 3171, 3189, 3207, 3225, 3243, 3261,
  //                      180                           185
  3279, 3297, 3315, 3333, 3351, 3369, 3387, 3405, 3423, 3441, 3459, 3477, 3495,
  //                      193                           198
  3513, 3531, 3549, 3567, 3585, 3603, 3621, 3639, 3657, 3675, 3693, 3711,
];

// MinimumManaPointsWarrior is the minimum MP numbers for warriors
const MinimumManaPointsWarrior = [
  //                  5                        10                       15
  160, 164, 168, 172, 176, 180, 184, 188, 192, 196, 200, 204, 208, 212, 216,
  //                  20                       25                       30
  220, 224, 228, 232, 236, 240, 244, 248, 252, 256, 260, 264, 268, 272, 276,
  //                  35                       40                       45
  280, 284, 288, 292, 296, 300, 304, 308, 312, 316, 320, 324, 328, 332, 336,
  //                  50                       55                       60
  340, 344, 348, 352, 356, 360, 364, 368, 372, 376, 380, 384, 388, 392, 396,
  //                  65                       70                       75
  400, 404, 408, 412, 416, 420, 424, 428, 432, 436, 440, 444, 448, 452, 456,
  //                  80                       85                       90
  460, 464, 468, 472, 476, 480, 484, 488, 492, 496, 500, 504, 508, 512, 516,
  //                  95                       100                      105
  520, 524, 528, 532, 536, 540, 544, 548, 552, 556, 560, 564, 568, 572, 576,
  //                  110                      115                      120
  580, 584, 588, 592, 596, 600, 604, 608, 612, 616, 620, 624, 628, 632, 636,
  //                  125                      130                      135
  640, 644, 648, 652, 656, 660, 664, 668, 672, 676, 680, 684, 688, 692, 696,
  //                  140                      145                      150
  700, 704, 708, 712, 716, 720, 724, 728, 732, 736, 740, 744, 748, 752, 756,
  //                  155                      160                      165
  760, 764, 768, 772, 776, 780, 784, 788, 792, 796, 800, 804, 808, 812, 816,
  //                  170                      175                      180
  820, 824, 828, 832, 836, 840, 844, 848, 852, 856, 860, 864, 868, 872, 876,
  //                  185                      190                      195
  880, 884, 888, 892, 896, 900, 904, 908, 912, 916, 920, 924, 928, 932, 936,
  //                  200
  940, 944, 948, 952, 956,
];

// MinimumManaPointsMagician is the minimum MP numbers for magicians
const MinimumManaPointsMagician = [
  //                  5                        10                       15
  510, 532, 554, 576, 598, 620, 642, 664, 686, 708, 730, 752, 774, 796, 818,
  //                  20                        25                      29
  840, 862, 884, 906, 928, 950, 972, 994, 1016, 1038, 1060, 1082, 1104, 1126,
  //                  33                          38                      42
  1148, 1170, 1192, 1214, 1236, 1258, 1280, 1302, 1324, 1346, 1368, 1390, 1412,
  //                  46                          51                      55
  1434, 1456, 1478, 1500, 1522, 1544, 1566, 1588, 1610, 1632, 1654, 1676, 1698,
  //                  59                          64                      68
  1720, 1742, 1764, 1786, 1808, 1830, 1852, 1874, 1896, 1918, 1940, 1962, 1984,
  //                  72                          77                      81
  2006, 2028, 2050, 2072, 2094, 2116, 2138, 2160, 2182, 2204, 2226, 2248, 2270,
  //                  85                          90                      94
  2292, 2314, 2336, 2358, 2380, 2402, 2424, 2446, 2468, 2490, 2512, 2534, 2556,
  //                  98                          103                     107
  2578, 2600, 2622, 2644, 2666, 2688, 2710, 2732, 2754, 2776, 2798, 2820, 2842,
  //                 111                          116                     120
  2864, 2886, 2908, 2930, 2952, 2974, 2996, 3018, 3040, 3062, 3084, 3106, 3128,
  //                 124                          129                     133
  3150, 3172, 3194, 3216, 3238, 3260, 3282, 3304, 3326, 3348, 3370, 3392, 3414,
  //                 137                          142                     146
  3436, 3458, 3480, 3502, 3524, 3546, 3568, 3590, 3612, 3634, 3656, 3678, 3700,
  //                 150                          155                     159
  3722, 3744, 3766, 3788, 3810, 3832, 3854, 3876, 3898, 3920, 3942, 3964, 3986,
  //                 163                          168                     172
  4008, 4030, 4052, 4074, 4096, 4118, 4140, 4162, 4184, 4206, 4228, 4250, 4272,
  //                 176                          181                     185
  4294, 4316, 4338, 4360, 4382, 4404, 4426, 4448, 4470, 4492, 4514, 4536, 4558,
  //                 189                          194                     198
  4580, 4602, 4624, 4646, 4668, 4690, 4712, 4734, 4756, 4778, 4800, 4822, 4844,
  //    200
  4866, 4888,
];

// MinimumManaPointsBeginner is the minimum MP numbers for beginners
const MinimumManaPointsBeginner = [
  //              5                   10                       15
  12, 22, 32, 42, 52, 62, 72, 82, 92, 102, 112, 122, 132, 142, 152, 162, 172,
  //        20                       25                       30
  182, 192, 202, 212, 222, 232, 242, 252, 262, 272, 282, 292, 302, 312, 322,
  //        35                       40                       45
  332, 342, 352, 362, 372, 382, 392, 402, 412, 422, 432, 442, 452, 462, 472,
  //        50                       55                       60
  482, 492, 502, 512, 522, 532, 542, 552, 562, 572, 582, 592, 602, 612, 622,
  //        65                       70                       75
  632, 642, 652, 662, 672, 682, 692, 702, 712, 722, 732, 742, 752, 762, 772,
  //        80                       85                       90
  782, 792, 802, 812, 822, 832, 842, 852, 862, 872, 882, 892, 902, 912, 922,
  //        95                       100                           105
  932, 942, 952, 962, 972, 982, 992, 1002, 1012, 1022, 1032, 1042, 1052, 1062,
  //                110                           115
  1072, 1082, 1092, 1102, 1112, 1122, 1132, 1142, 1152, 1162, 1172, 1182, 1192,
  //                123                           128
  1202, 1212, 1222, 1232, 1242, 1252, 1262, 1272, 1282, 1292, 1302, 1312, 1322,
  //                136                           141
  1332, 1342, 1352, 1362, 1372, 1382, 1392, 1402, 1412, 1422, 1432, 1442, 1452,
  //                149                           154
  1462, 1472, 1482, 1492, 1502, 1512, 1522, 1532, 1542, 1552, 1562, 1572, 1582,
  //                162                           167
  1592, 1602, 1612, 1622, 1632, 1642, 1652, 1662, 1672, 1682, 1692, 1702, 1712,
  //                175                           180
  1722, 1732, 1742, 1752, 1762, 1772, 1782, 1792, 1802, 1812, 1822, 1832, 1842,
  //                188                           193
  1852, 1862, 1872, 1882, 1892, 1902, 1912, 1922, 1932, 1942, 1952, 1962, 1972,
  //          200
  1982, 1992, 2002,
];

// MinimumManaPoints keys class names to the corresponding MP table for the class
const MinimumManaPoints = {
  archer: MinimumManaPointsRanged,
  thief: MinimumManaPointsRanged,
  bucc: MinimumManaPointsPirates,
  corsair: MinimumManaPointsPirates,
  warrior: MinimumManaPointsWarrior,
  magician: MinimumManaPointsMagician,
  beginner: MinimumManaPointsBeginner,
};

// GetWashableManaPoints returns the amount of MP that the
// input character can wash
function GetWashableManaPoints(className, level, currentMana) {
  if (!Classes.hasOwnProperty(className)) {
    throw new Exception(`unrecognized class name ${className}`);
  }

  var internalClassName = Classes[className];
  var minimumMana = MinimumManaPoints[internalClassName][level - 1];
  return Math.max(currentMana - minimumMana, 0);
}

// GetWashedManaPoints returns the amount of MP washed out by the
// input number of washes
function GetWashedManaPoints(className, numberOfWashes) {
  if (!Classes.hasOwnProperty(className)) {
    throw new Exception(`unrecognized class name ${className}`);
  }

  var internalClassName = Classes[className];
  return ManaPointLoss[internalClassName] * numberOfWashes;
}

// GetWashes returns the number of HP washes that the input character can do
function GetWashes(className, washableMana) {
  if (!Classes.hasOwnProperty(className)) {
    throw new Exception(`unrecognized class name ${className}`);
  }

  var internalClassName = Classes[className];
  var mpLossPerWash = ManaPointLoss[internalClassName];

  return Math.floor(washableMana / mpLossPerWash);
}

// GetMinimalHealthPointGainOptimal returns the minimal amount of HP that the input
// character can gain through washing MP optimally
function GetMinimalHealthPointGainOptimal(className, numFreshAPs, numWashedAPs) {
  if (!Classes.hasOwnProperty(className)) {
    throw new Exception(`unrecognized class name ${className}`);
  }

  var internalClassName = Classes[className];
  var hpGainPerFreshAP = HealthPointGainMinimumFreshAP[internalClassName];
  var hpGainPerWashedAP = HealthPointGainMinimumResetAP[internalClassName];

  return (numFreshAPs * hpGainPerFreshAP) + (numWashedAPs * hpGainPerWashedAP);
}

// GetAverageHealthPointGainOptimal returns the average amount of HP that the input
// character can gain through washing MP optimally
function GetAverageHealthPointGainOptimal(className, numFreshAPs, numWashedAPs) {
  if (!Classes.hasOwnProperty(className)) {
    throw new Exception(`unrecognized class name ${className}`);
  }

  var internalClassName = Classes[className];
  var hpGainPerFreshAP = HealthPointGainAverageFreshAP[internalClassName];
  var hpGainPerWashedAP = HealthPointGainAverageResetAP[internalClassName];

  return (numFreshAPs * hpGainPerFreshAP) + (numWashedAPs * hpGainPerWashedAP);
}

// GetMinimalHealthPointGainOptimal returns the minimal amount of HP that the input
// character can gain through washing all MP now
function GetMinimalHealthPointGainWashNow(className, numWashedAPs) {
  if (!Classes.hasOwnProperty(className)) {
    throw new Exception(`unrecognized class name ${className}`);
  }

  var internalClassName = Classes[className];
  var hpGainPerWashedAP = HealthPointGainMinimumResetAP[internalClassName];

  return numWashedAPs * hpGainPerWashedAP;
}

// GetAverageHealthPointGainOptimal returns the average amount of HP that the input
// character can gain through washing all MP now
function GetAverageHealthPointGainWashNow(className, numWashedAPs) {
  if (!Classes.hasOwnProperty(className)) {
    throw new Exception(`unrecognized class name ${className}`);
  }

  var internalClassName = Classes[className];
  var hpGainPerWashedAP = HealthPointGainAverageResetAP[internalClassName];

  return numWashedAPs * hpGainPerWashedAP;
}

// GetFreshAPsLeft gets the number of fresh APs left for a
// character with the input level
function GetFreshAPsLeft(level) {
  return (200 - level) * 5;
}
