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


//create store
const store = createStore(chat)

// register ourselves as present in the chat
store.dispatch(addUser('Me'))

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
