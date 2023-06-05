document.addEventListener('DOMContentLoaded', function() {
    let colornum = 0; // increment to change background
    const colorArray = [
        {
            background: '#557153',
            h1: '#E6E5A3',
            border: '#A9AF7E',
            font: '#7D8F69'
        }
    ];

    let globalobj = colorArray[colornum];
    // store default object to change background
    let xPercent  = 0;
    let yPercent = 0;

    let momentumX = 0;
    let momentumY = 0;
    const momentumAmplifier = 5; // adjust the momentum amplifier to control the rate of momentum accumulation
    const decay = 0.95; // adjust the decay factor to control the rate of momentum decay

    function update() {
        momentumX *= decay;
        momentumY *= decay;
        xPercent += momentumX;
        yPercent += momentumY;

        let windowWidth = window.innerWidth;
        let windowHeight = window.innerHeight;

        // Limit xPercent and yPercent to valid ranges (0-100)
        xPercent = Math.max(0, Math.min(xPercent, 100));
        yPercent = Math.max(0, Math.min(yPercent, 100));

        let stringColor = `radial-gradient(ellipse at ${xPercent}% ${yPercent}%, ${globalobj.background}, ${globalobj.border}, transparent),radial-gradient(ellipse at ${yPercent}% ${xPercent}%, ${globalobj.h1}, ${globalobj.font}, transparent)`;
        document.body.style.background = stringColor;

        requestAnimationFrame(update);
    }

    function mouseMove(event) {
        let windowWidth = window.innerWidth;
        let windowHeight = window.innerHeight;
        let mouseX = event.clientX;
        let mouseY = event.clientY;

        momentumX = (mouseX / windowWidth - xPercent / 100) * momentumAmplifier;
        momentumY = (mouseY / windowHeight - yPercent / 100) * momentumAmplifier;
        console.log(mouseX/ windowWidth, mouseY/ windowHeight)
    }

    document.addEventListener('mousemove', mouseMove);
    requestAnimationFrame(update);
});
