import axios from "axios";
import { API_ROUTES }  from '../config/config';

export const fetchOrgs = async (onSuccess, onError) => {
    try {
      const response = await axios.get(`${API_ROUTES.ORG}/organizations`);
      onSuccess(response.data.scanResults);
    } catch (error) {
      if (onError) {
        console.log(error);
        onError("An error occurred while fetching organizations");
      }
    }
  };