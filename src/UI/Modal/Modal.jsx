import React, { memo } from 'react';
import ReactDOM from 'react-dom';

import classes from './Modal.module.css';

const ModalContent = (props) => {
  const className = `${classes.modal} ${props.className}`;
  return <div className={className}>{props.children}</div>;
};
const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onClick}></div>;
};

const Modal = (props) => {
  return (
    <>
      {ReactDOM.createPortal(
        <ModalContent>{props.children}</ModalContent>,
        document.getElementById('overlay')
      )}
      {ReactDOM.createPortal(
        <Backdrop onClick={props.onClick} />,
        document.getElementById('overlay')
      )}
    </>
  );
};

export default memo(Modal);
