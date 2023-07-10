
document.getElementById('submitButton').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent form submission
  
    var nameInput = document.getElementById('nameInput');
    var emailInput = document.getElementById('emailInput');
    var phoneInput = document.getElementById('phoneInput');
    var commentInput = document.getElementById('comment');
    var isValid = true;
  
    removeErrorMessage(nameInput);
    removeErrorMessage(emailInput);
    removeErrorMessage(phoneInput);
    removeErrorMessage(commentInput);
  
    if (nameInput.value.trim() === '') {
      displayErrorMessage(nameInput, 'This field is required');
      isValid = false;
    }
  
    if (emailInput.value.trim() === '') {
      displayErrorMessage(emailInput, 'This field is required');
      isValid = false;
    } else if (!validateEmail(emailInput.value.trim())) {
      displayErrorMessage(emailInput, 'Please enter a valid email address');
      isValid = false;
    }
  
    if (phoneInput.value.trim() === '') {
      displayErrorMessage(phoneInput, 'This field is required');
      isValid = false;
    }
  
    if (commentInput.value.trim() === '') {
      displayErrorMessage(commentInput, 'This field is required');
      isValid = false;
    }
  
    if (isValid) {
      // Send the message or perform any desired action
      document.getElementById('contactForm').submit();
    }
  });
  
  function displayErrorMessage(inputElement, message) {
    var errorContainer = inputElement.parentNode.querySelector('.error-container');
    if (!errorContainer) {
      errorContainer = document.createElement('div');
      errorContainer.className = 'error-container';
      inputElement.parentNode.insertBefore(errorContainer, inputElement.nextSibling);
    }
  
    var errorElement = document.createElement('small');
    errorElement.textContent = message;
    errorElement.className = 'error-message';
  
    errorContainer.innerHTML = ''; // Clear existing error messages
    errorContainer.appendChild(errorElement);
  
    inputElement.classList.add('error');
  }
  
  function removeErrorMessage(inputElement) {
    var errorContainer = inputElement.parentNode.querySelector('.error-container');
    if (errorContainer) {
      errorContainer.parentNode.removeChild(errorContainer);
      inputElement.classList.remove('error');
    }
  }
  
  function validateEmail(email) {
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }