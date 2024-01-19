var stats = {
    type: "GROUP",
name: "All Requests",
path: "",
pathFormatted: "group_missing-name--1146707516",
stats: {
    "name": "All Requests",
    "numberOfRequests": {
        "total": "8000",
        "ok": "1621",
        "ko": "6379"
    },
    "minResponseTime": {
        "total": "1103",
        "ok": "1103",
        "ko": "2449"
    },
    "maxResponseTime": {
        "total": "10381",
        "ok": "10381",
        "ko": "10180"
    },
    "meanResponseTime": {
        "total": "6584",
        "ok": "9169",
        "ko": "5927"
    },
    "standardDeviation": {
        "total": "2360",
        "ok": "2322",
        "ko": "1866"
    },
    "percentiles1": {
        "total": "6136",
        "ok": "10100",
        "ko": "5728"
    },
    "percentiles2": {
        "total": "8712",
        "ok": "10212",
        "ko": "7107"
    },
    "percentiles3": {
        "total": "10214",
        "ok": "10275",
        "ko": "9247"
    },
    "percentiles4": {
        "total": "10275",
        "ok": "10309",
        "ko": "9956"
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
    "count": 2,
    "percentage": 0
},
    "group3": {
    "name": "t >= 1200 ms",
    "htmlName": "t >= 1200 ms",
    "count": 1619,
    "percentage": 20
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 6379,
    "percentage": 80
},
    "meanNumberOfRequestsPerSecond": {
        "total": "195.122",
        "ok": "39.537",
        "ko": "155.585"
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
        "ok": "1621",
        "ko": "6379"
    },
    "minResponseTime": {
        "total": "1103",
        "ok": "1103",
        "ko": "2449"
    },
    "maxResponseTime": {
        "total": "10381",
        "ok": "10381",
        "ko": "10180"
    },
    "meanResponseTime": {
        "total": "6584",
        "ok": "9169",
        "ko": "5927"
    },
    "standardDeviation": {
        "total": "2360",
        "ok": "2322",
        "ko": "1866"
    },
    "percentiles1": {
        "total": "6137",
        "ok": "10100",
        "ko": "5729"
    },
    "percentiles2": {
        "total": "8710",
        "ok": "10212",
        "ko": "7107"
    },
    "percentiles3": {
        "total": "10214",
        "ok": "10275",
        "ko": "9247"
    },
    "percentiles4": {
        "total": "10275",
        "ok": "10309",
        "ko": "9956"
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
    "count": 2,
    "percentage": 0
},
    "group3": {
    "name": "t >= 1200 ms",
    "htmlName": "t >= 1200 ms",
    "count": 1619,
    "percentage": 20
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 6379,
    "percentage": 80
},
    "meanNumberOfRequestsPerSecond": {
        "total": "195.122",
        "ok": "39.537",
        "ko": "155.585"
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
