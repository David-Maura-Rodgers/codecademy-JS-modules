/* secret-image.js */

// Option 1 to import resources
import { toggleHiddenElement } from '../modules/dom-functions.js';

// -------------> Option 2 to import resources using imported domFunctions object
// import domFunctions from '../modules/dom-functions.js';
// const { toggleHiddenElement } = domFunctions;

const buttonElement = document.getElementById('secret-button');
const imgElement = document.getElementById('secret-img');

buttonElement.addEventListener('click', () => {
  toggleHiddenElement(imgElement);
});