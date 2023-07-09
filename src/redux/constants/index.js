const categories = require('./categories.json').map(el => el.name);
const ingredients = require('./ingredients.json').map(el => el.name);
const recipes = require('./recipes.json');

export const constants = {
  recipes,
  categories,
  ingredients,
};
