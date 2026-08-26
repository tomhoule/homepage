const canvas = document.querySelector("[data-background-canvas]");

if (canvas instanceof HTMLCanvasElement) {
    const context = canvas.getContext("2d");

    if (context) {
        const squareSize = 40;
        const pixelRatio = window.devicePixelRatio || 1;
        const width = window.innerWidth;
        const height = window.innerHeight;

        canvas.width = Math.ceil(width * pixelRatio);
        canvas.height = Math.ceil(height * pixelRatio);
        context.scale(pixelRatio, pixelRatio);

        const colors = ["#fff4bf", "#dff2cc"];

        for (let y = 0; y < height; y += squareSize) {
            for (let x = 0; x < width; x += squareSize) {
                const column = x / squareSize;
                const row = y / squareSize;
                context.fillStyle = colors[(column + row) % 2];
                context.fillRect(x, y, squareSize, squareSize);
            }
        }
    }
}
