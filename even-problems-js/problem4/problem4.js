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

module.exports.isPalindrome = isPalindrome;
