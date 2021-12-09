function fetchBooks() {
  // To pass the tests, don't forget to return your fetch!
  
}

function renderBooks(books) {
  const main = document.querySelector('main');
  books.forEach(book => {
    const h2 = document.createElement('h2');
    h2.innerHTML = book.name;
    main.appendChild(h2);
  });
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks();
});

fetch('https://anapioficeandfire.com/api/books')
  .then(resp => resp.json())


  .then(json => renderBooks(json));

function renderBooks(json) {
  const main = document.querySelector('main')
  json.forEach((book) => {
    console.log(book)
    let p = document.createElement('p')
    element = main.appendChild(p)
    element.innerHTML = `${book["name"]}`
  })
};