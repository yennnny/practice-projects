// 서버 컴포넌트
export default async function Read(props) {
  const res = await fetch(`http://localhost:9999/topics/${props.params.id}`);
  const topic = await res.json();
  return (
    <>
      <h2>{topic.title}</h2>
      paramters: {props.params.id}
      <p>{topic.body}</p>
    </>
  );
}
