import axios from "axios";

 const fetchByIngredientName = async (ingredientName, page, limit) => {
  const response = axios.get(`/search:${ingredientName}&page=${page}&limit=${limit}`);
  return response.data.hits;
};

export default fetchByIngredientName;
