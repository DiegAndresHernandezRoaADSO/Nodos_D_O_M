
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
const $main = dom.querySelector("main");

const $buscar = dom.querySelector("div.card");


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

// const arreglonodo = Array.from($main.childNodes);
const arreglonodo = [...$main.childNodes];
const nuevo2 = arreglonodo.filter((nodo) => (nodo.nodeType === nodo.TEXT_NODE) ? true: false
);
console.log(arreglonodo);
console.clear();













console.log($main.childNodes); // AQUI TENEMOS A LOS HIJOS
console.log($main.parentElement);  // AQUI ACCEDIMOS AL PAPA
console.log($main.previousElementSibling);  // AQUI ACCEDIMOS AL hermano
console.log($main.nextElementSibling);  // AQUI ACCEDIMOS AL SCRIPT

console.log();



