import styled from 'styled-components';

const HeadingTwo = styled.h1 `
    margin: 0;
    line-height: 1.15;
    font-size: 3.5vw;
    font-weight: 300;
    letter-spacing: 0.1vw;

    a {
        font-weight: 600;
    }

    @media (max-width: 600px) {
        margin-top: 8px;    
        font-size: 8vw;
    }
`

export default HeadingTwo