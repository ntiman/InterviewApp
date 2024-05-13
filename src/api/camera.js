import axios from "axios";
import { API_ROUTES }  from '../config/config';

export const fetchEvents = async (onSuccess, onError) => {
  try {
    const response = await axios.get(`${API_ROUTES.CAMERA}/events`);
    onSuccess(response.data);
  } catch (error) {
    if (onError) {
      onError("An error occurred while fetching images");
    }
  }
};

export const fetchAlarms = async (onSuccess, onError) => {
  try {
    const response = await axios.get(`${API_ROUTES.CAMERA}/alarms`);
    onSuccess(response.data);
  } catch (error) {
    if (onError) {
      onError("An error occurred while fetching alarms");
    }
  }
};

export const fetchCamera = async (onSuccess, onError) => {
  try {
    const response = await axios.get(`${API_ROUTES.CAMERA}/camera`);
    onSuccess(response.data);
  } catch (error) {
    if (onError) {
      onError("An error occurred while fetching cameras");
    }
  }
};



