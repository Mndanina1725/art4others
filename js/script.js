// Handle donation button click (if this feature still exists)
document.getElementById('donate-btn')?.addEventListener('click', function () {
  const amount = document.getElementById('amount').value;
  if (amount) {
    alert(`Thank you for your generous donation of $${amount}!`);
    document.getElementById('donate-form').reset();
  } else {
    alert('Please enter a valid donation amount.');
  }
});

// Slideshow Functionality with Navigation
function startSlideshow(containerId) {
  const container = document.getElementById(containerId);
  if (!container) {
    console.log(`Slideshow container not found for ID: ${containerId}`);
    return;
  }

  const images = container.querySelectorAll('.slideshow-image');
  const prevBtn = container.querySelector('.prev-btn');
  const nextBtn = container.querySelector('.next-btn');

  console.log(`Initializing slideshow for container: ${containerId}`);
  console.log(`Images found in ${containerId}:`, images);

  if (images.length === 0) {
    console.log(`No images found in container with ID: ${containerId}`);
    return;
  }

  let currentIndex = 0;

  const updateSlide = (index) => {
    images.forEach((img, i) => img.classList.toggle('active', i === index));
  };

  const nextSlide = () => {
    currentIndex = (currentIndex + 1) % images.length;
    updateSlide(currentIndex);
  };

  const prevSlide = () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateSlide(currentIndex);
  };

  updateSlide(currentIndex);

  nextBtn?.addEventListener('click', nextSlide);
  prevBtn?.addEventListener('click', prevSlide);

  setInterval(nextSlide, 3000); // Automatically change slides every 3 seconds
}

// Initialize slideshows for each team member
startSlideshow('angelena-slideshow');
startSlideshow('martin-slideshow');
startSlideshow('azaria-slideshow');





