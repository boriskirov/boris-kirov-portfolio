import Head from 'next/head'
import React, {useState} from 'react';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from '../components/theme';
import { GlobalStyles } from '../components/global';
import ToggleWrapper from '../components/toggle';
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
      transition= {{ duration: 1.25 }}>
      <div className="container">
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

        <header>
          <ToggleWrapper darkTheme={isDark} onClick={toggleTheme}>
            <img src="/ToggleLight.svg" alt="Light Toggler" title="Light Side" className="logo" />
            <img src="/Toggle.svg" alt="Dark Toggler" title="Dark Side" className="logo" />
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
              <h3 className="titleThird">NOW</h3>
              <ul className="listing">
                <li className="liElement">
                  Digital whiteboard tool <a href="https://miro.com/index/" target="_blank" rel="noopener noreferrer">MIRO</a>
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
              <h3 className="titleThird">BEFORE</h3>
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
              <h3 className="titleThird">ALWAYS</h3>
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
        <footer>
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
        </footer>
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
            padding: 6vw 12.5vw 2vw 12.5vw;
            flex: 1;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: flex-start;
            width: 100%;
          }

          header, footer {
            width: 100%;
            height: 30px;
            display: flex;
            justify-content: flex-end;
            align-items: center;
            padding: 1vw 12.5vw;
            margin-bottom: 1.5vw;
            margin-top: 1vw;
          }

          footer {
            justify-content: space-between;
          }

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
            padding-left: 0px;
          }
    
          footer ul li {
            padding-right: 16px;
            display: flex;
          }
    
          footer ul li:last-child{
            padding-right: 0px
          }

          li {
            margin-bottom: 8px;
          }

          ul a {
            font-weight: 600;
          }

          a {
            color: inherit;
            cursor: ne-resize;
            transition: background-color .3s ease;
            text-decoration: underline;
          }

          a:hover,
          a:focus {
            text-decoration: none;
            color: #3f53d9;
          }

          a:active {
            background-color: #FFCF00;
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
            font-size: 3.5vw;
            font-weight: 300;
            letter-spacing: 0.1vw;
          }

          .titleTwo a {
            font-weight: 600;
          }

          .titleThird {
            font-size: 1.25vw;
            margin: 16px 0 16px 0;
            opacity: 0.75;
            text-transform: uppercase;
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
            margin-top: 5vw;
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

          .listing {
            padding-left: 16px;
            margin: 4px 0 0 0;
            list-style: square;
          }

          @media (max-width: 600px) {
            .grid {
              display: flex;
              width: 100%;
              flex-direction: column;
            }

            main, header, footer{
              padding: 10vw 10vw;
              height: 100%;
            }

            footer {
              display: flex;
              flex-direction: column;
              align-items: flex-start;
            }

            footer ul {
              display: flex;
              flex-direction: column;
              align-items: flex-start;
            }
    
            footer ul li {
              margin: 8px 0 8px 0;
            }

            .title {
              font-size: 11vw;
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
