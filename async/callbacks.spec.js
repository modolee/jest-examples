import { fetchDataCallback } from "./fetch";

describe('Callbacks', () => {
  // Don't do this!
  // test('the data is peanut butter', () => {
  //   function callback(data) {
  //     expect(data).toBe('peanut butter');
  //   }
  //
  //   fetchDataWithCallback(callback);
  // });

  test('the data is peanut butter', done => {
    function callback(data) {
      try {
        expect(data).toBe('peanut butter');
        done();
      } catch (error) {
        done(error);
      }
    }

    fetchDataCallback(callback);
  });
});