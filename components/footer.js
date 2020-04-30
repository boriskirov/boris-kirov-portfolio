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

    img {
        margin-left: 0.5rem;    
    }

    a {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    ul {
        display: flex;
    }

    ul li {
        padding-right: 16px;
        display: flex;
      }

    ul li:last-child{
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

        ul {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
        }

        ul li {
          margin: 8px 0 8px 0;
        }

`

const Footer = () => (
    <StyledFooter>
          <a
            href="https://miro.com/app/board/o9J_kulYeX0=/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Get Resume 2020 © {' '}
          </a>
          <div>
          <ul className="listing">
              <li className="liElement">
                <span className="emoji">👨‍💻</span><a href="https://github.com/sboriskirov" target="_blank" rel="noopener noreferrer">GitHub</a>
              </li>
              <li className="liElement">
                <span className="emoji">📝</span><a href="https://medium.com/@bkirov" target="_blank" rel="noopener noreferrer">Medium</a>
              </li>
              <li className="liElement">
                <span className="emoji">🐙</span><a href="https://dribbble.com/boriskirov" target="_blank" rel="noopener noreferrer">Dribbble</a>
              </li>
              <li className="liElement">
                <span className="emoji">🐦</span><a href="https://twitter.com/boris_a_kirov" target="_blank" rel="noopener noreferrer">Twitter</a>
              </li>
              <li className="liElement">
                <span className="emoji">🔗</span><a href="https://www.linkedin.com/in/boris-kirov-b6b110a4/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
              </li>
            </ul>
          </div>
    </StyledFooter>
)

export default Footer