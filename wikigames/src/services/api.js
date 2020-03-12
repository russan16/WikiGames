import axios from "axios";

const api = axios.create({baseURL: 'https://api.rawg.io/api/'});


export default api;
// ENDPOINTS DA API
/*
API LINK https://api.rawg.io/docs/#operation/games_list
const releasedList = 'https://api.rawg.io/api/games';
const searchList = `https://api.rawg.io/api/games?search=${searchText}`;
*/