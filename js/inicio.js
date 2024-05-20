"use_strict";


let lenguaje = localStorage.getItem("lenguaje") || "es_ES";
localStorage.setItem("lenguaje", lenguaje);
const botones = document.querySelectorAll('div button');
botones[0].textContent = texto[lenguaje]["boton_jugar"];
botones[1].textContent = texto[lenguaje]["boton_tutorial"];