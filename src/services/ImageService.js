import axios from 'axios';
import { BASE_API_URL } from '../utils/constants';

const getThumbnailImage = async (key) => {
  return axios
    .get(`${BASE_API_URL}/images?key=${key}`)
    .then((res) => res)
    .catch((err) => {
      console.error(err);
    });
};

export default getThumbnailImage;
