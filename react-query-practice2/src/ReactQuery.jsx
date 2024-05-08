import useUserName from './hooks/useUserName';

const ReactQuery = () => {
  const onSuccess = (data) =>
    console.log('데이터 가져오기 이후 사이드 이펙트 수행', data);
  const onError = (error) =>
    console.log('오류 발생 이후 사이드 이펙트 수행', error);

  // useQuery는 기본적으로 React 컴포넌트가 마운트되면 자동으로 시작된다.

  const { isLoading, isFetching, data, isError, error, refetch } = useUserName(
    onSuccess,
    onError
  );
  console.log({ isLoading, isFetching });

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
        {/* {data && data?.map((user) => <li key={user.id}>{user.name}</li>)} */}
        {data && data?.map((userName) => <li key={userName}>{userName}</li>)}
      </ul>
    </>
  );
};

export default ReactQuery;
