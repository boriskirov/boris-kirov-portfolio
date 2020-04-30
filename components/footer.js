import React from "react"
import styled from 'styled-components'

const StyledFooter = styled.footer`
    width: 100%;
    height: 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1vw 12.5vw;
    margin-bottom: 2vw;
    margin-top: .5vw;

    footer img {
        margin-left: 0.5rem;    
    }

    footer a {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    footer ul {
        display: flex;
    }

    footer ul li {
        padding-right: 16px;
        display: flex;
      }

    footer ul li:last-child{
        padding-right: 0px
    }

    a {
        color: inherit;
        cursor: ne-resize;
        transition: background-color .3s ease;
        text-decoration: underline;
    }

    a:hover,
    a:focus {
        text-decoration: underline;
        color: #3f53d9;
    }

    a:active {
        background-color: #ffd02f;
        color: #3f53d9;
    }

    @media (max-width: 600px) {

        padding: 10vw 10vw;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: flex-start;

        footer ul {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
        }

        footer ul li {
          margin: 8px 0 8px 0;
        }

`

export default Footer