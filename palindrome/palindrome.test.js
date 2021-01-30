const palindrome = require("./palindrome");

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