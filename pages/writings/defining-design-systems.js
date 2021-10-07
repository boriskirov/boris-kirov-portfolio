import React from "react";

import { motion } from "framer-motion";

import HeadData from "../components/headata";
import Link from "next/link";
import Header from "../components/header";

function DefineDesignSystems() {
  return (
    <>
      <motion.div
        initial={{
          y: 25,
          opacity: 0,
        }}
        animate={{
          y: [25, 1],
          opacity: 1,
        }}
        transition={{ ease: "easeOut", duration: 0.5 }}
      >
        <div className="mainWrapper">
          <HeadData />

          <Header />

          <main className="innerWrapper">
            <Link href="/writings">
              <a className="backButton">Back</a>
            </Link>
            <h1 className="heading2Xl">DEFINING A DESIGN SYSTEM</h1>
            <info dateTime="2018-07-24">Jul 24, 2019</info>

            <div className="contentWrapper">
              <section>
                <blockquote>
                  System is “the whole creation, the universe,” from Late Latin
                  systema “an arrangement, system,” from Greek systema
                  “organized whole, a whole compounded of parts”.
                </blockquote>
                <p>
                  <span className="dropCap">D</span> esign systems have been
                  around for quite some time now. Organizations keep
                  incorporating them in order to be relevant and quick into the
                  dynamic and fierce digital world. Businesses keep growing and
                  expanding into different mediums, devices and ways to
                  communicate with their users and customers, so the systems are
                  here to help bridge those gaps in the most efficient way
                  possible.
                </p>
                <p>
                  In this post, I will try to give a definition of a design
                  system and how the systematic approach is connected with us by
                  nature.
                </p>
                <img src="/defining-design-systems-app-1.jpeg" />

                <h3 className="headingL">1. Human by design</h3>
                <p>
                  Design has always been a human act. Designers are here to
                  help, create, plan, and execute ideas, which at the end should
                  serve a purpose. Designers are so much more than before, so
                  much more involved in every level of the business and the
                  organization’s body.
                </p>
                <p>
                  We often talk about how an organization is like a living
                  organism. Organizations in their core are just like us, they
                  keep growing, changing, and improving for one main reason — to
                  survive. Why do we make these analogies? Why are we looking
                  for ways to compare the human body with the organization’s
                  body? Let’s think about that a bit more by having a proper
                  definition for the human body.
                </p>
                <blockquote>
                  <h4>
                    <a href="https://www.livescience.com/37009-human-body.html">
                      Human body
                    </a>
                  </h4>
                  The human body is everything that makes up, well, you. Our
                  bodies consist of a number of biological systems that carry
                  out specific functions necessary for everyday living.
                </blockquote>
                <p>
                  The human body consists of biological systems that we can call
                  body systems. Here is a definition of what a body system is:
                </p>
                <blockquote>
                  <h4>
                    <a href="https://biologydictionary.net/body-systems/">
                      Body systems
                    </a>
                  </h4>
                  Body systems are groups of organs and tissues that work
                  together to perform important jobs for the body.
                </blockquote>
                <p>
                  This definition really stuck in my mind. As humans, we are a
                  combination of different systems and we simply work like that.
                  Think about it… Here are the 10 systems that combined together
                  create the body system (we all know them by heart).
                </p>

                <ul>
                  <li>
                    <strong>Respiratory system</strong> is the one that takes
                    the oxygen provided by the environment and
                    converts/translates it into a form that our cells can use.
                  </li>
                  <li>
                    <strong>Digestive system</strong> is the one that takes food
                    and process it to obtain useful nutrients.
                  </li>
                  <li>
                    <strong>Cardiovascular/Circulatory system</strong> is the
                    one that provides an efficient way of moving substances
                    around the body. Fun fact: the body’s entire blood takes
                    around a minute to circulate.
                  </li>
                  <li>
                    <strong>Urinary system</strong>,keeps our body healthy, by
                    removing some of the waste that we produce from the
                    digestive system.
                  </li>
                  <li>
                    <strong>Endocrine system</strong>,consists of a number of
                    tissues that send out chemical messages — called ‘hormones’
                    — to the rest of the body.
                  </li>
                  <li>
                    <strong>Nervous system</strong>,allows us to sense stimuli
                    such as light, sound, smell, and touch from our environment.
                  </li>
                  <li>
                    <strong>Musculoskeletal system</strong>,operates to move the
                    organism and stimulate the internal organs.
                  </li>
                  <li>
                    <strong>Exocrine system</strong>, covers the body and
                    protects it from the outside world, we are talking skin,
                    nails, hair, etc.
                  </li>
                  <li>
                    <strong>Immune system</strong>, we are made from carbs,
                    proteins and lipids, which means that there are other
                    organisms that want to eat us. The immune system helps us
                    fights those unwelcome guests.
                  </li>
                  <li>
                    <strong>Reproductive system</strong>, the only system which
                    is not crucial for the survival of the individual, but
                    essential for the survival of the species.
                  </li>
                </ul>

                <p>
                  We have 10 different systems in our body, each of these
                  systems has its own small microsystem and way of operating,
                  and by doing that the whole body communicates and operates.
                  Think about how many connections and dependencies there are
                  and how they work together, so you can even read this article.
                  An organization ideally should work the same way in the
                  context of the business and services of course.
                </p>
                <img src="/defining-design-systems-app-2.jpeg" />

                <p>
                  Here is an interesting comparison between the brain of the
                  human body and the brain of the organization’s body.
                </p>

                <ul>
                  <li>
                    The brain can be thought of as the control center that
                    receives data, analyses it, and then commands the body to
                    respond. In order to fire these signals, neurons must use
                    huge amounts of energy. Then a response comes, you can
                    assume a response as any physical or mental act that is done
                    after the signal is sent back. Even scrolling down through
                    the next paragraph of this article requires a command and
                    response process.
                  </li>
                  <li>
                    The company’s headquarters are the brain of the
                    organization. In order to receive a signal for a problem,
                    the organization must be connected to all the other parts of
                    the whole. There should be time to review, analyze, and
                    decide how to act. Then another layer of time is taken for
                    the response to go back to the organs and systems of the
                    organization's body which are dependent on that response.
                  </li>
                </ul>
                <p>
                  So you see this is how we work, we are a chain of systems that
                  work together. Everything in our body is connected and in
                  constant communication. We can say that we try to incorporate
                  everything into our lives with the systematic approach. Humans
                  are designed by systems. The main reason why we approach
                  design so much with systematic thinking nowadays is that
                  organizations become more complex and bigger. It is hard to
                  simplify the processes without the use of systems. This could
                  be our native and organic way of finding a solution in order
                  to communicate with everything. We by nature communicate that
                  way.
                </p>
                <p>
                  Let’s try to think about design systems now, and how they fit
                  in the context of the stated above. But first let’s try to
                  give a definition of what a system is.
                </p>

                <h3 className="headingL">2. What is a system?</h3>
                <p>
                  I am a fan of knowing what I use, every word has its own
                  meaning and sometimes the meaning gets blurred in order to
                  correspond to the situations we are in. But to give a
                  definition of what a design system is, first we have to look
                  through the core definition and then try to translate it in
                  the context of design. Here are some definitions of what a
                  system is:
                </p>

                <h4>System is:</h4>
                <ul>
                  <li>
                    a set of connected things or devices that operate together
                    <a href="https://dictionary.cambridge.org/dictionary/english/system">
                      Cambridge Dictionary
                    </a>
                  </li>
                  <li>
                    a group of interacting or interrelated entities that form a
                    unified whole
                    <a href="https://en.wikipedia.org/wiki/System">Wikipedia</a>
                  </li>
                  <li>
                    a regularly interacting or interdependent group of items
                    forming a unified whole
                    <a href="https://www.merriam-webster.com/dictionary/system">
                      Merriam Webster Dictionary
                    </a>
                  </li>
                  <li>
                    an assemblage or combination of things or parts forming a
                    complex or unitary whole
                    <a href="https://www.dictionary.com/browse/system">
                      Dictionary.com
                    </a>
                  </li>
                  <li>
                    a cohesive conglomeration of interrelated and interdependent
                    parts that can be natural or human-made.
                    <a href="https://en.wikipedia.org/wiki/Systems_theory">
                      Wikipedia System theory definition
                    </a>
                  </li>
                </ul>

                <p>
                  So we can see every source has its own way of defining what a
                  system is but in the end, there are a few keywords and one
                  idea that sticks, right? Let me give you a hint here:
                </p>

                <ul>
                  <li>connected things</li>
                  <li>group of interacting or interrelated entities</li>
                  <li>items forming a unified whole</li>
                  <li>combination of things</li>
                  <li>cohesive conglomeration</li>
                  <li>connected things</li>
                </ul>
                <p>
                  Systems are all about connection, unification and
                  communication in a comprehensive way.
                </p>

                <h3 className="headingL">3. Methods and processes</h3>
                <p>
                  A system is there to connect, unify, and communicate
                  processes. A design system then should be something to connect
                  and unify the process of creation, delivery and handover of а
                  products or services from a design perspective.
                </p>
                <blockquote>
                  When you’re doing design systems work in your organization,
                  you are actually building a community. —
                  <a href="When you’re doing design systems work in your organization, you are actually building a community. — Jina Anne">
                    Jina Anne
                  </a>
                </blockquote>
                <p>
                  It’s fundamental to have your whole team on board to follow a
                  systematic way of working. Being a single player in a
                  team-based activity such as building a product, will never
                  work. By default, the world has spread that the designer is
                  the one that should be responsible for building a design
                  system, but with time this would change and it is changing. We
                  see more and more that companies are looking for a group of
                  people, most of the time a full-blown team, a UX engineer
                  backed up by a team of developers, content writers and
                  business teams such as product owners, marketing teams, etc.
                  working as a single unit in order to communicate and unify the
                  design system experience in the organization.
                </p>
                <p>
                  Every person in that scenario has his own expertise, and that
                  is the point of every team. The end goal is the team to be
                  aligned and follow this methodology of working and translate
                  them to other teams. Some will be involved in the way of
                  preparing, some involved in the way of producing, and some
                  involved in the way of presenting.
                </p>
                <img src="/defining-design-systems-app-3.jpeg" />
                <p>
                  We see more and more that this unified approach of having one
                  single source of truth is not very efficient and helpful
                  though. The dream of consistency gets blurred because people
                  still have different needs and fall into different groups. We
                  are constantly talking about different mediums, scenarios, and
                  devices, so this creates an inconsistency of using a
                  consistent approach.
                </p>
                <p>
                  We feel the future is brought by those big services and
                  products that are expanding in different ways and forms. The
                  Spotify Encore solution feels like something that would create
                  a pattern of where design is going. Similar to the statements
                  above, you have one system connected to multiple microsystems
                  that are responsible for their own part and organ.
                </p>
                <p>
                  Having one design system which actually works with other small
                  micro-design systems would be the best solution to the many
                  different cases we are trying to cover.
                </p>

                <h3 className="headingL">
                  4. There is one design system in the end
                </h3>
                <p>
                  Design systems are inclusive. Тhey involve every part of the
                  product, the organization, the service, the business, the
                  visual design, the code, the process. But then what about some
                  questions that come right away like:
                </p>
                <ol>
                  <li>Is the Sketch library file the design system?</li>
                  <li>Is the storybook documentation the design system?</li>
                  <li>
                    Is the docz.site markdown documentation the design system?
                  </li>
                  <li>
                    Should we include the brand guidelines and marketing
                    statements in the system too?
                  </li>
                </ol>
                <p>Then by looking for the answer, more questions come up:</p>
                <ol>
                  <li>Who are the people responsible for it?</li>
                  <li>
                    Is the front-end team the one that is responsible for
                    keeping the documentation of the design system up to date?
                  </li>
                  <li>
                    Are the designers the ones responsible for the component kit
                    which is actually the design system?
                  </li>
                  <li>
                    Where does a product owner or any other product member fit
                    in the design system?
                  </li>
                  <li>
                    Does the business and management have a word in that design
                    system?
                  </li>
                  <li>
                    Is that only related to components and visual assets, what
                    about non quantitative items?
                  </li>
                  <li>Can we measure this? How?</li>
                </ol>
                <p>
                  It is easier to think in deliverables, in artifacts, in
                  things, but there can be multiple truths of what a design
                  system is, and it will always depend on the organization that
                  you are in. The design system can be that UI kit, these weekly
                  updates, the retro’s you do every sprint, a well-documented
                  website with all components switching smoothly from visuals to
                  code. It can be just the person communicating between the
                  designers and developers in order to create an understanding
                  between them. You should be open and flexible to identify
                  where the need is and to focus to improve it.
                </p>
                <p>
                  In the end, it all comes to one thing — it is a process, a
                  service, a way of working that serves to communicate between
                  different team members in order to achieve a better, improved,
                  and stable environment for moving forward. The same as the
                  organization, the design system is a living organism. It can
                  evolve and change in order to survive the never-ending dynamic
                  of the world, but in the end, the core remains. You are just
                  building an interactive or interdependent group of items
                  forming a unified whole.
                </p>
                <img src="/defining-design-systems-app-4.jpeg" />

                <h3 className="headingL">Design system definition</h3>
                <p>
                  As humans, we are chains of systems that are constantly
                  communicating with each other, and we try to humanize
                  everything we do. We use systems as tools to communicate
                  complex processes and connect them in a unified and
                  comprehensive way. So by saying all this we should be able to
                  give a definition for design system:
                </p>
                <blockquote>
                  A design system is a collaborative method for the creation of
                  cohesive and consistent solutions related to products and
                  services. It is up to the team to define which artifacts and
                  tools are needed to relate and solve this problem.
                </blockquote>
                <p>
                  🏴‍☠️ Illustrations done by{" "}
                  <a
                    href="https://www.instagram.com/piratejazzy/"
                    target="_blank"
                  >
                    Pirate Jazzy
                  </a>
                </p>

                <a className="mainCard" href="/writings/nda">
                  <div>
                    <h3 className="headingL">
                      Implementing design system thinking to a product
                    </h3>
                  </div>
                  <small>Read more</small>
                </a>
              </section>
            </div>
          </main>
        </div>
      </motion.div>
    </>
  );
}

export default DefineDesignSystems;
