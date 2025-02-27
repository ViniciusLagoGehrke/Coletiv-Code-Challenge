const permute = require("./permute");

test("Returns permutation of ''.", () => {
    expect(permute('')).toStrictEqual([]);
});

test("Returns permutation of '1'.", () => {
    expect(permute('1')).toStrictEqual('1');
});

test("Returns permutation of 'abc'.", () => {
    expect(permute('abc')).toStrictEqual(['abc', 'acb', 'bac', 'bca', 'cab', 'cba']);
});

test("Returns permutation of '123'.", () => {
    expect(permute('123')).toStrictEqual([ '123', '132', '213', '231', '312', '321' ]);
});

test("Returns error when tries permutation of 123.", () => {
    expect(permute(123)).toStrictEqual("Not a string to permute");
});

test("Returns permutation of 'Gabi'.", () => {
    expect(permute('Gabi')).toStrictEqual([
      'Gabi', 'Gaib',
      'Gbai', 'aGbi',
      'aGib', 'abGi',
      'bGai', 'bGia',
      'baGi', 'iGab',
      'iGba', 'iaGb'
    ]);
})