export function initScrollAnimations() {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const animateElements = document.querySelectorAll('.animate-on-scroll, .hero-animate');

    if (prefersReducedMotion) {
        animateElements.forEach(el => el.classList.add('is-visible'));
        return;
    }

    const observerOptions = {
        root: null,
        rootMargin: '0px 0px -10% 0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const element = entry.target;
                
                // Handle staggered children if needed
                const staggerIndex = element.getAttribute('data-stagger');
                if (staggerIndex) {
                    element.style.transitionDelay = `${staggerIndex * 100}ms`;
                }

                element.classList.add('is-visible');
                
                // Stop observing once animated to avoid re-triggering
                observer.unobserve(element);
            }
        });
    }, observerOptions);

    animateElements.forEach(el => {
        // Hero elements might animate differently or immediately
        if (el.classList.contains('hero-animate')) {
            setTimeout(() => {
                el.classList.add('is-visible');
            }, 100);
        } else {
            observer.observe(el);
        }
    });
}
