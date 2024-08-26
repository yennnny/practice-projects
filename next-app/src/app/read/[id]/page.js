// 서버 컴포넌트
export default async function Read(props) {
  const res = await fetch(`${NEXT_PUBLIC_API_URL}/topics/${props.params.id}`, {
    cache: 'no-store',
  });
  const topic = await res.json();
  return (
    <>
      <h2>{topic.title}</h2>
      paramters: {props.params.id}
      <p>{topic.body}</p>
    </>
  );
}
