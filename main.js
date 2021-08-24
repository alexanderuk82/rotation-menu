'use strict';
const open = document.querySelector('.circle__open');
const close = document.querySelector('.circle__close');
const container = document.querySelector('.container');
open.addEventListener('click', () => container.classList.add('show-menu'));

close.addEventListener('click', () => container.classList.remove('show-menu'));
