import React from 'react';
import ReactDOM from 'react-dom/client';


const root = ReactDOM.createRoot(document.getElementById('root'));

const hello = 'Hello World!!!';

root.render(
  <React.StrictMode>
    <h1>
    {hello}
    </h1>
  </React.StrictMode>
);
