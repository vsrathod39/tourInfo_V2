import * as react from 'react';
import './App.css';
// import ReactDOM from "react-dom/client";
import { createBrowserRouter } from "react-router-dom";
import './utils/style.css';

import LoginSignup from './components/Login/index';
import RouteNotFoundError from './pages/Error-Handling/route-not-found.error';
import Landing from './pages/Landing';

const App = createBrowserRouter([
  {
    path: "/",
    errorElement: <RouteNotFoundError />
  },
  {
    path: "/login",
    element: <LoginSignup />,
  },
  {
    path: "/home",
    element: <Landing />
  },
]);

export default App
