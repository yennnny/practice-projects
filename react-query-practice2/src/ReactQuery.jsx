import { useQuery } from 'react-query';

const ReactQuery = () => {
  const { isLoading, data, isError, error } = useQuery({
    queryKey: ['fetchUser'],
    queryFn: async () => {
      // try {
      //   const res = await
      //   return await res.json();
      // } catch (err) {
      //   console.error('Error', err);
      // }
      return await fetch('https://jsonplaceholder.typicode.com/users').then(
        (res) => res.json()
      );
    },
  });

  if (isLoading) return <>Loading...</>;
  if (isError) return <>{error.message}</>;
  return (
    <>
      <h2 className="text-4xl">ReactQuery</h2>
      <ul className="list-disc p-4">
        {data && data?.map((user) => <li key={user.id}>{user.name}</li>)}
      </ul>
    </>
  );
};

export default ReactQuery;
