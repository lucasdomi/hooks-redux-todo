import { createStore } from 'redux';

const INITIAL_STATE = {
  data: [
    'Hamburguer',
    'Batata Frita',
  ],
};

function team(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'ADD_FOOD':
      return { ...state, 
        data: [
          ...state.data, 
          action.title
        ] 
      };
    case 'REMOVE_FOOD' : 
      const data = state.data.slice();
      const findIndex = state.data.indexOf(action.title)
      data.splice(findIndex, 1);
      return {
        ...state,
        data
      }
    default:
      return state;
  }
}

const store = createStore(team);

export default store;