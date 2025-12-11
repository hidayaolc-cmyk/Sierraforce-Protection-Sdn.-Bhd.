document.addEventListener('DOMContentLoaded', function() {
    
    // --- Mobile Menu Toggle Functionality ---
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('.nav-content nav');
    const navLinks = document.querySelectorAll('.nav-list a');

    menuToggle.addEventListener('click', function() {
        nav.classList.toggle('active');
        // Change the icon from bars to times (X) when active
        const icon = menuToggle.querySelector('i');
        icon.classList.toggle('fa-bars');
        icon.classList.toggle('fa-times');
    });

    // Close the menu when a link is clicked (for single-page navigation)
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (nav.classList.contains('active')) {
                nav.classList.remove('active');
                // Reset icon back to bars
                const icon = menuToggle.querySelector('i');
                icon.classList.add('fa-bars');
                icon.classList.remove('fa-times');
            }
        });
    });

    // --- Smooth Scroll Functionality ---
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                // Get the height of the fixed header/navbar to adjust scroll position
                const headerHeight = document.getElementById('navbar').offsetHeight;
                
                // Calculate the position to scroll to (target top - header height)
                const targetPosition = targetElement.offsetTop - headerHeight;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // --- Placeholder for form submission (prevents default submit) ---
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            // In a real scenario, you would send this data to a server here (e.g., using fetch API)
            alert('Thank you for your message! We will get back to you soon.');
            contactForm.reset();
        });
    }
});