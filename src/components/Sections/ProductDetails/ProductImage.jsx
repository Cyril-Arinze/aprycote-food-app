import React, { memo } from 'react';

import classes from '../../../styles/sections-styles/products details/ProductImage.module.css';
const ProductImage = (props) => {
  return (
    <div className={classes.product_image}>
      <img src={props.image} alt={props.altName} />
    </div>
  );
};

export default memo(ProductImage);
