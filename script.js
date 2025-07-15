// script.js

window.addEventListener('DOMContentLoaded', () => {
    // This script toggles the dark mode theme
    // It changes the theme icon and toggles the 'dark-mode' class on the body
    const toggleBtn = document.getElementById('theme-toggle');
    toggleBtn.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        const icon = document.getElementById('theme-icon');
        if (document.body.classList.contains('dark-mode')) {
          icon.src = 'images/light.png';
          icon.alt = 'light theme icon';
        }
        else {
          icon.src = 'images/dark.png';
          icon.alt = 'dark theme icon';
        }
    });


    // This script handles form validation for the contact form 
    // It checks if all fields are filled and if the email is valid

    const form = document.getElementById('contact-form');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');
    const errorMsg = document.getElementById('form-error');

    form.addEventListener('submit', function (e) {
      errorMsg.style.display = 'none';

      if (nameInput.value.trim() === '' || emailInput.value.trim() === '' || messageInput.value.trim() === '') {
        e.preventDefault(); // Stop form from submitting
        errorMsg.textContent = 'All fields are required.';
        errorMsg.style.display = 'block';
        return;
      }

      if (!emailInput.value.includes('@')) {
        e.preventDefault();
        errorMsg.textContent = 'Please enter a valid email.';
        errorMsg.style.display = 'block';
        return;
      }
    });


    // This script filters project cards based on the selected category
    // It shows only the cards that match the selected category or all cards if "all" is

    const filterButtons = document.querySelectorAll('.filter-buttons button');
    const projectCards = document.querySelectorAll('.project-card');

    filterButtons.forEach(button => {
      button.addEventListener('click', () => {
        const filter = button.getAttribute('data-filter');

        projectCards.forEach(card => {
          const category = card.getAttribute('data-category');

          if (filter === 'all' || filter === category) {
            card.style.display = 'block';
          } else {
            card.style.display = 'none';
          }
        });
      });
    });



});

