const throttle = require('lodash.throttle');

const form = document.querySelector('form');
const KEY_FEEDBACK = "feedback-form-state";

let data = JSON.parse(localStorage.getItem(KEY_FEEDBACK)) || {};

form.addEventListener('input', throttle(onInput, 500))
form.addEventListener('submit', submitForm)
window.addEventListener('load', loadPage)

function onInput(evt) {
    data[evt.target.name] = evt.target.value
    localStorage.setItem(KEY_FEEDBACK, JSON.stringify(data))
}

function submitForm(evt) {
    evt.preventDefault();
    if (data.email && data.message) {
        console.log(data);
        evt.currentTarget.reset()
        localStorage.removeItem(KEY_FEEDBACK);
        data = {}
    } else {
        alert('Заповнені не всі поля!');
    }
}

function loadPage() {
    const saveData = JSON.parse(localStorage.getItem(KEY_FEEDBACK))
    if (!saveData) {
        return;
    }
    form.elements.email.value = saveData.email ?? "";
    form.elements.message.value = saveData.message ?? "";
}
