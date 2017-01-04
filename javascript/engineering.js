/*
 *********************************************************************************
 *                     Copyright (C) 2016 wystan
 *
 *       filename: engineering.js
 *    description: 
 *        created: 2016-03-26 12:08:55
 *         author: wystan
 *
 *********************************************************************************
 */

/*
 * **************************************
 *
 * module defination patterns
 *
 * **************************************
 */
(function(){
    console.log("this is inside closure.");
}());


(function(a, b){

    console.log(a);
    console.log(b);

}("i am a", "i am b"));

var module = (function(){
    var demo = {};

    demo.init = function(){
        console.log("this is in demo init");
    }

    return demo;
}());

module.init();



/************************************* END **************************************/
