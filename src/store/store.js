import { configureStore } from '@reduxjs/toolkit';
import { pokemonSlice } from './pokemon';

export const store = configureStore({
  reducer: {
    pokemonStore: pokemonSlice.reducer
  }
});
