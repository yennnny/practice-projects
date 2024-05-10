import axios from 'axios';
import { useQuery } from 'react-query';

const fetchUserDetails = (userId) => {
  return axios.get('https://jsonplaceholder.typicode.com/users/' + userId);
};

const useUserId = (userId) => {
  return useQuery(['user-id', userId], () => fetchUserDetails(userId));
};

export default useUserId;
