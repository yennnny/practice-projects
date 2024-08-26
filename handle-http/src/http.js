export async function fetchAvailablePlaces() {
  const response = await fetch('http://localhost:3000/places');
  const resData = await response.json();
  if (!response.ok) {
    // !response.ok: HTTP 응답이 성공적이지 않을 때, 예를들어 404또는 500와 같은 경우
    // try-catch: 네트워크 요청은 성공했으나 서버가 요청을 처리할 수 없어서 실패한 경우 예를들면 인터넷이 끊긴다!
    throw new Error('Failed to fetch places');
  }
  return resData.places;
}

export async function fetchUserPlaces() {
  const response = await fetch('http://localhost:3000/user-places');
  const resData = await response.json();
  if (!response.ok) {
    // !response.ok: HTTP 응답이 성공적이지 않을 때, 예를들어 404또는 500와 같은 경우
    // try-catch: 네트워크 요청은 성공했으나 서버가 요청을 처리할 수 없어서 실패한 경우 예를들면 인터넷이 끊긴다!
    throw new Error('Failed to fetch user places');
  }
  return resData.places;
}

export async function updateUserPlaces(places) {
  const response = await fetch('http://localhost:3000/user-places', {
    method: 'PUT',
    body: JSON.stringify({ places }),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const resData = await response.json();

  if (!response.ok) {
    throw new Error('Failed to update user data.');
  }
  return resData.message;
}
