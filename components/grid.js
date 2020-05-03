import styled from 'styled-components'

const Grid = styled.div`
    display: grid;
    align-items: flex-start;
    justify-content: center;
    flex-wrap: wrap;

    max-width: 960px;
    margin-top: 5vw;

    @media (max-width: 600px) {
          display: flex;
          width: 100%;
          flex-direction: column;
    }

`

export default Grid 