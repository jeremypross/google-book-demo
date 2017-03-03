const fetch    = require('node-fetch');
let GoogleBook = {};

const key = process.env.GOOGLE_API_KEY;

GoogleBook.getBooks = (query) => {
  return fetch(`https://www.googleapis.com/books/v1/volumes?q=${query}&key=${key}`);
};

module.exports = GoogleBook;
