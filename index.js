function fetchBooks() {
  // Perform a fetch request to the Game of Thrones API
  return fetch('https://www.anapioficeandfire.com/api/books')
    .then(response => {
      // Check if the fetch request was successful
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      // Convert the response to JSON format
      return response.json();
    })
    .then(data => {
      // Call renderBooks function with the JSON data
      renderBooks(data);
    })
    .catch(error => {
      // Handle any errors that occur during the fetch request
      console.error('There was a problem with the fetch operation:', error);
    });
}

function renderBooks(books) {
  // Assuming renderBooks() will render the titles of the books to the HTML
  // For example, assuming there is an HTML element with id 'bookList'
  const bookListElement = document.getElementById('bookList');
  books.forEach(book => {
    const li = document.createElement('li');
    li.textContent = book.name; // Assuming 'name' is the property for book title
    bookListElement.appendChild(li);
  });
}

// Call fetchBooks() when the page is loaded
document.addEventListener('DOMContentLoaded', function () {
  fetchBooks();
});
