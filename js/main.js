import { step } from "./physics.js";
import { draw } from "./renderer.js";
import { setOrbit } from "./bodies.js";

const canvas = document.getElementById("c");
const ctx = canvas.getContext("2d");

// Orbit selector
const orbitSelect = document.getElementById("orbitSelect");

orbitSelect.addEventListener("change", () => {
    setOrbit(orbitSelect.value);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
});

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