import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

import {createStore, applyMiddleware, compose} from 'redux';
import {Provider} from 'react-redux';
import reducer from './reducer';
import thunk from 'redux-thunk';

//initialState
export const initialState={
    userGuess: "",
	userAttempts: 0,
    difficulty: "",
    instructions: "",
	correctNumber: 0,
    win: false,
	message: "You win! Good job",
};

const store = createStore(
  reducer, 
  initialState, 
  compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
);//needs two params 1.reducer 2.initialState

//Provider is used to pass in store
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
