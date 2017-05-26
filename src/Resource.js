/* eslint-disable */

var dirImg = 'res/images/';
var dirSound = 'res/sound/';

var RESOURCES = {
  s_background: dirImg + 'background.jpg',
  s_joy_background: dirImg + 'joy_background.jpg',
  s_bg: dirImg + 'bg.png',
  s_bg_down_behind: dirImg + 'bg_down_behind.png',
  s_bg_down_center: dirImg + 'bg_down_center.png',
  s_bg_down_front: dirImg + 'bg_down_front.png',
  s_bg_up_behind: dirImg + 'bg_up_behind.png',
  s_bg_up_center: dirImg + 'bg_up_center.png',
  s_bg_up_front: dirImg + 'bg_up_front.png',

  s_game_over: dirImg + 'game_over.png',

  s_enemy: dirImg + 'enemy.png',
  s_trail: dirImg + 'trail.png',
  s_trail_fire: dirImg + 'trail_fire.png',
  s_shine: dirImg + 'shine.png',
  s_asplode_inner_bottom: dirImg + 'asplode_inner_bottom.png',
  s_asplode_inner_top: dirImg + 'asplode_inner_top.png',
  s_asplode_spike_left: dirImg + 'asplode_spike_left.png',
  s_asplode_spike_top: dirImg + 'asplode_spike_top.png',
  s_cloud: dirImg + 'cloud.png',
  s_white_square: dirImg + 'white_square.jpg',
  s_black_square: dirImg + 'black_square.jpg',
  s_empty: dirImg + 'empty.png',
  s_assets_frame: dirImg + 'assets_frame.png',

  s_button_start: dirImg + 'button_start.png',
  s_button_pause: dirImg + 'button_pause.png',

  s_paused_panel: dirImg + 'paused_panel.png',
  s_personal_best: dirImg + 'personal_best.png',

  s_assets_frame_json: dirImg + 'assets_frame.json',

  s_block_hit_ogg: dirSound + 'block_hit.ogg',
  s_death_jingle_ogg: dirSound + 'death_jingle.ogg',
  s_fall_thud_ogg: dirSound + 'fall_thud.ogg',
  s_foot_loop_fast_ogg: dirSound + 'foot_loop_fast.ogg',
  s_foot_loop_regular_ogg: dirSound + 'foot_loop_regular.ogg',
  s_hyper_mode_ogg: dirSound + 'hyper_mode.ogg',
  s_lava_splosh_ogg: dirSound + 'lava_splosh.ogg',
  s_pickup_grab_ogg: dirSound + 'pickup_grab.ogg'

};

(function () {
  //吊帘
  for (var i = 0; i < 3; i++) {
    RESOURCES['s_d' + i] = dirImg + 'd' + i + '.png';
  }
  //熔岩
  for (var i = 0; i < 8; i++) {
    RESOURCES['s_magma' + i] = dirImg + 'magma' + i + '.png';
  }
  //score
  for (var i = 0; i < 10; i++) {
    RESOURCES['s_s_font' + i] = dirImg + 's' + i + '.png';
  }
  RESOURCES['s_s_font_'] = dirImg + 's_.png';
  //倒计时
  for (var i = 1; i <= 3; i++) {
    RESOURCES['s_t_font' + i] = dirImg + 't' + i + '.png';
  }
  //树
  for (var i = 1; i <= 2; i++) {
    RESOURCES['s_tree' + i] = dirImg + 'tree' + i + '.png';
  }
  //pickup
  for (var i = 1; i <= 5; i++) {
    RESOURCES['s_pickup' + i] = dirImg + 'pickup_' + i + '.png';
  }
})();

var SEGMENT_DATA = [
  {
    length: 3405,
    floor: [0, 1135, 2270],
    blocks: [2297, 460, 2577, 460, 2888, 460, 3172, 464],
    coins: [757, 452, 1058, 452, 904, 452, 1228, 452, 1385, 452, 1718, 350, 1545, 452, 1892, 254, 2114, 168, 2466, 132, 2777, 154, 3039, 132, 3283, 122]
  },
  {
    length: 3405,
    floor: [0, 1135, 2270],
    blocks: [809, 292, 1057, 292, 1293, 292, 1517, 292, 2127, 394, 2349, 290, 2611, 314, 2802, 290, 157, 416],
    coins: [757, 452, 1058, 452, 904, 452, 1228, 452, 1385, 452, 2103, 178, 1545, 452, 2341, 82, 2643, 82, 3025, 132, 3293, 264]
  },
  {
    length: 3405,
    floor: [0, 2270],
    blocks: [1420, 588, 2466, 462, 2630, 466, 2549, 360, 335, 106, 1440, 480, 1736, 588, 1716, 488, 1736, 382, 1728, 274, 2038, 588, 2054, 488, 2038, 382, 687, 152, 871, 208, 1081, 88],
    coins: [69, 264, 1058, 452, 904, 452, 1192, 396, 1337, 320, 2103, 192, 1455, 204, 2265, 152, 3075, 272, 3319, 264, 1604, 132, 1769, 92, 1914, 154, 2403, 118, 504, 452, 624, 452, 211, 300, 3191, 260]
  },
  {
    length: 3405,
    floor: [0, 2270],
    blocks: [2466, 462, 2630, 466, 2549, 360, 896, 464, 1061, 468, 980, 362, 1659, 300, 1633, 198, 1653, 94, 1633, -12],
    coins: [69, 264, 3075, 224, 3319, 264, 211, 300, 3191, 260, 349, 346, 487, 340, 615, 254, 753, 152, 1559, 554, 1681, 542, 1831, 520, 1441, 462, 1943, 448, 2055, 350, 2425, 124, 2917, 210, 2743, 152]
  },
  {
    length: 3405,
    floor: [0, 1135, 2270],
    blocks: [2466, 462, 2630, 466, 2549, 360, 896, 464, 1061, 468, 690, 468, 664, 366, 684, 262, 868, 360],
    coins: [69, 264, 3075, 224, 3319, 264, 211, 264, 3191, 260, 349, 210, 1725, 412, 1817, 369, 1943, 410, 1641, 488, 2055, 448, 2163, 412, 2255, 310, 2917, 210, 2743, 152, 469, 128, 595, 90, 947, 164, 1241, 478, 1339, 488, 1431, 488, 1533, 488, 2389, 214, 2569, 164]
  },
  {
    length: 5445,
    floor: [0, 4310],
    blocks: [1844, 248, 2001, 292, 3223, 102, 3608, 120, 3285, 492, 2303, 230, 4740, 102, 5352, 462, 2158, 216, 4021, 444, 4081, 154, 4928, 188, 5073, 144, 4199, 536, 2583, 592, 2625, 488, 2828, 592, 2784, 492, 2706, 390, 3259, 592, 3666, 662, 3686, 554, 3666, 444, 1494, 492, 1151, 120, 875, 26],
    coins: [205, 258, 953, 306, 1344, 308, 3245, 308, 2708, 158, 3000, 256, 4086, 308, 4012, 286, 3934, 276, 4164, 340, 3502, 292, 801, 274, 4961, 452, 5041, 452, 5121, 452, 5201, 406, 4881, 452, 1932, 66, 1132, 362, 5293, 320, 251, 306, 251, 220, 297, 268, 385, 258, 431, 306, 431, 220, 477, 268, 565, 258, 611, 306, 611, 220, 657, 268, 1514, 206, 1672, 108, 2148, 52, 2414, 72, 3744, 268, 4364, 394, 4616, 448, 5399, 276, 61, 268]
  },
  {
    length: 2270,
    floor: [1135],
    blocks: [158, 404, 352, 534, 1840, 248, 1160, 209, 1150, 98, 443, 160, 1170, -10, 649, 241, 529, 16, 921, 291, 2178, 82],
    coins: [404, 347, 66, 272, 580, 481, 228, 270, 750, 504, 1541, 194, 1705, 96, 1848, 72, 1978, 128, 2070, 255, 949, 504, 1123, 430, 1302, 368, 1411, 267]
  },
  {
    length: 3405,
    floor: [0, 1135],
    blocks: [352, 468, 1160, 468, 718, 218, 710, 101, 730, -7, 3310, 454, 1288, 468, 1226, 366, 1433, 468, 1350, 366, 1266, 254, 1922, 326, 1782, 234, 3302, 88, 2570, 352, 2349, 326],
    coins: [1838, 494, 448, 304, 66, 250, 608, 378, 3179, 290, 3341, 282, 228, 270, 798, 408, 961, 304, 1053, 238, 1145, 96, 1726, 494, 2078, 494, 1966, 494, 2300, 492, 2188, 492, 2538, 494, 2426, 494, 2802, 464, 2666, 494, 3038, 346, 2926, 418]
  },
  {
    length: 5445,
    floor: [0, 1720, 4310],
    blocks: [1042, 114, 2066, 114, 2269, 114, 3415, 326, 4425, 468, 408, 260, 2736, 464, 3575, 322, 3743, 330, 3911, 334],
    coins: [1089, 460, 768, 456, 2041, 332, 1851, 332, 2704, 176, 3048, 256, 1009, 460, 929, 460, 849, 460, 1169, 476, 1249, 516, 2137, 384, 1947, 384, 2401, 332, 2211, 332, 2497, 384, 2307, 384, 3488, 484, 3608, 484, 3728, 484, 3848, 484, 4274, 256, 4408, 224, 4550, 266, 4652, 372, 4900, 446, 5000, 374, 5128, 310, 5252, 266, 5384, 262, 4764, 458, 688, 456, 608, 456, 528, 456]
  },
  {
    length: 5445,
    floor: [0, 4310],
    blocks: [1236, 178, 1674, 380, 2229, 122, 3223, 102, 3984, 364, 3285, 492, 2552, 496, 4740, 102, 5352, 462],
    coins: [293, 296, 641, 106, 953, 306, 1668, 204, 2087, 444, 2636, 138, 3000, 256, 4048, 524, 3896, 504, 4168, 436, 4252, 308, 3752, 420, 801, 226, 4961, 452, 5041, 452, 5121, 452, 5201, 406, 4881, 452, 2372, 306, 1294, 394, 5325, 276, 1576, 538, 1636, 538, 1696, 538, 1756, 538]
  },
  {
    length: 3405,
    floor: [0, 1135, 2270],
    blocks: [966, 332, 1145, 300, 1321, 308, 2217, 224, 2349, 290, 2510, 348, 2802, 290, 1526, 332, 1694, 376, 849, 32, 1030, 12, 1185, -28, 1361, -12, 1566, 12, 1734, 36, 660, 472, 797, 380, 1834, 472, 653, 60],
    coins: [842, 204, 2039, 88, 2224, 444, 2381, 468, 2901, 88, 922, 180, 1002, 180, 1082, 160, 1162, 148, 1242, 152, 1322, 152, 1402, 164, 1482, 176, 1562, 176, 1642, 204, 1894, 164, 70, 276, 382, 234, 526, 266, 2541, 468, 2701, 468, 2861, 468, 2555, 128, 3129, 296, 3293, 272, 3015, 382, 650, 276, 750, 234, 238, 262, 1947, 326]
  },
  {
    length: 3405,
    floor: [0, 1135, 2270],
    blocks: [190, 468, 438, 468, 1827, 469, 2706, 469, 1840, 248, 1166, 241, 1158, 124, 2988, 92, 347, 98, 1852, 359, 2706, 190, 2732, 84, 2702, -22, 1178, 16, 3238, 28, 3090, 468],
    coins: [2103, 210, 2452, 304, 448, 304, 66, 250, 608, 240, 3035, 250, 3179, 274, 3341, 282, 228, 270, 776, 316, 928, 368, 1669, 118, 1727, 76, 1799, 96, 1860, 76, 1940, 62, 2002, 118, 2544, 323, 2618, 336, 2700, 340, 2792, 330, 2894, 274, 1053, 494, 1125, 494, 1205, 494, 1285, 474, 1347, 412]
  },
  {
    length: 3405,
    floor: [0, 1135, 2270],
    blocks: [518, 462, 1845, 462, 157, 194, 1205, 98, 3217, 86, 3039, 462, 2187, 208, 2595, 298, 1417, 224, 2309, 258, 2447, 291, 2735, 268],
    coins: [757, 426, 1058, 452, 904, 452, 1228, 452, 1385, 452, 2224, 444, 1545, 452, 2341, 448, 2467, 448, 2585, 448, 2685, 448, 2805, 448, 273, 392, 352, 284, 496, 240, 630, 314]
  },
  {
    length: 5445,
    floor: [],
    blocks: [785, 84, 1179, 362, 1823, 468, 3415, 326, 4425, 468, 584, 502, 4868, 144, 3743, 356, 3911, 334, 3258, 408, 3040, 520, 4123, 372, 2131, 132, 2580, 502, 201, 104, 2804, 96, 2980, 116, 4711, 74, 985, 304, 1628, 510],
    coins: [294, 346, 2526, 270, 2806, 286, 4368, 164, 4608, 244, 4712, 294, 4810, 338, 4902, 378, 4996, 416, 5092, 414, 5182, 386, 5274, 334, 5378, 312, 390, 316, 506, 276, 626, 312, 750, 398, 906, 484, 1050, 504, 1196, 504, 1352, 442, 1476, 380, 1560, 324, 1660, 276, 1790, 256, 1909, 312, 2037, 380, 2163, 400, 2287, 364, 2393, 312, 2654, 244, 2936, 330, 3060, 298, 3152, 212, 3234, 140, 3350, 98, 3474, 86, 3613, 126, 3756, 110, 3868, 86, 4004, 90, 4132, 110, 4248, 132, 4492, 190, 194, 322, 68, 302]
  },
  {
    length: 5445,
    floor: [],
    blocks: [2439, 304, 967, 294, 4573, 286, 3146, 344, 1119, 314, 1463, 84, 2019, 52, 1453, 574, 248, 460, 390, 414, 570, 488, 2636, 606, 2778, 560, 3290, 364, 3600, 70, 4152, 90, 4896, 594, 5078, 106, 5272, 126],
    coins: [192, 282, 2546, 434, 4980, 314, 5122, 336, 5262, 310, 5376, 300, 67, 304, 330, 246, 468, 216, 626, 272, 750, 358, 906, 444, 1050, 464, 1196, 464, 1352, 402, 1476, 340, 1560, 284, 1660, 236, 1790, 216, 1909, 272, 2037, 380, 2163, 446, 2295, 504, 2421, 484, 2654, 370, 756, 220, 848, 150, 978, 130, 1118, 150, 1242, 210, 1352, 292, 1568, 430, 1690, 450, 1802, 426, 1909, 392, 2103, 282, 2211, 196, 2311, 128, 2575, 182, 2435, 144, 2687, 268, 4730, 416, 2806, 322, 2930, 408, 3086, 494, 3230, 514, 3376, 514, 3532, 452, 3640, 380, 3744, 306, 3845, 258, 3975, 238, 4094, 294, 4222, 362, 4348, 428, 4480, 486, 4606, 466, 4838, 352, 2936, 270, 3028, 200, 3158, 180, 3298, 200, 3422, 260, 3532, 342, 3753, 452, 3875, 472, 3987, 448, 4094, 414, 4288, 264, 4396, 178, 4496, 110, 4760, 164, 4620, 126, 4872, 250]
  },
  {
    length: 5763,
    floor: [0, 1720, 3182, 4626],
    blocks: [976, 240, 2066, 114, 2227, 168, 3415, 296, 4797, 260, 288, 468, 4035, 144, 3575, 322, 3743, 330, 3911, 272, 1291, 606, 1454, 580, 1588, 608, 2480, 92, 3271, 154, 3081, -14, 5329, 468, 5603, 468, 5033, 92],
    coins: [621, 330, 300, 262, 1987, 434, 1167, 388, 2575, 398, 3048, 256, 541, 302, 461, 280, 381, 266, 701, 370, 781, 426, 2087, 458, 1897, 458, 2347, 434, 2157, 434, 2447, 458, 2257, 458, 3488, 484, 3608, 484, 3728, 484, 3848, 484, 4274, 256, 4408, 224, 4550, 266, 4652, 372, 4900, 446, 5000, 374, 5128, 310, 5252, 254, 5414, 236, 4764, 458, 220, 262, 140, 262, 60, 262, 1293, 298, 1431, 256, 1588, 310, 1734, 416, 2686, 312, 2861, 256, 4002, 475, 4126, 372, 3228, 388, 5556, 256, 5688, 256]
  }
];

