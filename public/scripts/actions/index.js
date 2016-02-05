import store from 'scripts/reducers/store';

export const OPEN_MODAL = 'OPEN_MODAL';
export const INDEX_MODAL = 'INDEX_MODAL';

export function openModal(modal) {
  return { type: OPEN_MODAL, modal }
}

function indexModal(index) {
  return { type: INDEX_MODAL, index }
}

window.onpopstate = function(event) {
  const index = (event.state || {}).index || 0;
  store.dispatch(indexModal(index));
};
