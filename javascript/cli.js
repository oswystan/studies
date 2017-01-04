#!/usr/bin/env node
/*
 *********************************************************************************
 *                     Copyright (C) 2016 wystan
 *
 *       filename: cli.js
 *    description: 
 *        created: 2016-12-23 10:20:12
 *         author: wystan
 *
 *********************************************************************************
 */

var commander = function () {
    var commands = [
        {
            name: "ls",
            fn: function (argv) {
                console.log("run " + this.name);
                return 0;
            },
        },
        {
            name: "do",
            fn: function (argv) {
                console.log("run " + this.name);
                return 0;
            },
        },
    ];

    function help() {
        console.log("usage: cli.js [sub command]");
        for (var i = 0, l = commands.length; i < l; i++) {
            var v = commands[i];
            console.log("    - " + v.name);
        }
        return -1;
    }

    return {
        run: function (argv) {
            for (var i = 0, l = commands.length; i < l; i++) {
                var v = commands[i];
                if (v.name == argv[0]) {
                    return v.fn(argv);
                }
            }
            if (argv.length > 0) {
                console.log("invalid command: " + argv[0]);
            }
            return help();
        }
    };
}

function main() {
    var cmd = commander();
    process.argv.splice(0, 2);
    return cmd.run(process.argv);
}

main();

/************************************* END **************************************/
