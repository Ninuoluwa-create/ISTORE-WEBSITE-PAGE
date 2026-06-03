'use strict';

document.addEventListener('DOMContentLoaded', () => {
    const fadeSelectors = [
        'main > img',
        '.affordability > *',
        '.watch-section > h3',
        '.watch-images > *',
        '.card-row > *',
        '.iphone-2',
        '.watch-2',
        '.ipad-1',
        '.macbook-2',
        '.services-hero',
        '.accessories-hero',
        '.laptop > *',
        '.iphone > *',
        '.ipad > *',
        '.watch > *',
        '.services-section > *',
        '.accessories-grid > *',
        '.footer-socials',
        '.footer-columns > *',
        '.footer-bottom'
    ];

    const fadeElements = [...new Set(document.querySelectorAll(fadeSelectors.join(',')))];

    if (!fadeElements.length) {
        return;
    }

    fadeElements.forEach((element, index) => {
        element.classList.add('fade-in-on-scroll');
        element.style.setProperty('--fade-delay', `${Math.min(index % 6, 5) * 70}ms`);
    });

    if (!('IntersectionObserver' in window)) {
        fadeElements.forEach((element) => element.classList.add('is-visible'));
        return;
    }

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (!entry.isIntersecting) {
                return;
            }

            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
        });
    }, {
        threshold: 0.15,
        rootMargin: '0px 0px -70px 0px'
    });

    fadeElements.forEach((element) => observer.observe(element));
});
