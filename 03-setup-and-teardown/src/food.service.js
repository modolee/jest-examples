import FoodDatabase from "./food.db";

export const initializeFoodDatabase = () => {
  const foodDatabase = FoodDatabase.getInstance();
  foodDatabase.cityFoodPair = {'Vienna': 'Wiener Schnitzel', 'San Juan': 'Mofongo'};
  console.log('Food database is initialized');
};

export const isValidCityFoodPair = (cityName, foodName) => {
  const foodDatabase = FoodDatabase.getInstance();
  const foodPairName = foodDatabase.cityFoodPair[cityName];

  return !!foodPairName && foodPairName === foodName;
};