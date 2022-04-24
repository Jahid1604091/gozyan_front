import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { HotelsProvider } from './context/hotel_context';
import { FilterProvider } from './context/filter_context';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <HotelsProvider>
    <FilterProvider>
      <App />
    </FilterProvider>


  </HotelsProvider>
);

