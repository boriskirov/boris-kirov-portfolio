import styled from 'styled-components'

const Card = styled.a `
    width: 100%;
    color: inherit;
    cursor: pointer;
    text-decoration: none;
    font-weight: 500;
    text-shadow: none;
    text-decoration: none;
    padding: 8px 16px;
    margin: 8px 0;
    background-color: #5454541a;
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: space-between;

    &:hover, :active, :focus {
        text-decoration: none;
        color: inherit;
        background-color: #5454541a;
    }

    &[href]:hover h3  {
        background-color: #FFCF00;
        color: #3f53d9;
        transition: background-color .3s ease;
    }

    &[href]:active h3 {
        background-color: #FFCF00;
        color: #3f53d9;
        transition: background-color .3s ease;
    }

    &[href]:focus h3 {
        background-color: #FFCF00;
        color: #3f53d9;
        transition: background-color .3s ease;
    }

    small {
        padding: 24px;
    }   
    @media (max-width: 600px) {
        align-items: baseline;
        flex-direction: column;
        width: 100%;

        small {
            padding: 4px 4px 16px 4px;
        }   
    }

`

export default Card