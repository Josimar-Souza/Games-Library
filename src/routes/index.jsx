import React from 'react';
import MainPage from '../pages/MainPage';
import DetailsPage from '../pages/DetailsPage';

const routes = [
  {
    path: '/',
    element: <MainPage />,
    children: [
      {
        path: '/details/:id',
        element: <DetailsPage />,
      },
    ],
  },
];

export default routes;
