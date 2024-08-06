const Book = require('./book');

class Library {
    constructor() {
        this.books = [];
        this.idBook = 0;
    }

    addBook(title, description, author) {
        const book = new Book(this.idBook, title, description, author);
        this.books.push(book);
        this.idBook += 1;
        return book;
    }

    getBooks() {
        return this.books;
    }

    removeBookById(id) {
        this.books = this.books.filter(book => book.id != id);
    }

    getBookById(id) {
        return this.books.find((book) => book.id == id); // mesmo problema de removeBookId
    }

    updateBookById(id, info) {
        const book = this.getBookById(id);
        if (book) {
            book.title = info.title;
            book.description = info.description;
            book.author = info.author;
            return book;
        }
        return null;
    }
}

module.exports = Library;