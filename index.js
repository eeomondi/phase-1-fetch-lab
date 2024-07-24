// index.js

const fetch=require('node-fetch');
function fetchBooks(){
  const response= fetch ('https://anapioficeandfire.com/api/books ')
  .then((resp)=>resp.json())
  .then((json)=>renderBooks(json))
  return response
}
fetchBooks()

function renderBooks(books) {
  const main=decoment.querySelector('main');
  books.forEach(book =>{
    const h2 = document.createElement('h2');
    h2.innerHTML = book.name;
    main.appendChild(h2);
  });
}
document.addEventListener('DOMcontentLoaded', function(){
  fetchBooks();
});

