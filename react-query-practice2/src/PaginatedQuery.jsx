import axios from 'axios';
import { useState } from 'react';
import { useQuery } from 'react-query';

const fetchTodos = (pageParam) => {
  return axios.get(`https://jsonplaceholder.typicode.com/todos/`);
  // return axios.get(`https://jsonplaceholder.typicode.com/todos/${pageParam}`);
};
const PaginatedQuery = () => {
  const [pageNum, setPageNum] = useState(1);
  const { data, isLoading, isFetching } = useQuery(
    ['get-paginated', pageNum],
    fetchTodos,
    // () => fetchTodos(pageNum)
    {
      keepPreviousData: true, // 캐시된 데이터를 먼저 보여주고 나중에 Fetching이 끝나면 다시 화면에 데이터를 업데이트해줌
    }
  );
  if (isLoading) return <>Loading...</>;

  return (
    <>
      <h2 className="text-4xl">Paginated Query</h2>

      <h3>Current Page Number: {pageNum}</h3>
      <ul className="list-disc p-4">
        {data && data.data.map((todo) => <li key={todo.id}>{todo.title}</li>)}
      </ul>
      <div className="space-x-4">
        <button
          onClick={() => setPageNum((page) => page - 1)}
          disabled={pageNum === 1}
        >
          Prev
        </button>
        <button
          onClick={() => setPageNum((page) => page + 1)}
          disabled={pageNum === 3}
        >
          Next
        </button>
      </div>
      <div>{isFetching && 'Fetching...'}</div>
    </>
  );
};

export default PaginatedQuery;
