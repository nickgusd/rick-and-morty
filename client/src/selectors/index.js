import { createSelector } from "reselect";
// import { SHOW_ALL, SHOW_COMPLETED, SHOW_ACTIVE } from '../constants/TodoFilters'

// const getVisibilityFilter = state => state.visibilityFilter
const getCharacters = (state) => state.characters;

export const getCharacter = createSelector([getCharacters], (characters) => {
  return characters;
});

// export const getCompletedTodoCount = createSelector(
//   [getTodos],
//   todos => (
//     todos.reduce((count, todo) =>
//       todo.completed ? count + 1 : count,
//       0
//     )
//   )
// )
