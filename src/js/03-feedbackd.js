const formElement = document.querySelector('.feedback-form');
const emailInput = document.querySelector('input[name="email"]');
const messageTextarea = document.querySelector('textarea[name="message"]');
function updateLocalStorage() {
  const feedbackFormState = {
    email: emailInput.value,
    message: messageTextarea.value,
  };
  localStorage.setItem(
    'feedback-form-state',
    JSON.stringify(feedbackFormState)
  );
}
window.addEventListener('load', function () {
  const savedState = localStorage.getItem('feedback-form-state');

  if (savedState) {
    const parsedState = JSON.parse(savedState);
    emailInput.value = parsedState.email || '';
    messageTextarea.value = parsedState.message || '';
  }
});

formElement.addEventListener('input', function (event) {
  event.preventDefault();
  updateLocalStorage();
});

formElement.addEventListener('submit', function (event) {
  event.preventDefault();
  const currentValues = {
    email: emailInput.value,
    message: messageTextarea.value,
  };
  localStorage.removeItem('feedback-form-state');
  emailInput.value = '';
  messageTextarea.value = '';
  console.log('Email and Message:', currentValues);
});
