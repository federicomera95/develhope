import React from 'react';
import ReactDOM from 'react-dom/client';


const root = ReactDOM.createRoot(document.getElementById('root'));

const sayMyName = (name)=> <h1>Hello, {name}</h1>;

root.render(
  <React.StrictMode>
    {sayMyName('Federico')}
  </React.StrictMode>
);
