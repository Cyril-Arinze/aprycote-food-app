import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import AvailableMealList from '../components/Sections/Meal/AvailableMealList';
import useHttp from '../hooks/use-http';
import { SearchMealByName } from '../lib/apiCall';
import BackButton from '../UI/Buttons/BackButton';
import MealItemSkeleton from '../UI/Loader/Skeleton Loader/MealItemSkeleton';
import headerClass from '../styles/pages-style/CategoriesPage.module.css';

const Search = () => {
  const location = useLocation();
  const queryParam = new URLSearchParams(location.search);
  const searchID = queryParam.get('q').trim();

  const { sendRequest, error, status, data } = useHttp(SearchMealByName);

  useEffect(() => {
    sendRequest(searchID);
  }, [searchID, sendRequest]);

  let content;
  if (status === 'pending') {
    content = <MealItemSkeleton />;
  }

  if (status === 'completed' && error) {
    content = <p className="centered">{error}</p>;
  }
  if (status === 'completed' && (data === null || data.length === 0)) {
    content = <p className="centered">No meal found for "{searchID}"</p>;
  }
  if (status === 'completed' && data) {
    content = <AvailableMealList meals={data} />;
  }

  return (
    <section className="full-page">
      <header className={headerClass.header}>
        <BackButton />
        <h1>Search result for "{searchID}"</h1>
      </header>
      {content}
    </section>
  );
};

export default Search;
