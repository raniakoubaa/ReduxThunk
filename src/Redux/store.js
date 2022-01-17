
import { applyMiddleware, compose, createStore } from 'redux';
import thunk from "redux-thunk"
import reducerMekup from './Reducer'
const devtools =  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
const store = createStore(reducerMekup, compose(applyMiddleware(thunk), devtools));
export default store;