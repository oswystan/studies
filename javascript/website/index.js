#!/usr/bin/env node
/*
 *********************************************************************************
 *                     Copyright (C) 2017 wystan
 *
 *       filename: index.js
 *    description:
 *        created: 2017-02-11 12:27:40
 *         author: wystan
 *
 *********************************************************************************
 */

var express = require('express');
var express_jwt = require('express-jwt');
var body_parser = require('body-parser');
var jwt = require('jsonwebtoken');

var app = express();

var app_secret = "TODO set your own secret";

function do_auth(req, res) {
    if (req.body.user &&  req.body.password) {
        if (req.body.user == "admin" && req.body.password == "admin") {
            var token = jwt.sign({username: req.body.user}, app_secret, {expiresIn: 20});
            res.send(token);
        }
    } else {
        res.send("invalid user or password");
    }
}
function do_e(req, res) {
    console.log(req._auth_.username);
    res.send("do e\n");
}
function do_login(req, res) {
    res.send("do login\n");
}
function err_handler(err, req, res, next) {
    if (err) {
        res.send(err.message);
    } else {
        next();
    }
}

function main() {
    app.listen(8080);
    app.use(body_parser.urlencoded({extended: true}));
    app.use(body_parser.json());
    app.use("/api", express_jwt({requestProperty:"_auth_", secret: app_secret }).unless({path: ['/api/auth']}));
    app.use(err_handler);
    app.post("/api/auth", do_auth);
    app.post("/api/e", do_e);
    app.post("/login", do_login);

    console.log("server started...");
}

main();


/************************************* END **************************************/

