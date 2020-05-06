import React from 'react'
import { func, string } from 'prop-types';
import styled from 'styled-components';

const ToggleWrapper = styled.span`
  background: none;
  border: none;
  cursor: sw-resize;
  padding: 8px 24px;
  
  img {
    transition: all 1.15s linear;
    height: 1.5rem;

    &:first-child {
      display: ${({ lightTheme }) => lightTheme ? 'none' : 'initial'};
    }

    &:nth-child(2) {
      display: ${({ lightTheme }) => lightTheme ? 'initial' : 'none'};
    }
  }
`;

const Toggle = ({ theme, toggleTheme }) => {
  const isLight = theme === 'light';
  return (
    <ToggleWrapper lightTheme={isLight} onClick={toggleTheme}>
        <img src="/ToggleLight.svg" alt="Light Toggler" title="Light Side"/>
        <img src="/Toggle.svg" alt="Dark Toggler" title="Dark Side"/>
    </ToggleWrapper>
  );
};

Toggle.propTypes = {
  theme: string.isRequired,
  toggleTheme: func.isRequired,
}

export default Toggle;

