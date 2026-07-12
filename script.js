/* ==========================================
   Eric Anthony — Personal Website
   Main JavaScript
   ========================================== */

document.addEventListener('DOMContentLoaded', () => {
    initCursorGlow();
    initNavigation();
    initScrollAnimations();
    initCounterAnimation();
    initContactForm();
    registerServiceWorker();
});

/* ==========================================
   CURSOR GLOW EFFECT
   ========================================== */
function initCursorGlow() {
    const glow = document.getElementById('cursorGlow');
    if (!glow || window.innerWidth < 768) return;

    let mouseX = 0, mouseY = 0;
    let glowX = 0, glowY = 0;

    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });

    function animateGlow() {
        glowX += (mouseX - glowX) * 0.08;
        glowY += (mouseY - glowY) * 0.08;
        glow.style.left = `${glowX}px`;
        glow.style.top = `${glowY}px`;
        requestAnimationFrame(animateGlow);
    }

    animateGlow();
}

/* ==========================================
   NAVIGATION
   ========================================== */
function initNavigation() {
    const nav = document.getElementById('nav');
    const toggle = document.getElementById('navToggle');
    const links = document.getElementById('navLinks');

    // Scroll effect
    let lastScroll = 0;
    window.addEventListener('scroll', () => {
        const currentScroll = window.scrollY;

        if (currentScroll > 50) {
            nav.classList.add('nav--scrolled');
        } else {
            nav.classList.remove('nav--scrolled');
        }

        lastScroll = currentScroll;
        updateActiveLink();
    }, { passive: true });

    // Mobile toggle
    if (toggle && links) {
        toggle.addEventListener('click', () => {
            toggle.classList.toggle('active');
            links.classList.toggle('active');
            document.body.style.overflow = links.classList.contains('active') ? 'hidden' : '';
        });

        // Close on link click
        links.querySelectorAll('.nav__link').forEach(link => {
            link.addEventListener('click', () => {
                toggle.classList.remove('active');
                links.classList.remove('active');
                document.body.style.overflow = '';
            });
        });
    }

    // Active section highlight (scroll-spy)
    const sections = Array.from(document.querySelectorAll('section[id]'));
    const navLinks = Array.from(document.querySelectorAll('.nav__link[href^="#"]'));

    function updateActiveLink() {
        const probeLine = window.scrollY + nav.offsetHeight + window.innerHeight * 0.3;
        const atBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2;

        let activeId = '';
        sections.forEach(section => {
            if (atBottom || section.offsetTop <= probeLine) {
                activeId = section.id;
            }
        });

        navLinks.forEach(link => {
            link.classList.toggle('nav__link--active',
                link.getAttribute('href') === `#${activeId}`
            );
        });
    }

    updateActiveLink();
}

/* ==========================================
   SCROLL ANIMATIONS
   ========================================== */
function initScrollAnimations() {
    const animateElements = document.querySelectorAll('.animate-in');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                // Staggered delay for siblings
                const siblings = entry.target.parentElement.querySelectorAll('.animate-in');
                let delay = 0;
                siblings.forEach((sibling, i) => {
                    if (sibling === entry.target) {
                        delay = i * 100;
                    }
                });

                setTimeout(() => {
                    entry.target.classList.add('visible');
                }, Math.min(delay, 400));

                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -60px 0px'
    });

    animateElements.forEach(el => observer.observe(el));
}

/* ==========================================
   COUNTER ANIMATION
   ========================================== */
function initCounterAnimation() {
    const counters = document.querySelectorAll('[data-count], [data-start-year]');

    const counterObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                let target;
                if (entry.target.hasAttribute('data-start-year')) {
                    const startYear = parseInt(entry.target.getAttribute('data-start-year'));
                    target = new Date().getFullYear() - startYear;
                } else {
                    target = parseInt(entry.target.getAttribute('data-count'));
                }
                animateCounter(entry.target, 0, target, 1500);
                counterObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    counters.forEach(counter => counterObserver.observe(counter));
}

// Dynamically update static year text references
document.addEventListener('DOMContentLoaded', () => {
    const startYear = 2019;
    const currentYear = new Date().getFullYear();
    const yearsExp = currentYear - startYear;
    
    document.querySelectorAll('.dynamic-years').forEach(el => {
        el.textContent = yearsExp;
    });
});

function animateCounter(element, start, end, duration) {
    const startTime = performance.now();

    function update(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);

        // Ease out cubic
        const eased = 1 - Math.pow(1 - progress, 3);
        const current = Math.round(start + (end - start) * eased);

        element.textContent = current;

        if (progress < 1) {
            requestAnimationFrame(update);
        }
    }

    requestAnimationFrame(update);
}

/* ==========================================
   CONTACT FORM (Web3Forms)
   ========================================== */
function initContactForm() {
    const form = document.getElementById('contactForm');
    if (!form) return;

    form.addEventListener('submit', async (e) => {
        e.preventDefault();

        const submitBtn = document.getElementById('submitBtn');
        const btnText = submitBtn.querySelector('.btn__text');
        const btnLoading = submitBtn.querySelector('.btn__loading');
        const btnSuccess = submitBtn.querySelector('.btn__success');
        const formStatus = document.getElementById('formStatus');

        // Show loading state
        btnText.style.display = 'none';
        btnLoading.style.display = 'inline-flex';
        submitBtn.disabled = true;
        formStatus.textContent = '';
        formStatus.className = 'form__status';

        const formData = new FormData(form);
        const data = Object.fromEntries(formData);
        
        // Inject access key dynamically
        data.access_key = 'e24711e5-ecf8-4265-a880-68e184e1c72e';

        try {
            const response = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify(data)
            });

            const result = await response.json();

            if (result.success) {
                btnLoading.style.display = 'none';
                btnSuccess.style.display = 'inline-flex';
                formStatus.textContent = 'Message sent! I\'ll get back to you soon.';
                formStatus.className = 'form__status form__status--success';
                form.reset();

                setTimeout(() => {
                    btnSuccess.style.display = 'none';
                    btnText.style.display = 'inline-flex';
                    submitBtn.disabled = false;
                }, 4000);
            } else {
                throw new Error(result.message || 'Something went wrong');
            }
        } catch (error) {
            // Fallback: open mailto with form data
            const subject = encodeURIComponent(`[Portfolio] ${data.inquiry_type || 'Inquiry'} from ${data.name}`);
            const body = encodeURIComponent(
                `Name: ${data.name}\nEmail: ${data.email}\nSubject: ${data.inquiry_type}\n\nMessage:\n${data.message}`
            );
            window.location.href = `mailto:ericanthonywu89@gmail.com?subject=${subject}&body=${body}`;

            btnLoading.style.display = 'none';
            btnSuccess.style.display = 'inline-flex';
            formStatus.textContent = 'API failed. Opening your email client instead...';
            formStatus.className = 'form__status form__status--success'; // Treat as soft-success

            setTimeout(() => {
                btnSuccess.style.display = 'none';
                btnText.style.display = 'inline-flex';
                submitBtn.disabled = false;
            }, 4000);
        }
    });
}

/* ==========================================
   SMOOTH SCROLL (enhanced)
   ========================================== */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const navHeight = document.querySelector('.nav').offsetHeight;
            const targetPosition = target.getBoundingClientRect().top + window.scrollY - navHeight;

            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

/* ==========================================
   TYPED TEXT EFFECT (Hero subtitle)
   ========================================== */
(function initTypedEffect() {
    const roles = [
        'Senior Software Engineer',
        'Backend Architect',
        'System Designer',
        'Full-Stack Developer'
    ];

    const subtitleEl = document.querySelector('.hero__title-line--sub');
    if (!subtitleEl) return;

    let currentRole = 0;
    let currentChar = roles[0].length;
    let isDeleting = false;
    let typingDelay = 3000; // Initial pause

    function type() {
        const role = roles[currentRole];

        if (isDeleting) {
            currentChar--;
            subtitleEl.textContent = role.substring(0, currentChar);

            if (currentChar === 0) {
                isDeleting = false;
                currentRole = (currentRole + 1) % roles.length;
                setTimeout(type, 400);
                return;
            }
            setTimeout(type, 40);
        } else {
            currentChar++;
            subtitleEl.textContent = roles[currentRole].substring(0, currentChar);

            if (currentChar === roles[currentRole].length) {
                isDeleting = true;
                setTimeout(type, 2500); // Pause before deleting
                return;
            }
            setTimeout(type, 70);
        }
    }

    // Start after initial delay
    setTimeout(type, typingDelay);
})();

/* ==========================================
   PWA SERVICE WORKER
   ========================================== */
function registerServiceWorker() {
    if ('serviceWorker' in navigator) {
        window.addEventListener('load', () => {
            navigator.serviceWorker.register('/service-worker.js')
                .then(registration => {
                    console.log('SW registered:', registration.scope);
                })
                .catch(error => {
                    console.log('SW registration failed:', error);
                });
        });
    }
}

/* ==========================================
   PARALLAX ON HERO ORBS
   ========================================== */
(function initParallax() {
    if (window.innerWidth < 768) return;

    const orbs = document.querySelectorAll('.hero__orb');
    
    window.addEventListener('scroll', () => {
        const scrolled = window.scrollY;
        orbs.forEach((orb, i) => {
            const speed = (i + 1) * 0.15;
            orb.style.transform = `translateY(${scrolled * speed}px)`;
        });
    }, { passive: true });
})();

/* ==========================================
   EXPERIENCE CARDS EXPAND/COLLAPSE
   ========================================== */
(function initExperienceToggle() {
    const cards = document.querySelectorAll('.experience__card');
    
    cards.forEach(card => {
        const header = card.querySelector('.experience__header');
        const details = card.querySelector('.experience__details');
        
        if (!header || !details) return;

        // Start with all visible on desktop
        if (window.innerWidth >= 768) return;

        // On mobile, all experiences start expanded; header click toggles collapse
        details.style.transition = 'max-height 0.4s cubic-bezier(0.4, 0, 0.2, 1)';

        header.style.cursor = 'pointer';
        header.addEventListener('click', () => {
            if (card.classList.contains('collapsed')) {
                details.style.maxHeight = details.scrollHeight + 'px';
                card.classList.remove('collapsed');
            } else {
                details.style.maxHeight = '0';
                card.classList.add('collapsed');
            }
        });
    });
})();
