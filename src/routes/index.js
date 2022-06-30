import React from 'react';
import { Route, Routes } from 'react-router-dom';
import * as Components from '../modules';

const RoutesData = [
  {
    path: '/',
    exact: true,
    component: <Components.Hello />,
  },
];

export const AppRoutes = () => {
  return (
    <Routes>
      {RoutesData.map(({ exact, path, component }) => (
        <Route key={path} path={path} exact={exact} element={component} />
      ))}
    </Routes>
  );
};
