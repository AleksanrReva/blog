let commentForm = document.querySelector('.write-comment');
let commentatorName = document.querySelector('.name');
let commentatorEmail = document.querySelector('.email');
let textarea = document.querySelector('.commentarea');
let buttonSubmit = document.querySelector('.submit-button');
let likeButton = document.querySelector('.like-button');
let likeCount = document.querySelector('.like-count');
let counter = Number(likeCount.textContent);
let commentContent = document.querySelector('.comments__content');

textarea.onfocus = function () {
    if (textarea.value === 'Написать комментарий...') {
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

likeButton.onclick = function () {
    if (likeButton.classList.contains('liked')) {
        counter--;
    } else {
        counter++;
    };
    likeCount.textContent = counter;
    likeButton.classList.toggle('liked');
};

commentForm.onsubmit = function () {
    event.preventDefault();

    let newComment = document.createElement('li');
    let newComHeader = document.createElement('div');
    let newComAva = document.createElement('img');
    let newComName = document.createElement('span')
    let newComText = document.createElement('p');

    newComHeader.classList.add('commentator-name');
    newComText.classList.add('comments__paragraph');
    newComAva.classList.add('comments__avatar');

    newComText.textContent = textarea.value;
    newComName.textContent = commentatorName.value;
    newComAva.setAttribute('src', '../../icons/avatar-default.png');

    textarea.value = '';

    newComHeader.append(newComAva);
    newComHeader.append(newComName);
    newComment.append(newComHeader);
    newComment.append(newComText);
    commentContent.append(newComment);
};