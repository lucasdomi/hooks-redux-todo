import React from 'react';
import { Provider } from 'react-redux';

import store from './store';

import FoodList from './components/FoodList';

function App() {
  return (
    <Provider store={store}>
      <FoodList />
    </Provider>
  );
}


export default App;
