// Initialize AOS (Animate On Scroll)
document.addEventListener('DOMContentLoaded', function() {
    AOS.init({
        duration: 800,
        offset: 50,
        once: true
    });
});

// Initialize Particles.js (if the library is loaded)
if (typeof particlesJS !== 'undefined') {
    particlesJS("particles-js", {
        "particles": {
            "number": { "value": 40, "density": { "enable": true, "value_area": 800 } },
            "color": { "value": "#8b5cf6" }, // Purple particles
            "shape": { "type": "circle" },
            "opacity": { "value": 0.3, "random": false },
            "size": { "value": 3, "random": true },
            "line_linked": {
                "enable": true,
                "distance": 150,
                "color": "#8b5cf6",
                "opacity": 0.2,
                "width": 1
            },
            "move": { "enable": true, "speed": 2, "direction": "none" }
        },
        "interactivity": {
            "detect_on": "canvas",
            "events": {
                "onhover": { "enable": true, "mode": "repulse" },
                "onclick": { "enable": true, "mode": "push" },
                "resize": true
            }
        },
        "retina_detect": true
    });
}
