import { useEffect, useState } from 'react';
import Places from './Places.jsx';
import Error from './Error.jsx';

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
        const response = await fetch('http://localhost:3000/places');
        const resData = await response.json();

        if (!response.ok) {
          throw new Error('Failted to fetch places');
        }
        setAvailablePlaces(resData.places);
      } catch (err) {
        setError({
          message:
            error.message || 'Could not fetch places, please try again later.',
        });
      }

      setIsFetching(false); // try catch 밖에 있어야 한다 -> 에러가 났든 안났든 끝내야 하기 때문
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
