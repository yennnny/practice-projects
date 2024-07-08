const page = ({ params }) => {
  return (
    <>
      <h1>meals 상세페이지</h1>
      <p>{params.slug}</p>
    </>
  );
};

export default page;
