#!/usr/bin/env node

/*
 *********************************************************************************
 *                     Copyright (C) 2017 wystan
 *
 *       filename: snippets.js
 *    description:
 *        created: 2017-02-28 17:42:26
 *         author: wystan
 *
 *********************************************************************************
 */

var csv = require('fast-csv');
var fs = require('fs');
var EventEmitter = require('events').EventEmitter;
var inherits = require('util').inherits;

function snip_csv() {
    fs.createReadStream("upload/tmp/department.csv")
        .on('error', function(err) {
            self.trigger('error', err);
        })
        .pipe(csv({
            headers: true
        }))
        .validate(function(data) {
            return true;
        })
        .on('data', function(data) {
            console.log('import data into database:', data);
        })
        .on("data-invalid", function(data) {
            console.log("invalid data:", data);
        })
        .on('end', function() {
            console.log("END");
        });
}

function snip_ev() {
    var ev =  function(name) {
        this.name = name;
    };

    inherits(ev, EventEmitter);

    ev.prototype.do = function() {
        this.emit("do", "on do ...");
        this.emit("done", "on done ...");
    };

    var myev = new ev();
    myev.on("do", function (msg) {
        console.log(msg);
    });
    myev.on("done", function (msg) {
        console.log(msg);
    });

    myev.do();
}
/************************************* END **************************************/
