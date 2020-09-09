describe('Mock Return This', () => {
  test('test mockReturnThis', () => {
    const myObj = {
      myMethod: jest.fn().mockReturnThis(),
      // 아래 구현과 동일하게 동작
      // myMethod: jest.fn(function () {
      //         return this;
      //       }),
      log: jest.fn(() => 'logging')
    };

    expect(myObj.myMethod()).toEqual(myObj);
    expect(myObj.myMethod().log()).toBe('logging');
  });
});