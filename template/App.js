import React from 'react';
import {Provider} from 'react-redux';

import store from './src/reduxes/store';
import Routes from './src/routes';

const App = () => {
  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  );
};
export default App;
