$(document).ready(() => {
  console.log('js is linked');

  const searchForm = $('.search');
  const searchQuery = $('input[name="query"]');

  const processSearch = (e) => {
    e.preventDefault();
    $.ajax({
      type: 'GET',
      url: `/books?q=${searchQuery.val()}`
    })
    // we're just console logging the json data
      // you can render a view with the json object through handlebars
    .then(data => console.log(data))
    .catch(err => console.log('ERROR:', err));

  };

  searchForm.on('submit', processSearch);

});
