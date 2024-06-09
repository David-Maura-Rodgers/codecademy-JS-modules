/* secret-messages.js */

// Option 1 to import resources (commented out to allow Option 2 to work)
import { toggleHiddenElement, changeText, changeToFunkyColor } from '../modules/dom-functions.js';

// Option 2 to import resources using imported domFunctions object
// import domFunctions from '../modules/dom-functions.js';
// const { toggleHiddenElement, changeText, changeToFunkyColor } = domFunctions;

const buttonElement = document.getElementById('secret-button');
const pElement = document.getElementById('secret-p');
const header = document.getElementById("header");

changeText(header, "I did it!");

setInterval(()=> {
  changeToFunkyColor(header);

}, 200);

buttonElement.addEventListener('click', () => {
  toggleHiddenElement(pElement);
});

buttonElement.addEventListener('click', () => {
  changeToFunkyColor(pElement);
});