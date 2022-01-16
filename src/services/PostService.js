import axios from 'axios';
import { BASE_API_URL } from '../utils/constants';
const fetchAllPosts = async () => {
  return axios
    .get(`${BASE_API_URL}/posts`)
    .then((res) => res)
    .catch((err) => {
      console.error(err);
    });
};

export default fetchAllPosts;
