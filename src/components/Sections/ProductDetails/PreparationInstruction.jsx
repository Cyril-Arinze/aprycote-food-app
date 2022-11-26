import React from 'react';

import classes from '../../../styles/sections-styles/products details/PreparationInstruction.module.css';

const PreparationInstruction = (props) => {
  return (
    <div className={classes.wrapper}>
      <h2>How to Prepare</h2>
      <div className={classes.youtube_player}>
        <iframe
          height="315"
          src={`https://www.youtube.com/embed/${props.youtube}`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <p className={classes.instruction}>{props.instruction}</p>
    </div>
  );
};

export default PreparationInstruction;
