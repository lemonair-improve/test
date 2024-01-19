var stats = {
    type: "GROUP",
name: "All Requests",
path: "",
pathFormatted: "group_missing-name--1146707516",
stats: {
    "name": "All Requests",
    "numberOfRequests": {
        "total": "10000",
        "ok": "1813",
        "ko": "8187"
    },
    "minResponseTime": {
        "total": "1349",
        "ok": "1349",
        "ko": "2272"
    },
    "maxResponseTime": {
        "total": "7311",
        "ok": "7311",
        "ko": "7129"
    },
    "meanResponseTime": {
        "total": "4618",
        "ok": "6445",
        "ko": "4213"
    },
    "standardDeviation": {
        "total": "1534",
        "ok": "1159",
        "ko": "1294"
    },
    "percentiles1": {
        "total": "4677",
        "ok": "6823",
        "ko": "4223"
    },
    "percentiles2": {
        "total": "5974",
        "ok": "7046",
        "ko": "5241"
    },
    "percentiles3": {
        "total": "6997",
        "ok": "7153",
        "ko": "6470"
    },
    "percentiles4": {
        "total": "7153",
        "ok": "7195",
        "ko": "6773"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 0,
    "percentage": 0
},
    "group2": {
    "name": "800 ms <= t < 1200 ms",
    "htmlName": "t >= 800 ms <br> t < 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t >= 1200 ms",
    "htmlName": "t >= 1200 ms",
    "count": 1813,
    "percentage": 18
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 8187,
    "percentage": 82
},
    "meanNumberOfRequestsPerSecond": {
        "total": "1250",
        "ok": "226.625",
        "ko": "1023.375"
    }
},
contents: {
"req_connect-ws-1217742322": {
        type: "REQUEST",
        name: "Connect WS",
path: "Connect WS",
pathFormatted: "req_connect-ws-1217742322",
stats: {
    "name": "Connect WS",
    "numberOfRequests": {
        "total": "10000",
        "ok": "1813",
        "ko": "8187"
    },
    "minResponseTime": {
        "total": "1349",
        "ok": "1349",
        "ko": "2272"
    },
    "maxResponseTime": {
        "total": "7311",
        "ok": "7311",
        "ko": "7129"
    },
    "meanResponseTime": {
        "total": "4618",
        "ok": "6445",
        "ko": "4213"
    },
    "standardDeviation": {
        "total": "1534",
        "ok": "1159",
        "ko": "1294"
    },
    "percentiles1": {
        "total": "4678",
        "ok": "6823",
        "ko": "4223"
    },
    "percentiles2": {
        "total": "5974",
        "ok": "7046",
        "ko": "5243"
    },
    "percentiles3": {
        "total": "6997",
        "ok": "7153",
        "ko": "6470"
    },
    "percentiles4": {
        "total": "7153",
        "ok": "7195",
        "ko": "6773"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 0,
    "percentage": 0
},
    "group2": {
    "name": "800 ms <= t < 1200 ms",
    "htmlName": "t >= 800 ms <br> t < 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t >= 1200 ms",
    "htmlName": "t >= 1200 ms",
    "count": 1813,
    "percentage": 18
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 8187,
    "percentage": 82
},
    "meanNumberOfRequestsPerSecond": {
        "total": "1250",
        "ok": "226.625",
        "ko": "1023.375"
    }
}
    }
}

}

function fillStats(stat){
    $("#numberOfRequests").append(stat.numberOfRequests.total);
    $("#numberOfRequestsOK").append(stat.numberOfRequests.ok);
    $("#numberOfRequestsKO").append(stat.numberOfRequests.ko);

    $("#minResponseTime").append(stat.minResponseTime.total);
    $("#minResponseTimeOK").append(stat.minResponseTime.ok);
    $("#minResponseTimeKO").append(stat.minResponseTime.ko);

    $("#maxResponseTime").append(stat.maxResponseTime.total);
    $("#maxResponseTimeOK").append(stat.maxResponseTime.ok);
    $("#maxResponseTimeKO").append(stat.maxResponseTime.ko);

    $("#meanResponseTime").append(stat.meanResponseTime.total);
    $("#meanResponseTimeOK").append(stat.meanResponseTime.ok);
    $("#meanResponseTimeKO").append(stat.meanResponseTime.ko);

    $("#standardDeviation").append(stat.standardDeviation.total);
    $("#standardDeviationOK").append(stat.standardDeviation.ok);
    $("#standardDeviationKO").append(stat.standardDeviation.ko);

    $("#percentiles1").append(stat.percentiles1.total);
    $("#percentiles1OK").append(stat.percentiles1.ok);
    $("#percentiles1KO").append(stat.percentiles1.ko);

    $("#percentiles2").append(stat.percentiles2.total);
    $("#percentiles2OK").append(stat.percentiles2.ok);
    $("#percentiles2KO").append(stat.percentiles2.ko);

    $("#percentiles3").append(stat.percentiles3.total);
    $("#percentiles3OK").append(stat.percentiles3.ok);
    $("#percentiles3KO").append(stat.percentiles3.ko);

    $("#percentiles4").append(stat.percentiles4.total);
    $("#percentiles4OK").append(stat.percentiles4.ok);
    $("#percentiles4KO").append(stat.percentiles4.ko);

    $("#meanNumberOfRequestsPerSecond").append(stat.meanNumberOfRequestsPerSecond.total);
    $("#meanNumberOfRequestsPerSecondOK").append(stat.meanNumberOfRequestsPerSecond.ok);
    $("#meanNumberOfRequestsPerSecondKO").append(stat.meanNumberOfRequestsPerSecond.ko);
}
