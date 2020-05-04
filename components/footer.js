import styled from 'styled-components'

const StyledFooter = styled.footer`
    width: 100%;
    height: 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1vw 12.5vw;
    margin-bottom: 1.5vw;
    margin-top: 1vw;

    @media (max-width: 600px) {

        padding: 10vw 10vw;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: flex-start;

`

export default StyledFooter
