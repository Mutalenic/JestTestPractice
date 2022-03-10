const reverseString = require('./task2.js');

test('string is correctly reversed', () => {
  expect(reverseString('Nathan')).toEqual('nahtaN');
});