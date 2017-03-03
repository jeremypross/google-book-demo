const GoogleBook = require('../../services/googlebook.js');

let controller = {};

controller.search = (req, res) => {
  console.log(req.query);
  GoogleBook
    .getBooks(req.query.q)
    .then(r => r.json())
    .then(data => res.json(data))
    .catch((err) => console.log('ERROR:', err));
};

// req.query.q is query parameter

module.exports = controller;
