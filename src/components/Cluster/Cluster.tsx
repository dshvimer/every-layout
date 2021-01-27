import React from 'react';
import styled from 'styled-components';


const Cluster = styled.div`
  & > * {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: center;
    margin: calc(var(--s1) / 2 * -1);
  }
  & > * > * {
    margin: calc(var(--s1) / 2);
  }
`

export default Cluster;
