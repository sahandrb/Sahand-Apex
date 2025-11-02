"/**
 * StartupPro - Premium Business Website
 * Vanilla JavaScript - No Dependencies
 */

(function() {
  'use strict';

  // ============================================================================
  // State
  // ============================================================================
  let currentTestimonial = 0;
  let isAnimating = false;

  // ============================================================================
  // DOM Elements
  // ============================================================================
  const navbar = document.getElementById('navbar');
  const mobileToggle = document.getElementById('mobile-toggle');
  const navMenu = document.getElementById('nav-menu');
  const newsletterForm = document.getElementById('newsletter-form');
  const toast = document.getElementById('toast');
  const testimonialsSlider = document.getElementById('testimonials-slider');
  const testimonialPrev = document.getElementById('testimonial-prev');
  const testimonialNext = document.getElementById('testimonial-next');
  const testimonialsDots = document.getElementById('testimonials-dots');
  const currentYearEl = document.getElementById('current-year');

  // ============================================================================
  // Navbar Scroll Effect
  // ============================================================================
  function handleNavbarScroll() {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  }

  // ============================================================================
  // Mobile Menu Toggle
  // ============================================================================
  function toggleMobileMenu() {
    mobileToggle.classList.toggle('active');
    navMenu.classList.toggle('active');
  }

  // ============================================================================
  // Smooth Scroll
  // ============================================================================
  function smoothScroll(e) {
    const target = e.target.closest('a[href^=\\"#\\"]');
    if (!target) return;

    const href = target.getAttribute('href');
    if (href === '#') return;

    e.preventDefault();
    
    const targetElement = document.querySelector(href);
    if (!targetElement) return;

    const offsetTop = targetElement.offsetTop - 80;
    window.scrollTo({
      top: offsetTop,
      behavior: 'smooth'
    });

    // Close mobile menu if open
    if (navMenu.classList.contains('active')) {
      toggleMobileMenu();
    }
  }

  // ============================================================================
  // Counter Animation
  // ============================================================================
  function animateCounter(element, target, duration = 2000) {
    const start = 0;
    const increment = target / (duration / 16);
    let current = start;
    
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        element.textContent = Math.round(target);
        clearInterval(timer);
      } else {
        element.textContent = Math.round(current);
      }
    }, 16);
  }

  function animateCounters() {
    const counters = document.querySelectorAll('[data-count]');
    
    counters.forEach(counter => {
      if (counter.dataset.animated) return;
      
      const target = parseFloat(counter.dataset.count);
      animateCounter(counter, target);
      counter.dataset.animated = 'true';
    });
  }

  // ============================================================================
  // Scroll Animations (AOS - Animate On Scroll)
  // ============================================================================
  function handleScrollAnimations() {
    const elements = document.querySelectorAll('[data-aos]');
    
    elements.forEach(element => {
      const elementTop = element.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      
      if (elementTop < windowHeight * 0.85) {
        element.classList.add('aos-animate');
      }
    });
  }

  // Check if stats section is in view
  function checkStatsInView() {
    const statsSection = document.querySelector('.stats-section');
    if (!statsSection) return;
    
    const rect = statsSection.getBoundingClientRect();
    const windowHeight = window.innerHeight;
    
    if (rect.top < windowHeight * 0.8 && rect.bottom > 0) {
      animateCounters();
    }
  }

  // ============================================================================
  // Testimonials Slider
  // ============================================================================
  function showTestimonial(index) {
    if (isAnimating) return;
    isAnimating = true;

    const testimonials = document.querySelectorAll('.testimonial-card');
    const dots = document.querySelectorAll('.testimonials-dots .dot');
    
    // Remove active class from all
    testimonials.forEach(card => card.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));
    
    // Add active class to current
    setTimeout(() => {
      testimonials[index].classList.add('active');
      dots[index].classList.add('active');
      isAnimating = false;
    }, 300);
  }

  function nextTestimonial() {
    const testimonials = document.querySelectorAll('.testimonial-card');
    currentTestimonial = (currentTestimonial + 1) % testimonials.length;
    showTestimonial(currentTestimonial);
  }

  function prevTestimonial() {
    const testimonials = document.querySelectorAll('.testimonial-card');
    currentTestimonial = (currentTestimonial - 1 + testimonials.length) % testimonials.length;
    showTestimonial(currentTestimonial);
  }

  function initTestimonials() {
    if (!testimonialsSlider) return;

    // Navigation buttons
    if (testimonialNext) {
      testimonialNext.addEventListener('click', nextTestimonial);
    }
    
    if (testimonialPrev) {
      testimonialPrev.addEventListener('click', prevTestimonial);
    }

    // Dots navigation
    const dots = document.querySelectorAll('.testimonials-dots .dot');
    dots.forEach((dot, index) => {
      dot.addEventListener('click', () => {
        currentTestimonial = index;
        showTestimonial(index);
      });
    });

    // Auto-play
    setInterval(nextTestimonial, 6000);
  }

  // ============================================================================
  // Newsletter Form
  // ============================================================================
  function handleNewsletterSubmit(e) {
    e.preventDefault();
    
    const emailInput = document.getElementById('email-input');
    const email = emailInput.value;
    
    // Basic validation
    if (!email || !email.includes('@')) {
      showToast('Please enter a valid email address');
      return;
    }
    
    // Show success message
    showToast('Thank you! We\'ll be in touch soon.');
    
    // Reset form
    emailInput.value = '';
  }

  // ============================================================================
  // Toast Notification
  // ============================================================================
  function showToast(message) {
    if (!toast) return;
    
    const span = toast.querySelector('span');
    if (span) {
      span.textContent = message;
    }
    
    toast.classList.add('show');
    
    setTimeout(() => {
      toast.classList.remove('show');
    }, 3000);
  }

  // ============================================================================
  // Set Current Year
  // ============================================================================
  function setCurrentYear() {
    if (currentYearEl) {
      currentYearEl.textContent = new Date().getFullYear();
    }
  }

  // ============================================================================
  // Floating Cards Animation (Hero)
  // ============================================================================
  function initFloatingCards() {
    const cards = document.querySelectorAll('.floating-card');
    
    cards.forEach((card, index) => {
      // Add random floating animation
      const randomDelay = Math.random() * 2;
      const randomDuration = 6 + Math.random() * 4;
      
      card.style.animationDelay = `-${randomDelay}s`;
      card.style.animationDuration = `${randomDuration}s`;
    });
  }

  // ============================================================================
  // Parallax Effect (Subtle)
  // ============================================================================
  function handleParallax() {
    const scrolled = window.pageYOffset;
    const orbs = document.querySelectorAll('.gradient-orb');
    
    orbs.forEach((orb, index) => {
      const speed = 0.1 + (index * 0.05);
      orb.style.transform = `translateY(${scrolled * speed}px)`;
    });
  }

  // ============================================================================
  // Event Listeners
  // ============================================================================
  function initEventListeners() {
    // Navbar scroll
    window.addEventListener('scroll', () => {
      handleNavbarScroll();
      handleScrollAnimations();
      checkStatsInView();
      handleParallax();
    });

    // Mobile menu toggle
    if (mobileToggle) {
      mobileToggle.addEventListener('click', toggleMobileMenu);
    }

    // Smooth scroll
    document.addEventListener('click', smoothScroll);

    // Newsletter form
    if (newsletterForm) {
      newsletterForm.addEventListener('submit', handleNewsletterSubmit);
    }

    // Close mobile menu on window resize
    window.addEventListener('resize', () => {
      if (window.innerWidth > 768 && navMenu.classList.contains('active')) {
        toggleMobileMenu();
      }
    });
  }

  // ============================================================================
  // Initialization
  // ============================================================================
  function init() {
    // Set current year
    setCurrentYear();

    // Initialize event listeners
    initEventListeners();

    // Initialize testimonials slider
    initTestimonials();

    // Initialize floating cards
    initFloatingCards();

    // Trigger initial checks
    handleNavbarScroll();
    handleScrollAnimations();

    console.log('✨ StartupPro initialized successfully!');
  }

  // ============================================================================
  // Run on DOM Ready
  // ============================================================================
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
"
