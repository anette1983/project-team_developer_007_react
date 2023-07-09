const categories = require('./categories.json').map(el => el.name);
const ingredients = require('./ingredients.json').map(el => el.name);
const recipes = require('./recipes.json');

const categoryFilters = { all: 'all' };
categories.forEach(
  el => (categoryFilters[el.toLowerCase()] = el.toLowerCase())
);

const ingredientsFilters = { all: 'all' };
ingredients.forEach(
  el => (ingredientsFilters[el.toLowerCase()] = el.toLowerCase())
);

export const constants = {
  categoryFilters,
  ingredientsFilters,
  recipes,
};
