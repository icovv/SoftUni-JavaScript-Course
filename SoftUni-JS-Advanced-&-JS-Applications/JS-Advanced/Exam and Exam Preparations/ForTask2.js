class BookClub {
    constructor(library){
        this.library = library
        this.books = [];
        this.members = [];
    }
    addBook (title, author){
        let inBooks = false;
        for (let book of this.books){
            if (book.title == title){
                inBooks = true;
            }
        }
        if (inBooks == true){
            return `The book "${title}" by ${author} is already in ${this.library} library.`
        }

        this.books.push({
            title:title,
            author:author
        })
        return `The book "${title}" by ${author} has been added to ${this.library} library.`
    }
    addMember (memberName){
        let isPart = false;
        for (let member of this.members){
            if (member == memberName){
                isPart = true
            }
        }
        if (isPart == true){
            return `Member ${memberName} is already a part of the book club.`
        }
        this.members.push(memberName);
        return `Member ${memberName} has been joined to the book club.`
    }
    assignBookToMember (memberName, bookTitle){
        let isPart = false;
        for (let member of this.members){
            if (member == memberName){
                isPart = true
            }
        }
        if (isPart == false){
            throw new Error(`Member ${memberName} not found.`)
        }

        let inBooks = false;
        for (let book of this.books){
            if (book.title == bookTitle){
                inBooks = true;
            }
        }
        if (inBooks == false){
           throw new Error(`Book "${bookTitle}" not found.`)
        }

        for (let i = 0; i < this.books.length; i ++){
            if (this.books[i].title == bookTitle){
                let author = this.books[i].author;
                this.books.splice(i,1);
                return `Member ${memberName} has been assigned the book "${bookTitle}" by ${author}.`
            }
        }
    }
    generateReadingReport (){
        if (this.members.length < 1){
            return "No members in the book club."
        }
        if (this.books.length < 1){
            return "No available books in the library."
        }
        let output = [];
        this.books.forEach(x => output.push(`"${x.title}" by ${x.author}`))
        return `Available Books in ${this.library} library:\n` + output.join(`\n`)
    }
}
const myBookClub = new BookClub('The Bookaholics');
console.log(myBookClub.addBook("To Kill a Mockingbird", "Harper Lee"));
console.log(myBookClub.addBook("1984", "George Orwell"));
console.log(myBookClub.addMember("Alice"));
console.log(myBookClub.addMember("Peter"));
console.log(myBookClub.assignBookToMember("Peter", "1984"));
console.log(myBookClub.assignBookToMember("Alice", "To Kill a Mockingbird"));
console.log(myBookClub.generateReadingReport());



