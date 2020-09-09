import {clearCityDatabase, initializeCityDatabase, isCity} from "../src/city.service";

beforeAll(() => {
  return initializeCityDatabase();
});

afterAll(() => {
  clearCityDatabase();
});

describe('One-Time Setup - Vienna, Seoul', () => {
  test('city database has Vienna', () => {
    expect(isCity('Vienna')).toBeTruthy();
  });

  test('city database has Seoul', () => {
    expect(isCity('Seoul')).toBeTruthy();
  });
});

describe('One-Time Setup - San Juan', () => {
  test('city database has San Juan', () => {
    expect(isCity('San Juan')).toBeTruthy();
  });
});