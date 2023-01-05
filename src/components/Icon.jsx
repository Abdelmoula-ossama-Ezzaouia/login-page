import React from 'react'
import styled from 'styled-components';

function Icon({ color, children}) {
  return <StyledIcon background={color}>{children}</StyledIcon>;
}

const StyledIcon = styled.div`
    height: 3.5rem;
    width: 3.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 4rem;
    color: white; 
    cursur: pointer;
    backgroound: ${(props) => props.background};
    svg {
        width: 1.5rem;
        height: 1.5rem;
    } 
`;

export default Icon