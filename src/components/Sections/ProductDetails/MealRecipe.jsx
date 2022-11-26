import React from 'react';

import classes from '../../../styles/sections-styles/products details/MealRecipe.module.css';

const MealRecipe = (props) => {
  return (
    <table className={classes.ingredient_table}>
      <thead>
        <tr>
          <td>Ingredients</td>
          <td>Measurement</td>
        </tr>
      </thead>
      <tbody>
        {props.ingredients.map((ingredient, index) => {
          return (
            <tr key={`${ingredient.ingredient}${index}`}>
              <td>{ingredient.ingredient}</td>
              <td>{ingredient.Measurement}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default MealRecipe;
