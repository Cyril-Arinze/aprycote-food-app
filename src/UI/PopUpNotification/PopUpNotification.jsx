import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { popUpInfoSelector, UIAction } from '../../store/slices/ui-slice';

import classes from '../../styles/PopUpNotification-styles/PopUpNotification.module.css';

const PopUpNotification = (props) => {
  const popUpInfo = useSelector(popUpInfoSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    const timer = setTimeout(() => {
      dispatch(UIAction.togglePopUp());
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  }, [dispatch]);

  return (
    <div className={classes.pop_up}>
      <p>
        <i className="bi bi-check2-circle" />
        {popUpInfo}
      </p>
    </div>
  );
};

export default PopUpNotification;
