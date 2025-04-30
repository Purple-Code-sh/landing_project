// Form validation and submission
document.addEventListener('DOMContentLoaded', function () {
  const contactForm = document.getElementById('contact-form');
  const privacyCheckbox = document.getElementById('privacy');
  const submitButton = contactForm?.querySelector('button[type="submit"]');

  function showToast(message, type = 'error') {
    const toast = document.createElement('div');
    toast.className = `fixed bottom-4 right-4 py-2 px-10 lg:px-16 lg:py-3 rounded-lg text-white shadow-lg z-50 lg:text-lg 2xl:text-xl text-sm md:text-base font-medium ${type === 'error' ? 'bg-red-700' : 'bg-green-600'} `;
    toast.textContent = message;
    document.body.appendChild(toast);
    setTimeout(() => {
      toast.remove();
    }, 3000);
  }

  // Validation functions
  function validateName(name, fieldName) {
    if (!name) {
      showToast(`Please enter your ${fieldName}`);
      return false;
    }

    if (name.length < 2) {
      showToast(`${fieldName} must be at least 2 characters`);
      return false;
    }

    if (name.length > 50) {
      showToast(`${fieldName} must be less than 50 characters`);
      return false;
    }

    // Allow only letters, spaces, hyphens and apostrophes
    const nameRegex = /^[A-Za-zÀ-ÖØ-öø-ÿ\s'-]+$/;
    if (!nameRegex.test(name)) {
      showToast(`${fieldName} contains invalid characters`);
      return false;
    }

    return true;
  }

  function validateEmail(email) {
    if (!email) {
      showToast('Please enter your email');
      return false;
    }

    if (email.length > 100) {
      showToast('Email must be less than 100 characters');
      return false;
    }

    // More comprehensive email regex
    const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (!emailRegex.test(email)) {
      showToast('Please enter a valid email address');
      return false;
    }

    return true;
  }

  function validateMessage(message) {
    // Message is optional, but if provided, validate it
    if (message && message.length > 1000) {
      showToast('Message must be less than 1000 characters');
      return false;
    }
    return true;
  }

  if (contactForm && privacyCheckbox && submitButton) {
    // Store the initial button text
    const defaultButtonText = submitButton.innerHTML;

    contactForm.addEventListener('submit', async e => {
      e.preventDefault();

      const firstName = document.getElementById('firstName').value.trim();
      const lastName = document.getElementById('lastName').value.trim();
      const email = document.getElementById('email').value.trim();
      const package = document.getElementById('package').value.trim();
      const message = document.getElementById('message').value.trim();

      // Validation
      if (!validateName(firstName, 'First name')) {
        return;
      }

      if (!validateName(lastName, 'Last name')) {
        return;
      }

      if (!validateEmail(email)) {
        return;
      }

      if (!package) {
        showToast('Please select a lighting package');
        return;
      }

      if (!validateMessage(message)) {
        return;
      }

      if (!privacyCheckbox.checked) {
        showToast('Please accept the Privacy Policy');
        return;
      }

      try {
        // Show loading state
        submitButton.disabled = true;
        submitButton.innerHTML = `
          <div class="flex items-center justify-center">
            <svg class="animate-spin h-5 w-5 mx-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
              <path class="opacity-75" fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z">
              </path>
            </svg> Sending...
          </div>
        `;

        // Create form data object
        const formData = new FormData();
        formData.append('firstName', firstName);
        formData.append('lastName', lastName);
        formData.append('email', email);
        formData.append('package', package);
        formData.append('message', message);

        // Replace with your actual Google Script URL
        const response = await fetch('https://script.google.com/macros/s/AKfycbwwr2m-Cpb8NUFjJEgTmNmxkYaT-sPbncusLaRmTp6PhZiSyR6ggeEOLcjsvZGDzg6z-Q/exec', {
          method: 'POST',
          mode: 'no-cors', // Important for Google Apps Script
          body: formData,
        });

        // With no-cors, we won't get a real response, so assume success if no error
        showToast('Your lighting plan request has been sent successfully!', 'success');
        contactForm.reset();
      } catch (error) {
        showToast('An error occurred. Please try again later.');
        console.error('Form submission error:', error);
      } finally {
        // Restore button state
        submitButton.disabled = false;
        submitButton.innerHTML = defaultButtonText;
      }
    });
  }
});
