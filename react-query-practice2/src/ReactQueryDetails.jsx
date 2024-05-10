import { useParams } from 'react-router-dom';
import useUserId from './hooks/useUserId';

const ReactQueryDetails = () => {
  const { userId } = useParams();
  const { isLoading, isError, error, data } = useUserId(userId);
  console.log(data);

  if (isLoading) return <>Loading...</>;
  if (isError) return <>{error.message}</>;

  return (
    <>
      {data && (
        <div>
          <h1>ID: {data.data.id}</h1>
          <h1>NAME: {data.data.name}</h1>
          <h2>EMAIL: {data.data.email}</h2>
        </div>
      )}
    </>
  );
};

export default ReactQueryDetails;
