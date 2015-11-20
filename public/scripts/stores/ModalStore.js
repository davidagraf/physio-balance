import { createStore } from 'redux';
import { MODAL_OPEN, MODAL_CLOSE } from 'scripts/constants/ActionTypes.js';

const initialState = [
  {
    modal: null
  }
]

const reducer = function modals(state = initialState, action) {
  switch (action.type) {
  case MODAL_OPEN:
    return {
      modal: action.modal
    };
  case MODAL_CLOSE:
    return {
      modal: null
    };
  default:
    return state;
  }
}

export default createStore(reducer);
