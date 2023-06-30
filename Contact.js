const formElement = document.querySelector('form');
const formData = new FormData(formElement);
const queryString = new URLSearchParams(formData).toString();
window.location.href = '/search?' + queryString;
