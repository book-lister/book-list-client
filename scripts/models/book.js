'use strict';

var app = app || {}; // eslint-disable-line
// const API_URL = 'https://book-lister.herokuapp.com'; // heroku-production
const API_URL = 'https://localhost:300'; // heroku-production

(function(module) {
    function Book (obj) {
        this.id = obj.id;
        this.title = obj.title;
        this.author = obj.author;
        this.isbn = obj.isbn;
        this.image = obj.image;
        this.description = obj.description;
    }

    Book.all = []; // goal is to get data from backend / api and populate this array with instances of our card object (above)

    Book.fetchOne = (ctx, cb) => {
        $.get(`${API_URL}/api/v1/books/1`)
            // .then(console.log)
            .then(data => {
                cb(data);
            })
            .fail(console.error);
    };

    Book.fetchAll = (cb) => {
    // $.get('http://localhost:3000/api/v1/books')
        $.get(`${API_URL}/api/v1/books`)
            .then(Book.loadAll)
            .then(cb)
            .fail(console.error);
    };

    module.Book = Book;
})(app);

app.Book.fetchAll();