#!/usr/bin/env node
/*
 *********************************************************************************
 *                     Copyright (C) 2016 wystan
 *
 *       filename: github.js
 *    description:
 *        created: 2016-12-22 21:38:02
 *         author: wystan
 *
 *********************************************************************************
 */

var https = require("https");

function get_project_name(user) {
    var url='https://api.github.com/';
    var opts = {
        hostname: "api.github.com",
        path: "/users/" + user + "/repos",
        headers: {
            "User-Agent":"Chrome",
            "Authorization": "Basic " + new Buffer("oswystan:****").toString("base64"),
        },
    };
    https.get(opts, function (res) {
        var result = "";
        res.on("data", function (data) {
            result += data.toString("utf8");
        });
        res.on("end", function () {
            var proj = JSON.parse(result);
            for (var i = 0, l = proj.length; i < l; i++) {
                var v = proj[i];
                console.log(v.name);
            }
        });
        res.on("error", function (err) {
            console.log(err);
        });
    }).on("error", function (err) {
        console.log("ERROR: " + err);
    });
}

function main() {
    get_project_name("oswystan");
}

main();

/************************************* END **************************************/
