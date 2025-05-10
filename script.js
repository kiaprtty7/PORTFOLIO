document.addEventListener('DOMContentLoaded', function() {
 

    // Mobile menu toggle
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navUl = document.querySelector('nav ul');
    
    mobileMenuBtn.addEventListener('click', function() {
        this.classList.toggle('active');
        navUl.classList.toggle('show');
    });
    
    // Close mobile menu when clicking a link
    document.querySelectorAll('nav a').forEach(link => {
        link.addEventListener('click', function() {
            if (window.innerWidth <= 768) {
                mobileMenuBtn.classList.remove('active');
                navUl.classList.remove('show');
            }
        });
    });
    
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Highlight active navigation link
    window.addEventListener('scroll', function() {
        const scrollPosition = window.scrollY;
        
        document.querySelectorAll('section').forEach(section => {
            const sectionTop = section.offsetTop - 100;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                document.querySelectorAll('nav a').forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === '#${sectionId}') {
                        link.classList.add('active');
                    }
                });
            }
        });
        
        // Header shadow on scroll
        if (scrollPosition > 50) {
            document.querySelector('header').style.boxShadow = '0 10px 30px rgba(123, 44, 191, 0.2)';
        } else {
            document.querySelector('header').style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.1)';
        }
        
        // Back to top button
        const backToTop = document.querySelector('.back-to-top');
        if (scrollPosition > 300) {
            backToTop.classList.add('active');
        } else {
            backToTop.classList.remove('active');
        }
    });
    
    // Animate elements when they come into view
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('.skill-item, .project-card, .gallery-item');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.2;
            
            if (elementPosition < screenPosition) {
                element.classList.add('visible');
                
                // Animate skill bars
                if (element.classList.contains('skill-item')) {
                    const skillLevel = element.querySelector('.skill-level');
                    const width = skillLevel.style.width;
                    skillLevel.style.width = '0';
                    setTimeout(() => {
                        skillLevel.style.width = width;
                    }, 100);
                }
            }
        });
    };
    
    // Animate about section content
    const aboutContent = document.querySelector('.about-content');
    if (aboutContent) {
        const aboutPosition = aboutContent.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.2;
        
        if (aboutPosition < screenPosition) {
            aboutContent.style.opacity = '1';
            aboutContent.style.transform = 'translateX(0)';
        }
    }
    
    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); // Run once on page load
    
    // Add hover effect to logo
    const logoContainer = document.querySelector('.logo-container');
    if (logoContainer) {
        logoContainer.addEventListener('mouseenter', function() {
            this.querySelector('.logo').style.transform = 'rotate(15deg)';
        });
        
        logoContainer.addEventListener('mouseleave', function() {
            this.querySelector('.logo').style.transform = 'rotate(0)';
        });
    }
    
    // Add pulse animation to CTA button
    const ctaButton = document.querySelector('.pulse-button');
    if (ctaButton) {
        setInterval(() => {
            ctaButton.style.animation = 'pulse 2s infinite';
            setTimeout(() => {
                ctaButton.style.animation = '';
            }, 2000);
        }, 8000);
    }
    
    // Typewriter effect for subtitle
    const typewriterText = "A PRETTY GOOD PERSON WITH A GREAT SENSE OF HUMOR ";
    const typewriterElement = document.querySelector('.typewriter');
    let i = 0;
    
    function typeWriter() {
        if (i < typewriterText.length) {
            typewriterElement.innerHTML += typewriterText.charAt(i);
            i++;
            setTimeout(typeWriter, 100);
        }
    }
    
    // Start typewriter effect after initial animations
    setTimeout(() => {
        if (typewriterElement) {
            typewriterElement.innerHTML = '';
            typeWriter();
        }
    }, 1800);
});