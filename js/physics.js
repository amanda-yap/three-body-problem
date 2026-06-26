import { bodies, G, dt } from "./bodies.js";

export function step() {

    // intial acceleration
    const ax = bodies.map(() => ({ x: 0, y: 0 }));

    for (let i = 0; i < bodies.length; i++) {
        for (let j = 0; j < bodies.length; j++) {

            if (i === j) continue;

            const dx = bodies[j].x - bodies[i].x;
            const dy = bodies[j].y - bodies[i].y;

            const dist = Math.sqrt(dx * dx + dy * dy) + 1e-6;
            const accel = G * bodies[j].m / (dist * dist);

            ax[i].x += accel * dx / dist;
            ax[i].y += accel * dy / dist;
        }
    }

    // update positions and velocities
    for (let i = 0; i < bodies.length; i++) {

        bodies[i].vx += ax[i].x * dt;
        bodies[i].vy += ax[i].y * dt;

        bodies[i].x += bodies[i].vx * dt;
        bodies[i].y += bodies[i].vy * dt;

        bodies[i].trail.push({
            x: bodies[i].x,
            y: bodies[i].y
        });

        if (bodies[i].trail.length > 150) // will probably replace this with circular buffer
            bodies[i].trail.shift();
    }
}