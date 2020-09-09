import CityDatabase from "./city.db";

export const initializeCityDatabase = () => {
  return new Promise((resolve, reject) => {
    const cityDatabase = CityDatabase.getInstance();
    cityDatabase.cities = ['Vienna', 'San Juan', 'Seoul'];

    setTimeout(() => {
      console.log('City database is initialized');
      resolve();
    }, 2000);

  });
}

export const clearCityDatabase = () => {
  const cityDatabase = CityDatabase.getInstance();
  cityDatabase.cities = null;
  CityDatabase.deleteInstance();
  console.log('City database is cleared');
}

export const isCity = (cityName) => {
  const cityDatabase = CityDatabase.getInstance();
  return cityDatabase.cities.includes(cityName);
}