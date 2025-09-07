document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.nav-menu a');
    const sections = document.querySelectorAll('.section');
    const mainContent = document.querySelector('.main-content');

    // Smooth scrolling for navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);

            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Highlight active link on scroll
    function updateActiveLink() {
        let currentSectionId = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100; // a small offset
            const sectionHeight = section.clientHeight;

            // For the main content scrollable element
            if (mainContent.scrollTop >= sectionTop && mainContent.scrollTop < sectionTop + sectionHeight) {
                currentSectionId = '#' + section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === currentSectionId) {
                link.classList.add('active');
            }
        });
    }

    // Listen for scroll events on the main content area
    mainContent.addEventListener('scroll', updateActiveLink);

    // Initial check in case the page loads on a different section
    updateActiveLink();

    // Back to Top Button
    const backToTopButton = document.querySelector('#back-to-top');

    if (backToTopButton) {
        mainContent.addEventListener('scroll', () => {
            if (mainContent.scrollTop > 300) {
                backToTopButton.classList.add('visible');
            } else {
                backToTopButton.classList.remove('visible');
            }
        });

        backToTopButton.addEventListener('click', (e) => {
            e.preventDefault();
            document.querySelector('#home').scrollIntoView({
                behavior: 'smooth'
            });
        });
    }
});