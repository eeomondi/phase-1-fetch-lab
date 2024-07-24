// index.js
function fetchBooks() {
  return fetch('https://anapioficeandfire.com/api/books')
    .then(response => response.json())
    .then(data => renderBooks(data));
}

function renderBooks(data) {
  // This function is not implemented in the lab, but it should render the book titles into the DOM
  // For example:
  const mainElement = document.querySelector('main');
  data.forEach(book => {
    const bookTitle = document.createElement('h2');
    bookTitle.textContent = book.name;
    mainElement.appendChild(bookTitle);
  });
}

const index = require('../index');
const index = require('./index');