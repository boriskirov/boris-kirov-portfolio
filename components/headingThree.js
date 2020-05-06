import styled from 'styled-components';

const HeadingThree = styled.h3 `
    font-size: 1.75vw;
    margin: 8px 0 4px 0;
    opacity: 0.75;
    text-transform: uppercase;

    @media (max-widht: 768px) {
        font-size: 14vw;
    }

    @media (max-width: 600px) {
        font-size: 4vw;
    }
`

export default HeadingThree