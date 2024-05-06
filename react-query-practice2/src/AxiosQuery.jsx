import axios from 'axios';
import { useEffect, useState } from 'react';

const AxiosQuery = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();

  useEffect(() => {
    setIsLoading(true);
    axios
      .get('https://jsonplaceholder.typicode.com/users')
      .then((res) => {
        setData(res);
        setIsLoading(false);
      })
      .catch((e) => {
        setError(e.message);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) return <>Loading..</>;
  if (error) return <h2>{error}</h2>;

  return (
    <>
      <h2 className="text-4xl">AxiosQuery</h2>
      <ul className="list-disc p-4">
        {data && data.data?.map((user) => <li key={user.id}>{user.name}</li>)}
      </ul>
    </>
  );
};

export default AxiosQuery;
