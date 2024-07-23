// index.js

async function fetchBooks() {
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
}

function renderBooks(books) {
  // Example implementation to render books in the DOM
  books.forEach(book => {
    const titleElement = document.createElement('div');
    titleElement.textContent = book.name;
    document.body.appendChild(titleElement);
  });
}

module.exports = {
  fetchBooks,
  renderBooks
};
