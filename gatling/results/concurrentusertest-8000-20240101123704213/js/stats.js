var stats = {
    type: "GROUP",
name: "All Requests",
path: "",
pathFormatted: "group_missing-name--1146707516",
stats: {
    "name": "All Requests",
    "numberOfRequests": {
        "total": "8000",
        "ok": "1595",
        "ko": "6405"
    },
    "minResponseTime": {
        "total": "1885",
        "ok": "1885",
        "ko": "2283"
    },
    "maxResponseTime": {
        "total": "5206",
        "ok": "5206",
        "ko": "4916"
    },
    "meanResponseTime": {
        "total": "3592",
        "ok": "4231",
        "ko": "3433"
    },
    "standardDeviation": {
        "total": "904",
        "ok": "1115",
        "ko": "764"
    },
    "percentiles1": {
        "total": "3658",
        "ok": "4922",
        "ko": "3494"
    },
    "percentiles2": {
        "total": "4341",
        "ok": "5015",
        "ko": "4024"
    },
    "percentiles3": {
        "total": "5014",
        "ok": "5114",
        "ko": "4728"
    },
    "percentiles4": {
        "total": "5114",
        "ok": "5160",
        "ko": "4877"
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
    "count": 1595,
    "percentage": 20
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 6405,
    "percentage": 80
},
    "meanNumberOfRequestsPerSecond": {
        "total": "1333.333",
        "ok": "265.833",
        "ko": "1067.5"
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
        "total": "8000",
        "ok": "1595",
        "ko": "6405"
    },
    "minResponseTime": {
        "total": "1885",
        "ok": "1885",
        "ko": "2283"
    },
    "maxResponseTime": {
        "total": "5206",
        "ok": "5206",
        "ko": "4916"
    },
    "meanResponseTime": {
        "total": "3592",
        "ok": "4231",
        "ko": "3433"
    },
    "standardDeviation": {
        "total": "904",
        "ok": "1115",
        "ko": "764"
    },
    "percentiles1": {
        "total": "3658",
        "ok": "4922",
        "ko": "3496"
    },
    "percentiles2": {
        "total": "4340",
        "ok": "5015",
        "ko": "4024"
    },
    "percentiles3": {
        "total": "5014",
        "ok": "5114",
        "ko": "4728"
    },
    "percentiles4": {
        "total": "5114",
        "ok": "5160",
        "ko": "4877"
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
    "count": 1595,
    "percentage": 20
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 6405,
    "percentage": 80
},
    "meanNumberOfRequestsPerSecond": {
        "total": "1333.333",
        "ok": "265.833",
        "ko": "1067.5"
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
