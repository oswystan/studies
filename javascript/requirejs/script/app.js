
require.config({
	"jquery": "jquery.js",
	"book" : "book.js",
	"light": "light.js"
});

var deps = [
	"jquery",
	"book",
	"light"
];

define(deps, function () {

	var app = {
		modules: [],
	};
	for (var i = 1; i < arguments.length; i++) {
		app.modules.push(arguments[i]);
	}

	for (var i = 0; i < app.modules.length; i++) {
		console.log(app.modules[i].name);
	}
});