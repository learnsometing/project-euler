/*
 *  A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.
 *
 *  Find the largest palindrome made from the product of two 3-digit numbers.
 */

const isPalindrome = (n) => {
  const digits = n.toString().split('');
  const lastIdx = digits.length - 1;
  const numChecks = Math.floor(digits.length / 2);
  for (let i = 0; i < numChecks; i++) {
    let j = lastIdx - i;
    if (digits[i] != digits[j]) return false;
  }
  return true;
};

const largestPalindromicProduct = (n) => {
  // Largest n digit number
  const max = 10 ** n - 1;
  // Smallest n digit number
  const min = 10 ** (n - 1);

  let maxProduct = 0;
  for (let i = max; i >= min; i--) {
    for (let j = i; j >= min; j--) {
      let product = i * j;

      if (isPalindrome(product) && product > maxProduct) {
        maxProduct = product;
      }
    }
  }

  return maxProduct;
};

module.exports = { isPalindrome, largestPalindromicProduct };
