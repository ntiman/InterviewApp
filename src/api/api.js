import axios from "axios";
import config from '../config/config';

export const fetchEvents = async (onSuccess, onError) => {
  try {
    const response = await axios.get(`${config.baseUrl}/events`);
    // console.log(response.data.scanResults)
    onSuccess(response.data.scanResults);
  } catch (error) {
    if (onError) {
      onError("An error occurred while fetching images");
    }
  }
};

export const fetchAlarms = async (onSuccess, onError) => {
  try {
    const response = await axios.get(`${config.baseUrl}/camera`);
    onSuccess(response.data.scanResults);
  } catch (error) {
    if (onError) {
      console.log(error);
      onError("An error occurred while fetching images");
    }
  }
};

