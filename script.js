// Page Navigation
function showPage(pageId) {
  document.querySelectorAll('.page').forEach(page => {
    page.classList.remove('active');
  });
  document.getElementById(pageId).classList.add('active');
  window.scrollTo(0, 0);
}

// Contact Form
function submitContactForm(event) {
  event.preventDefault();
  const formData = new FormData(event.target);
  const name = formData.get('name');
  alert(`Thank you ${name}! Your message has been received.`);
  event.target.reset();
}

// Signup Form
function submitSignupForm(event) {
  event.preventDefault();
  const formData = new FormData(event.target);
  const firstName = formData.get('firstName');
  alert(`Welcome ${firstName}! Your account has been created.`);
  event.target.reset();
}

// Loading Screen
window.addEventListener('load', () => {
  setTimeout(() => {
    document.getElementById('loading').classList.add('hidden');
  }, 1500);
});

// Smooth Scroll
document.addEventListener('DOMContentLoaded', () => {
  document.documentElement.style.scrollBehavior = 'smooth';
  showPage('home');
});

// Navbar Scroll Effect
window.addEventListener('scroll', () => {
  const navbar = document.querySelector('.navbar');
  if (window.scrollY > 50) {
    navbar.style.background = 'rgba(26, 35, 126, 0.98)';
  } else {
    navbar.style.background = 'rgba(26, 35, 126, 0.95)';
  }
});
