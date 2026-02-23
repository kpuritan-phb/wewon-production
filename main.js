import works from './works.js';

document.addEventListener('DOMContentLoaded', () => {

    // --- Active Page Highlighting ---
    const currentPath = window.location.pathname;
    const navLinks = document.querySelectorAll('.nav-item');
    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href !== '/' && currentPath.includes(href.replace('.html', ''))) {
            link.closest('.nav-item-container').classList.add('active-page');
        } else if (href === '/' && (currentPath === '/' || currentPath.endsWith('index.html'))) {
            // Home is handled by default often, but can be explicit
        }
    });

    // --- Loading Animation ---
    gsap.from("header", {
        y: -50,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        delay: 0.5
    });

    // --- Scroll Animations (Reveal Text) ---
    const revealElements = document.querySelectorAll('.reveal-text');
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const sectionObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
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
        sectionObserver.observe(el);
    });

    // --- Sticky Scroll Logic (Only for index.html) ---
    const scrollItems = document.querySelectorAll('.scroll-item');
    const dynamicVisual = document.getElementById('dynamic-visual');
    const dynamicVideo = document.getElementById('dynamic-video');

    if (scrollItems.length > 0 && dynamicVisual) {
        const stickyObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    scrollItems.forEach(item => item.classList.remove('active'));
                    entry.target.classList.add('active');

                    const newImgSrc = entry.target.dataset.img;
                    const newVideoSrc = entry.target.dataset.video;

                    if (newVideoSrc && dynamicVideo) {
                        dynamicVisual.style.opacity = 0;
                        dynamicVideo.style.display = 'block';
                        dynamicVideo.style.opacity = 1;
                        if (dynamicVideo.src !== newVideoSrc) {
                            dynamicVideo.src = newVideoSrc;
                            dynamicVideo.play().catch(e => console.log('Autoplay blocked', e));
                        }
                    } else if (newImgSrc) {
                        if (dynamicVideo) {
                            dynamicVideo.style.opacity = 0;
                            setTimeout(() => { dynamicVideo.style.display = 'none'; }, 500);
                        }
                        const tempImg = new Image();
                        tempImg.src = newImgSrc;
                        tempImg.onload = () => {
                            dynamicVisual.style.opacity = 0;
                            setTimeout(() => {
                                dynamicVisual.src = newImgSrc;
                                dynamicVisual.style.opacity = 1;
                            }, 300);
                        };
                    }
                }
            });
        }, { root: null, rootMargin: '-40% 0px -40% 0px', threshold: 0 });

        scrollItems.forEach(item => stickyObserver.observe(item));
    }

    // --- Works Grid Logic (Only for works.html) ---
    const worksGrid = document.getElementById('works-grid');
    if (worksGrid) {
        const filterItems = document.querySelectorAll('.filter-item');
        const modal = document.getElementById('video-modal');
        const modalIframe = document.getElementById('modal-iframe');
        const modalTitle = document.getElementById('modal-title');
        const modalClient = document.getElementById('modal-client');
        const modalDesc = document.getElementById('modal-desc');
        const closeModal = document.querySelector('.close-modal');

        function renderWorks(filter = 'ALL') {
            worksGrid.innerHTML = '';
            const filteredWorks = filter === 'ALL'
                ? works
                : works.filter(work => work.category === filter);

            filteredWorks.forEach(work => {
                const workItem = document.createElement('div');
                workItem.className = 'work-item reveal-text';
                workItem.innerHTML = `
                    <img src="${work.thumbnail}" alt="${work.title}">
                    <div class="work-overlay">
                        <h3 class="work-title-inner">${work.title}</h3>
                        <p class="work-client-inner">${work.client}</p>
                    </div>
                `;
                workItem.addEventListener('click', () => {
                    if (modal) {
                        modalTitle.textContent = work.title;
                        modalClient.textContent = work.client;
                        modalDesc.textContent = work.description;
                        modalIframe.src = work.videoUrl;
                        modal.style.display = 'flex';
                        document.body.style.overflow = 'hidden';
                    }
                });
                worksGrid.appendChild(workItem);
                sectionObserver.observe(workItem);
            });
        }

        if (closeModal) {
            closeModal.addEventListener('click', () => {
                modal.style.display = 'none';
                modalIframe.src = '';
                document.body.style.overflow = 'auto';
            });
        }

        window.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.style.display = 'none';
                modalIframe.src = '';
                document.body.style.overflow = 'auto';
            }
        });

        filterItems.forEach(item => {
            item.addEventListener('click', () => {
                filterItems.forEach(i => i.classList.remove('active'));
                item.classList.add('active');
                renderWorks(item.getAttribute('data-filter'));
            });
        });

        renderWorks();
    }

    // --- FAQ Logic (Only for workflow.html) ---
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(item => {
        item.addEventListener('click', () => {
            const isActive = item.classList.contains('active');
            faqItems.forEach(i => i.classList.remove('active'));
            if (!isActive) item.classList.add('active');
        });
    });

    // --- Navigation Logic for Mobile ---
    const navContainers = document.querySelectorAll('.nav-item-container');
    navContainers.forEach(container => {
        const link = container.querySelector('.nav-item');
        if (!link) return;

        link.addEventListener('click', (e) => {
            if (window.innerWidth <= 768) {
                if (!container.classList.contains('active')) {
                    e.preventDefault();
                    navContainers.forEach(c => c.classList.remove('active'));
                    container.classList.add('active');
                }
            }
        });
    });

    document.addEventListener('click', (e) => {
        if (window.innerWidth <= 768) {
            if (!e.target.closest('.brand-nav')) {
                navContainers.forEach(c => c.classList.remove('active'));
            }
        }
    });

});
