import React, { useEffect } from 'react';
import IntroHero from '../components/Sections/Hero/IntroHero';
import MealCategorySection from '../components/Sections/Meal/MealCategorySection';
import TrendingMealSection from '../components/Sections/Trending/TrendingMealSection';

const Home = () => {
  useEffect(() => {
    document.querySelector('#main-layout').scrollTop = 0;
  }, []);

  return (
    <>
      <IntroHero />
      <MealCategorySection />
      <TrendingMealSection />
    </>
  );
};

export default Home;
