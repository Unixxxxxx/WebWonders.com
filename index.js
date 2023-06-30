document.getElementById("contact-form").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent form submission

  // Perform form validation
  var nameInput = document.getElementById("name");
  var emailInput = document.getElementById("email");
  var messageInput = document.getElementById("message");
  
  if (nameInput.value.trim() === "") {
    alert("Please enter your name.");
    return;
  }
  
  if (emailInput.value.trim() === "") {
    alert("Please enter your email.");
    return;
  }
  
  if (messageInput.value.trim() === "") {
    alert("Please enter your message.");
    return;
  }
  
  // Form submission successful
  alert("Form submitted successfully!");
  
  // TODO: Add code to send the form data via email using server-side programming or a backend service
  
  // Clear form inputs
  nameInput.value = "";
  emailInput.value = "";
  messageInput.value = "";
});
