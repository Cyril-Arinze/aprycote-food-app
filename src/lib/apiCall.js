export const fetchCategories = async () => {
  const response = await fetch(
    'https://www.themealdb.com/api/json/v1/1/categories.php'
  );
  const data = await response.json();
  const categoriesData = data.categories;
  const newData = categoriesData.map((element) => {
    return {
      id: element.idCategory,
      image: element.strCategoryThumb,
      category: element.strCategory,
    };
  });
  return newData;
};

export const SearchMealByName = async (mealName) => {
  const response = await fetch(
    `https://www.themealdb.com/api/json/v1/1/search.php?s=${mealName}`
  );
  const data = await response.json();
  const categoriesData = data.meals;
  const newData = categoriesData.map((element) => {
    return {
      id: element.idMeal,
      image: `${element.strMealThumb}/preview`,
      meal: element.strMeal,
      price: Math.floor(Math.random() * 50),
      tag: element.idMeal,
    };
  });
  return newData;
};

export const fetchMealByCategories = async (category) => {
  const response = await fetch(
    `https://www.themealdb.com/api/json/v1/1/filter.php?c=${
      category ? category : 'beef'
    }`
  );
  const data = await response.json();
  const mealData = data.meals;
  const newData = mealData.map((element) => {
    return {
      id: element.idMeal,
      image: `${element.strMealThumb}/preview`,
      meal: element.strMeal,
      price: Math.floor(Math.random() * 50),
      tag: element.idMeal,
    };
  });
  return newData;
};
