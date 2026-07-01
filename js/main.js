import { step } from "./physics.js";
import { draw } from "./renderer.js";
import { setOrbit } from "./bodies.js";

const canvas = document.getElementById("c");
const ctx = canvas.getContext("2d");
const STEPS_PER_FRAME = 10;

// Orbit selector
const orbitSelect = document.getElementById("orbitSelect");

orbitSelect.addEventListener("change", () => {
    setOrbit(orbitSelect.value);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
});

function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight - 100;
}

window.addEventListener("resize", resize);
resize();


function animate() {
    for (let i = 0; i < STEPS_PER_FRAME; i++) {
        step();
    }
    draw(ctx, canvas);
    requestAnimationFrame(animate);
}

animate();
