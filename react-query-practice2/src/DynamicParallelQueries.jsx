import { useQueries } from 'react-query';
import { fetchUserDetails } from './hooks/useUserId';

const DynamicParallelQueries = ({ userIds }) => {
  // console.log(userIds);
  const results = useQueries(
    userIds.map((id) => {
      return {
        queryKey: ['get-user', id],
        queryFn: () => fetchUserDetails(id),
      };
    })
  );
  console.log({ results });
  return <>DynamicParallelQueries</>;
};

export default DynamicParallelQueries;
