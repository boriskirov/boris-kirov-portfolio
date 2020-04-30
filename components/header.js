import styled from 'styled-components'


const Header = styled.header `
    width: 100%;
    height: 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1vw 12.5vw;
    margin-bottom: 2vw;
    margin-top: .5vw;

    @media (max-width: 600px) {
        padding: 10vw 10vw;
        height: 100%;
    }
`
export default Header