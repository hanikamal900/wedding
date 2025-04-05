 // Simple JavaScript for mobile menu toggle
 document.querySelector('.mobile-menu-btn').addEventListener('click', function() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
        
        // Close mobile menu if open
        if (window.innerWidth <= 768) {
            document.querySelector('.nav-links').style.display = 'none';
        }
    });
});

// Animation on scroll
window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('section');
    
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (sectionTop < windowHeight - 100) {
            section.style.opacity = '1';
            section.style.transform = 'translateY(0)';
        }
    });
});

// Initialize sections with fade-in effect
document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('section:not(.hero)');
    
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    });
    
    // Trigger the hero animation
    setTimeout(() => {
        document.querySelector('.hero-title').style.opacity = '1';
        document.querySelector('.hero-title').style.transform = 'translateY(0)';
        document.querySelector('.hero-subtitle').style.opacity = '1';
        document.querySelector('.hero-subtitle').style.transform = 'translateY(0)';
    }, 300);
});