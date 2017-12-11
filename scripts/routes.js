page('/', (ctx, next) => {
    app.Book.fetchAll(app.book
    View.initIndexPage);
});

// page('/books/:id', app.Book.fetchOne, app.bookView.initDetailPage); // passing in the function to be called later, not the value of the funtion

page('/about', aboutView.initAboutPage); // passing in the function to be called later, not the value of the funtion

page('*', (ctx, next) => { console.log('Nope, nothing here'); }); // signature of the callback function for the page function

page.start();