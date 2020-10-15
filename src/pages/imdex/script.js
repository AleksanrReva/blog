let articales = document.querySelectorAll('.artcl');
let select = document.querySelector('.aside-menu');
let textarea = document.querySelector('.commentarea');
let buttonSubmit = document.querySelector('.submit-button');

select.onchange = function () {
    for (let articale of articales) {
        if (select.value === 'all-artcl') {
            articale.classList.remove('hidden');
        } else if (articale.dataset.tag !== select.value) {
            articale.classList.add('hidden');
        } else {
            articale.classList.remove('hidden');
        };
    };
};

textarea.onfocus = function () {
    if (textarea.value === 'Напишите здесь ваше сообщение.') {
        textarea.value = '';
    };
    
    if (textarea.value.length < 10 || textarea.value.length > 200) {
        textarea.style.color = 'red';
        buttonSubmit.disabled = true;
    } else {
        textarea.style.color = '#202117';
        buttonSubmit.disabled = false;
    };
};

textarea.oninput = function () {
    if (textarea.value.length < 10 || textarea.value.length > 200) {
        textarea.style.color = 'red';
        buttonSubmit.disabled = true;
    } else {
        textarea.style.color = '#202117';
        buttonSubmit.disabled = false;
    };
};