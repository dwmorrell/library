function getTotalBooksCount(books) {
  let total = books.length;
  return total;
}

function getTotalAccountsCount(accounts) {
  let total = accounts.length;
  return total;
}

function getBooksBorrowedCount(books) {
  const total = books.filter(book => book.borrows[0].returned === false);
  return total.length;
}

function getMostCommonGenres(books) {
  const resultArray = [];
  const result = books.map(book => {
  const genreLocation = resultArray.findIndex((element) => element.name === book.genre);
  if (genreLocation >= 0) {
    resultArray[genreLocation].count = resultArray[genreLocation].count +1;
  } else {
    resultArray.push({name: book.genre, count: 1 });
  }
  return resultArray;
});
return sortTopFive(resultArray);
}

function getMostPopularBooks(books) {
const resultArray = [];
const result = books.map(book => {
  resultArray.push({name: book.title, count: book.borrows.length})
});
return sortTopFive(resultArray);
}

function getMostPopularAuthors(books, authors) {
const resultArray = [];
for (let i = 0; i < authors.length; i++) {
  let authorFirst = authors[i].name.first;
  let authorLast = authors[i].name.last;
  let authorId = authors[i].id;
  const foundBook = books.find(theBook => authorId === theBook.authorId)
  resultArray.push({name: `${authorFirst} ${authorLast}`, count: foundBook.borrows.length}); 
  }
  return sortTopFive(resultArray);
}

function sortTopFive(array) {
return array.sort((bookA, bookB) => bookB.count > bookA.count ? 1 : -1).slice(0, 5);
}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
