import React from 'react';
import styled from 'styled-components';

export interface BoxProps {
  padding?: string
}

const Box = styled.div<BoxProps>`
  & {
    padding: ${props => props.padding || 'var(--s1)'};
  }
`;

export default Box;
