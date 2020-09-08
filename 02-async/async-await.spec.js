import { fetchDataPromise, fetchDataThrowError } from "./fetch";

describe('Async/Await', () => {
  test('the data is peanut butter', async () => {
    const data = await fetchDataPromise();
    expect(data).toBe('peanut butter');
  });

  test('the fetch fails with an error', async () => {
    expect.assertions(1);
    try {
      await fetchDataThrowError();
    } catch(error) {
      expect(error).toMatch('error reason');
    }
  });
});

describe('Async/Await with resolves/rejects', () => {
  test('the data is peanut butter', async () => {
    await expect(fetchDataPromise()).resolves.toBe('peanut butter');
  });

  test('the fetch fails with an error', async () => {
    expect.assertions(1);
    await expect(fetchDataThrowError()).rejects.toMatch('error reason');
  });
});