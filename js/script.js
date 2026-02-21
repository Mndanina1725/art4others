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
// IMAGE PERFORMANCE (lazy load + async decode)
// ============================================

document.addEventListener('DOMContentLoaded', function() {
  var images = document.querySelectorAll('img');
  for (var i = 0; i < images.length; i++) {
    var img = images[i];
    if (!img.hasAttribute('loading')) {
      img.setAttribute('loading', 'lazy');
    }
    img.setAttribute('decoding', 'async');
  }
});

// ============================================
// LIGHTWEIGHT SCROLL FADE-IN (runs once per section)
// ============================================

document.addEventListener('DOMContentLoaded', function() {
  var sections = document.querySelectorAll('section');
  if (!sections.length) return;

  var observer = new IntersectionObserver(
    function(entries) {
      for (var i = 0; i < entries.length; i++) {
        var entry = entries[i];
        if (entry.isIntersecting) {
          entry.target.classList.add('section-visible');
          observer.unobserve(entry.target);
        }
      }
    },
    { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
  );

  for (var j = 0; j < sections.length; j++) {
    observer.observe(sections[j]);
  }
});