import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './reducers'
import { Provider } from 'react-redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { BrowserRouter, hashHistory } from 'react-router'


const store = createStore(rootReducer, composeWithDevTools(
  applyMiddleware(thunk),
));

ReactDOM.render(  
  <BrowserRouter history={hashHistory}>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
  ,
    document.getElementById('root')
  )
  registerServiceWorker()
