import thunk from 'redux-thunk';
import { createStore } from 'redux';
import { applyMiddleware } from 'redux';

export const greetingReducer = (state = 'lalo', action) => {
  switch (action.type) {
    case 'load':
      state = action.playload;
      return state;

    default:
      return state;
  }
};

export const fetchGreeting = () => async (dispatch) => {
  const response = await fetch('/api/greetings');
  const data = await response.json();
  dispatch({ type: 'load', playload: data });
};

export const store = createStore(greetingReducer, applyMiddleware(thunk));
