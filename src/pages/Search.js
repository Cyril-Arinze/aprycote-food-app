import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import AvailableMealList from '../components/Sections/Meal/AvailableMealList';
import useHttp from '../hooks/use-http';
import { SearchMealByName } from '../lib/apiCall';

const Search = () => {
  const params = useParams();
  const { searchId } = params;
  const { sendRequest, error, status, data } = useHttp(SearchMealByName);

  useEffect(() => {
    sendRequest(searchId);
  }, [searchId, sendRequest]);

  if (status === 'completed' && error) {
    return <p>{error}</p>;
  }
  if (status === 'completed' && (data === null || data.length === 0)) {
    return <p>No meal found for {searchId}</p>;
  }

  return (
    <section className="full-page">
      <h1>Meals found for "{searchId}"</h1>
      <AvailableMealList isLoading={status} error={error} meals={data} />
    </section>
  );
};

export default Search;
