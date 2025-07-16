// Smooth scrolling for navigation links
document.querySelectorAll('.nav a').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
    // Close menu on mobile after click
    document.querySelector('.nav').classList.remove('show');
  });
});

// Slider logic
const slides = document.querySelectorAll('.slide');
let current = 0;

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.toggle('active', i === index);
  });
}

function nextSlide() {
  current = (current + 1) % slides.length;
  showSlide(current);
}

showSlide(current); // Show first slide initially
setInterval(nextSlide, 3000); // Auto-slide every 3s

// Contact form handler
const form = document.getElementById('contactForm');
if (form) {
  form.addEventListener('submit', function(e) {
    e.preventDefault();

    const formData = new FormData(form);
    const plainData = Object.fromEntries(formData.entries());
    const name = plainData.name;

    fetch('https://m1t3ki353d8ztdahorfhuxgkr3w3dl2m.hook.eu2.make.com', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(plainData)
    })
    .then(() => {
      form.reset();

      const successMessage = document.createElement('p');
      successMessage.textContent = `✅ Thank you, ${name}! Your message has been sent.`;
      successMessage.style.color = 'green';
      successMessage.style.marginTop = '10px';

      form.parentNode.appendChild(successMessage);

      setTimeout(() => {
        successMessage.remove();
      }, 5000);
    })
    .catch((error) => {
      console.error('Error:', error);
      alert('Something went wrong while sending your message. Please try again later.');
    });
  });
}


// Hamburger menu toggle
const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('.nav');

if (hamburger && nav) {
  hamburger.addEventListener('click', () => {
    nav.classList.toggle('show');
  });
}
