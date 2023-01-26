import React from 'react';
import ReactDOM from 'react-dom/client';


const root = ReactDOM.createRoot(document.getElementById('root'));

const Hello = 'Hello World!!!';

root.render(
  <React.StrictMode>
      <h1>
        {Hello}
      </h1>
  </React.StrictMode>
);

