"use strict";
exports.__esModule = true;
var rxjs_1 = require("rxjs");
// N1
var a$ = (0, rxjs_1.of)(1, "aa", 3);
var b$ = (0, rxjs_1.of)(4, 5, "bb");
var c$ = (0, rxjs_1.concat)(a$, b$).pipe((0, rxjs_1.map)(function (x) {
    if (typeof x === "number") {
        return x * 10;
    }
    else {
        return "" + x + x;
    }
}));
c$.subscribe(function (x) { return console.log(x); });
// N2
var endLess$ = (0, rxjs_1.interval)(1000).pipe((0, rxjs_1.filter)(function (x) { return x % 2 === 0; }), (0, rxjs_1.map)(function (x) { return x * 2; }));
endLess$.subscribe(function (x) { return console.log(x); });
var getUsers = function () {
    var users$ = (0, rxjs_1.of)({
        firstName: "giorgi",
        lastName: "bazerashvili",
        age: 25
    }, {
        firstName: "meore",
        lastName: "giorgi",
        age: 17
    });
    var timmer$ = (0, rxjs_1.timer)(5000)
        .pipe((0, rxjs_1.concatMapTo)(users$), (0, rxjs_1.filter)(function (x) { return x.age > 18; }))
        .subscribe(function (x) { return console.log(x); });
};
getUsers();
