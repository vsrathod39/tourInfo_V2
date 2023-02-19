import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

import App from './App';
// import './index.css';
import { RouterProvider } from 'react-router-dom';
// import { store } from './store/store.js';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    {/* <Provider > */}
    <RouterProvider router={App} />
    {/* </Provider> */}
  </React.StrictMode>,
)
