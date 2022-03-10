const capitalizeString = require('./test4.js')

test("capitalize String the string", () => {
    const text = capitalizeString("i love code");
    expect(text).toBe("I love code");
});