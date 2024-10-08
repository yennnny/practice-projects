import Link from 'next/link';
import Image from 'next/image';

import MainHeaderBackground from '@/components/main-header/main-header-background';

import logoImg from '@/assets/logo.png';
import classes from './main-header.module.css';

export default function MainHeader() {
  return (
    <>
      <MainHeaderBackground />
      <header className={classes.header}>
        <Link className={classes.logo} href="/">
          {/* priority: 우선 로딩하기 */}
          <Image src={logoImg} alt="A plate with food on it" priority />
          NextLevel Food
        </Link>

        <nav className={classes.nav}>
          <ul>
            <li>
              <Link href="/meals">Browse Meals</Link>
            </li>
            <li>
              <Link href="/community">Foodies Community</Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
