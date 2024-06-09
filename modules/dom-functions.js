/* dom-functions.js */
const toggleHiddenElement = (domElement) => {
    if (domElement.style.display === 'none') {
      domElement.style.display = 'block';
    } else {
      domElement.style.display = 'none';
    }
}

const changeText = (domElement, newText) => {
  domElement.innerHTML = newText;
}

const changeToFunkyColor = (domElement) => {
  const r = Math.random() * 255;
  const g = Math.random() * 255;
  const b = Math.random() * 255;
        
  domElement.style.background = `rgb(${r}, ${g}, ${b})`;
}

// Option 1 to export resources (commented out to allow Option 2 to work)
// export { toggleHiddenElement, changeText, changeToFunkyColor };

// Option 2 to export resources using default keyword
const resources = { 
  toggleHiddenElement, 
  changeText,
  changeToFunkyColor
}
export default resources;