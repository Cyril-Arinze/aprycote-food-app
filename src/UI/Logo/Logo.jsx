import React from 'react';
import { Link } from 'react-router-dom';
import logoBg from '../../assets/logo-Bg.png';

const Logo = (props) => {
  const logoSrc = props.src || logoBg; // => use the large logo if no src is provided
  return (
    <Link to="/home" className="logo">
      <img src={logoSrc} alt={'Logo'} />
    </Link>
  );
};

export default Logo;
