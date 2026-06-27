import { bodies, scale } from "./bodies.js";

export function draw(ctx, canvas) {

    // clear canvas (with slight opacity for trail fade)
    ctx.fillStyle = "rgba(1, 10, 30, 0.10)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);


    for (const b of bodies) {
        ctx.strokeStyle = b.color;
        ctx.lineWidth = 3;
        ctx.beginPath();

        // draw trail
        for (let i = 0; i < b.trail.length; i++) {

            const p = b.trail[i];

            // convert coordinates to pixels
            const x = canvas.width / 2 + p.x * scale;
            const y = canvas.height / 2 + p.y * scale;

            if (i === 0)
                ctx.moveTo(x, y);
            else
                ctx.lineTo(x, y);
        }

        ctx.stroke();


        const bx = canvas.width / 2 + b.x * scale;
        const by = canvas.height / 2 + b.y * scale;

        // draw body
        ctx.fillStyle = b.color;
        ctx.beginPath();
        ctx.arc(bx, by, 7, 0, Math.PI * 2);
        ctx.fill();
    }
}