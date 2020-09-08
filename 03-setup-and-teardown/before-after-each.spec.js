import {clearCityDatabase, initializeCityDatabase, isCity} from "./city.service";

beforeEach(() => {
  return initializeCityDatabase(); // async code
});

afterEach(() => {
  clearCityDatabase();
});

describe('Repeating Setup For Many Tests - Vienna, Seoul', () => {
  test('city database has Vienna', () => {
    expect(isCity('Vienna')).toBeTruthy();
  });

  test('city database has Seoul', () => {
    expect(isCity('Seoul')).toBeTruthy();
  });
});

describe('Repeating Setup For Many Tests - San Juan', () => {
  test('city database has San Juan', () => {
    expect(isCity('San Juan')).toBeTruthy();
  });
});