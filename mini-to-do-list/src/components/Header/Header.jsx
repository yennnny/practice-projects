import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <h1>
        2024년 06월 14일 <span className={styles.day}>금요일</span>
      </h1>
      <p className={styles['tasks-total']}>할 일 0개 남음</p>
    </header>
  );
};

export default Header;
