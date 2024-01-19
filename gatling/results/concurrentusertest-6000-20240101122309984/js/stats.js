var stats = {
    type: "GROUP",
name: "All Requests",
path: "",
pathFormatted: "group_missing-name--1146707516",
stats: {
    "name": "All Requests",
    "numberOfRequests": {
        "total": "6000",
        "ok": "5292",
        "ko": "708"
    },
    "minResponseTime": {
        "total": "804",
        "ok": "804",
        "ko": "2198"
    },
    "maxResponseTime": {
        "total": "3021",
        "ok": "3021",
        "ko": "2658"
    },
    "meanResponseTime": {
        "total": "2117",
        "ok": "2077",
        "ko": "2413"
    },
    "standardDeviation": {
        "total": "430",
        "ok": "443",
        "ko": "83"
    },
    "percentiles1": {
        "total": "2062",
        "ok": "1999",
        "ko": "2409"
    },
    "percentiles2": {
        "total": "2484",
        "ok": "2489",
        "ko": "2468"
    },
    "percentiles3": {
        "total": "2778",
        "ok": "2788",
        "ko": "2543"
    },
    "percentiles4": {
        "total": "2879",
        "ok": "2881",
        "ko": "2626"
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
    "count": 121,
    "percentage": 2
},
    "group3": {
    "name": "t >= 1200 ms",
    "htmlName": "t >= 1200 ms",
    "count": 5171,
    "percentage": 86
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 708,
    "percentage": 12
},
    "meanNumberOfRequestsPerSecond": {
        "total": "1500",
        "ok": "1323",
        "ko": "177"
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
        "total": "6000",
        "ok": "5292",
        "ko": "708"
    },
    "minResponseTime": {
        "total": "804",
        "ok": "804",
        "ko": "2198"
    },
    "maxResponseTime": {
        "total": "3021",
        "ok": "3021",
        "ko": "2658"
    },
    "meanResponseTime": {
        "total": "2117",
        "ok": "2077",
        "ko": "2413"
    },
    "standardDeviation": {
        "total": "430",
        "ok": "443",
        "ko": "83"
    },
    "percentiles1": {
        "total": "2062",
        "ok": "1999",
        "ko": "2409"
    },
    "percentiles2": {
        "total": "2484",
        "ok": "2489",
        "ko": "2468"
    },
    "percentiles3": {
        "total": "2778",
        "ok": "2788",
        "ko": "2543"
    },
    "percentiles4": {
        "total": "2879",
        "ok": "2881",
        "ko": "2626"
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
    "count": 121,
    "percentage": 2
},
    "group3": {
    "name": "t >= 1200 ms",
    "htmlName": "t >= 1200 ms",
    "count": 5171,
    "percentage": 86
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 708,
    "percentage": 12
},
    "meanNumberOfRequestsPerSecond": {
        "total": "1500",
        "ok": "1323",
        "ko": "177"
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
