
//objeto padre navegador

let wh = window;
let dom = document;
let head = dom.head;
let body = dom.body;

const $header = dom.querySelector("header");
const $header_class = dom.querySelector(".header");
const $header_class_all = dom.querySelectorAll(".header");
const $header_id = dom.querySelector("#header");
const id = document.getElementById("header");
const _class = document.getElementsByClassName("header");
const $main = dom.querySelector("main")


console.log(wh);
console.log(dom);
console.log(head);
console.log(body);
console.log(dom.title);
console.log(dom.styleSheets);
console.log(body.header);


console.log($header);
console.log($header_class);
console.log($header_class_all);
console.log($header_id);


console.log(id);
console.log(_class);
console.clear();
console.log(body.childNodes);

console.log($main);

$main.childNodes.forEach((nodo, dos) => console.log(nodo, dos));
$main.childNodes.filter.$header