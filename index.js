
async function fetchBooks() {
  try {
    const response = await window.fetch('https://anapioficeandfire.com/api/books');
    const books = await response.json();
    renderBooks(books);
  } catch (error) {
    console.error(error);
  }
}

function renderBooks(books) {
  const mainElement = document.querySelector('main');
  books.forEach((book) => {
    const bookTitleElement = document.createElement('h2');
    bookTitleElement.textContent = book.name;
    mainElement.appendChild(bookTitleElement);
  });
}

export { fetchBooks, renderBooks };