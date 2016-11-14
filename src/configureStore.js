import { createStore, compose } from 'redux';
import Shop from './reducers';

const configureStore = initialState => {
  const configStore = compose(
    window.devToolsExtension ? window.devToolsExtension() : dev => dev)(createStore);

  const store = configStore(Shop, initialState);
  return store;
}

export default configureStore;
