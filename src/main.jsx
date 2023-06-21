import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import routes from './routes';
import GamesContext from './context/gamesContext';

const router = createBrowserRouter(routes);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GamesContext>
      <RouterProvider router={router} />
    </GamesContext>
  </React.StrictMode>,
);
