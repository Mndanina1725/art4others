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

// Slideshow Functionality
function startSlideshow(containerId) {
  const container = document.getElementById(containerId);
  if (!container) {
    console.log(`Slideshow container not found for ID: ${containerId}`);
    return;
  }

  const images = container.querySelectorAll('.slideshow-image');

  // Log the container ID and the images NodeList
  console.log(`Initializing slideshow for container: ${containerId}`);
  console.log(`Images found in ${containerId}:`, images);

  if (images.length === 0) {
    console.log(`No images found in container with ID: ${containerId}`);
    return;
  }

  let currentIndex = 0;

  setInterval(() => {
    console.log(`Changing image in ${containerId} to index: ${currentIndex}`);
    images[currentIndex].classList.remove('active');
    currentIndex = (currentIndex + 1) % images.length;
    images[currentIndex].classList.add('active');
  }, 3000); // Change slide every 3 seconds
}

// Initialize slideshows for each team member
startSlideshow('angelena-slideshow');
startSlideshow('martin-slideshow');
startSlideshow('azaria-slideshow');
