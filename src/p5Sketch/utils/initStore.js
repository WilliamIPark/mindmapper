import Bubble from '../components/Bubble';

const initStore = function(sketch) {
  window.store = {
    sketch,
    objs: {
      bubbles: [
        //new Bubble(sketch, 0, 10, 10, 50, 50),
      ],
    },
  };
}

export default initStore;