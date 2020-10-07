import axios from "axios";

class ForecastService {
  getCityForecastById = async () => {
    try {
      return await axios.get(
        "https://cors-anywhere.herokuapp.com/www.metaweather.com/api/location/44418/",
        {
          headers: {
            crossdomain: true,
            "Content-Type": "application/json; charset=UTF-8",
          },
        }
      );
    } catch (err) {
      throw err;
    }
  };
}

export default new ForecastService();
