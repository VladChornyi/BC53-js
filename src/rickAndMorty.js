// https://rickandmortyapi.com/
import axios from 'axios';
axios.defaults.baseURL = 'https://rickandmortyapi.com/api/';

const API = axios.create({
  baseURL: 'https://rickandmortyapi.com/api/',
});
// const ImageAPI = axios.create({
//   baseURL: 'https://rickandmortyapi.com/api/',
// });

export const getAllCharacters = async () => {
  // axios.get('character').then({data}=>data.results)
  const { data } = await API.get('character');
  return data.results;
};

export const getByParams = async params => {
  const { data } = await API.get('character', {
    params,
  });
  return data.results;
};

//character/?name=rick&status=alive
// getByParams({
//   name: 'Rick',
//   status: 'alive',
//   gender: 'Male',
// });
