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

        padding: 10vw 2.5vw;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
    }
`

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
        font-size: 16px;
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
          <StyledFooterList>
              <li>
                <small><span>👨‍💻</span><a href="https://github.com/sboriskirov" target="_blank" rel="noopener noreferrer">GitHub</a></small>
              </li>
              <li>
                <small><span>📝</span><a href="https://medium.com/@bkirov" target="_blank" rel="noopener noreferrer">Medium</a></small>
              </li>
              <li>
                <small><span>🐙</span><a href="https://dribbble.com/boriskirov" target="_blank" rel="noopener noreferrer">Dribbble</a></small>
              </li>
              <li>
                <small><span>🐦</span><a href="https://twitter.com/boris_a_kirov" target="_blank" rel="noopener noreferrer">Twitter</a></small>
              </li>
              <li>
                <small><span>🔗</span><a href="https://www.linkedin.com/in/boris-kirov-b6b110a4/" target="_blank" rel="noopener noreferrer">LinkedIn</a></small>
              </li>
            </StyledFooterList>
          </div>
        </StyledFooter>

);

export default Footer;
