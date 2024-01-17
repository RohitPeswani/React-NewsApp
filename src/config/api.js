const API_DOMAIN = "https://gnews.io/api/v4/top-headlines?country=";
const API_SEARCH_DOMAIN = "https://gnews.io/api/v4/search?q=";
const API_KEY = "YOUR-API-KEY";
export const endpointPath = (country, category) =>
  `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=515b07a9b6ab41389361f3a22ec99bb7`;
export const endpointSearch = (searchQuery) =>
  `${API_SEARCH_DOMAIN}${searchQuery}&lang=en&apikey=${API_KEY}`;
