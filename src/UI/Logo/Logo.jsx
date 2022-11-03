import React from 'react';
import logoBg from '../../assets/logo-Bg.png';
const Logo = (props) => {
  return <img src={props.src || logoBg} alt={'Logo'} />;
};

export default Logo;
