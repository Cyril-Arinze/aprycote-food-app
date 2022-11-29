import React, { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import AvailableMealList from '../components/Sections/Meal/AvailableMealList';
import useHttp from '../hooks/use-http';
import { SearchMealByName } from '../lib/apiCall';
import BackButton from '../UI/Buttons/BackButton';
import MealItemSkeleton from '../UI/Loader/Skeleton Loader/MealItemSkeleton';
import headerClass from '../styles/pages-style/CategoriesPage.module.css';

const Search = () => {
  const [searchParam] = useSearchParams();
  const searchID = searchParam.get('q').trim();
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
  if (
    status === 'completed' &&
    (data === null || data.length === 0) &&
    !error
  ) {
    content = <p className="centered">No meal found for "{searchID}"</p>;
  }
  if (status === 'completed' && data) {
    content = <AvailableMealList meals={data} />;
  }

  return (
    <section className="full-page">
      <header className={headerClass.header}>
        <div>
          <BackButton />
          <h1>Search result for "{searchID}"</h1>
        </div>
        {data && (
          <p>
            {data.length} {data.length > 1 ? 'meals' : 'meal'} matched search
            input "{searchID}"
          </p>
        )}
      </header>
      {content}
    </section>
  );
};

export default Search;
