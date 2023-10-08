import React from 'react';
import Navigation from './src/navigation/Navigation';
import {ApiProvider} from '@reduxjs/toolkit/dist/query/react';
import {productsApi} from './src/redux/slices/apiSlice';

const App = () => {
  return (
    <ApiProvider api={productsApi}>
      <Navigation />
    </ApiProvider>
  );
};

export default App;
