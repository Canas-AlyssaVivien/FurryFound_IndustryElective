import React from 'react';
import ReactDOM from 'react-dom/client';
import './Css/index.css';
import App from './Js/App';
import reportWebVitals from './reportWebVitals';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Landing_Page from './Js/Landing_Page';
import Pets from './Js/pets';
import Archive from './Js/archive';
import Submissions from './Js/submissions';
import Approved from './Js/approved-applications';
import History from './Js/history';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />
  },
  {
    path: '/pets',
    element: <Pets />
  },
  {
    path: '/archive',
    element: <Archive />
  },
  {
    path: '/submissions',
    element: <Submissions />
  },
  {
    path: '/approved-applications',
    element: <Approved />
  },
  {
    path: '/history',
    element: <History />
  }
])


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
