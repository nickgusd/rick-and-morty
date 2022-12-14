import { combineReducers } from 'redux';
// import todos from './todos'
// import visibilityFilter from './visibilityFilter'

const initialState = [
  {
    text: 'Use Redux',
    completed: false,
    id: 0
  }
];

function todos(state = initialState, action) {
  console.log('action', action);
  switch (action.type) {
    case 'location':
      return state;
    case 'characters':
      return state;

    //   case EDIT_TODO:
    //     return state.map(todo =>
    //       todo.id === action.id ?
    //         { ...todo, text: action.text } :
    //         todo
    //     )

    //   case COMPLETE_TODO:
    //     return state.map(todo =>
    //       todo.id === action.id ?
    //         { ...todo, completed: !todo.completed } :
    //         todo
    //     )

    //   case COMPLETE_ALL_TODOS:
    //     const areAllMarked = state.every(todo => todo.completed)
    //     return state.map(todo => ({
    //       ...todo,
    //       completed: !areAllMarked
    //     }))

    //   case CLEAR_COMPLETED:
    //     return state.filter(todo => todo.completed === false)

    default:
      return state;
  }
}

const rootReducer = combineReducers({
  todos
  //   visibilityFilter
});

export default rootReducer;
