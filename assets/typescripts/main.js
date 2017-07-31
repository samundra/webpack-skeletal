/// <reference path="../../node_modules/@types/jquery/index.d.ts" />
"use strict";
var greet_1 = require("./greet");
require('jquery');
function showHello(divName, name) {
    var elt = document.getElementById(divName);
    elt.innerText = greet_1.sayHello(name);
}
showHello("greeting", "TypeScript");
var variable = $("#myCustomModal");
function log(message, value) {
    console.log(message, value);
}
log("Variable", variable);
//# sourceMappingURL=main.js.map