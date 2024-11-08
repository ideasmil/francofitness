document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Form submission handling
    document.getElementById('contactForm').addEventListener('submit', function(event) {
        event.preventDefault();
        
        fetch(this.action, {
            method: 'POST',
            body: new FormData(this),
            headers: {
                'Accept': 'application/json'
            }
        }).then(response => {
            if (response.ok) {
                alert('¡Gracias por tu mensaje! Te contactaremos pronto.');
                this.reset();
            } else {
                response.json().then(data => {
                    if (Object.hasOwn(data, 'errors')) {
                        alert(data["errors"].map(error => error["message"]).join(", "));
                    } else {
                        alert("Oops! Hubo un problema al enviar el formulario");
                    }
                })
            }
        }).catch(error => {
            alert("Oops! Hubo un problema al enviar el formulario");
        });
    });

    // Basic parallax effect for hero section
    window.addEventListener('scroll', function() {
        const hero = document.getElementById('hero');
        const scrollPosition = window.pageYOffset;
        hero.style.backgroundPositionY = scrollPosition * 0.5 + 'px';
    });

    // Simple testimonial slider
    let currentTestimonial = 0;
    const testimonials = document.querySelectorAll('.testimonial');
    
    function showNextTestimonial() {
        testimonials[currentTestimonial].style.display = 'none';
        currentTestimonial = (currentTestimonial + 1) % testimonials.length;
        testimonials[currentTestimonial].style.display = 'block';
    }

    setInterval(showNextTestimonial, 5000); // Change testimonial every 5 seconds

    // Initialize testimonials
    testimonials.forEach((testimonial, index) => {
        if (index !== 0) {
            testimonial.style.display = 'none';
        }
    });

    // Mobile menu toggle (you would need to add a menu button in the HTML)
    const menuButton = document.querySelector('.menu-button');
    const navUl = document.querySelector('nav ul');

    if (menuButton) {
        menuButton.addEventListener('click', () => {
            navUl.classList.toggle('show');
        });
    }
});



document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('nav');

    menuToggle.addEventListener('click', function() {
        nav.classList.toggle('active');
    });
});



