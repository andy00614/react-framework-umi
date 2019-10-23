import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk';
import reducer from './reducer'

export function makeStore() {
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  return createStore(reducer,{
    userInfo: {
      username: '',
      password: ''
    },
    lastUpdate: 0,
    todos: [
      'Make the fire!',
      'Fix the breakfast!',
      'Wash the dishes!',
      'Do the mopping!',
    ]
  },composeEnhancers(applyMiddleware(thunk)))
}