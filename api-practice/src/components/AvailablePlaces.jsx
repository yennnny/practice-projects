import { useEffect, useState } from 'react';
import Places from './Places.jsx';

export default function AvailablePlaces({ onSelectPlace }) {
  // Todo: Fetch available places from backend API
  const [availablePlaces, setAvailablePlaces] = useState([]);

  fetch('http://localhost:3000/places')
    .then((response) => {
      return response.json();
    })
    .then((resData) => {
      setAvailablePlaces(resData.places);
    });
  useEffect(() => {}, []);

  return (
    <Places
      title="Available Places"
      places={availablePlaces}
      fallbackText="No places available."
      onSelectPlace={onSelectPlace}
    />
  );
}
