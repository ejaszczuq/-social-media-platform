import { RouteObject } from 'react-router-dom';

import MainPage from '../app/Main/Main';
import NotFound from '../app/NotFound/NotFound';
import RegistrationPage from '../app/Registration/Registration';
import LoginPage from '../app/Login/Login';
import React from 'react';

export const appRoutes: RouteObject = {
   children: [
      {
         path: '/',
         element: <MainPage />,
      },
      {
         path: '/Registration',
         element: <RegistrationPage />,
      },
      {
         path: '/Login',
         element: <LoginPage />,
      },
      {
         path: '*',
         element: <NotFound />,
      },
   ],
};
