import axios from "axios";
import config from '../config/config';

const fetchImages = async (onSuccess, onError) => {
  try {
    const response = await axios.get(`${config.baseUrl}/events`);
    onSuccess(response.data.scanResults);
  } catch (error) {
    if (onError) {
      onError("An error occurred while fetching images");
    }
  }
};

export default fetchImages;