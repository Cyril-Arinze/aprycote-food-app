import { memo, useRef } from 'react';

import { FiSearch } from 'react-icons/fi';
import classes from '../../styles/navigation-styles/Header.module.css';
import Hamburger from '../../UI/Hamburger/Hamburger';
import UserProfile from '../User/UserProfile';
import LogoImg from '../../assets/Logo_SS.png';
import Logo from '../../UI/Logo/Logo';

const Header = () => {
  const searchInputRef = useRef();

  const searchHandler = (evt) => {
    evt.preventDefault(); // prevent the default submission of the form

    // get the value of the search input from the searchInputRef
    const searchInput = searchInputRef.current.value;

    console.log(searchInput);

    //TODO: use the search input to fetch related meal from data base.
  };

  return (
    <header className={classes.header}>
      <div className={classes.hamburger}>
        <Hamburger />
      </div>
      <div className={classes.logo}>
        <Logo src={LogoImg} />
      </div>
      <form onSubmit={searchHandler}>
        <FiSearch />
        <input
          type="text"
          placeholder="Search meals by name"
          minLength={4}
          ref={searchInputRef}
        />
      </form>
      <div className={classes.user}>
        <UserProfile />
      </div>
    </header>
  );
};

export default memo(Header);
