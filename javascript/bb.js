/*
 *********************************************************************************
 *                     Copyright (C) 2016 wystan
 *
 *       filename: bb.js
 *    description: It is a personal study case of Backbone.js and Underscore.js
 *        created: 2016-03-22 12:06:36
 *         author: wystan
 *
 *********************************************************************************
 */


var backbone = require("backbone");
var _ = require("underscore");


function on() {
    var obj = {};    
    _.extend(obj, backbone.Events);
    obj.on("all", function() {
        console.log(arguments);
    });
    obj.on("dance:tap", function (msg) {
        console.log(arguments);
    });

    obj.trigger("dance:tap", "tap dancing.");
    obj.trigger("dance:br", "break dancing.");
}

function listen() {
    var a = {};
    var b = {};
    var c = {};
    _.extend(a, backbone.Events);
    _.extend(b, backbone.Events);
    _.extend(c, backbone.Events);

    a.listenTo(b, "any", function () {
        console.log(arguments);
    });
    a.listenTo(c, "any", function (ev) {
        console.log(arguments);
    });

    c.trigger("any", "i am c");
    b.trigger("any", "i am b");
}

function events() {
    on();
    listen();
}


function main() {
    events();
}

main();

/************************************* END **************************************/
