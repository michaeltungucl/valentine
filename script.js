window.addEventListener('DOMContentLoaded', () => {
    const question = document.querySelector('.question');
    const yesBtn = document.querySelector('.yes-btn');
    yesBtn.addEventListener('click', () => {
        question.innerHTML = 'ti voglio anche io';
    });
})

const buttonHeight = 50;
const buttonWidth = 150;

const maxWidth = 1000 - buttonWidth;
const maxHeight = 600 - buttonHeight;

window.addEventListener('DOMContentLoaded', () => {
    const noButton = document.querySelector('.no-btn');

    noButton.addEventListener('mouseover', () => {
        noButton.style.left = Math.floor(Math.random() * (maxWidth + 1)) + 'px';
        noButton.style.top = Math.floor(Math.random() * (maxHeight + 1)) + 'px';
    })
})