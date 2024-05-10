import axios from 'axios';
import { useQuery } from 'react-query';

const fetchPosts = () => {
  return axios.get('https://jsonplaceholder.typicode.com/posts');
};

const fetchAlbums = () => {
  return axios.get('https://jsonplaceholder.typicode.com/albums');
};

const ParallelQuery = () => {
  const {
    isLoading: postsDataIsLoading,
    isFetching: postsDataIsFetching,
    isError: postsDataIsError,
    error: postsDataError,
    data: postsData,
  } = useQuery('parallel-get-posts', fetchPosts, {
    select: (data) => data.data.filter((v) => v?.id <= 5),
  });

  const { data: albumsData } = useQuery('parallel-get-albums', fetchAlbums, {
    select: (data) => data.data?.filter((a) => a.id <= 10),
  });

  if (postsDataIsLoading) return <>PostsData is Loading...</>;
  if (postsDataIsFetching) return <>PostsData is Fetching...</>;
  if (postsDataIsError) return <>{postsDataError.message}</>;

  return (
    <>
      <h1 className="pb-5">ParallelQuery</h1>
      <div>
        <h2 className="text-2xl pb-2">Posts</h2>
        <ul className="posts">
          {postsData &&
            postsData.map((post) => (
              <li key={post.id} className="pb-5">
                <strong className="text-lg">[title] {post.title}</strong>
                <p>{post.body}</p>
              </li>
            ))}
        </ul>
      </div>
      <div>
        <h2 className="text-2xl pt-5 pb-2">Albums</h2>

        <ul className="albums">
          {albumsData &&
            albumsData.map((album) => (
              <li key={album.id}>
                <span>{album.id}</span>
                <strong className="pl-3">{album.title}</strong>
              </li>
            ))}
        </ul>
      </div>
    </>
  );
};

export default ParallelQuery;
