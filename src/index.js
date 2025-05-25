import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Login from './Login';
import SignUp from './SignUp';  // Use SignUp with uppercase 'S'
import BookNow from "./BookNow";

import ContactPage from "./ContactPage";
import Home from "./Home";
import ForgotPass from "./ForgotPass";
import Riding from "./Riding";
import BookCabForm from "./BookCabForm";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <SignUp />,  // Corrected component name to SignUp
  },
  {
    path: "/booknow",
    element: <BookNow/>,  
  },
  
  {
    path: "/contactpage",
    element: <ContactPage/>,  
  },
  {
    path: "/forgotpass",
    element: <ForgotPass/>,  
  },
  {
    path: "/riding",
    element: <Riding/>,  
  },
  {
    path: "/bookcabform",
    element: <BookCabForm/>,  
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router} />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
