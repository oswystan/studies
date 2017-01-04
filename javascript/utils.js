/*
 *********************************************************************************
 *                     Copyright (C) 2016 wystan
 *
 *       filename: utils.js
 *    description: 
 *        created: 2016-03-12 11:01:22
 *         author: wystan
 *
 *********************************************************************************
 */

Date.prototype.Format = function (fmt) {
    str = fmt;
    str = str.replace(/yyyy|YYYY/, this.getFullYear());
    str = str.replace(/mm/, this.getMonth() >= 9 ? this.getMonth() + 1 : '0' + (this.getMonth() + 1));
    str = str.replace(/dd/, this.getDate() > 9 ? this.getDate() : '0' + this.getDate());
    str = str.replace(/HH/, this.getHours() > 9 ? this.getHours() : '0' + this.getHours());
    str = str.replace(/MM/, this.getMinutes() > 9 ? this.getMinutes() : '0' + this.getMinutes());
    str = str.replace(/SS/, this.getSeconds() > 9 ? this.getSeconds() : '0' + this.getSeconds());
    return str;
}
Date.prototype.FormatUTC = function (fmt) {
    str = fmt;
    str = str.replace(/yyyy|YYYY/, this.getUTCFullYear());
    str = str.replace(/mm/, this.getUTCMonth() >= 9 ? this.getUTCMonth() + 1 : '0' + (this.getUTCMonth() + 1));
    str = str.replace(/dd/, this.getUTCDate() > 9 ? this.getUTCDate() : '0' + this.getUTCDate());
    str = str.replace(/HH/, this.getUTCHours() > 9 ? this.getUTCHours() : '0' + this.getUTCHours());
    str = str.replace(/MM/, this.getUTCMinutes() > 9 ? this.getUTCMinutes() : '0' + this.getUTCMinutes());
    str = str.replace(/SS/, this.getUTCSeconds() > 9 ? this.getUTCSeconds() : '0' + this.getUTCSeconds());
    return str;
}

function dateFormatTest() {
    var d = new Date();
    console.log(d);
    console.log(d.Format("yyyy-mm-dd HH:MM:SS"));
    console.log(d.FormatUTC("yyyy-mm-dd HH:MM:SS"));
}

function main() {
    console.log("start run ...");

    dateFormatTest();

    console.log("done.");
}

main();

/************************************* END **************************************/
