import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { popUpDetailsSelector, UIAction } from '../../store/slices/ui-slice';

import classes from '../../styles/PopUpNotification-styles/PopUpNotification.module.css';

const PopUpNotification = (props) => {
  const popUpDetails = useSelector(popUpDetailsSelector);
  const { popUpIcon, popUpInfo, popUpColor } = popUpDetails;
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
    <div className={classes.pop_up} style={{ backgroundColor: popUpColor }}>
      <p>
        <i className={popUpIcon} />
        {popUpInfo}
      </p>
    </div>
  );
};

export default PopUpNotification;
