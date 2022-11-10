import React from 'react';
import MealCategoryItem from './MealCategoryItem';

import classes from '../../../styles/sections-styles/menu category/MealCategoryList.module.css';
const catData = [
  {
    category: 'Pizza',
    Image:
      'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F19%2F2014%2F07%2F10%2Fpepperoni-pizza-ck-x.jpg&q=60',
  },
  {
    category: 'snacks',
    Image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSK71CprgFy00oC8fc6wNSaI5KKHAdQteLLx9ZdppTJT5bjdrWOqj3MWHPuVNbWmjM8ay8&usqp=CAU',
  },
  {
    category: 'Fruits',
    Image:
      'https://www.eatthis.com/wp-content/uploads/sites/4/2022/07/fruit-salad.jpg?quality=82&strip=1',
  },
  {
    category: 'Pizza',
    Image:
      'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F19%2F2014%2F07%2F10%2Fpepperoni-pizza-ck-x.jpg&q=60',
  },
  {
    category: 'snacks',
    Image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSK71CprgFy00oC8fc6wNSaI5KKHAdQteLLx9ZdppTJT5bjdrWOqj3MWHPuVNbWmjM8ay8&usqp=CAU',
  },
  {
    category: 'Fruits',
    Image:
      'https://www.eatthis.com/wp-content/uploads/sites/4/2022/07/fruit-salad.jpg?quality=82&strip=1',
  },
];
const MealCategoryList = (props) => {
  return (
    <ul className={classes.category_list}>
      {catData.map((data, index) => {
        return (
          <MealCategoryItem
            key={index}
            image={data.Image}
            category={data.category}
          />
        );
      })}
    </ul>
  );
};

export default MealCategoryList;
