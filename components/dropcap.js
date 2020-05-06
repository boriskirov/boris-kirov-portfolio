import styled from "styled-components"

const Dropcap = styled.span `
    font-size: 5vw;
    font-weight: 900;
    float: left;
    line-height: 0.75;
    margin-right: 8px;
    padding-top: 6px;

    @media (max-width: 600px) {
        font-size: 9vw;
        line-height: 1.25;
        margin-right: 0.25em;
    }
`

export default Dropcap