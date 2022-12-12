import React from 'react';

import classes from '../../styles/UI-styles/Button-styles/Button.module.css';

const Button = (props) => {
  const BtnClasses = `${classes.button} ${props.className}`;

  return (
    <button
      disabled={props.disable}
      onClick={props.onClick}
      className={BtnClasses}
    >
      {props.children}
    </button>
  );
};

export default Button;
