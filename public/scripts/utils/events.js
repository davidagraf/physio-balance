import {EventEmitter} from 'events';
import keyMirror from 'keymirror';

const internal = new EventEmitter();

export default {
  Emitter: {
    add: (event, listener) => {
      internal.on(event, listener);
    },
    remove: (event, listener) => {
      internal.removeListener(event, listener);
    },
    emit: (event) => {
      internal.emit(event);
    }
  },
  Constants: keyMirror({
    MODAL_CLOSE: null
  })
}
