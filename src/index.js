import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

//initialize redux
import {Provider} from 'react-redux'
import {createStore} from 'redux'

//import reducer
import chat from './reducers'

//adding user to sidebar
import { addUser } from './actions'

import handleNewMessage from './sagas'
import username from './utils/name'

//setup websocket
import setupSocket from './sockets'

//initialize redux-saga
import createSagaMiddleware from 'redux-saga'
import { applyMiddleware } from "redux"


const sagaMiddleware = createSagaMiddleware()

//create store --> initialize during store creation
const store = createStore(
  chat,
  applyMiddleware(sagaMiddleware)
)

// register ourselves as present in the chat
store.dispatch(addUser(username))

//1. initalize socket so we can reference it inside the saga
const socket = setupSocket(store.dispatch, username)
//2. pass dispatch function and username
sagaMiddleware.run(handleNewMessage, { socket, username })


ReactDOM.render(
  //Provider = store available to all components in App
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('root')
  );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
