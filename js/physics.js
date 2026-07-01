import { bodies, G, dt } from "./bodies.js";


function cloneState(state) {
    return state.map(b => ({
        x: b.x,
        y: b.y,
        vx: b.vx,
        vy: b.vy,
        m: b.m
    }));
}


function computeAcceleration(state) {
    // initialise to zero
    const accel = state.map(() => ({ x: 0, y: 0 }));

    for (let i = 0; i < state.length; i++) {
        for (let j = 0; j < state.length; j++) {

            if (i === j) continue;

            const dx = state[j].x - state[i].x;
            const dy = state[j].y - state[i].y;

            const dist = Math.sqrt(dx * dx + dy * dy) + 1e-6;

            const a = G * state[j].m / (dist * dist);

            accel[i].x += a * dx / dist;
            accel[i].y += a * dy / dist;
        }
    }

    return accel;
}


function derivative(state) {
    const accel = computeAcceleration(state);

    return state.map((body, i) => ({
        dx: body.vx,
        dy: body.vy,
        dvx: accel[i].x,
        dvy: accel[i].y
    }));
}


function addState(state, k, factor) {
    return state.map((body, i) => ({
        x: body.x + k[i].dx * factor,
        y: body.y + k[i].dy * factor,
        vx: body.vx + k[i].dvx * factor,
        vy: body.vy + k[i].dvy * factor,
        m: body.m
    }));
}


export function step() {
    const state = cloneState(bodies);

    // RK4
    const k1 = derivative(state);
    const k2 = derivative(addState(state, k1, dt / 2));
    const k3 = derivative(addState(state, k2, dt / 2));
    const k4 = derivative(addState(state, k3, dt));

    for (let i = 0; i < bodies.length; i++) {

        bodies[i].x += dt * (
            k1[i].dx +
            2 * k2[i].dx +
            2 * k3[i].dx +
            k4[i].dx
        ) / 6;

        bodies[i].y += dt * (
            k1[i].dy +
            2 * k2[i].dy +
            2 * k3[i].dy +
            k4[i].dy
        ) / 6;

        bodies[i].vx += dt * (
            k1[i].dvx +
            2 * k2[i].dvx +
            2 * k3[i].dvx +
            k4[i].dvx
        ) / 6;

        bodies[i].vy += dt * (
            k1[i].dvy +
            2 * k2[i].dvy +
            2 * k3[i].dvy +
            k4[i].dvy
        ) / 6;

        bodies[i].trail.push({
            x: bodies[i].x,
            y: bodies[i].y
        });

        if (bodies[i].trail.length > 1000)
            bodies[i].trail.shift();
    }
}