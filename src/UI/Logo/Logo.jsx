import React from 'react';
import logoBg from '../../assets/logo-Bg.png';

const Logo = (props) => {
  const logoSrc = props.src || logoBg; // => use the large logo if no src is provided
  return <img src={logoSrc} alt={'Logo'} />;
};

export default Logo;
