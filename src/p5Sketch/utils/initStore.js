import generateUUID from './generateUUID';

const initStore = function(sketch) {
  window.store = {
    sketch,
    generateUUID,
    selected: undefined, //{object:<Bubble>, type: 'Bubble'}
    objs: {
      bubbles: {
        //new Bubble(sketch, id, 0, 10, 10, 50, 50),
      },
    },
  };
}

export default initStore;