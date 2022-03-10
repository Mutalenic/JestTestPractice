const stringlength = require('./task1');

test('string is correct', () => {
    expect(stringlength('ADCDDFRESG')).toBe(10);
});

