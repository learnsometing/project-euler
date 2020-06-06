const { isPalindrome, largestPalindromicProduct } = require('./problem4');

describe('isPalindrome', () => {
  it('should return false when number is not a palindrome', () => {
    expect(isPalindrome(46)).toEqual(false);
  });

  it('should return true when number is not a palindrome', () => {
    expect(isPalindrome(50005)).toEqual(true);
  });
});

describe('largestPalindromicProduct', () => {
  it('should return the largest palindromic product of two n digit ints', () => {
    expect(largestPalindromicProduct(3)).toEqual(906609);
  });
});
