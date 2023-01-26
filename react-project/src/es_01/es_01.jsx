import React from 'react';
import ReactDOM from 'react-dom/client';


const root = ReactDOM.createRoot(document.getElementById('root'));

const Hello = <h1>Hello World!!!</h1>;

root.render(
  <React.StrictMode>
    <Hello />
  </React.StrictMode>
);
