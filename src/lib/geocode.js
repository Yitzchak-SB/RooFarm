import Geocode from "react-geocode";
import axios from "axios";

export const geocodeGenerator = (address) => {
  Geocode.setApiKey(process.env.REACT_APP_API_KEY);

  Geocode.fromAddress(address).then(
    (response) => {
      const { lat, lng } = response.results[0].geometry.location;
      console.log(lat, lng);
      console.log(response.results[0].geometry.location);
      axios.post(
        "http://127.0.0.1:5000/",
        response.results[0].geometry.location
      );
    },
    (error) => {
      console.error(error);
    }
  );
};
