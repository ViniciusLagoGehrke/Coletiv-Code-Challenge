//current exercise jest test
const palindrome = require("./palindrome");

test("Checks if 'racecar' is a palindrome.", () => {
    expect(palindrome('racecar')).toStrictEqual([]);
});

test("Returns permutation of '1'.", () => {
    expect(permute('1')).toStrictEqual('1');
});

test("Returns permutation of 'abc'.", () => {
    expect(permute('abc')).toStrictEqual(['abc', 'acb', 'bac', 'bca', 'cab', 'cba']);
});

palindrome('racecar') // true
palindrome('table') // false
palindrome('A man, a plan, a canal. Panama') // false