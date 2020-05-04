import Head from 'next/head'
import React, {useState} from 'react';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from '../components/theme';
import { GlobalStyles } from '../components/global';
import ToggleWrapper from '../components/toggle';
import { motion } from "framer-motion";

import MainWrapper from '../components/mainWrapper'
import Main from '../components/main'
import StyledFooter from '../components/footer';
import StyledFooterList from '../components/footerList';
import StyledHeader from '../components/header';
import Grid from '../components/grid';


function Home() {
  const [theme, setTheme] = useState('dark');
  const isDark = theme === 'dark';
  const toggleTheme = () => {
      if (theme === 'dark') {
      setTheme('light');
      } else {
      setTheme('dark');
      }
  }

  return (
    <ThemeProvider theme={theme === 'dark' ? darkTheme : lightTheme} >
    <>
    <motion.div  
      exit={{ opacity: 0 }} 
      initial={{ opacity: 0}} 
      animate={{ opacity : 1}}
      transition= {{ duration: 1.25 }}>
      <MainWrapper>
        <GlobalStyles />
        <Head>
          <title>Boris Kirov - Product Designer</title>
          <link rel="icon" href="/favicon.png" />
          <meta name="description" content="Product designer"/>
          <meta property="og:type" content="website" />
          <meta name="og:title" property="og:title" content="Boris Kirov - Product Designer" />
          <meta name="og:description" property="og:description" content="Technical designer interested in systems, front-end, open source and collaborative design." />
          <meta property="og:site_name" content="Boris Kirov - Product designer" />
          <meta property="og:url" content="https://www.boriskirov.com" />  
          <meta property="og:image" content="/favicon.png" />  
          <meta name="twitter:card" content="summary" /> 
          <meta name="twitter:title" content="Boris Kirov - Product Designer" />
          <meta name="twitter:description" content="Technical designer interested in systems, front-end, open source and collaborative design." />
          <meta name="twitter:site" content="https://www.boriskirov.com" />
          <meta name="twitter:creator" content="Boris Kirov" />
          <meta name="twitter:image" content="/favicon.png" />
          <link rel="apple-touch-icon" href="/favicon.png" />
        </Head>

        <StyledHeader>
          <small>Crafted in Amsterdam ♥️</small>
          <ToggleWrapper darkTheme={isDark} onClick={toggleTheme}>
            <img src="/ToggleLight.svg" alt="Light Toggler" title="Light Side" className="logo" />
            <img src="/Toggle.svg" alt="Dark Toggler" title="Dark Side" className="logo" />
          </ToggleWrapper>
        </StyledHeader>  
        
        <Main>

          <h1 className="title">
            BORIS KIROV
          </h1>

          <h2 className="titleTwo">
            is getting things done at <a 
            target="_blank"
            rel="noopener noreferrer"
            href="https://miro.com/index/">MIRO</a>
          </h2>


          <Grid>
            <section>
              <h3 className="titleThird">Currently</h3>
              <ul className="listing">
                <li className="liElement">
                  Product designer at <a href="https://miro.com/index/" target="_blank" rel="noopener noreferrer">MIRO</a>
                </li>
                <li className="liElement">
                  Creator & contributor at <a href="https://www.fluiditype.com/" target="_blank" rel="noopener noreferrer">Fluiditype</a>
                </li>
              </ul>
            </section>
            <section>
              <h3 className="titleThird">Previously</h3>
              <ul className="listing">
                <li>
                  <a href="https://www.info.nl/" target="_blank" rel="noopener noreferrer">INFO</a>
                </li>
                <li>
                  <a href="https://www.softserveinc.com/en-us" target="_blank" rel="noopener noreferrer">SoftServe</a>
                </li>
                <li>
                  <a href="https://despark.com/" target="_blank" rel="noopener noreferrer">Despark</a>
                </li>
              </ul>
            </section>
            <section>
              <h3 className="titleThird">Interested in</h3>
              <ul className="listing">
                <li>
                  Design and prototype in the browser 
                </li>
                <li>
                  Fluid typography
                </li>
                <li>
                  Maintenance & experiments with design and experience consistency 
                </li>
                <li>
                  Working with Git and Terminal 
                </li>
                <li>
                  Animation and visualization 
                </li>
                <li>
                  Content design and copy
                </li>
              </ul>
            </section>
          </Grid>
        </Main>
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
                <small><span className="emoji">👨‍💻</span><a href="https://github.com/sboriskirov" target="_blank" rel="noopener noreferrer">GitHub</a></small>
              </li>
              <li>
                <small><span className="emoji">📝</span><a href="https://medium.com/@bkirov" target="_blank" rel="noopener noreferrer">Medium</a></small>
              </li>
              <li>
                <small><span className="emoji">🐙</span><a href="https://dribbble.com/boriskirov" target="_blank" rel="noopener noreferrer">Dribbble</a></small>
              </li>
              <li>
                <small><span className="emoji">🐦</span><a href="https://twitter.com/boris_a_kirov" target="_blank" rel="noopener noreferrer">Twitter</a></small>
              </li>
              <li>
                <small><span className="emoji">🔗</span><a href="https://www.linkedin.com/in/boris-kirov-b6b110a4/" target="_blank" rel="noopener noreferrer">LinkedIn</a></small>
              </li>
            </StyledFooterList>
          </div>
        </StyledFooter>

        <style jsx>{`
          .title {
            margin: 0;
            line-height: 0.9;
            font-size: 9vw;
            font-weight: 600;
          }

          .titleTwo {
            margin: 0;
            line-height: 1.15;
            font-size: 3.5vw;
            font-weight: 300;
            letter-spacing: 0.1vw;
          }

          .titleTwo a {
            font-weight: 600;
          }

          .titleThird {
            font-size: 1.25vw;
            margin: 16px 0 4px 0;
            opacity: 0.75;
            text-transform: uppercase;
          }

          ul {
            margin: 8px 0px 0px 4px;
          }

          .title {
            text-align: left;
          }

          section:nth-child(2) {
            grid-column-start: 3;
          }

          section:last-child {
            grid-column-start: 1;
            grid-column-end: 3;
          }

          .logo {
            height: 1.5rem;
            cursor: sw-resize;
          }

          @media (max-width: 600px) {
            .title {
              font-size: 10vw;
            }

            .titleTwo {
              margin-top: 8px;
              font-size: 8vw;
            }

            .titleThird {
              font-size: 4vw;
            }

            section {
              grid-column-start: 1;
            }
          }

        `}</style>
      </MainWrapper>
      </motion.div> 
    </>
    </ThemeProvider>
  );
}

export default Home;
