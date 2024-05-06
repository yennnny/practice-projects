import { useQuery } from 'react-query';

const ReactQuery = () => {
  // useQuery는 기본적으로 React 컴포넌트가 마운트되면 자동으로 시작된다.
  const { isLoading, data, isError, error, refetch } = useQuery({
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
    enabled: false, // 기본은 true로 되어있으며, false로 설정하면 useQuery가 자동으로 시작되지 않는다
  });

  if (isLoading) return <>Loading...</>;
  if (isError) return <>{error.message}</>;
  return (
    <>
      <h2 className="text-4xl">ReactQuery</h2>
      <button
        onClick={refetch}
        className="py-2 px-4 border bg-slate-100 rounded-md text-slate-900"
      >
        fetch data
      </button>
      <ul className="list-disc p-4">
        {data && data?.map((user) => <li key={user.id}>{user.name}</li>)}
      </ul>
    </>
  );
};

export default ReactQuery;
