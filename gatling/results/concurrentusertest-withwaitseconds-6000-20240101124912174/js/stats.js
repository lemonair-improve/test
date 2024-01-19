var stats = {
    type: "GROUP",
name: "All Requests",
path: "",
pathFormatted: "group_missing-name--1146707516",
stats: {
    "name": "All Requests",
    "numberOfRequests": {
        "total": "6000",
        "ok": "4211",
        "ko": "1789"
    },
    "minResponseTime": {
        "total": "694",
        "ok": "694",
        "ko": "2282"
    },
    "maxResponseTime": {
        "total": "3911",
        "ok": "3911",
        "ko": "3489"
    },
    "meanResponseTime": {
        "total": "2889",
        "ok": "2912",
        "ko": "2833"
    },
    "standardDeviation": {
        "total": "626",
        "ok": "711",
        "ko": "344"
    },
    "percentiles1": {
        "total": "3010",
        "ok": "3091",
        "ko": "2866"
    },
    "percentiles2": {
        "total": "3292",
        "ok": "3351",
        "ko": "3117"
    },
    "percentiles3": {
        "total": "3745",
        "ok": "3777",
        "ko": "3368"
    },
    "percentiles4": {
        "total": "3844",
        "ok": "3853",
        "ko": "3453"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 124,
    "percentage": 2
},
    "group2": {
    "name": "800 ms <= t < 1200 ms",
    "htmlName": "t >= 800 ms <br> t < 1200 ms",
    "count": 31,
    "percentage": 1
},
    "group3": {
    "name": "t >= 1200 ms",
    "htmlName": "t >= 1200 ms",
    "count": 4056,
    "percentage": 68
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 1789,
    "percentage": 30
},
    "meanNumberOfRequestsPerSecond": {
        "total": "240",
        "ok": "168.44",
        "ko": "71.56"
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
        "ok": "4211",
        "ko": "1789"
    },
    "minResponseTime": {
        "total": "694",
        "ok": "694",
        "ko": "2282"
    },
    "maxResponseTime": {
        "total": "3911",
        "ok": "3911",
        "ko": "3489"
    },
    "meanResponseTime": {
        "total": "2889",
        "ok": "2912",
        "ko": "2833"
    },
    "standardDeviation": {
        "total": "626",
        "ok": "711",
        "ko": "344"
    },
    "percentiles1": {
        "total": "3010",
        "ok": "3091",
        "ko": "2866"
    },
    "percentiles2": {
        "total": "3292",
        "ok": "3351",
        "ko": "3117"
    },
    "percentiles3": {
        "total": "3745",
        "ok": "3777",
        "ko": "3368"
    },
    "percentiles4": {
        "total": "3844",
        "ok": "3853",
        "ko": "3453"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 124,
    "percentage": 2
},
    "group2": {
    "name": "800 ms <= t < 1200 ms",
    "htmlName": "t >= 800 ms <br> t < 1200 ms",
    "count": 31,
    "percentage": 1
},
    "group3": {
    "name": "t >= 1200 ms",
    "htmlName": "t >= 1200 ms",
    "count": 4056,
    "percentage": 68
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 1789,
    "percentage": 30
},
    "meanNumberOfRequestsPerSecond": {
        "total": "240",
        "ok": "168.44",
        "ko": "71.56"
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
