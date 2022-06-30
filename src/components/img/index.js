import React from 'react';
import styled from 'styled-components';

export const Img = ({ src, alt }) => {
  return <Wrapper src={src} alt={alt} />;
};

const Wrapper = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
