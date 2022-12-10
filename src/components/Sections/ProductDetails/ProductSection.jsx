import React, { useEffect } from 'react';

import ProductDetails from './ProductDetails';
import ProductImage from './ProductImage';
import classes from '../../../styles/sections-styles/products details/ProductSection.module.css';
import MealRecipe from './MealRecipe';
import PreparationInstruction from './PreparationInstruction';
import useHttp from '../../../hooks/use-http';
import { getMealDetails, SearchMealByName } from '../../../lib/apiCall';
import { useParams, useSearchParams } from 'react-router-dom';
import LazyLoader from '../../../UI/Loader/Lazy Loader/LazyLoader';
import AvailableMealList from '../Meal/AvailableMealList';

const useProduct = () => {
  const [queryParam] = useSearchParams();
  const relatedMeal = queryParam.get('meal').slice(0, 1);
  const params = useParams();
  const { mealID } = params;
  const { sendRequest, data, status, error } = useHttp(getMealDetails);
  const {
    sendRequest: getRelatedMealFn,
    status: mealStatus,
    data: mealsData,
    error: mealError,
  } = useHttp(SearchMealByName);

  useEffect(() => {
    document.querySelector('#main-layout').scrollTop = 0;
    sendRequest(mealID);
  }, [sendRequest, mealID]);

  useEffect(() => {
    getRelatedMealFn(relatedMeal);
  }, [getRelatedMealFn, relatedMeal]);

  return {
    data,
    status,
    error,
    mealError,
    mealStatus,
    mealsData,
  };
};
const ProductSection = () => {
  const { data, status, error, mealError, mealStatus, mealsData } =
    useProduct();

  if (status === 'pending' || mealStatus === 'pending') {
    return <LazyLoader />;
  }
  if (error) {
    return <p className="centered"> An error occurred</p>;
  }

  return (
    <main className={classes.product}>
      <div className={classes.product_desc}>
        <ProductImage image={data.image} altName={data.meal} />
        <ProductDetails
          meal={data.meal}
          category={data.category}
          price={data.price}
          id={data.id}
          area={data.area}
          ingredients={data.ingredients}
          tags={data.tags}
          image={data.image}
        />
      </div>
      <div className={classes.more_details}>
        <h1>More Details</h1>
        <MealRecipe ingredients={data.ingredients} />
        <PreparationInstruction
          youtube={data.youtube}
          instruction={data.instructions}
        />
      </div>
      <div className={classes.related_items}>
        <h2>Related Meals</h2>
        <AvailableMealList
          meals={mealsData}
          status={mealStatus}
          error={mealError}
        />
      </div>
    </main>
  );
};

export default ProductSection;
