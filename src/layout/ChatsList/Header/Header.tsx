import React from 'react';
import BurgerMenu from './BurgerMenu/BurgerMenu';
import Search from './Search/Search';
import style from './Header.module.scss';

const Header = () => {
  return (
    <div className={style.Header}>
      {/* <BurgerMenu /> */}
      <Search />
    </div>
  );
};

export default Header;
