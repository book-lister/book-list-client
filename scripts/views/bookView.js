'use strict';

var app = app || {};

(function (module) {
    const bookView = {};

    bookView.initIndexPage = () => {
        $('main section').hide();
        $('#books').empty().show();
        app.Book.all.map(book => $('#books').append(book.toHTML()));
    };

    bookView.initDetailPage = (data) => {
        console.log(data);
        $('main section').hide();
        $('#books').empty().show;
        // $('#books').append(ctx.book.toHtml()); NOT SURE IF THIS WILL BE NEEDED
    };

    module.bookView = bookView;
})(app);