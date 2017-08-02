import * as $ from "jquery";
import "bootstrap";
import * as Rx from "rxjs"

import { sayHello } from "./greet";

function showHello(divName: string, name: string) {
    const elt = document.getElementById(divName);
    elt.innerText = sayHello(name);
}

const button : Element = document.getElementById('buttonMe');
const tButton$ : Rx.Observable<Event> = Rx.Observable.fromEvent(button, 'click');

tButton$.subscribe((event : Event) => {
    console.log(event.target);
});

showHello("greeting", "TypeScript");

$(document).ready(function() {
   console.log("I am from jQuery na.");
});
