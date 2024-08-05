import { useEffect, useState } from 'react';
import Places from './Places.jsx';

export default function AvailablePlaces({ onSelectPlace }) {
  const [availablePlaces, setAvailablePlaces] = useState([]);

  // 컴포넌트가 실행될 때마다 fetch로 데이터를 새롭게 받아오지 않도록 useEffect 사용 => 컴포넌트가 한 번 생성된 후 한 번만 실행됨
  useEffect(() => {
    // useEffect에 asnyc를 바로 사용하는건 불가능하지만, useEffect 안에 함수를 만들어 넣는건 가능.
    async function fetchPlaces() {
      const response = await fetch('http://localhost:3000/places');
      const resData = await response.json();
      setAvailablePlaces(resData.places);
      // fetch는 Promise를 반환
      // then 메소드에 함수를 전달하여 정의하면 Promise가 해결되고 response를 받고나서 한 번 실행됨(자동으로 response 객체를 받음)
    }
    fetchPlaces();
  }, []);

  return (
    <Places
      title="Available Places"
      places={availablePlaces}
      fallbackText="No places available."
      onSelectPlace={onSelectPlace}
    />
  );
}
