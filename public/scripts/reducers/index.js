import { combineReducers } from 'redux';
import { OPEN_MODAL, INDEX_MODAL } from 'scripts/actions';

function modals(state = {modals: [], _originals: []}, action) {
  let modals;
  switch (action.type) {
  case OPEN_MODAL:
    modals = [...state.modals, action.modal];
    history.pushState({index: modals.length}, '');
    return {  modals, _originals: modals };
  case INDEX_MODAL:
    return {
      _originals: state._originals,
      modals: state._originals.slice(0, action.index)
    };
  default:
    return state;
  }
}

export default combineReducers({
  modals
});
