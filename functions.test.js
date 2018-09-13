const functions = require('./functions');

test('return two', () => {
  expect(functions.returnTwo()).toEqual(2)
})
test('greeting', () => {
  expect(functions.greeting('James')).toEqual('Hello, James')
  expect(functions.greeting('Jill')).toEqual('Hello, Jill')
})
test('add', () => {
  expect(functions.add(1, 2)).toEqual(3)
  expect(functions.add(5, 9)).toEqual(14)
})