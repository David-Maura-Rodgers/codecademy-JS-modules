/* secret-messages.js */
import { toggleHiddenElement, changeText, changeToFunkyColor } from '../modules/dom-functions.js';

const buttonElement = document.getElementById('secret-button');
const pElement = document.getElementById('secret-p');

buttonElement.addEventListener('click', () => {
  toggleHiddenElement(pElement);
});

buttonElement.addEventListener('click', () => {
  changeToFunkyColor(pElement);
});