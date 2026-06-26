import { step } from "./physics.js";
import { draw } from "./renderer.js";

const canvas = document.getElementById("c");
const ctx = canvas.getContext("2d");

function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight - 300;
}

window.addEventListener("resize", resize);
resize();

function loop() {
    step();
    draw(ctx, canvas);
    requestAnimationFrame(loop);
}

loop();