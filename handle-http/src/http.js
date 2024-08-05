export async function fetchAvailablePlaces() {
  const response = await fetch('http://localhost:3000/places');
  const resData = await response.json();
  if (!response.ok) {
    // HTTP 응답이 성공적이지 않을 때, 예를들어 404또는 500와 같은 경우
    // 네트워크 요청은 성공했으나 서버가 요청을 처리할 수 없어서 실패한 경우
    throw new Error('Failed to fetch places');
  }
  return resData.places;
}
