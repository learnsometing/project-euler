const { isPalindrome } = require('./problem4');

describe('isPalindrome', () => {
  it('should return false when number is not a palindrome', () => {
    expect(isPalindrome(46)).toEqual(false);
  });

  it('should return true when number is not a palindrome', () => {
    expect(isPalindrome(50005)).toEqual(true);
  });
});
