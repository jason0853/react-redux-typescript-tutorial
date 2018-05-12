import { createStore, compose } from 'redux';
import modules from './modules';

const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const configure = (proloadedState?: any) => createStore(
  modules,
  proloadedState,
  composeEnhancers()
);

export default configure;