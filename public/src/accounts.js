function findAccountById(accounts, id) {
  return accounts.find((account) => account.id === id);
}

function sortAccountsByLastName(accounts) {
  return accounts.sort((accountA, accountB) => 
  accountA.name.last.toLowerCase() > accountB.name.last.toLowerCase() ? 1: -1)
}

function getTotalNumberOfBorrows(account, books) {
  const count = books.reduce((acc, bookElement) => {
    bookElement.borrows.forEach((element) => {
      if (element.id === account.id) acc++;
 
 }); return acc; }, 0); 
   return count;
 
 }

function getBooksPossessedByAccount(account, books, authors) {
  const filteredBooks = books.filter((book) => book.borrows.some(acc => acc.id === account.id && acc.returned === false));
  const mappedBooks = filteredBooks.map(book => { let author = authors.find(author => author.id === book.authorId)
 book.author = author; return book;
});
return mappedBooks;
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
