#!/usr/bin/env node
/*
 *********************************************************************************
 *                     Copyright (C) 2017 wystan
 *
 *       filename: a.js
 *    description:
 *        created: 2017-12-12 14:17:49
 *         author: wystan
 *
 *********************************************************************************
 */
let b = false;

function f1(succ, fail) {
    console.log("enter f1.");
    let p = new Promise(function(resolve, reject) {
        if (b) {
            console.log("f1 resolve");
            resolve();
        } else {
            console.log("f1 rej");
            reject();
        }
    });
    console.log("f1 before then.");
    p.then(succ).catch(fail);
    console.log("leave f1.");
}

function f2(succ, fail) {
    console.log("enter f2.");
    let p = new Promise(function(resolve, reject) {
        if (b) {
            console.log("f2 resolve");
            resolve();
        } else {
            console.log("f2 rej");
            reject();
        }
    });
    console.log("f2 before then.");
    p.then(succ).catch(fail);
    console.log("leave f2.");
}

console.log("step 0.");
f1(function(){console.log("f1 succ");}, function(){console.log("f1 fail");});
console.log("step 1.");
f2(function(){console.log("f2 succ");}, function(){console.log("f2 fail");});
console.log("step 2.");

/************************************* END **************************************/
