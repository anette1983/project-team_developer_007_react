const categories = require('./categories.json').map(el => el.name);

const categoryFilters = { all: 'all' };
categories.forEach(
  el => (categoryFilters[el.toLowerCase()] = el.toLowerCase())
);

export const constants = {
  categoryFilters,
};
