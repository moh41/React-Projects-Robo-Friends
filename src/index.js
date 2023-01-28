import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';


import App from './Components/App';
import 'tachyons';

import { createRoot } from 'react-dom/client';


// ReactDOM.render(  
//              <App />
//               , document.getElementById('root')
//               );


ReactDOM.createRoot(document.querySelector("#root")).render(
                      <React.StrictMode> 
                        <App />
                      </React.StrictMode>
                      );
