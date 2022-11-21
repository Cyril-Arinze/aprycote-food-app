import { memo, useRef } from 'react';

import { FiSearch } from 'react-icons/fi';
import classes from '../../styles/navigation-styles/Header.module.css';
import Hamburger from '../../UI/Hamburger/Hamburger';
import UserProfile from '../User/UserProfile';
import LogoImg from '../../assets/Logo_SS.png';
import Logo from '../../UI/Logo/Logo';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const searchInputRef = useRef();
  const navigate = useNavigate();

  const searchHandler = (evt) => {
    evt.preventDefault(); // prevent the default submission of the form
    // get the value of the search input from the searchInputRef
    const searchInput = searchInputRef.current.value;
    // navigate to the search page using the search input as dynamic parameter
    if (searchInput.trim().length === 0) {
      return;
    }
    navigate(`home/search?q=${searchInput}`);
    searchInputRef.current.value = '';
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
          enterKeyHint="Search"
          minLength={1}
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
