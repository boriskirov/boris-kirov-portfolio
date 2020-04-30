import Head from 'next/head'
import Time from '../components/time'
import React, {useState} from 'react';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from '../components/theme';
import { GlobalStyles } from '../components/global';
import ToggleWrapper from '../components/toggle';
import Footer from '../components/footer';
import { motion } from "framer-motion"


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
      transition= {{ duration: 2.5 }}>
      <div className="container">
        <GlobalStyles />
        <Head>
          <title>Boris Kirov - Product Designer</title>
          <link rel="icon" href="/favicon.png" />
        </Head>

        <header>
          <Time/> 
          <ToggleWrapper darkTheme={isDark} onClick={toggleTheme}>
            <img src="/LampLightsSun.svg" alt="Lamp Toggler" title="Light Side" className="logo" />
            <img src="/Toggle.svg" alt="Lamp Toggler" title="Dark Side" className="logo" />
          </ToggleWrapper>
        </header>  
        
        <main>

          <h1 className="title">
            BORIS KIROV
          </h1>

          <h2 className="titleTwo">
            is getting things done at <a 
            target="_blank"
            rel="noopener noreferrer"
            href="https://miro.com/index/">MIRO</a>
          </h2>


          <div className="grid">
            <section>
              <h3 className="titleThird">Currently</h3>
              <ul className="listing">
                <li className="liElement">
                  <a href="https://miro.com/index/" target="_blank" rel="noopener noreferrer">MIRO</a>
                </li>
                <li className="liElement">
                  Typographic library <a href="https://www.fluiditype.com/" target="_blank" rel="noopener noreferrer">Fluiditype</a>
                </li>
                <li className="liElement">
                  Color naming tool
                </li>
              </ul>
            </section>
            <section>
              <h3 className="titleThird">Previously</h3>
              <ul className="listing">
                <li className="liElement">
                  <a href="https://www.info.nl/" target="_blank" rel="noopener noreferrer">INFO</a>
                </li>
                <li className="liElement">
                  <a href="https://www.softserveinc.com/en-us" target="_blank" rel="noopener noreferrer">SoftServe</a>
                </li>
                <li className="liElement">
                  <a href="https://despark.com/" target="_blank" rel="noopener noreferrer">Despark</a>
                </li>
              </ul>
            </section>
            <section>
              <h3 className="titleThird">Interested</h3>
              <ul className="listing">
                <li className="liElement">
                  Design and prototype in the browser 
                </li>
                <li className="liElement">
                  Fluid typography
                </li>
                <li className="liElement">
                  Maintenance & experiment with design and experience consistency 
                </li>
                <li className="liElement">
                  Git and Terminal
                </li>
                <li className="liElement">
                  Animation and visualization
                </li>
                <li className="liElement">
                  Content design and copy
                </li>
              </ul>
            </section>
          </div>
        </main>
        <Footer/>
        <style jsx>{`
          .container {
            min-height: 100vh;
            padding: 0 0.5rem;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
          }

          main {
            padding: 5vw 12.5vw;;
            flex: 1;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: flex-start;
            width: 100%;
          }

            header {
            width: 100%;
            height: 30px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 1vw 12.5vw;
            margin-bottom: 2vw;
            margin-top: .5vw;
          }

          li {
            margin-bottom: 8px;
          }

          ul a {
            font-weight: 500;
          }

          main li:before {
            content: "▪";
            display: inline-block;
            margin-right: 4px;
            font-size: 16px
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

          .title {
            margin: 0;
            line-height: 0.9;
            font-size: 9vw;
            font-weight: 600;
          }

          .titleTwo {
            margin: 0;
            line-height: 1.15;
            font-size: 4vw;
            font-weight: 400;
          }

          .titleThird {
            font-size: 1.5vw;
            margin: 32px 0 16px 0;
          }

          .title,
          .description {
            text-align: left;
          }

          .emoji {
            font-size: 18px;
            margin-right: 4px;
          }

          .grid {
            display: grid;
            align-items: flex-start;
            justify-content: center;
            flex-wrap: wrap;

            max-width: 960px;
            margin-top: 1vw;
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

          .title-third {
            margin-bottom: 16px;
          }

          .listing {
            padding-left: 0px;
            margin: 4px 0 0 0;
            list-style: none;
          }

          @media (max-width: 600px) {
            .grid {
              display: flex;
              width: 100%;
              flex-direction: column;
            }

            main, header{
              padding: 10vw 10vw;
              height: 100%;
            }

            .titleTwo {
              margin-top: 8px;
              font-size: 2.8vh;
            }

            .titleThird {
              font-size: 4vw;
            }

            section {
              grid-column-start: 1;
            }
          }
        `}</style>
      </div>
      </motion.div> 
    </>
    </ThemeProvider>
  );
}

export default Home;
