test('simple test fail', () => {
  expect(5).toEqual(3)
});

test('simple test success', () => {
  expect(3).toEqual(3)
});

test('simple test flaky', () => {
  expect((new Date()) % 2).toEqual(0)
});
