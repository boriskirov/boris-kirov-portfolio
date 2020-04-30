import styled from 'styled-components'

const ToggleWrapper = styled.span`
background: none;
border: none;
cursor: sw-resize;
padding: 8px 24px;
font-size: 1rem;
  
  img {
    transition: all 0.3s linear;

    &:first-child {
      display: ${({ darkTheme }) => darkTheme ? 'initial' : 'none'};
    }

    &:nth-child(2) {
      display: ${({ darkTheme }) => darkTheme ? 'none' : 'initial'};
    }
  }
`;

export default ToggleWrapper

