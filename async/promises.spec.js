import {fetchDataPromise, fetchDataThrowError} from "./fetch";

describe('Promises then/catch', () => {
  test('the data is peanut butter', () => {
    return fetchDataPromise().then(data => {
      expect(data).toBe('peanut butter');
    });
  });

  test('the test is rejected', () => {
    return fetchDataThrowError().catch(error => {
      expect.assertions(1);
      expect(error).toMatch('error reason');
    });
  })
});

describe('Promises resolves/rejects', () => {
  test('the data is peanut butter', () => {
    return expect(fetchDataPromise()).resolves.toBe('peanut butter');
  });

  test('the test is rejected', () => {
    expect.assertions(1);
    return expect(fetchDataThrowError()).rejects.toMatch('error reason');
  })
});