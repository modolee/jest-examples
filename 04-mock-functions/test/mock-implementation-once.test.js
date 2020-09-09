describe('Mock Implementation Once', () => {
  test('test mockImplementationOnce without default', () => {
    const myMockFn = jest
      .fn()
      .mockImplementationOnce(cb => cb(null, true))
      .mockImplementationOnce(cb => cb(null, false));

    const cbFn = (err, val) => val;

    expect(myMockFn(cbFn)).toBeTruthy();
    expect(myMockFn(cbFn)).toBeFalsy();
    expect(myMockFn(cbFn)).toBeUndefined();
  });

  test('test mockImplementationOnce with default', () => {
    const myMockFn = jest
      .fn(cb => cb(null, 'default'))
      .mockImplementationOnce(cb => cb(null, true))
      .mockImplementationOnce(cb => cb(null, false));

    const cbFn = (err, val) => val;

    expect(myMockFn(cbFn)).toBeTruthy();
    expect(myMockFn(cbFn)).toBeFalsy();
    expect(myMockFn(cbFn)).toBe('default');
  });
});