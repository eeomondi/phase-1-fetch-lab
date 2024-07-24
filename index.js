// index.js
const { fetchBooks, renderBooks } = require('./index');

const fetchBooks = async () => {
  try {
    const response = await fetch('https://anapioficeandfire.com/api/books');
    if (!response.ok) {
      throw new Error('Failed to fetch books');
    }
    const books = await response.json();
    renderBooks(books);
  } catch (error) {
    console.error('Error fetching books:', error.message);
  }
};

function renderBooks(books) {
  books.forEach(book => {
    const titleElement = document.createElement('div');
    titleElement.textContent = book.name; // Assuming 'name' is the property containing the book title
    document.body.appendChild(titleElement);
  });
}

// Export fetchBooks if needed
module.exports = {
  fetchBooks,
  renderBooks
};

