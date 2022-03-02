function findAuthorById(authors, id) {
  const result = authors.find(author => author.id === id);
  return result;
}

function findBookById(books, id) {
  const result = books.find(book => book.id === id);
  return result;
}

function partitionBooksByBorrowedStatus(books) {
  let resultArray = [];
  let resultA = books.filter(book => book.borrows[0].returned === true);
  let resultB = books.filter(book => book.borrows[0].returned === false);
  resultArray.push(resultB);
  resultArray.push(resultA);
  return resultArray;
}

function getBorrowersForBook(book, accounts) {
  const { borrows } = book;
  const renters = borrows.map(({ id, returned })=> { const account = accounts.find(account => account.id === id);
    return { ...account, returned, }; });
    return renters.sort((borrowA, borrowB) => { const companyA = borrowA.company; const companyB = borrowB.company; return companyA.localeCompare(companyB); }).slice(0, 10);
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
