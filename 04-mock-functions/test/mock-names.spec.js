describe('Mock Names', () => {
  test('test display mock function name', () => {
    const myMockFn = jest
      .fn()
      // .mockName('namedMockFn')
    // myMockFn(1);
    expect(myMockFn).toHaveBeenCalled();
  });
});