
// Corrected smooth scroll with header offset

document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const targetID = this.getAttribute('href');
    const targetSection = document.querySelector(targetID);
    if (targetSection) {
      const header = document.querySelector('header');
      const headerHeight = header.offsetHeight;
      const targetPosition = targetSection.getBoundingClientRect().top + window.scrollY - headerHeight;
      
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  });
});


// Contact form submission handler with simple validation and feedback

const form = document.getElementById('contact-form');
form.addEventListener('submit', function(e) {
  e.preventDefault();
  
  // Basic form validation

  const name = form.name.value.trim();
  const email = form.email.value.trim();
  const message = form.message.value.trim();
  
  if (!name || !email || !message) {
    alert('Please fill in all fields.');
    return;
  }
  
  // Simulate form submission
  alert(`Thank you, ${name}! Your message has been sent.`);
  
  // Reset the form
  this.reset();
});

// Email validation helper
function validateEmail(email) {
  // Simple regex for email validation
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email.toLowerCase());
}

