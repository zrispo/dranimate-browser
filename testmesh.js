console.log("loading the test mesh ... get rid of this later ")

var testMeshFaces = [35,34,42,46,50,52,52,55,57,61,81,62,81,60,62,59,81,61,76,81,59,81,58,60,76,83,81,83,58,81,57,76,59,31,26,34,55,76,57,83,56,58,92,54,56,92,56,83,76,92,83,89,92,76,53,76,55,84,89,76,74,84,76,53,70,76,70,74,76,92,51,54,52,70,53,94,51,92,89,94,92,50,70,52,94,49,51,50,74,70,91,47,94,91,94,89,69,74,50,48,69,50,84,91,89,47,49,94,78,84,74,69,78,74,67,78,69,91,45,47,93,91,84,78,93,84,46,69,48,46,67,69,93,45,91,93,95,45,43,67,46,78,90,93,98,36,44,95,38,45,90,95,93,40,98,44,37,102,39,73,78,67,64,73,67,41,103,42,33,67,43,103,105,35,33,64,67,39,102,41,102,103,41,103,35,42,105,34,35,98,100,36,36,100,37,38,96,40,96,98,40,103,104,105,85,90,78,95,96,38,90,96,95,100,102,37,100,101,102,99,100,98,96,99,98,32,64,33,101,103,102,105,31,34,63,73,64,23,96,90,73,85,78,85,23,90,104,31,105,101,21,103,28,101,100,99,28,100,86,23,85,73,77,85,27,99,96,23,27,96,63,64,32,24,104,103,21,24,103,29,21,101,30,63,32,27,97,99,77,86,85,68,73,63,28,29,101,25,31,104,24,25,104,30,22,63,22,68,63,20,28,99,68,77,73,97,20,99,18,23,86,77,87,86,87,18,86,19,97,27,17,68,22,16,20,97,19,16,97,66,77,68,65,68,17,79,88,87,79,87,77,65,66,68,87,15,18,14,65,17,66,79,77,88,15,87,72,79,66,14,12,65,12,66,65,88,13,15,12,11,66,11,72,66,10,13,88,79,10,88,9,72,11,80,8,79,72,75,79,75,80,79,8,10,79,82,80,75,80,7,8,9,71,72,71,75,72,6,71,9,1,82,75,4,1,75,71,4,75,1,0,82,5,7,80,6,4,71,3,4,6,82,5,80,0,2,82,2,5,82];

var testMeshVertices = [75,124,81,104,82,143,95,72,97,92,98,155,115,73,116,164,134,174,135,71,153,181,154,64,173,56,173,186,193,51,193,190,211,254,213,45,213,193,222,236,230,261,232,323,233,46,233,196,233,346,235,366,236,386,237,221,240,279,241,299,253,42,256,388,273,44,293,41,297,398,303,373,304,271,304,291,305,205,305,311,307,225,310,333,310,353,312,48,319,241,325,203,332,51,345,203,349,62,365,204,368,69,385,200,388,72,404,84,405,197,423,91,425,192,442,98,444,184,457,112,462,175,470,128,474,158,261.6703821656051,63.38535031847134,272.862582781457,60.35596026490066,197.15539305301644,62.04753199268738,191.05162523900574,80.32695984703633,307.72623762376236,70.00841584158415,212.90944661822246,75.04583566238122,342.4135265700483,77.2280193236715,380.82785299806574,81.25725338491296,118.95614035087719,89.59100877192982,142.4437751004016,102.25251004016064,255.2779187817259,94.52664974619289,359.83093525179856,104.93021582733813,121.2096018735363,109.51873536299766,417.1871855082187,116.5759812143576,212.5081421169504,114.85492227979275,291.30571145592603,116.51634202707164,159.1206001154068,142.20196191575303,116.07334963325184,149.40994295028526,448.91027496382054,153.75687409551375,107.37892791127541,140.88354898336414,430.1134554140127,159.77627388535032,350.9438202247191,140.2950916617386,257.3151125401929,156.05466237942122,235.8762781186094,162.75119291070212,203.95846645367413,165.30990415335464,187.38519212746016,168.9240862230553,367.22222222222223,161.95138888888889,283.5386266094421,167.74892703862662,335.9868787276342,173.45089463220677,388.2181688125894,176.24105865522174,317.758064516129,167.11290322580646,366.69778481012656,197.49208860759492,303.5451127819549,200.07894736842104,272.504347826087,218.6455242966752,231.08760951188987,238.98623279098874,300.2750165672631,245.54937044400265,253.23940298507463,250.94805970149253,280.03960396039605,273.53465346534654,261.7029096477795,297.6314446145993,296.8254580520733,307.4638379942141,275.73974025974024,337.2218181818182,263.63039513677813,360.9574468085106,281.94441260744986,378.3083094555874]