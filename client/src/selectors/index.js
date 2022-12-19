import { createSelector } from "@reduxjs/toolkit";

const getLocations = createSelector(
  state => state.locations.locations,
  locations => locations,
);

export const getEpisodes = createSelector(
  state => state.locations.episodes,
  episodes => episodes,
)

export const getSidebarState = createSelector(
  state => state.locations.sidebar,
  sidebar => sidebar,
)


export const rickSelectors = {
  getLocations,
  getEpisodes,
  getSidebarState
}; 