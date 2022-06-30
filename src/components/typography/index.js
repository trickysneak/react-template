import React from 'react';
import styled from 'styled-components';

export const Typography = ({
  variant = 'body2',
  children,
  size,
  color,
  onClick,
  hover,
}) => {
  const TYPOGRAPHICS = {
    headline: (
      <Headeline size={size} color={color} onClick={onClick} hover={hover}>
        {children}
      </Headeline>
    ),
    body1: (
      <Body1 size={size} color={color} onClick={onClick} hover={hover}>
        {children}
      </Body1>
    ),
    body2: (
      <Body2 size={size} color={color} onClick={onClick} hover={hover}>
        {children}
      </Body2>
    ),
    body3: (
      <Body3 size={size} color={color} onClick={onClick} hover={hover}>
        {children}
      </Body3>
    ),
  };

  const Component = TYPOGRAPHICS[variant];
  return Component;
};

const Headeline = styled.h1`
  font-family: MontserratBold;
  font-size: ${({ size }) => (size ? `${size}px` : '32px')};
  color: ${({ color }) => color};
  font-weight: 700;
`;

const Body1 = styled.p`
  font-family: MontserratSemiBold;
  font-size: ${({ size }) => (size ? `${size}px` : '16px')};
  color: ${({ color }) => color};
  font-weight: 600;
`;

const Body2 = styled.p`
  font-family: MontserratMedium;
  font-size: ${({ size }) => (size ? `${size}px` : '16px')};
  color: ${({ color }) => color};
  font-weight: 500;
`;

const Body3 = styled.p`
  font-family: Montserrat;
  font-size: ${({ size }) => (size ? `${size}px` : '16px')};
  color: ${({ color }) => color};
  font-weight: 400;
`;
