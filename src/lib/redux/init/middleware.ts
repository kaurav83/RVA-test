import { compose, Middleware } from 'redux';
import thunk from 'redux-thunk';

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const developmentEnvironment = process.env.NODE_ENV === 'development';
const devtools = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
const composeEnhancers = developmentEnvironment && devtools ? devtools : compose;

const middleware: Middleware[] = [thunk];

export { composeEnhancers, middleware };
