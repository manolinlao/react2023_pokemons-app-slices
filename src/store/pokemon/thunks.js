import { startLoadingPokemons, addPokemons } from './pokemonSlice';

export const getPokemons = (page = 0) => {
  return async (dispatch, getState) => {
    dispatch(startLoadingPokemons());

    // Petición http - usando fetch
    const query = `https://pokeapi.co/api/v2/pokemon?limit=10&offset=${page * 10}`;
    const resp = await fetch(query);
    const data = await resp.json();
    console.log(data);

    dispatch(addPokemons({ pokemons: data.results, page: page + 1 }));
  };
};
