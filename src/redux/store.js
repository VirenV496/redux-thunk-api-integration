import {createStore,applyMiddleware} from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'

import thunk from 'redux-thunk';
import allReducers from './index'
/* 
const middleware = [thunk] */

const composedEnhancer = composeWithDevTools(applyMiddleware(thunk))

  let store = createStore(
     allReducers, 
     composedEnhancer
/*      applyMiddleware(...middleware), */
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
  
  
export default store;