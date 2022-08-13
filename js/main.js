'use strict';
const input_email = document.querySelector('.input_email');
const error_msg = document.querySelector('.input_label');
const btn_notify = document.querySelector('.btn_notify');

const validation = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

btn_notify.addEventListener('click', () => {
    if (validation.test(input_email.value) === false) {
        error_msg.style.display = 'block';
        input_email.style.borderColor = 'var(--lightRed)';
    } else {
        error_msg.style.display = 'none';
        input_email.style.borderColor = 'green';
    }
});