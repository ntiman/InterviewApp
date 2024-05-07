import axios from "axios";

const baseURL = "http://localhost:7071";

const fetchImages = async (onSuccess, onError) => {
  try {
    const response = await axios.get(`${baseURL}/events`);
    onSuccess(response.data.scanResults);
  } catch (error) {
    if (onError) {
      onError("An error occurred while fetching images");
    }
  }
};

export default fetchImages;