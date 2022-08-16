import React from 'react';
import ReactDOM from 'react-dom/client';
import SearchInput from './Search';
import {Provider} from 'react-redux';
import { searchStore } from './searchReducer';
import Result from './Result';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store = {searchStore}>
    <SearchInput />
    <Result />
    </Provider>
  </React.StrictMode>
);



