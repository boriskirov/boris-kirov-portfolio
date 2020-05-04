import styled from 'styled-components'

const StyledFooterList = styled.ul`
    display: flex;
    padding-left: 0px;
    padding-right: 16px;
    margin: 4px 0 0 0;

    li {
        display: flex;
        padding-right: 16px;
        margin-bottom: 8px;
    }

    li:last-child{
        padding-right: 0px
    }

    small {
        align-items: center;
    }

    span {
        font-size: 18px;
        margin-right: 4px;
    }
   
    @media (max-width: 600px) {
        display: flex;
        flex-direction: column;
        align-items: flex-start;

        li {
            margin: 8px 0 8px 0;
        }
    }

`

export default StyledFooterList


