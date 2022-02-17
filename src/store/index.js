import { createStore, applyMiddleware, compose } from "redux";
import reducer from './reducer';
import thunk from "redux-thunk";

// 这里让项目支持浏览器插件 Redux DevTools
const composeEnHancers = typeof window === 'object' &&
  window.__REDUX_DEV_TOOLS_EXTENSION_COMPOSE__ ?
  window.__REDUX_DEV_TOOLS_EXTENSION_COMPOSE__({}) : compose


const enhancer = composeEnHancers(
  applyMiddleware(thunk)
);

const store = createStore(
  reducer,
  enhancer
)

export default store