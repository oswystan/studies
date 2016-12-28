/*
 *********************************************************************************
 *                     Copyright (C) 2016 wystan
 *
 *       filename: index.js
 *    description: 
 *        created: 2016-12-28 16:41:48
 *         author: wystan
 *
 *********************************************************************************
 */

var redis = require('redis');
var client = redis.createClient();

function main() {
	client.on('error', function(err) {
		console.log(err);
		client.quit();
	});
	client.set("mykey", "myvalue");
	client.get("mykey", function (err, data) {
		console.log(data);
	});

	client.subscribe("chat");
	client.on("message", function (channel, msg) {
		console.log("message: " + channel + "=>" + msg);
	});
}

main();


/************************************* END **************************************/
