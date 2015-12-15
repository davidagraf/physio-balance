import { createStore } from 'redux';
import { MODAL_OPEN, MODAL_CLOSE } from 'scripts/constants/ActionTypes.js';

const initialState = {
  modals: []
};

const reducer = function modals(state = initialState, action) {
  switch (action.type) {
  case MODAL_OPEN:
    return {
      modals: [...state.modals, action.modal]
    };
  case MODAL_CLOSE:
    return {
      modals: [...state.modals.slice(0, state.modals.length - 1)]
    };
  default:
    return state;
  }
}

export default createStore(reducer);
