window.addEventListener('DOMContentLoaded', () => {
    const question = document.querySelector('.question');
    const yesBtn = document.querySelector('.yes-btn');
    yesBtn.addEventListener('click', () => {
        question.innerHTML = 'HAHAHAHAHAHAHAHA scusami per lo scherzo. Spero ti sia piaciuto. Volevo tanto lasciarti con almeno un sorriso :) ti voglio bene';
    });
})

const buttonHeight = 50;
const buttonWidth = 150;

const maxWidth = window.innerWidth - buttonWidth;
const maxHeight = window.innerHeight - buttonHeight;

window.addEventListener('DOMContentLoaded', () => {
    const noButton = document.querySelector('.no-btn');

    noButton.addEventListener('mouseover', () => {
        noButton.style.left = Math.floor(Math.random() * (maxWidth + 1)) + 'px';
        noButton.style.top = Math.floor(Math.random() * (maxHeight + 1)) + 'px';
    })
})