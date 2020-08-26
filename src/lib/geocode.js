import Geocode from "react-geocode";
import axios from "axios";

export const geocodeGenerator = async (address) => {
  Geocode.setApiKey(process.env.REACT_APP_API_KEY);

  const structuredObj = address.label;

  try {
    const result = await Geocode.fromAddress(structuredObj);
    const postObj = {
      latitude: result.results[0].geometry.location["lat"],
      longitude: result.results[0].geometry.location["lng"],
    };
    let res = await axios.post(
      "https://immense-lowlands-41652.herokuapp.com/",
      postObj
    );
    const sqMtr = Math.floor(res.data.square);
    console.log(sqMtr);
    return sqMtr;
  } catch (error) {
    console.log(error);
  }
};
