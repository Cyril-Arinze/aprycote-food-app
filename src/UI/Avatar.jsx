import React from 'react';
import classes from '../styles/UI-styles/Avatar.module.css';

const Avatar = (props) => {
  const AvatarClass = classes.avatar + ' ' + props.classes || '';
  return (
    <img className={AvatarClass} src={props.src} alt={props.alt + 'Avatar'} />
  );
};

export default Avatar;
