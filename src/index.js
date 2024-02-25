import React from 'react';
import ReactDOM from 'react-dom/client';
import 'tachyons';
import App from './App';
import Card from "./Card";
import CardList from "./CardList";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CardList />
  </React.StrictMode>
);


