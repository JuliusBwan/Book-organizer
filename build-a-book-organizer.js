const books = [
  {title: "1984", authorName: "George Orwell", releaseYear: 1935},
  {title: "The Almanack Of Naval Ravikant", authorName: "Eric Jorgensen", releaseYear: 2021},
  {title: "Rich Dad Poor Dad", authorName: "Hiyo Kawasaki", releaseYear: 2001},
  {title: "To Kill a Mockingbird", authorName: "Harper Lee", releaseYear: 1961},
  {title: "Pride and Prejudice", authorName: "Jane Austen and Anna Quindlen", releaseYear: 1813},
];
function sortByYear(book1, book2){
  if (book1.releaseYear < book2.releaseYear){
    return -1;
  }
  else if (book1.releaseYear === book2.releaseYear){
    return 0;
  }
  return 1;
}

let filteredBooks = [];
function filterBooks(arr, year){
  filteredBooks = arr.filter((book) => book.releaseYear > year);
  return filteredBooks;
} 
console.log(filterBooks(books, 1860));

let sortedBooks = filteredBooks.sort(sortByYear);
console.log(sortedBooks);
