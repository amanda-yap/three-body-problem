export const G = 1;
export const scale = 300;
export const dt = 0.005;

export let bodies = [];

export function setOrbit(name) {
    bodies.length = 0; // Clear the current array

    for (const body of orbitPresets[name]) {
        bodies.push({
            ...body,
            trail: []
        });
    }
}

export const orbitPresets = {
    figure8: [
        {
            x: -0.97000436,
            y: 0.24308753,
            vx: 0.4662036850,
            vy: 0.4323657300,
            m: 1,
            color: "#FF8000"
        },
        {
            x: 0.97000436,
            y: -0.24308753,
            vx: 0.4662036850,
            vy: 0.4323657300,
            m: 1,
            color: "#FFFF99"
        },
        {
            x: 0,
            y: 0,
            vx: -0.93240737,
            vy: -0.86473146,
            m: 1,
            color: "#3399FF"
        }
    ],

    butterfly: [
        {
            x: -1,
            y: 0,
            vx: 0.30689,
            vy: 0.12551,
            m: 1,
            color: "#FF8000"
        },
        {
            x:  1,
            y: 0,
            vx: 0.30689,
            vy: 0.12551,
            m: 1,
            color: "#FFFF99"
        },
        {
            x: 0,
            y: 0,
            vx: -0.61378,
            vy: -0.25102,
            m: 1,
            color: "#3399FF"        
        }
    ],
    moth1: [
        {
            x: -1,
            y: 0,
            vx: 0.464445,
            vy: 0.396060,
            m: 1,
            color: "#FF8000"
        },
        {
            x: 1,
            y: 0,
            vx: 0.464445,
            vy: 0.396060,
            m: 1,
            color: "#FFFF99"
        },
        {
            x: 0,
            y: 0,
            vx: -0.928890,
            vy: -0.792120,
            m: 1,
            color: "#3399FF"
        }
    ],
    dragonfly: [
        {
            x: -1,
            y: 0,
            vx: 0.08058,
            vy: 0.58884,
            m: 1,
            color: "#FF8000"
        },
        {
            x: 1,
            y: 0,
            vx: 0.08058,
            vy: 0.58884,
            m: 1,
            color: "#FFFF99"
        },
        {
            x: 0,
            y: 0,
            vx: -0.16116,
            vy: -1.17768,
            m: 1,
            color: "#3399FF"
        }
    ],
    yinyang1: [
        {
            x: -1,
            y: 0,
            vx: 0.51394,
            vy: 0.30474,
            m: 1,
            color: "#FF8000"
        },
        {
            x: 1,
            y: 0,
            vx: 0.51394,
            vy: 0.30474,
            m: 1,
            color: "#FFFF99"
        },
        {
            x: 0,
            y: 0,
            vx: -1.02788,
            vy: -0.60948,
            m: 1,
            color: "#3399FF"
        }
    ],
    goggles: [
        {
            x: -1,
            y: 0,
            vx: 0.41734,
            vy: 0.31310,
            m: 1,
            color: "#FF8000"
        },
        {
            x: 1,
            y: 0,
            vx: 0.41734,
            vy: 0.31310,
            m: 1,
            color: "#FFFF99"
        },
        {
            x: 0,
            y: 0,
            vx: -0.83468,
            vy: -0.62620,
            m: 1,
            color: "#3399FF"
        }
    ],
    lagrange: [
        {
            x: -1,
            y: 0,
            vx: 0.5,
            vy: 0.288675,
            m: 1,
            color: "#FF8000"
        },
        {
            x: 0.5,
            y: 0.8660254,
            vx: -0.5,
            vy: 0.288675,
            m: 1,
            color: "#FFFF99"
        },
        {
            x: 0.5,
            y: -0.8660254,
            vx: 0,
            vy: -0.577350,
            m: 1,
            color: "#3399FF"
        }
    ]
};

// Start with the figure-8
setOrbit("figure8");