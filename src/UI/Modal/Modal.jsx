import React, { memo } from 'react';
import ReactDOM from 'react-dom';

import classes from './Modal.module.css';

const Modal = (props) => {
  const className = `${classes.modal} ${props.className}`;

  const Modal = () => {
    return <div className={className}>{props.children}</div>;
  };
  const Backdrop = () => {
    return <div className={classes.backdrop} onClick={props.onClick}></div>;
  };

  return (
    <>
      {ReactDOM.createPortal(
        <Modal>{props.children}</Modal>,
        document.getElementById('overlay')
      )}
      {ReactDOM.createPortal(<Backdrop />, document.getElementById('overlay'))}
    </>
  );
};

export default memo(Modal);
