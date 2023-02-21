import { createSlice } from '@reduxjs/toolkit';

export const pokemonSlice = createSlice({
  name: 'myPokemonSlice',
  initialState: {
    isLoading: false,
    pokemons: [],
    actualPage: 0,
    pagesLoaded: 0
  },
  reducers: {
    resetPokemons: (state) => {
      state.isLoading = false;
      state.pokemons = [];
      state.actualPage = 0;
      state.pagesLoaded = 0;
    },
    startLoadingPokemons: (state) => {
      state.isLoading = true;
    },
    addPokemons: (state, action) => {
      const newPokemons = action.payload.pokemons;
      newPokemons.forEach((pokemon) => {
        state.pokemons.push(pokemon);
      });
      state.isLoading = false;
      //state.pokemons = action.payload.pokemons;
      state.pagesLoaded = action.payload.page;
      state.actualPage = action.payload.page - 1;
    },
    decrementActualPage: (state) => {
      state.actualPage -= 1;
    },
    incrementActualPage: (state) => {
      state.actualPage += 1;
    }
  }
});

export const { startLoadingPokemons, addPokemons, resetPokemons, decrementActualPage, incrementActualPage } = pokemonSlice.actions;
