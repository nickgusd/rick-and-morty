import {  createSlice } from '@reduxjs/toolkit';
// import { serializeError } from '../utils/serializeError';
// import Axios from "axios";

const initialState = {
  locations: {
    data: {}
  },
  characters: [],
  episodes: [],
  sidebar: false,
};

const { actions, reducer } = createSlice({
  name: 'locations',
  initialState,
  reducers: {
    setLocations(state, action) {
      state.locations.locations = action.payload;
    },
    setEpisodes(state, action) {
      state.locations.episodes = action.payload;
    },
    setSidebar(state, action) {
      state.locations.sidebar = action.payload;
    },
    reset() {
      return initialState;
    }
  }
});

export const rickAndMortyActions = {
  ...actions
};

export default reducer; 