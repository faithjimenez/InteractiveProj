
document.addEventListener("DOMContentLoaded", function() {
    var stargif = document.querySelector("#stargif");
    var container = document.querySelector("#container");
    
    container.addEventListener("click", getClickPosition, false);

    function getClickPosition(e) {
        var xPosition = e.clientX - (stargif.offsetWidth / 2);
        var yPosition = e.clientY - (stargif.offsetHeight / 2); //fix later

        var translate3dValue = "translate3d(" + xPosition + "px," + yPosition + "px,0)";
        stargif.style.transform = translate3dValue;

    }
    function createBubblingParticles() {
        let rect = stargif.getBoundingClientRect();
        let x = rect.left + rect.width / 2;
        let y = rect.top + rect.height / 2;

        for (let i = 0; i < 5; i++) { // Number of particles
            let particle = document.createElement("div");
            particle.classList.add("particle");
            document.body.appendChild(particle);

            let xOffset = (Math.random()-0.5)*20;
            let yOffset = (Math.random ()-0.5)*20;

            particle.style.left = `${x + xOffset}px`;
            particle.style.top = `${y + yOffset-20}px`;

            let xDrift = (Math.random() - 0.5) * 180; // Slight horizontal drift
            let yMove = Math.random() * -50 - 20; // Move upward

            particle.animate([
                { transform: `translate(0,0) scale(1)`, opacity: 1 },
                { transform: `translate(${xDrift}px, ${yMove}px) scale(${Math.random() * 0.5 + 0.5})`, opacity: 0 }
            ], {
                duration: 1000 + Math.random() * 500,
                easing: "ease-out"
            });

            setTimeout(() => particle.remove(), 1500);
        }
    }

    // Continuously generate particles at the stargif's position
    setInterval(createBubblingParticles, 300);
});

