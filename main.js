document.addEventListener('DOMContentLoaded', () => {

    // --- Loading Animation (Simple Fade In) ---
    gsap.from("header", {
        y: -50,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        delay: 0.5
    });

    // --- Scroll Animations (Reveal Text) ---
    // Use IntersectionObserver for performance, or GSAP ScrollTrigger if available

    // 1. Hero Text Stagger
    const heroTexts = document.querySelectorAll('.hero .reveal-text');
    gsap.fromTo(heroTexts,
        { y: 100, opacity: 0 },
        {
            y: 0,
            opacity: 1,
            duration: 1.2,
            stagger: 0.2,
            ease: "power3.out",
            delay: 0.2
        }
    );

    // 2. Section Reveals on Scroll
    const revealElements = document.querySelectorAll('.reveal-text:not(.hero .reveal-text)');

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const sectionObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // Optional: GSAP enhancement
                gsap.to(entry.target, {
                    y: 0,
                    opacity: 1,
                    duration: 1,
                    ease: "power2.out"
                });
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    revealElements.forEach(el => {
        // Initial state set in CSS, but ensure GSAP knows it too if we mix
        sectionObserver.observe(el);
    });

    // --- Mobile Menu Toggle ---
    const mobileToggle = document.querySelector('.mobile-toggle');
    const navMenu = document.querySelector('.nav-menu');

    if (mobileToggle) {
        mobileToggle.addEventListener('click', () => {
            navMenu.style.display = navMenu.style.display === 'flex' ? 'none' : 'flex';
            if (navMenu.style.display === 'flex') {
                navMenu.style.flexDirection = 'column';
                navMenu.style.position = 'fixed';
                navMenu.style.top = '0';
                navMenu.style.left = '0';
                navMenu.style.width = '100VW';
                navMenu.style.height = '100VH';
                navMenu.style.background = '#0d0d0d';
                navMenu.style.justifyContent = 'center';
                navMenu.style.alignItems = 'center';
                navMenu.style.zIndex = '90';
            } else {
                navMenu.style = ''; // Reset
            }
        });
    }

});
