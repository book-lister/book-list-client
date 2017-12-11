page('/', (ctx, next) => {
    app.Book.fetchAll(app.book
    View.initIndexPage);
});

// page('/books/:id', app.Book.fetchOne, app.bookView.initDetailPage); // passing in the function to be called later, not the value of the funtion

// TODO: Build a route handler for /new that will a) show a form that takes data and b) on submit the form and add data to our database
// page('/new', app.newView.initNewPage);

// TODO: Write app.newVIew.initNewPage; a) hide all other sections, b) show a section with a form, and c) listen for submit event, which will create a new book in the database (via a POST request) will need body parser to access form data
page('/about', aboutView.initAboutPage); // passing in the function to be called later, not the value of the funtion

page('*', (ctx, next) => { console.log('Nope, nothing here'); }); // signature of the callback function for the page function

page.start();