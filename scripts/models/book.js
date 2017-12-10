'use strict';

var app = app || {}; // eslint-disable-line

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

    Book.fetchAll = () => {
        // $.get('https://book-lister.herokuapp.com/api/v1/books')
        $.get('http://localhost:3000/api/v1/books')
            .done(console.log);
    };

    module.Book = Book;
})(app);

app.Book.fetchAll();