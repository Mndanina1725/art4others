// ============================================
// HAMBURGER MENU TOGGLE
// ============================================

document.addEventListener('DOMContentLoaded', function() {
  var hamburger = document.querySelector('.hamburger');
  var nav = document.getElementById('main-nav');
  var navLinks = nav ? nav.querySelectorAll('a') : [];

  if (hamburger && nav) {
    hamburger.addEventListener('click', function(e) {
      e.preventDefault();
      e.stopPropagation();
      var isOpen = nav.classList.contains('mobile-open');
      if (isOpen) {
        nav.classList.remove('mobile-open');
        hamburger.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      } else {
        nav.classList.add('mobile-open');
        hamburger.setAttribute('aria-expanded', 'true');
        document.body.style.overflow = 'hidden';
      }
    });

    for (var i = 0; i < navLinks.length; i++) {
      navLinks[i].addEventListener('click', function() {
        nav.classList.remove('mobile-open');
        hamburger.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      });
    }

    document.addEventListener('click', function(e) {
      if (nav.classList.contains('mobile-open') && !nav.contains(e.target) && !hamburger.contains(e.target)) {
        nav.classList.remove('mobile-open');
        hamburger.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      }
    });

    window.addEventListener('resize', function() {
      if (window.innerWidth > 768) {
        nav.classList.remove('mobile-open');
        hamburger.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      }
    });
  }
});

// ============================================
// SMOOTH SCROLLING FOR ANCHOR LINKS
// ============================================

document.addEventListener('DOMContentLoaded', function() {
  // Smooth scroll for anchor links
  const anchorLinks = document.querySelectorAll('a[href^="#"]');
  
  anchorLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      
      // Skip if it's just "#" or empty
      if (href === '#' || href === '') {
        return;
      }
      
      const target = document.querySelector(href);
      
      if (target) {
        e.preventDefault();
        
        const headerOffset = 80;
        const elementPosition = target.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
        
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    });
  });
});

// ============================================
// SLIDESHOW FUNCTIONALITY
// ============================================

function startSlideshow(containerId) {
  const container = document.getElementById(containerId);
  if (!container) {
    console.log(`Slideshow container not found for ID: ${containerId}`);
    return;
  }

  const images = container.querySelectorAll('.slideshow-image');
  const prevBtn = container.querySelector('.prev-btn');
  const nextBtn = container.querySelector('.next-btn');

  if (images.length === 0) {
    console.log(`No images found in container with ID: ${containerId}`);
    return;
  }

  let currentIndex = 0;
  let autoSlideInterval;

  const updateSlide = (index) => {
    images.forEach((img, i) => {
      img.classList.toggle('active', i === index);
    });
  };

  const nextSlide = () => {
    currentIndex = (currentIndex + 1) % images.length;
    updateSlide(currentIndex);
    resetAutoSlide();
  };

  const prevSlide = () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateSlide(currentIndex);
    resetAutoSlide();
  };

  const startAutoSlide = () => {
    autoSlideInterval = setInterval(nextSlide, 4000); // Change slide every 4 seconds
  };

  const resetAutoSlide = () => {
    clearInterval(autoSlideInterval);
    startAutoSlide();
  };

  // Add accessibility attributes
  if (prevBtn) {
    prevBtn.setAttribute('aria-label', 'Previous image');
    prevBtn.setAttribute('type', 'button');
    prevBtn.addEventListener('click', prevSlide);
  }

  if (nextBtn) {
    nextBtn.setAttribute('aria-label', 'Next image');
    nextBtn.setAttribute('type', 'button');
    nextBtn.addEventListener('click', nextSlide);
  }

  // Pause auto-slide on hover
  container.addEventListener('mouseenter', () => {
    clearInterval(autoSlideInterval);
  });

  container.addEventListener('mouseleave', () => {
    startAutoSlide();
  });

  // Initialize
  updateSlide(currentIndex);
  startAutoSlide();
}

// ============================================
// INITIALIZE ALL SLIDESHOWS
// ============================================

document.addEventListener('DOMContentLoaded', function() {
  startSlideshow('angelena-slideshow');
  startSlideshow('martin-slideshow');
  startSlideshow('azaria-slideshow');
});

// ============================================
// ENHANCE GALLERY IMAGES WITH LAZY LOADING
// ============================================

document.addEventListener('DOMContentLoaded', function() {
  const galleryImages = document.querySelectorAll('.gallery img');
  
  // Add loading="lazy" attribute for better performance
  galleryImages.forEach(img => {
    if (!img.hasAttribute('loading')) {
      img.setAttribute('loading', 'lazy');
    }
  });
});

// ============================================
// ADD SMOOTH FADE-IN ANIMATION ON SCROLL
// ============================================

document.addEventListener('DOMContentLoaded', function() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, observerOptions);

  // Observe sections for fade-in effect
  const sections = document.querySelectorAll('section');
  sections.forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(20px)';
    section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(section);
  });
});