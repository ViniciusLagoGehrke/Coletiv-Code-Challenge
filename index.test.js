//current exercise jest test
const palindrome = require("./index");

test("Checks if 'racecar' is a palindrome.", () => {
    expect(palindrome('racecar')).toBe(true);
});

test("Checks if 'table' is a palindrome.", () => {
    expect(palindrome('table')).toBe(false);
});

test("Checks if 'A man, a plan, a canal. Panama' is a palindrome.", () => {
    expect(palindrome('A man, a plan, a canal. Panama')).toBe(false);
});

test("Checks if 'otto' is a palindrome.", () => {
    expect(palindrome('otto')).toBe(true);
});

/*
palindrome('rtrue') // true
palindrome('table') // false
palindrome('A man, a plan, a canal. Panama') // false
*/