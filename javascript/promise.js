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
            reject({reason: "f1 failed"});
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
            reject({reason: "f2 failed"});
        }
    });
    console.log("f2 before then.");
    p.then(succ).catch(fail);
    console.log("leave f2.");
}

console.log("step 0.");
f1(function(){console.log("f1 succ");}, function(e){console.log(e);});
console.log("step 1.");
f2(function(){console.log("f2 succ");}, function(e){console.log(e);});
console.log("step 2.");

//-------------result:---------------
//step 0.
//enter f1.
//f1 rej
//f1 before then.
//leave f1.
//step 1.
//enter f2.
//f2 rej
//f2 before then.
//leave f2.
//step 2.
//{ reason: 'f1 failed' }
//{ reason: 'f2 failed' }
/************************************* END **************************************/
