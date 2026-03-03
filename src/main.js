// Mobile menu toggle
const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');
const menuIcon = document.getElementById('menu-icon');
const closeIcon = document.getElementById('close-icon');

if (mobileMenuToggle) {
  mobileMenuToggle.addEventListener('click', function() {
    const isOpen = !mobileMenu.classList.contains('hidden');
    
    if (isOpen) {
      mobileMenu.classList.add('hidden');
      menuIcon.classList.remove('hidden');
      closeIcon.classList.add('hidden');
    } else {
      mobileMenu.classList.remove('hidden');
      menuIcon.classList.add('hidden');
      closeIcon.classList.remove('hidden');
    }
  });

  // Close mobile menu when clicking on a link
  const mobileLinks = mobileMenu.querySelectorAll('a');
  mobileLinks.forEach(function(link) {
    link.addEventListener('click', function() {
      mobileMenu.classList.add('hidden');
      menuIcon.classList.remove('hidden');
      closeIcon.classList.add('hidden');
    });
  });
}

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      const offsetTop = target.offsetTop - 80; // Account for fixed navbar
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  });
});

// Form submission handler
const appointmentForm = document.getElementById('appointment-form');
if (appointmentForm) {
  appointmentForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form data
    const formData = new FormData(appointmentForm);
    
    // Here you would typically send the data to a server
    // For now, we'll just show an alert
    alert('Thank you for your appointment request! We will contact you shortly.');
    
    // Reset form
    appointmentForm.reset();
  });
}

// Intersection Observer for fade-in animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
  entries.forEach(function(entry) {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

// Observe all elements with fade-in classes
document.addEventListener('DOMContentLoaded', function() {
  const fadeElements = document.querySelectorAll('.fade-in, .fade-in-left, .fade-in-right, .fade-in-up');
  fadeElements.forEach(function(el) {
    observer.observe(el);
  });
});

// Navbar background on scroll
let lastScroll = 0;
const navbar = document.querySelector('nav');

window.addEventListener('scroll', function() {
  const currentScroll = window.pageYOffset;
  
  if (currentScroll > 50) {
    if (navbar) navbar.classList.add('scrolled');
  } else {
    if (navbar) navbar.classList.remove('scrolled');
  }
  
  lastScroll = currentScroll;
});
