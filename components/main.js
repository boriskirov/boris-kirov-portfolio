import styled from 'styled-components'

const Main = styled.main `
    padding: 8vw 12vw 2vw 12vw;
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    width: 100%;

    @media (max-width: 600px) {
        padding: 10vw 2.5vw;
        height: 100%;
    }
`

export default Main