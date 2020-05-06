import React from 'react';
import { ThemeProvider } from 'styled-components';
import { useDarkMode } from '../../components/useDarkMode';
import { lightTheme, darkTheme } from '../../components/theme';
import { GlobalStyles } from '../../components/global';
import Toggle from '../../components/toggle';
import { motion } from "framer-motion";

import Head from 'next/head';
import MainWrapper from '../../components/mainWrapper';
import Link from 'next/link';
import BackButton from '../../components/backButton';
import Main from '../../components/main';
import Footer from '../../components/footer';
import StyledHeader from '../../components/header';
import Grid from '../../components/grid';
import Dropcap from '../../components/dropcap';
import HeadingMain from '../../components/headingMain';
import HeadingThree from '../../components/headingThree';
import BlockQuote from '../../components/blockquote';
import ImgWrapper from '../../components/imageWrapper';

function Impatience() {
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
            <Link href="/blog">
                    <BackButton>Back</BackButton>
            </Link>
            <HeadingMain>
                Improving Impatience
            </HeadingMain>
            <info dateTime="2017-01-16">Jan 16, 2017</info>
          
            <Grid>
                <section>
                    <BlockQuote>
                    You don’t want any more statistics telling you how much time people are spending on their phones. How much time they spent on Facebook during work and out of work. About all the fake news and social media manipulation. This is something way, way simpler. It is a story about going without a phone for four months, whilst working as a digital producer at a company which creates mobile and web products.
                    </BlockQuote>
                    <p>
                    <Dropcap>A</Dropcap>t the beginning of August 2016 I lost that extra feature on my palm. The reason for losing the function of a smartphone at this point is irrelevant. My arrogance and eternal curiosity made me take the decision not to fix it, but to start observing what would happen to my fingertips if they were not touching any screen for a while. Participating in this social experiment gave some interesting results and food for thought that I decided to share.
                    </p> 
                    <HeadingThree>People and our lack of patience</HeadingThree>
                    <p>I know everyone has that friend, who is just flipping his phone from time to time to see if everything is in place. If something is out “there” then the focus is out of the conversation. The lack of smartphone for those 4 months made me notice when people reach for their phones. Every time the conversation dies there is an unlocked screen. Every time I went outside the bar, to the restroom or wherever, then I return there is an unlocked screen. Every time a discussion begins, which leads to some kind of fact argumentation I hear : “Wait, wait I will google it, and show you what I mean.” there is an unlocked screen. People give little time for things to happen and if they do not occur in an expected manner we have a fast way out. Where we can easily find something to hold our attention for a while.</p>
                    <HeadingThree>How I started to be on point and on time</HeadingThree>
                    <p>I missed a couple of meetings, deadlines, project and dates because of my phone and the lack of the Reminder app. I used to rely on it to get everything done. There was one instance at the end of August when I was cycling around the city after work. I reached a certain location and remembered I had a date at that same spot in like 30 minutes. So I rushed to get home, changed and got back in the nick of time, so I didn’t miss the date. This is just one example of those horrible moments where anxiety, guilt and everything along with it starts rushing through you. Each time you know you have to change. I made a change. It all happened naturally, and through having a break from my phone, without having reminders to rely on. Now I rarely feel those rushes of guilt, because most of the time I analyze the situation, the time, and my priorities or commitments more before answering, just to be on the safe side.
                    </p>
                    <HeadingThree>What made my phone return</HeadingThree> 
                    <p>People acted strange when they heard that I hadn’t used a phone for а couple of months. There was this one time that I was in a bar with a close friend of mine, we were sharing beers talking about stuff. His phone rang with an unknown number so he went outside as the bar was loud. 10 seconds later he handed me the phone saying “So, it’s for you bro?!”. It was my housemate searching for me to ask something random. I was curious to know how he was able to contact me. Turns out he called a colleague of mine who knew who I was with and gave over his phone number. I have to say, this was an extremely awkward situation to fall into, your privacy is kind of ruined.
                    </p>
                    <p>With small steps to the end of the 4 month period I found that my desire for real communication was rising. A desire to have conversations and a deeper interest in other people’s lives. I can easily ask questions and get direct answers, which is important for normal communication between people.
                    </p>
                    <HeadingThree>Is software guilty?</HeadingThree>
                    <p>I spend some time reading and listening to <a href="https://medium.com/@tristanharris">Tristan Harris</a> (Design Ethicist and Product Philosopher)  - he preaches about the addictive software concept and the distractions that are surrounding us.</p>
                    <p>Your friends will never think of something that will make you feel bad, if they do they are not your friends. This can be assumed in terms of product teams as well. There is no alpha person in a product, except the product itself. Sure the owners/ directors/ stakeholders or whoever is at the top of the product chain is the so-called boss. But your team, they are there to get the job done, so the product can keep on living and improving and providing a service, so people can use it and get their job done. So you see, it is a cycle, it is a process with which you have to devote yourself as not the creative power innovator who is the creator of this abstract, super high-tech and complex system. You are just part of a team pushing the product for a better tomorrow. By getting to know your team-mates, what they do, how they do it, how they do their research, what tools do they use, do they keep a documentation, what framework do they use. </p>
                    <p>Check out his <a href="https://www.ted.com/talks/tristan_harris_how_better_tech_could_protect_us_from_distraction#t-12913">TED</a> talk.
                    </p>
                    <p>Harris gives his point of view, about the power that designers have — because they are the people who can produce better, more improved user experiences for products. But at the same time this is not just a one-way street. The actual people using the products are demanding more from products, and the entire market is required to place it. I believe in this theory. With a simple mindful evolution and better information distribution, more people will understand their own behavior — which is key to self improvement.
                    </p>
                    <BlockQuote>I would also advise you to read this 
                        <a href="https://medium.com/thrive-global/distracted-in-2016-reboot-your-phone-with-mindfulness-9f4c8ad46538#.o2r8t0bnl">article
                        </a>
                        , for examples of how to handle the distractions on your phone.  
                    </BlockQuote>
                    <p>Tristan’s examples are the perfect inspiration. Raising questions around the so-called ‘FOMSI’. Fear of Missing Something Important is something valuable to know, people are empowered with information. The control on the other hand is something different, we do not choose the information that we want to receive, most of the feed app users, at one point or another are swallowed by it and it becomes just spam of information with small value. That is why we get lost in it. The decision of what information is important is the key. Related to my topic on ‘improving impatience’, well you should ask yourself which information is so important. If those notifications or eternal scroll are crucial for you, well then I take my words back.
                    </p>
                    <ImgWrapper>
                      <img src="/improve-impatience-app-1.png"/>
                    </ImgWrapper>
                    <BlockQuote>I set only the most important apps on my home screen to ignore the notifications.
                    </BlockQuote>
                    <HeadingThree>Conclusion</HeadingThree>
                    <ImgWrapper>
                      <img src="/improve-impatience-app-2.png"/>                
                    </ImgWrapper>
                    <BlockQuote>My lock screen changed since I got my phone back.</BlockQuote>
                    <p>
                    You’re probably thinking by now that ignoring media is a pretty accurate and simple solution for your technology-driven behavior change. People are using internet for everything nowadays, I do it all the time. So by ignoring media, deleting social media accounts, throwing away your phone (you know I had that in mind at some point during my phoneless experience), the idea is to take control of yourself, and your personal decision making. We are part of a huge technological evolution—people try to adopt technology in everything—but the path that we follow is important. All actions that machines are supposed to do for us, all those suggestions must be based on proper choices. Conscious choices.
                    </p>
                    <p>This article was published on <a href="https://despark.com/blog/ux-designer-without-phone" target="_blank">Despark's official blog</a></p>

                </section>
            </Grid>
        </Main>
        <Footer/>

        <style jsx>{`

        section {
          width: 100%;
        }

        `}</style>
      </MainWrapper>
      </motion.div> 
    </>
    </ThemeProvider>
  );
}

export default Impatience;
