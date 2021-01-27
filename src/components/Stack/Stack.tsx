import React from 'react';
import styled from 'styled-components';

export interface StackProps {
  space?: 'var(--s0)' | 'var(--s1)' | 'var(--s2)' | 'var(--s3)' | 'var(--s4)' | 'var(--s5)';
}

const Stack = styled.div<StackProps>`
  & > * {
    margin: 0;
  }
  & > * + * {
    margin-top: ${props => props.space || 'var(--s1)'};
  }
`;

export default Stack;
