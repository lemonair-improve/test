var stats = {
    type: "GROUP",
name: "All Requests",
path: "",
pathFormatted: "group_missing-name--1146707516",
stats: {
    "name": "All Requests",
    "numberOfRequests": {
        "total": "2000",
        "ok": "2000",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "386",
        "ok": "386",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "1672",
        "ok": "1672",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "974",
        "ok": "974",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "326",
        "ok": "326",
        "ko": "-"
    },
    "percentiles1": {
        "total": "1131",
        "ok": "1131",
        "ko": "-"
    },
    "percentiles2": {
        "total": "1182",
        "ok": "1182",
        "ko": "-"
    },
    "percentiles3": {
        "total": "1635",
        "ok": "1635",
        "ko": "-"
    },
    "percentiles4": {
        "total": "1660",
        "ok": "1660",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 846,
    "percentage": 42
},
    "group2": {
    "name": "800 ms <= t < 1200 ms",
    "htmlName": "t >= 800 ms <br> t < 1200 ms",
    "count": 869,
    "percentage": 43
},
    "group3": {
    "name": "t >= 1200 ms",
    "htmlName": "t >= 1200 ms",
    "count": 285,
    "percentage": 14
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "1000",
        "ok": "1000",
        "ko": "-"
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
        "total": "2000",
        "ok": "2000",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "386",
        "ok": "386",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "1672",
        "ok": "1672",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "974",
        "ok": "974",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "326",
        "ok": "326",
        "ko": "-"
    },
    "percentiles1": {
        "total": "1131",
        "ok": "1131",
        "ko": "-"
    },
    "percentiles2": {
        "total": "1182",
        "ok": "1181",
        "ko": "-"
    },
    "percentiles3": {
        "total": "1635",
        "ok": "1635",
        "ko": "-"
    },
    "percentiles4": {
        "total": "1660",
        "ok": "1660",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 846,
    "percentage": 42
},
    "group2": {
    "name": "800 ms <= t < 1200 ms",
    "htmlName": "t >= 800 ms <br> t < 1200 ms",
    "count": 869,
    "percentage": 43
},
    "group3": {
    "name": "t >= 1200 ms",
    "htmlName": "t >= 1200 ms",
    "count": 285,
    "percentage": 14
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "1000",
        "ok": "1000",
        "ko": "-"
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
