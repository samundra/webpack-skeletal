import * as $ from "jquery";
import "bootstrap";
import "bootstrap-sass";

// import '../../assets/sass/main.scss';

import { sayHello } from "./greet";

function showHello(divName: string, name: string) {
    const elt = document.getElementById(divName);
    elt.innerText = sayHello(name);
}

showHello("greeting", "TypeScript");
