import React from 'react';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import * as serviceWorker from './serviceWorker';
import todoApp from './reducers/reducers'

let store = createStore(todoApp)
let rootElement = document.getElementById('root')


render(
    <Provider store = {store}>
       <App />
    </Provider>,
     
    rootElement
 )

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
