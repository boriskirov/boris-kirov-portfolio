import React from 'react';
import { ThemeProvider } from 'styled-components';
import { useDarkMode } from '../components/useDarkMode';
import { lightTheme, darkTheme } from '../components/theme';
import { GlobalStyles } from '../components/global';
import Toggle from '../components/toggle';
import { motion } from "framer-motion";

import Head from 'next/head';
import MainWrapper from '../components/mainWrapper';
import Link from 'next/link';
import Main from '../components/main';
import Footer from '../components/footer';
import StyledHeader from '../components/header';
import Grid from '../components/grid';
import HeadingMain from '../components/headingMain';
import HeadingTwo from '../components/headingTwo'
import HeadingThree from '../components/headingThree'


function Home() {
  const [theme, toggleTheme] = useDarkMode();
  const themeMode = theme === 'light' ? lightTheme : darkTheme;

  return (
    <ThemeProvider theme={themeMode} >
    <>
    <motion.div  
      exit={{ opacity: 0 }} 
      initial={{ opacity: 0}} 
      animate={{ opacity : 1}}
      transition= {{ duration: 1.15 }}>
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
          <Toggle theme={theme} toggleTheme={toggleTheme} />
        </StyledHeader>  
        
        <Main>

          <HeadingMain>
            BORIS KIROV
          </HeadingMain>

          <HeadingTwo>
            is getting things done at <a 
            target="_blank"
            rel="noopener noreferrer"
            href="https://miro.com/index/">MIRO</a>
          </HeadingTwo>


          <Grid>
            <section>
              <HeadingThree>Currently</HeadingThree>
              <ul>
                <li>
                  Product designer at <a href="https://miro.com/index/" target="_blank" rel="noopener noreferrer">MIRO</a>
                </li>
                <li>
                  Creator & contributor at <a href="https://www.fluiditype.com/" target="_blank" rel="noopener noreferrer">Fluiditype</a>
                </li>
                <li className="blog">
                  Check the <Link href="/blog">Blog</Link>
                </li>
              </ul>
            </section>
            <section>
              <HeadingThree>Previously</HeadingThree>
              <ul>
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
              <HeadingThree>Interested in</HeadingThree>
              <ul>
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
        <Footer/>

        <style jsx>{`

        section {
          width: 100%;
          margin-bottom: 16px;
        }

        ul {
            margin: 8px 0px 0px 4px;
        }
        `}</style>
      </MainWrapper>
      </motion.div> 
    </>
    </ThemeProvider>
  );
}

export default Home;
