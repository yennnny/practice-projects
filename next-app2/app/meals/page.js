import Link from 'next/link';

const MealsPage = () => {
  return (
    <>
      <h1>Meals Page</h1>
      <>
        <p>
          <Link href="/meals/share">meals-share</Link>
        </p>
        <p>
          <Link href="/meals/page-1">meals-page1</Link>
        </p>
        <p>
          <Link href="/meals/page-2">meals-page2</Link>
        </p>
      </>
    </>
  );
};

export default MealsPage;
