import axios from "axios";
import { API_ROUTES }  from '../config/config';

export const fetchEvents = async (onSuccess, onError) => {
  try {
    const response = await axios.get(`${API_ROUTES.CAMERA}/events`);
    onSuccess(response.data.scanResults);
  } catch (error) {
    if (onError) {
      onError("An error occurred while fetching images");
    }
  }
};

export const fetchAlarms = async (onSuccess, onError) => {
  try {
    const response = await axios.get(`${API_ROUTES.CAMERA}/camera`);
    onSuccess(response.data.scanResults);
  } catch (error) {
    if (onError) {
      console.log(error);
      onError("An error occurred while fetching alarms");
    }
  }
};



