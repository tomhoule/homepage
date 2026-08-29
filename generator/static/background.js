(() => {
    const canvas = document.querySelector(".background-ornament");
    const content = document.querySelector(".content-column");
    const desktop = window.matchMedia("(min-width: 64.001rem)");

    if (!canvas || !content) return;

    const colors = [
        "#c9805e",
        "#d3ae57",
        "#8ba055",
        "#5f9e96",
        "#7591bd",
        "#9c789c",
        "#c4767f",
    ];

    const clamp = (value, min, max) => Math.min(Math.max(value, min), max);
    // One seed per page load, so redraws repeat the same constellation.
    const seed = Math.floor(Math.random() * 2 ** 32);
    let frame;

    const polygon = (ctx, x, y, radius, random) => {
        const corners = Array.from(
            { length: 3 + Math.floor(random() * 7) },
            () => {
                const angle = random() * 2 * Math.PI;
                const distance = radius * (0.7 + random() * 0.3);
                return [
                    angle,
                    x + Math.cos(angle) * distance,
                    y + Math.sin(angle) * distance,
                ];
            },
        ).sort(([a], [b]) => a - b);

        ctx.beginPath();
        for (const [, cornerX, cornerY] of corners) ctx.lineTo(cornerX, cornerY);
        ctx.closePath();
        ctx.fillStyle = colors[Math.floor(random() * colors.length)];
        ctx.fill();
        ctx.stroke();
    };

    // A jittered grid with most cells left empty: scattered, never in rows.
    const scatter = (ctx, left, right, height, radius, random) => {
        const cell = radius * 3;
        const columns = Math.max(1, Math.round((right - left) / cell));
        const rows = Math.max(1, Math.round(height / cell));

        for (let row = 0; row < rows; row += 1) {
            for (let column = 0; column < columns; column += 1) {
                if (random() > 0.24) continue;
                const x = left + ((column + random()) * (right - left)) / columns;
                const y = ((row + random()) * height) / rows;
                const size = radius * (0.55 + random() * 0.6);
                polygon(
                    ctx,
                    clamp(x, left + size, right - size),
                    clamp(y, size, height - size),
                    size,
                    random,
                );
            }
        }
    };

    const draw = () => {
        if (!desktop.matches) {
            canvas.width = 0;
            canvas.height = 0;
            return;
        }

        const width = document.documentElement.clientWidth;
        const height = Math.max(document.body.scrollHeight, window.innerHeight);
        const ratio = Math.min(window.devicePixelRatio || 1, 2);
        const bounds = content.getBoundingClientRect();
        const radius = clamp(width / 55, 16, 30);

        let state = seed;
        const random = () => {
            state = (state * 1664525 + 1013904223) >>> 0;
            return state / 2 ** 32;
        };

        canvas.width = Math.round(width * ratio);
        canvas.height = Math.round(height * ratio);
        canvas.style.height = `${height}px`;

        const ctx = canvas.getContext("2d");
        ctx.scale(ratio, ratio);
        ctx.lineWidth = 1;
        ctx.strokeStyle = "rgb(48 44 36 / 35%)";

        scatter(ctx, 0, bounds.left, height, radius, random);
        scatter(ctx, bounds.right, width, height, radius, random);
    };

    const scheduleDraw = () => {
        cancelAnimationFrame(frame);
        frame = requestAnimationFrame(draw);
    };

    desktop.addEventListener("change", scheduleDraw);
    window.addEventListener("resize", scheduleDraw, { passive: true });
    new ResizeObserver(scheduleDraw).observe(content);

    scheduleDraw();
    document.fonts?.ready.then(scheduleDraw);
})();
