import { useEffect, useState } from 'react';
import Places from './Places.jsx';
import Error from './Error.jsx';
import { sortPlacesByDistance } from '../loc.js';
import { fetchAvailablePlaces } from '../http.js';

export default function AvailablePlaces({ onSelectPlace }) {
  // 데이터를 가져올 때 흔히 아래 세 가지의 state가 함께 동작한다.
  // 2. 사용자에게 현재 데이터가 fetching인걸 알려주는 데이터
  const [isFetching, setIsFetching] = useState(false);

  // Todo: Fetch available places from backend API
  // 1. fetching 하려는 데이터를 저장
  const [availablePlaces, setAvailablePlaces] = useState([]);

  // 3. 발생할 수 있을 만한 에러를 화면에 띄우게 도와주는 데이터
  const [error, setError] = useState();

  useEffect(() => {
    async function fetchPlaces() {
      setIsFetching(true);
      try {
        const places = await fetchAvailablePlaces();

        navigator.geolocation.getCurrentPosition((position) => {
          const sortedPlaces = sortPlacesByDistance(
            places,
            position.coords.latitude,
            position.coords.longitude
          );
          setAvailablePlaces(sortedPlaces);
          setIsFetching(false); // 장소 fetching과 분류가 끝난 이 시점(콜백함수 안)에 넣어준다
        });
      } catch (err) {
        setError({
          message:
            error.message || 'Could not fetch places, please try again later.',
        });
        setIsFetching(false); // -> 에러가 났든 안났든 끝내야 하기 때문에 catch에도 작성
      }
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
      loadingText="Fetching place data..."
      fallbackText="No places available."
      onSelectPlace={onSelectPlace}
    />
  );
}
