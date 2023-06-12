document.addEventListener('DOMContentLoaded', function() {
    const colors = [
        { color: 'hsla(28,100%,74%,1)', startX: 0, startY: 0 },
        { color: 'hsla(189,100%,56%,1)', startX: 100, startY: 0 },
        { color: 'hsla(355,100%,93%,1)', startX: 0, startY: 100 },
        { color: 'hsla(340,100%,76%,1)', startX: 100, startY: 100 },
        { color: 'hsla(22,100%,77%,1)', startX: 50, startY: 0 },
    ];

    let momentumX = 0;
    let momentumY = 0;
    const momentumAmplifier = 3.14159265; // Increase this to make the movement more dramatic
    const decay = 0.90;
    const padding = 20;

    function update() {
        momentumX *= decay;
        momentumY *= decay;
        let backgroundStyle = '';

        for (let i = 0; i < colors.length; i++) {
            const color = colors[i];
            color.currentX = (color.currentX || color.startX) + momentumX;
            color.currentY = (color.currentY || color.startY) + momentumY;

            if (color.currentX < -padding || color.currentX > 100 + padding) {
                momentumX *= -1;
                color.currentX = color.currentX < 0 ? -padding : 100 + padding;
            }
            if (color.currentY < -padding || color.currentY > 100 + padding) {
                momentumY *= -1;
                color.currentY = color.currentY < 0 ? -padding : 100 + padding;
            }

            backgroundStyle += `radial-gradient(at ${color.currentX}% ${color.currentY}%, ${color.color} 0px, transparent 1500px),`;
        }

        document.body.style.backgroundImage = backgroundStyle.slice(0, -1);
        requestAnimationFrame(update);
    }

    function mouseMove(event) {
        let windowWidth = window.innerWidth;
        let windowHeight = window.innerHeight;
        let mouseX = event.clientX;
        let mouseY = event.clientY;

        momentumX = (mouseX / windowWidth - 0.5) * momentumAmplifier;
        momentumY = (mouseY / windowHeight - 0.5) * momentumAmplifier;
    }

    document.addEventListener('mousemove', mouseMove);
    requestAnimationFrame(update);
});
