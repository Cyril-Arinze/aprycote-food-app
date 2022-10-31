import { useRef } from 'react';
import { FiSearch } from 'react-icons/fi';
import { HiBell } from 'react-icons/hi';
import { RiMessengerFill } from 'react-icons/ri';
import { IoIosCart } from 'react-icons/io';

import classes from '../../styles/navigation-styles/NavBar.module.css';
import Hamburger from '../../UI/Hamburger/Hamburger';
import UserDetail from '../User/UserDetail';

const NavBar = () => {
  const searchInputRef = useRef();

  const searchHandler = (evt) => {
    evt.preventDefault(); // prevent the default submission of the form

    // get the value of the search input from the searchInputRef
    const searchInput = searchInputRef.current.value;

    console.log(searchInput);

    //TODO: use the search input to fetch related meal from data base.
  };

  return (
    <nav className={classes.nav}>
      <Hamburger />
      <form onSubmit={searchHandler}>
        <FiSearch />
        <input
          type="text"
          placeholder="Search"
          minLength={4}
          ref={searchInputRef}
        />
      </form>
      <div className={classes.user}>
        <div className={classes.user__actions}>
          <HiBell />
          <RiMessengerFill />
          <IoIosCart />
        </div>
        <UserDetail />
      </div>
    </nav>
  );
};

export default NavBar;
