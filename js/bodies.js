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
    ]
};

// Start with the figure-8
setOrbit("figure8");