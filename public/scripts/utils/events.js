import {EventEmitter} from 'events';

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
  }
}
