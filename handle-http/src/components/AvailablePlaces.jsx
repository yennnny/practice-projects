import { useEffect, useState } from 'react';
import Places from './Places.jsx';

export default function AvailablePlaces({ onSelectPlace }) {
  const [availablePlaces, setAvailablePlaces] = useState([]);

  // 컴포넌트가 실행될 때마다 fetch로 데이터를 새롭게 받아오지 않도록 useEffect 사용 => 컴포넌트가 한 번 생성된 후 한 번만 실행됨
  useEffect(() => {
    fetch('http://localhost:3000/places')
      .then((res) => res.json())
      .then((resData) => setAvailablePlaces(resData.places));
    // fetch는 Promise를 반환
    // then 메소드에 함수를 전달하여 정의하면 Promise가 해결되고 response를 받고나서 한 번 실행됨(자동으로 response 객체를 받음)
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
