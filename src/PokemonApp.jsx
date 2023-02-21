import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrementActualPage, getPokemons, incrementActualPage, resetPokemons } from './store/pokemon';

export const PokemonApp = () => {
  const dispatch = useDispatch();

  // data del store
  const { isLoading, pokemons: allPokemons, actualPage, pagesLoaded } = useSelector((state) => state.pokemonStore);
  console.log(actualPage, pagesLoaded);

  // empezamos a obtener pokemons
  useEffect(() => {
    dispatch(resetPokemons());
    dispatch(getPokemons());
  }, [dispatch]);

  const nextPokemons = () => {
    if (actualPage + 1 === pagesLoaded) {
      dispatch(getPokemons(pagesLoaded));
    } else {
      dispatch(incrementActualPage());
    }
  };

  const backPokemons = () => {
    if (actualPage === 0) return;
    dispatch(decrementActualPage());
  };

  return (
    <>
      <h4>PokemonApp with slices</h4>
      <hr />
      {isLoading ? (
        <div>loading...</div>
      ) : (
        <div>
          <span>Page - {actualPage}</span>
          <ul>
            {allPokemons.map((pokemon, index) => {
              const indI = actualPage * 10;
              const indF = actualPage * 10 + 9;
              if (index >= indI && index <= indF) return <li key={pokemon.name}>{pokemon.name}</li>;
              else return '';
            })}
          </ul>
        </div>
      )}
      <button disabled={isLoading} onClick={backPokemons}>
        back
      </button>
      <button disabled={isLoading} onClick={nextPokemons}>
        next
      </button>
    </>
  );
};
