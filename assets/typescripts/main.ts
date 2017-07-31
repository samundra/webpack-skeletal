import * as $ from "jquery";
import "bootstrap";

import { sayHello } from "./greet";

function showHello(divName: string, name: string) {
    const elt = document.getElementById(divName);
    elt.innerText = sayHello(name);
}

showHello("greeting", "TypeScript");

$(document).ready(function() {
    // let $variable : JQuery = $("#myCustomModal");
    //
    // console.log($variable);
});
