import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Home from './screens/home';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Contact from './screens/contact';
import Station from './screens/station';
import Login from './screens/login';
import { ProtectedRoute } from './components/ProtectedRoute';
import { AuthProvider } from './screens/context/AuthContext';

const router = createBrowserRouter([
  {
    path: "/",
    element: <AuthProvider><ProtectedRoute><Home /></ProtectedRoute></AuthProvider>
  },
  {
    path: "/contact",
    element: <Contact />
  },
  {
    path: "/station/:stationId",
    element: <Station />
  },
  {
    path: "/login",
    element: <AuthProvider><Login /></AuthProvider>
  },
  {
    path: "/station",
    element: <Station />
  },
]);


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
