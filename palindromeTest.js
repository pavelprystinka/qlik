
const test = () => {
  let a = 999;
  let b = 999;
  let product = a * b;
  let maxPalindrom = 0;

  while (product > maxPalindrom) {
      if (isPalindrome(product)) {
          maxPalindrom = product;
          a--;
          b = a;
      }
      else {
          b--;
      }
      product = a * b;
  }

  console.log('Max Plindrome test.');
  console.log(`Max palindrome is: ${maxPalindrom}`);
}

const isPalindrome = (prod) => {
  let str = prod.toString();

  let left = 0;
  let right = str.length - 1;

  while (left < right) {
      if (str[left] !== str[right])
          return false;

      left++;
      right--;
  }

  return true;
}

module.exports = test;