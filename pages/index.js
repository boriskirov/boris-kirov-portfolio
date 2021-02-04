import React from 'react';
import { ThemeProvider } from 'styled-components';
import { useDarkMode } from '../components/useDarkMode';
import { lightTheme, darkTheme } from '../components/theme';
import { GlobalStyles } from '../components/global';
import Toggle from '../components/toggle';
import { motion } from "framer-motion";

import Head from 'next/head';
import Link from 'next/link';
import Footer from '../components/footer';
import utilStyles from '../styles/utils.module.css'


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
      <div className={`${utilStyles.mainWrapper}`}>
        <GlobalStyles/>
        <Head>
          <title>Boris Kirov - Product Designer</title>
          <link rel="icon" href="/favicon.png" />
          <meta name="description" content="Product designer"/>
          <meta property="og:type" content="website" />
          <meta name="og:title" property="og:title" content="Boris Kirov - Product Designer" />
          <meta name="og:description" property="og:description" content="Technical designer interested in systems, front-end, open source and collaborative design." />
          <meta property="og:site_name" content="Boris Kirov - Product designer" />
          <meta property="og:url" content="https://www.boriskirov.cc" />  
          <meta property="og:image" content="/favicon.png" />  
          <meta name="twitter:card" content="summary" /> 
          <meta name="twitter:title" content="Boris Kirov - Product Designer" />
          <meta name="twitter:description" content="Technical designer interested in systems, front-end, open source and collaborative design." />
          <meta name="twitter:site" content="https://www.boriskirov.cc" />
          <meta name="twitter:creator" content="Boris Kirov" />
          <meta name="twitter:image" content="/favicon.png" />
          <link rel="apple-touch-icon" href="/favicon.png" />
        </Head>

        <header>
          <small>Crafted in Amsterdam ♥️</small>
          <Toggle theme={theme} toggleTheme={toggleTheme} />
        </header>  
        
        <main className={`${utilStyles.innerWrapper}`}>

          <h1 className={`${utilStyles.heading2Xl}`}>
            BORIS KIROV
          </h1>

          <h2 className={`${utilStyles.headingXl}`}>
            is getting things done at <a 
            target="_blank"
            rel="noopener noreferrer"
            href="https://miro.com/index/">Miro</a>
          </h2>


          <div className={`${utilStyles.contentWrapper}`}>
            <section>
              <h3 className={`${utilStyles.headingL}`}>Currently</h3>
              <ul>
                <li>
                  Product designer at <a href="https://miro.com/index/" target="_blank" rel="noopener noreferrer">Miro</a>
                </li>
                <li className="blog">
                  Explore the <Link href="/playground" as="/playground"><a className={`${utilStyles.internalPassage}`}>Playground</a></Link>
                </li>
                <li className="blog">
                  Check the <Link href="/blog" as="/blog"><a className={`${utilStyles.internalPassage}`}>Blog</a></Link>
                </li>
              </ul>
            </section>
            <section>
              <h3 className={`${utilStyles.headingL}`}>Previously</h3>
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
              <h3 className={`${utilStyles.headingL}`}>Interested in</h3>
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
          </div>
        </main>
        <Footer/>
      </div>
      </motion.div> 
    </>
    </ThemeProvider>
  );
}

export default Home;
