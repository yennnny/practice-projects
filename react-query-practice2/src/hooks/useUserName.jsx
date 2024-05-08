import { useQuery } from 'react-query';

const useUserName = (onSuccess, onError) => {
  return useQuery({
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
    // enabled: false, // 기본은 true로 되어있으며, false로 설정하면 useQuery가 자동으로 시작되지 않는다
    onSuccess: onSuccess,
    onError: onError,
    select: (data) => {
      // select 항목을 이용하여 백엔드에서 직접 필요한 항목을 선택할 수 있다
      const userName = data
        ?.filter((data) => data.id > 5)
        .map((data) => data.name);
      return userName;
    },
  });
};

export default useUserName;
