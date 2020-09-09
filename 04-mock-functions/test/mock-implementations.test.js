jest.mock('../src/foo');
import foo from '../src/foo';

describe('Mock Implementations', () => {
  test('test jest fn', () => {
    const myMockFn = jest.fn(cb => cb(null, true));

    expect(myMockFn((err, val) => val)).toBeTruthy();
  });

  test('test mock implementation', () => {
    foo.mockImplementation(() => {
      console.log('Mock implementation');
      return 77;
    });

    expect(foo()).not.toBe(42); // Actual implementation이 아닌,
    expect(foo()).toBe(77);     // Mock implementation이 실행 됨
  });
});

