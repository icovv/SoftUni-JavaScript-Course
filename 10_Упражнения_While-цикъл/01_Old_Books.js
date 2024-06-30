function books (input) {
    let favouriteBook = input[0];
    let booksCount = 0;
    let index = 1;
    while (input[index] !== `No More Books`) {
        booksCount += 1;

        if (input[index] === favouriteBook) {
            break;
        }
        index += 1
    }
    if (input[index] === favouriteBook) {
        console.log(`You checked ${booksCount - 1} books and found it.`)
    } else if (input[index] === `No More Books`) {
        console.log("The book you search is not here!");
        console.log(`You checked ${booksCount} books.`);
    }
}

books (["The Spot",
"Hunger Games",
"Harry Potter",
"Torronto",
"Spotify",
"No More Books"])




