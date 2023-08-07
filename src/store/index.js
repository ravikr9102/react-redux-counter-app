import { createStore } from 'redux';

function counterReducer(state = { value: 0, step: 1, max: Infinity }, action) {
  switch (action.type) {
    case 'increment':
      return {
        ...state,
        value:
          state.value + state.step > state.max
            ? state.max
            : state.value + state.step,
      };
    case 'decrement':
      return { ...state, value: state.value - state.step };
    case 'changeStep':
      return {
        ...state,
        step: action.payload,
      };
    case 'update_maxValue':
      return { ...state, max: action.payload };
    case 'reset':
      return { ...state, value: 0 };
    default:
      return state;
  }
}

export let store = createStore(counterReducer);
