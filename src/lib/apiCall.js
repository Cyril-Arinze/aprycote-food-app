export const fetchCategories = async () => {
  const response = await fetch(
    'https://www.themealdb.com/api/json/v1/1/categories.php'
  );
  const data = await response.json();
  const categoriesData = data.categories;
  let newData = [];
  if (!categoriesData) {
    return newData;
  }
  newData = categoriesData.map((element) => {
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
  const MealsData = data.meals;
  let newData = [];
  if (MealsData === null) {
    return newData;
  }
  newData = MealsData.map((element) => {
    return {
      id: element.idMeal,
      image: `${element.strMealThumb}`,
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
      image: `${element.strMealThumb}`,
      meal: element.strMeal,
      price: Math.floor(Math.random() * 50),
      tag: element.idMeal,
    };
  });
  return newData;
};
export const getMealDetails = async (mealID) => {
  const response = await fetch(
    `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealID}`
  );
  const data = await response.json();

  const mealData = data.meals;

  const newData = mealData.map((element) => {
    let ingredients = [];
    for (let i = 1; i < 21; i++) {
      const ingredient = element[`strIngredient${i}`];
      const Measurement = element[`strMeasure${i}`];
      if (ingredient === null || ingredient === '') {
        break;
      }
      ingredients.push({ ingredient, Measurement });
    }
    return {
      id: element.idMeal,
      image: element.strMealThumb,
      meal: element.strMeal,
      price: Math.floor(Math.random() * 50),
      ingredients: ingredients,
      category: element.strCategory,
      area: element.strArea,
      youtube: element.strYoutube.slice(32, element.strYoutube.length),
      instructions: element.strInstructions,
      tags: element.strTags,
    };
  });
  return newData[0];
};
