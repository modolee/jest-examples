describe('Custom Matchers', () => {
  const mockFunc = jest.fn();
  const arg1 = 1;
  const arg2 = 2;

  test('The mock function was called at least once', () => {
    mockFunc();
    expect(mockFunc).toHaveBeenCalled();
    // 아래 코드와 동일하게 동작
    // expect(mockFunc.mock.calls.length).toBeGreaterThan(0);
  });

  test('The mock function was called at least once with the specified args', () => {
    mockFunc(arg1, arg2);

    expect(mockFunc).toHaveBeenCalledWith(arg1, arg2);
    // 아래 코드와 동일하게 동작
    // expect(mockFunc.mock.calls).toContainEqual([arg1, arg2]);
  });

  test('The last call to the mock function was called with the specified args', () => {
    mockFunc(3, 4);
    mockFunc(arg1, arg2);

    expect(mockFunc).toHaveBeenLastCalledWith(arg1, arg2);
    // 아래 코드와 동일하게 동작
    // expect(mockFunc.mock.calls[mockFunc.mock.calls.length - 1]).toEqual([
    //   arg1,
    //   arg2,
    // ]);
  });

  test('All calls and the name of the mock is written as a snapshot', () => {
    mockFunc(arg1, arg2);
    expect(mockFunc).toMatchSnapshot();
    // 아래 코드와 같이 일일이 다 체크해야 되는 것 __snapshots__ 디렉터리 아래 파일을 생성하고
    // 해당 파일에 기록 된 호출 기록, return 기록을 바탕으로 동일하게 호출됐는지 테스트
    // expect(mockFunc.mock.calls).toEqual();
    // expect(mockFunc.getMockName()).toBe('a mock name');
  });

});