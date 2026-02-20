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

// Contact form – Formspree (reliable delivery). Replace YOUR_FORMSPREE_ID in this file and in index.html form action.
function initContactForm() {
    const form = document.querySelector('.contact-form');
    if (!form) return;

    var FORMSPREE_ID = 'mgolllby';

    form.addEventListener('submit', async (e) => {
        e.preventDefault();

        var btn = form.querySelector('button[type="submit"]');
        var originalText = btn.textContent;
        btn.textContent = 'Sending...';
        btn.disabled = true;

        var serviceSelect = form.querySelector('#service');
        var serviceText = serviceSelect.options[serviceSelect.selectedIndex].text;
        var nameVal = form.querySelector('#name').value.trim();
        var formData = new FormData(form);
        formData.set('service', serviceText);
        formData.set('_subject', 'ELRICH Trading – Quote Request from ' + (nameVal || 'Website'));

        try {
            var res = await fetch('https://formspree.io/f/' + FORMSPREE_ID, {
                method: 'POST',
                body: formData,
                headers: { Accept: 'application/json' }
            });
            var data = {};
            try {
                data = await res.json();
            } catch (_) {}
            var success = res.ok || data.ok === true || data.success === 'email sent' || (data.success && data.success.length > 0);
            if (success) {
                btn.textContent = 'Request Sent!';
                btn.style.background = '#22c55e';
                form.reset();
            } else {
                var msg = (data.errors && data.errors.length) ? data.errors.map(function(e) { return e.message || e; }).join(', ') : (data.error || 'Send failed');
                console.error('Formspree:', msg);
                btn.textContent = 'Failed – try again';
                btn.style.background = '#dc2626';
            }
        } catch (err) {
            console.error('Form error:', err);
            btn.textContent = 'Failed – try again';
            btn.style.background = '#dc2626';
        }

        setTimeout(function() {
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
