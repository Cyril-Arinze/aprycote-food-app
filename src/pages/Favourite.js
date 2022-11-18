import React from 'react';
import BackButton from '../UI/Buttons/BackButton';
import MealItemSkeleton from '../UI/Loader/Skeleton Loader/MealItemSkeleton';

const Favourite = () => {
  return (
    <div>
      <BackButton />
      <MealItemSkeleton />
    </div>
  );
};

export default Favourite;
