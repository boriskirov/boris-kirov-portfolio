import React from 'react';
import { ThemeProvider } from 'styled-components';
import { useDarkMode } from '../components/useDarkMode';
import { lightTheme, darkTheme } from '../components/theme';
import { GlobalStyles } from '../components/global';
import { motion } from "framer-motion";

import Head from 'next/head'
import Link from 'next/link'
import MainWrapper from '../components/mainWrapper'
import Main from '../components/main'
import Grid from '../components/grid'
import StyledHeader from '../components/header';
import Card from '../components/blogCard'
import Footer from '../components/footer';
import Toggle from '../components/toggle';
import BackButton from '../components/backButton';
import HeadingMain from '../components/headingMain';
import HeadingThree from '../components/headingThree';


function Blog() {
  const [theme, toggleTheme] = useDarkMode();
  const themeMode = theme === 'light' ? lightTheme : darkTheme;

  return (
    <ThemeProvider theme={themeMode} >
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
          <Toggle theme={theme} toggleTheme={toggleTheme} />  
        </StyledHeader>  
        
        <Main>
            <Link href="/index">
                  <BackButton>Back</BackButton>
            </Link>
            <HeadingMain>
            BLOG
            </HeadingMain>


          <Grid>
          <Card href="/posts">
                <div>
                    <HeadingThree>Defining design system</HeadingThree>
                </div>
                <small>Article</small>
            </Card>
            <Card href="/posts">
                <div>
                    <HeadingThree>2019 in 365</HeadingThree>
                </div>
                <small>Article</small>
            </Card>
            <Card href="/posts/great-wall-of-development">
                <div>
                    <HeadingThree>Wall of development</HeadingThree>
                </div>
                <small>Case study</small>
            </Card>
            <Card href="/posts/tripscout">
                <div>
                    <HeadingThree>Working with TripScout</HeadingThree>
                </div>
                <small>Case study</small>
            </Card>
            <Card href="/posts/nda">
                <div>
                    <HeadingThree>How to implement design system thinking to a product</HeadingThree>
                </div>
                <small>Case study</small>
            </Card>
            <Card href="/posts/improve-impatience">
                <div>
                    <HeadingThree>Improve Impatience</HeadingThree>
                </div>
                <small>Article</small>
            </Card>
            </Grid>
        </Main>
        <Footer/>
      </MainWrapper>
      </motion.div> 
    </>
    </ThemeProvider>
  );
}

export default Blog;