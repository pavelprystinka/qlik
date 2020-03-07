const sortingTest = require('./sortingTest')
const palindromeTest = require('./palindromeTest')
const anagramTest = require('./anagramTest')

sortingTest();

console.log();

palindromeTest();

console.log();

(async () => {
  await anagramTest(); 
  console.log('See ya!')
}) ();
