class FoodDatabase {
  static instance = null;
  cityFoodPair = null;

  static getInstance() {
    if(!this.instance) {
      this.instance = new FoodDatabase();
    }

    return this.instance;
  }

  static deleteInstance() {
    if(this.instance) {
      this.instance = null;
    }
  }
}

export default FoodDatabase;