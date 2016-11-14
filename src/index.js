import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import Shop from './containers/Shop';
import configureStore from './configureStore';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();

const store = configureStore();

const Root = () => (
  <MuiThemeProvider>
    <Shop />
  </MuiThemeProvider>
);

render(
  <Provider store={store}>
    <Root />
  </Provider>, document.getElementById('app')
);
