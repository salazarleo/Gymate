'use strict';

const modal = document.querySelector('.modal')
const btnCloseModal = document.querySelector('.close-btn')
const btnOpenModal = document.querySelector('.botaologin')
const overlay = document.querySelector('.overlay');

const openModal = function () {
    modal.classList.remove('hidden')
    overlay.classList.remove('hidden');
};

const closeModal = function () {
    modal.classList.add('hidden')
    overlay.classList.add('hidden');
}

btnOpenModal.addEventListener('click', openModal);
btnCloseModal.addEventListener('click', closeModal);



document.addEventListener('keydown', function (e) {
    // console.log(e.key);

    if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
        closeModal();
    }
});
