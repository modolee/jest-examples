import {initializeCityDatabase, isCity} from "./city.service";
import { initializeFoodDatabase, isValidCityFoodPair } from "./food.service";

beforeEach(() => {
  return initializeCityDatabase();
});

describe('Outer Scope', () => {
  test('city database has Vienna', () => {
    expect(isCity('Vienna')).toBeTruthy();
  });

  test('city database has San Juan', () => {
    expect(isCity('San Juan')).toBeTruthy();
  });

  describe('Inner Scope', () => {
    beforeEach(() => {
      return initializeFoodDatabase();
    });

    test('Vienna <3 sausage', () => {
      expect(isValidCityFoodPair('Vienna', 'Wiener Schnitzel')).toBeTruthy();
    });

    test('San Juan <3 plantains', () => {
      expect(isValidCityFoodPair('San Juan', 'Mofongo')).toBeTruthy();
    });
  });
});