interface Book {
  title: string;
  author: string;
  isbn: string;
  publishedYear: number;
  genre?: string;
}

class Library {
  protected books: Book[] = [];

  public addBook(book: Book): void {
    this.books.push(book);
  }

  public getBookDetails(isbn: string): string {
    const book = this.books.find((b: Book) => b.isbn === isbn);
    return book
      ? `Title: ${book.title}, Author: ${book.author}, Year: ${
          book.publishedYear
        }, Genre: ${book.genre ?? "N/A"}`
      : "Book not found";
  }
}

class DigitalLibrary extends Library {
  readonly website: string;

  constructor(website: string) {
    super();
    this.website = website;
  }

  public listBooks(): string[] {
    return this.books.map((book) => book.title);
  }
}

const myLibrary = new DigitalLibrary("https://mylibrary.com");
myLibrary.addBook({
  title: "The Great Gatsby",
  author: "F. Scott Fitzgerald",
  isbn: "54321",
  publishedYear: 1925,
  genre: "Classic",
});
myLibrary.addBook({
  title: "Pride and Prejudice",
  author: "Jane Austen",
  isbn: "98765",
  publishedYear: 1813,
  genre: "Romance",
});

console.log(myLibrary.getBookDetails("54321"));
console.log(myLibrary.getBookDetails("98765"));
console.log(myLibrary.listBooks());
