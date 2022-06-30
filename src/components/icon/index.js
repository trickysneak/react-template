import React from 'react';
// import * as Svg from './icons'; Icons import

export const Icon = ({ name, color = 'white', ...props }) => {
  const ICONS = {};

  const Component = ICONS[name];
  return <Component color={color} {...props} />;
};
