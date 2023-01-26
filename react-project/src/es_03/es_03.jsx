import React from 'react';
import ReactDOM from 'react-dom/client';


const root = ReactDOM.createRoot(document.getElementById('root'));

const sum = (a,b)=> <h2>{a + b}</h2>;

root.render(
  <React.StrictMode>
    {sum(3,5)}
  </React.StrictMode>
);
