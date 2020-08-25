import Geocode from "react-geocode";
import axios from "axios";

export const geocodeGenerator = (address) => {
  Geocode.setApiKey(process.env.REACT_APP_API_KEY);

  Geocode.fromAddress(address).then(
    (response) => {
      const { lat, lng } = response.results[0].geometry.location;
      console.log(lat, lng);
      console.log();
      const postObj = {};
      postObj.latitude = toString(response.results[0].geometry.location.lat);
      postObj.longitude = toString(response.results[0].geometry.location.lng);
      axios.post("https://immense-lowlands-41652.herokuapp.com/", postObj);
    },
    (error) => {
      console.error(error);
    }
  );
};
