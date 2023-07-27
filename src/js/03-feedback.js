import throttle from 'lodash.throttle';

const imputEmailEl = document.querySelector('[name="email"]');
const textareaEl = document.querySelector('[name="message"]');
const formEl = document.querySelector('.feedback-form');
const storageKey = 'feedback-form-state';
let formData = {};
const savedForm = JSON.parse(localStorage.getItem(storageKey));

const onForm = e => {
  formData[e.target.name] = e.target.value;
  localStorage.setItem(storageKey, JSON.stringify(formData));
};

const sendData = e => {
  e.preventDefault();
  console.log(formData);
  localStorage.removeItem(storageKey);
  e.currentTarget.reset();
  formData = {};
};

formEl.addEventListener('input', throttle(onForm, 500));
formEl.addEventListener('submit', sendData);

// if (savedForm.email) {
//   imputEmailEl.value = savedForm.email;
//   formData.email = savedForm.email;
// }
if (savedForm.message) {
  textareaEl.value = savedForm.message;
  formData.message = savedForm.message;
}
