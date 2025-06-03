var Book = /** @class */ (function () {
    function Book(title, author) {
        this.title = title;
        this.author = author;
    }
    return Book;
}());
var book = new Book("1984", "George Orwell");
console.log("".concat(book.title, " by ").concat(book.author));
// book.title = "Brave New World"; 
// book.author = "Terry Pratchet"
