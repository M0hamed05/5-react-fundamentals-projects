const data = [
  {
    id: 1,
    title: "The Lord of the Rings",
    publicationDate: "1954-07-29",
    author: "J. R. R. Tolkien",
    genres: [
      "fantasy",
      "high-fantasy",
      "adventure",
      "fiction",
      "novels",
      "literature",
    ],
    hasMovieAdaptation: true,
    pages: 1216,
    translations: {
      spanish: "El señor de los anillos",
      chinese: "魔戒",
      french: "Le Seigneur des anneaux",
    },
    reviews: {
      goodreads: {
        rating: 4.52,
        ratingsCount: 630994,
        reviewsCount: 13417,
      },
      librarything: {
        rating: 4.53,
        ratingsCount: 47166,
        reviewsCount: 452,
      },
    },
  },
  {
    id: 2,
    title: "The Cyberiad",
    publicationDate: "1965-01-01",
    author: "Stanislaw Lem",
    genres: [
      "science fiction",
      "humor",
      "speculative fiction",
      "short stories",
      "fantasy",
    ],
    hasMovieAdaptation: false,
    pages: 295,
    translations: {},
    reviews: {
      goodreads: {
        rating: 4.16,
        ratingsCount: 11663,
        reviewsCount: 812,
      },
      librarything: {
        rating: 4.13,
        ratingsCount: 2434,
        reviewsCount: 0,
      },
    },
  },
  {
    id: 3,
    title: "Dune",
    publicationDate: "1965-01-01",
    author: "Frank Herbert",
    genres: ["science fiction", "novel", "adventure"],
    hasMovieAdaptation: true,
    pages: 658,
    translations: {
      spanish: "",
    },
    reviews: {
      goodreads: {
        rating: 4.25,
        ratingsCount: 1142893,
        reviewsCount: 49701,
      },
    },
  },
  {
    id: 4,
    title: "Harry Potter and the Philosopher's Stone",
    publicationDate: "1997-06-26",
    author: "J. K. Rowling",
    genres: ["fantasy", "adventure"],
    hasMovieAdaptation: true,
    pages: 223,
    translations: {
      spanish: "Harry Potter y la piedra filosofal",
      korean: "해리 포터와 마법사의 돌",
      bengali: "হ্যারি পটার এন্ড দ্য ফিলোসফার্স স্টোন",
      portuguese: "Harry Potter e a Pedra Filosofal",
    },
    reviews: {
      goodreads: {
        rating: 4.47,
        ratingsCount: 8910059,
        reviewsCount: 140625,
      },
      librarything: {
        rating: 4.29,
        ratingsCount: 120941,
        reviewsCount: 1960,
      },
    },
  },
  {
    id: 5,
    title: "A Game of Thrones",
    publicationDate: "1996-08-01",
    author: "George R. R. Martin",
    genres: ["fantasy", "high-fantasy", "novel", "fantasy fiction"],
    hasMovieAdaptation: true,
    pages: 835,
    translations: {
      korean: "왕좌의 게임",
      polish: "Gra o tron",
      portuguese: "A Guerra dos Tronos",
      spanish: "Juego de tronos",
    },
    reviews: {
      goodreads: {
        rating: 4.44,
        ratingsCount: 2295233,
        reviewsCount: 59058,
      },
      librarything: {
        rating: 4.36,
        ratingsCount: 38358,
        reviewsCount: 1095,
      },
    },
  },
];

function getBooks() {
  return data;
}

function getBook(id) {
  return data.find((d) => d.id === id);
}

const books = getBooks();

//
//
//
//
//destruction
books;
const book = getBook(2);
book.title;
book.author;
// console.log(book.author, book.author); destuction can make it easier
const { title, author, pages, publicationDate, genres, hasMovieAdaptation } =
  book; //destruction, takes the two attributes, should be with the same name in objects
//destruction object relayes on the name, if you add name not in object it will return undefined
//destruction array relays on order

console.log(author, title, genres);

// const primaryGeners = genres[0];
// const secondaryGeners = genres[1];
//with destruction it can be better by this
const [primaryGenre, secondaryGenre] = genres;

console.log(primaryGenre, secondaryGenre);

//
//
//
//
//Rest/Spread Operator
//anthorGeners is here an array of the rest of genres
//rest element must be at the last
const [primaryGenre1, secondaryGenre1, ...anthorGenres] = genres;
anthorGenres;

//spread element
// const newGenres = [[genres], "epic fantasy"];
// this won't work because it returns an array and the new word not compines them and same idea for object
const newGenres = [...genres, "epic fantasy"];
newGenres;

// const updatedBook = { book, moviePublicationDate: "2001-12-19" };
// you can overwrite the pages property by this way
const updatedBook = {
  ...book,
  pages: 1555,
  moviePublicationDate: "2001-12-19",
};
updatedBook;

//
//
//
//
//Template Literals
console.log(Object.getOwnPropertyNames(String.prototype));
const tilteOfBook = `title: ${title.split("").join("-")}`;
tilteOfBook;

//
//
//
//
//Ternaries Instead of if/else Statements
//short hand if
const PagesRange =
  pages > 1000 ? "Pages is bigger than 1000" : "Pages is less than 1000";
PagesRange;

//
//
//
//
//Arrow functions
//it is prefered by one line functions, i guess

// function getYear(str) {
//   return str.split("")[0];
// }
// function getYear(str) => str.split("")[0];wrong
// const getYear = (str) => {
//   return str.split("")[0];
// };
// const getYear = (str) => {
//   str.split("")[0];
// };
const getYear = (str) => str.split("")[0];
console.log(getYear(publicationDate));

//
//
//
//
//Short-Circuiting And Logical Operators: &&, ||, ??
//string is default true
//truthy value: any value but not falsy
//falsy: 0, '', null, undefined, false , NaN
console.log(hasMovieAdaptation && "This book has a movie");
console.log("some string" && ""); //returns '' not some string, if not falsy it will return "some string"

console.log(book.translations.hasMovieAdaptation || "Not translation");
//this || like or logic gate if false or true takes the second value which it true
//if the first value is falsy then takes the second value <=!!!
//
//a problem occurs here if the number is 0 or '' to fix it use the upcoming way
console.log(book.reviews.librarything.reviewsCount || "no data");

//Nullish Coalescing Operator
// advantage: falsy values here are undefined or null
console.log(book.reviews.librarything.reviewsCount ?? "no data");

//
//
//
//
//Optional Chaining ?

function getAllReviews(bookId) {
  const book = getBook(bookId);
  // const reviews1 = book.reviews.librarything.reviewsCount;
  // const reviews2 = book.reviews.goodreads.reviewsCount;
  // this works without needing to add ? or ?? but not most safe

  return (
    book?.reviews?.librarything?.reviewsCount ??
    0 + book?.reviews?.goodreads?.reviewsCount ??
    0
  );
  //you have to put ? (Optional Chaining) after librarything or goodreads because of null possibility
  //and also after book because if book is not found
}
console.log(getAllReviews(5) || "book is not found or don't have reviews yet");

//
//
//
//
//Array map method
const books2 = getBooks();

console.log([1, 2, 3, 4, 5].map((el) => el * 2));
//moves on every element

console.log(books2.map((book) => book.title));
console.log(
  books2.map((el) => {
    return { t: el.title, a: el.author, r: getAllReviews(el.id) };
  }),
  // books2.map((el) => ({
  //   t: el.title,
  //   a: el.author,
  // })),
);

//
//
//
//
//Array filter method

console.log(books2.filter((book) => book.pages > 1000));
console.log(books2.filter((book) => book.genres.includes("adventure")));
//these high order functions are important as they deal with data, which is important with react

//
//
//
//
//Array Reduce method
//called reduce means to reduce the array to one value
console.log(
  books2.reduce((CurrentAccumulator, book) => {
    // CurrentAccumulator + book.pages; if this it will need a return
    return CurrentAccumulator + book.pages;
  }, 0),
);
// the accumulater can be anything, for example an empty array, empty string, ...

//
//
//
//
//Array Sort Method
console.log(
  books2
    .slice()
    .sort((a, b) => a.pages - b.pages)
    .map((book) => book.pages),
);
//this means from the lowest to the highest a(smaller) b(bigger) and a then b
//note it changes the original array(note preferred in react), so create a copy of a new array by slice() <=!!!!!!!!

//
//
//
//
//Working with Immutable Arrays
//Immutable means can't be changed
//goal is to add or edit or update the array without changing the original array
//take a copy of the original array

// 1) add book object to array
const newBook = {
  id: 6,
  title: "new-book-title",
  author: "author of the book",
};

const bookAfterAdd = [...books2, newBook];
bookAfterAdd;

// 2) book after delete object from array
const booksAfterDelete = bookAfterAdd.filter((book) => book.id !== 6);
booksAfterDelete;

// 3)update book object in the array
const booksAfterUpdate = booksAfterDelete.map((book) => {
  if (book.id === 5) {
    book.title = "title changed";
    return { ...book, pages: 2000 };
    //note that this also another way of changing by overwrite
  }
  return book; //important don't forget to return it
});
booksAfterUpdate;

//
//
//
//
//Asynchronous JavaScript: Promises
console.log(
  fetch("https://jsonplaceholder.typicode.com/todos")
    .then((result) => result.json())
    .then((data) => console.log(data)),
);

//
//
//
//
//Asynchronous JavaScript: Async /Await

async function getTodos() {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos");
  //will not move to the second line, until it is finished
  const data = await res.json();
  console.log(data);

  return data;
}
//note you have to add (await or then) or  it will return a promise
const todos = await getTodos();
console.log(todos);
