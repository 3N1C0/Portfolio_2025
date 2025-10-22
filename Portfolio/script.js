document.addEventListener('DOMContentLoaded', function() {

    // --- Typewriter Effect ---
    const typewriterElement = document.getElementById('typewriter');
    // Check if the typewriter element exists to avoid errors on the resume page
    if (typewriterElement) {
        const textToType = "Hello, I'm Elias Nicolas";
        let index = 0;

        function typeWriter() {
            if (index < textToType.length) {
                typewriterElement.textContent += textToType.charAt(index);
                index++;
                setTimeout(typeWriter, 100); // 100ms delay
            }
        }
        
        // Start the effect
        typeWriter();
    }
    
    // --- Smooth Scrolling for Navigation Links ---
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

});
