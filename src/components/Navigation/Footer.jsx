import React from 'react';

import classes from '../../styles/navigation-styles/Footer.module.css';

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <div>
        <p>Privacy policy</p>
        <p>Terms of use</p>
      </div>
      <div>
        <p>Made with love</p>
      </div>
    </footer>
  );
};

export default Footer;
