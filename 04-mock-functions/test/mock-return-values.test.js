describe('Mock Return Values', () => {
  describe('test mock return values', () => {
    const myMock = jest.fn();
    expect(myMock()).toEqual(undefined);

    myMock.mockReturnValueOnce(10).mockReturnValueOnce('x').mockReturnValue(true);

    test('test first call', () => {
      expect(myMock()).toBe(10);
    });

    test('test second call', () => {
      expect(myMock()).toBe('x');
    });

    test('test third call', () => {
      expect(myMock()).toBeTruthy();
    });

    test('test fourth call', () => {
      expect(myMock()).toBeTruthy();
    });

  });

  describe('continuation-passing style', () => {
    const filterTestFn = jest.fn();
    // Make the mock return `true` for the first call,
    // and `false` for the second call
    filterTestFn.mockReturnValueOnce(true).mockReturnValueOnce(false);

    const result = [11, 12].filter(num => filterTestFn(num));

    test('test result', () => {
      expect(result).toEqual([11]);
    });

    test('test call arguments', () => {
      expect(filterTestFn.mock.calls).toEqual([[11], [12]]);
    });

  });
});
