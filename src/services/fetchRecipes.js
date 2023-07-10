import axios from "axios";

 const fetchByRecipe = async (title, page, limit) => {
  const response = axios.get(`/search:${title}&page=${page}&limit=${limit}`);
  return response.data.hits;
};

export default fetchByRecipe;
