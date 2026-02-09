// Script per miglioramenti moderni del sito

(function() {
  'use strict';

  // Migliora il caricamento delle immagini
  function enhanceImageLoading() {
    const images = document.querySelectorAll('img[loading="lazy"]');
    
    if ('IntersectionObserver' in window) {
      const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const img = entry.target;
            if (img.dataset.src) {
              img.src = img.dataset.src;
              img.removeAttribute('data-src');
            }
            img.classList.add('loaded');
            observer.unobserve(img);
          }
        });
      });

      images.forEach(img => {
        imageObserver.observe(img);
      });
    } else {
      // Fallback per browser senza IntersectionObserver
      images.forEach(img => {
        img.classList.add('loaded');
      });
    }
  }

  // Aggiungi animazioni al scroll per elementi
  function addScrollAnimations() {
    const animatedElements = document.querySelectorAll('.text-block, .closing-image');
    if (!animatedElements.length) {
      return;
    }

    animatedElements.forEach(el => el.classList.add('js-animate'));

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!('IntersectionObserver' in window) || prefersReducedMotion) {
      animatedElements.forEach(el => el.classList.add('is-visible'));
      return;
    }

    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    animatedElements.forEach(el => observer.observe(el));
  }

  // Migliora l'accessibilità del menu mobile
  function enhanceMobileMenu() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    const body = document.body;
    
    if (menuToggle && navLinks) {
      // Assicura che lo stato del body sia coerente con il menu
      if (!navLinks.classList.contains('active')) {
        body.classList.remove('menu-open');
        menuToggle.setAttribute('aria-expanded', 'false');
      }

      // Chiudi menu quando si clicca fuori
      document.addEventListener('click', (e) => {
        if (!navLinks.contains(e.target) && !menuToggle.contains(e.target)) {
          navLinks.classList.remove('active');
          body.classList.remove('menu-open');
          menuToggle.setAttribute('aria-expanded', 'false');
        }
      });

      // Chiudi menu con ESC
      document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && navLinks.classList.contains('active')) {
          navLinks.classList.remove('active');
          body.classList.remove('menu-open');
          menuToggle.setAttribute('aria-expanded', 'false');
          menuToggle.focus();
        }
      });
    }
  }

  // Aggiungi smooth scroll per anchor links
  function enhanceAnchorLinks() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#' && href.length > 1) {
          const target = document.querySelector(href);
          if (target) {
            e.preventDefault();
            target.scrollIntoView({
              behavior: 'smooth',
              block: 'start'
            });
          }
        }
      });
    });
  }

  // Inizializza tutto quando il DOM è pronto
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  function init() {
    // Reset eventuale stato di blocco scroll lasciato dal menu
    document.body.classList.remove('menu-open');
    enhanceImageLoading();
    addScrollAnimations();
    enhanceMobileMenu();
    enhanceAnchorLinks();
  }
})();

