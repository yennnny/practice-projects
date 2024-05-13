import axios from 'axios';
import { useQuery, useQueryClient } from 'react-query';

export const fetchUserDetails = (userId) => {
  return axios.get('https://jsonplaceholder.typicode.com/users/' + userId);
};

const useUserId = (userId) => {
  const queryClient = useQueryClient();
  return (
    useQuery(['user-id', userId], () => fetchUserDetails(userId)),
    {
      initialData: () => {
        const user = queryClient
          .getQueryData('user-name')
          ?.data.find((u) => u.id === userId);

        if (user) return { data: user };
        else return undefined;
      },
    }
  );
};

export default useUserId;
