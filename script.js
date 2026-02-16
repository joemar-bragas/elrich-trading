/**
 * ELRICH Trading - Interactive functionality
 */

document.addEventListener('DOMContentLoaded', () => {
    initMobileNav();
    initSmoothScroll();
    initStatsCounter();
    initContactForm();
    initHeaderScroll();
});

// Mobile navigation toggle
function initMobileNav() {
    const toggle = document.querySelector('.nav-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (!toggle || !navLinks) return;

    const closeMenu = () => {
        navLinks.classList.remove('active');
        toggle.classList.remove('active');
        document.body.style.overflow = '';
    };

    const openMenu = () => {
        navLinks.classList.add('active');
        toggle.classList.add('active');
        document.body.style.overflow = 'hidden';
    };

    toggle.addEventListener('click', (e) => {
        e.stopPropagation();
        if (navLinks.classList.contains('active')) {
            closeMenu();
        } else {
            openMenu();
        }
    });

    // Close menu when clicking a link
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            closeMenu();
        });
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (navLinks.classList.contains('active') && 
            !navLinks.contains(e.target) && 
            !toggle.contains(e.target)) {
            closeMenu();
        }
    });

    // Close menu on escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && navLinks.classList.contains('active')) {
            closeMenu();
        }
    });

    // Prevent body scroll when menu is open
    navLinks.addEventListener('touchmove', (e) => {
        if (navLinks.classList.contains('active')) {
            e.preventDefault();
        }
    }, { passive: false });
}

// Smooth scroll for anchor links
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href === '#') return;
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                const headerOffset = window.innerWidth <= 768 ? 70 : 80;
                const elementPosition = target.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Animated stats counter
function initStatsCounter() {
    const stats = document.querySelectorAll('.stat-number');
    if (!stats.length) return;
    const observerOptions = { threshold: 0.5, rootMargin: '0px' };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const el = entry.target;
                const target = parseFloat(el.dataset.target);
                const duration = 1500;
                const start = performance.now();

                function update(currentTime) {
                    const elapsed = currentTime - start;
                    const progress = Math.min(elapsed / duration, 1);
                    const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
                    const value = target * eased;
                    el.textContent = target % 1 === 0 ? Math.round(value) : value.toFixed(1);

                    if (progress < 1) {
                        requestAnimationFrame(update);
                    } else {
                        el.textContent = target % 1 === 0 ? target : target.toFixed(1);
                    }
                }

                requestAnimationFrame(update);
                observer.unobserve(el);
            }
        });
    }, observerOptions);

    stats.forEach(stat => observer.observe(stat));
}

// Contact form – submits to FormSubmit.co using token (hides email address)
function initContactForm() {
    const form = document.querySelector('.contact-form');
    if (!form) return;

    const FORMSUBMIT_TOKEN = 'eb2c55da05c400dcf072acb40ab0eb41';

    form.addEventListener('submit', async (e) => {
        e.preventDefault();

        const btn = form.querySelector('button[type="submit"]');
        const originalText = btn.textContent;
        btn.textContent = 'Sending...';
        btn.disabled = true;

        const serviceSelect = form.querySelector('#service');
        const serviceText = serviceSelect.options[serviceSelect.selectedIndex].text;
        const nameVal = form.querySelector('#name').value.trim();
        const fd = new FormData(form);
        fd.set('service', serviceText);
        fd.set('_subject', 'ELRICH Trading – Quote Request from ' + (nameVal || 'Website'));
        fd.set('_template', 'table');
        fd.set('_captcha', 'false');
        fd.set('_cc', 'joemarbragas123@gmail.com,elrichtrading2006@gmail.com');

        try {
            const res = await fetch('https://formsubmit.co/' + FORMSUBMIT_TOKEN, {
                method: 'POST',
                body: fd,
                headers: { Accept: 'application/json' }
            });
            if (res.ok) {
                btn.textContent = 'Request Sent!';
                btn.style.background = '#22c55e';
                form.reset();
            } else {
                throw new Error('Submit failed');
            }
        } catch (err) {
            btn.textContent = 'Failed – try again';
            btn.style.background = '#dc2626';
        }

        setTimeout(() => {
            btn.textContent = originalText;
            btn.style.background = '';
            btn.disabled = false;
        }, 3000);
    });
}

// Header background on scroll
function initHeaderScroll() {
    const header = document.querySelector('.header');
    if (!header) return;

    const handleScroll = () => {
        if (window.scrollY > 50) {
            header.style.background = 'rgba(10, 22, 40, 0.98)';
        } else {
            header.style.background = 'rgba(10, 22, 40, 0.9)';
        }
    };

    window.addEventListener('scroll', handleScroll);
}
