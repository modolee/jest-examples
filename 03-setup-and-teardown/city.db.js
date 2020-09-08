class CityDatabase {
  static instance = null;
  cities = null;

  static getInstance() {
    if(!this.instance) {
      this.instance = new CityDatabase();
    }

    return this.instance;
  }

  static deleteInstance() {
    if(this.instance) {
      this.instance = null;
    }
  }
}

export default CityDatabase;