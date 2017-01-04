/*
 *********************************************************************************
 *                     Copyright (C) 2016 wystan
 *
 *       filename: grammar.js
 *    description: 
 *        created: 2016-03-12 11:00:55
 *         author: wystan
 *
 *********************************************************************************
 */


function bool_test() {
    var a = null;
    var b;

    if (a == b) {
        console.log('a==b');
    }
    if (a === b) {
        console.log('a===b');
    }

    if (a) {
        console('undefined true');
    }

    if (b) {
        console('null true');
    }
}

function func_param() {
    function fun1(s) {
        if (s) {
            console.log(s);
        }
    }

    fun1();
    fun1("");
    fun1("sss");
}


function st_array() {
    var a = [1, 2, 3, 4, 5];
    var b = a.splice(1,2);

    console.log(a);     // a = [1, 4, 5]
    console.log(b);     // b = [2, 3]

    var c = a.map(function (x) {
        return x*x;
    });
    console.log(c);
}

function main() {
    st_array();
    func_param();
    bool_test();
}

main();

/************************************* END **************************************/
