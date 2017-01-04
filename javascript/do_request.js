/*
 *********************************************************************************
 *                     Copyright (C) 2016 wystan
 *
 *       filename: do_request.js
 *    description: 
 *        created: 2016-03-15 15:36:49
 *         author: wystan
 *
 *********************************************************************************
 */

var request = require("request");


function do_request() {
    request("http://localhost:8000/teams", function (err, response, body) {
        if (!err && response.statusCode != 200) {
            console.log(body)
        }
        var ts = JSON.parse(body);
        for (var i = 0, l = ts.length; i < l; i++) {
            var v = ts[i];
            console.log(v.name, v.leader_name);
        }
    });
}


function main() {
    do_request();
}

main();

/************************************* END **************************************/
