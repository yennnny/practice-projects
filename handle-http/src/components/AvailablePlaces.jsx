import { useEffect, useState } from 'react';
import Places from './Places.jsx';
import Error from './Error.jsx';
import { sortPlacesByDistance } from '../loc.js';
import { fetchAvailablePlaces } from '../http.js';

export default function AvailablePlaces({ onSelectPlace }) {
  const [isFetching, setIsFetching] = useState(false);
  const [availablePlaces, setAvailablePlaces] = useState([]);
  const [error, setError] = useState();

  // 컴포넌트가 실행될 때마다 fetch로 데이터를 새롭게 받아오지 않도록 useEffect 사용 => 컴포넌트가 한 번 생성된 후 한 번만 실행됨
  useEffect(() => {
    // useEffect에 asnyc를 바로 사용하는건 불가능하지만, useEffect 안에 함수를 만들어 넣는건 가능.
    async function fetchPlaces() {
      setIsFetching(true);

      try {
        const places = await fetchAvailablePlaces();

        // 사용자의 현재 위치 불러오기
        navigator.geolocation.getCurrentPosition((position) => {
          // position: 위치를 객체형태로 받아옴
          const sortedPlaces = sortPlacesByDistance(
            places,
            position.coords.latitude,
            position.coords.longitude
          );
        });

        setAvailablePlaces(places);
        setIsFetching(false);
      } catch (error) {
        // 네트워크 요청 자체가 실패했을 경우. 예륻르어 인터넷 연결이 끊겼거나 요청 URL이 잘못되어 네트워크 요청을 보낼 수 없는 경우
        setError({
          message:
            error.message || 'Cound not fetch places, please try again later.',
        });
        setIsFetching(false);
      }

      // fetch는 Promise를 반환
      // then 메소드에 함수를 전달하여 정의하면 Promise가 해결되고 response를 받고나서 한 번 실행됨(자동으로 response 객체를 받음)
    }
    fetchPlaces();
  }, []);

  if (error) {
    return <Error title="An error occurred!" message={error.message} />;
  }

  return (
    <Places
      title="Available Places"
      places={availablePlaces}
      isLoading={isFetching}
      loadingText="Feching place data..."
      fallbackText="No places available."
      onSelectPlace={onSelectPlace}
    />
  );
}
