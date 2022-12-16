import { createSelector } from "@reduxjs/toolkit";

const getLocations = createSelector(
  state => state.locations.locations,
  locations => locations,
);

export const rickSelectors = {
  getLocations,
}; 