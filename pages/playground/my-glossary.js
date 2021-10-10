import React from "react";

import { motion } from "framer-motion";

import Metadata from "../../components/metadata";
import Link from "next/link";
import Header from "../../components/header";

const Glossary = () => (
  <motion.div
    initial={{
      y: 5,
      opacity: 0,
    }}
    animate={{
      y: [5, 1],
      opacity: 1,
    }}
    transition={{ ease: "easeOut", duration: 0.5 }}
  >
    <div className="mainWrapper">
      <Metadata title="Glossary - " />

      <Header />

      <main className="innerWrapper">
        <Link href="/playground">
          <a className="backButton">Back</a>
        </Link>

        <h1 className="heading2Xl">GLOSSARY</h1>
        <p>
          This is my personal resource that lists the methods, practices and
          ways of working I follow in design.
        </p>
        <div className="contentWrapper">
          <section>
            <details className="dicCard">
              <summary aria-haspopup="true" className="headingM">
                Analytical thinking
              </summary>
              <p>
                Analytical thinking is the ability to tackle complicated issues
                by evaluating information you’ve gathered and organized.
                Analytical thinkers can detect patterns between datasets that
                often lead to creative solutions.
              </p>
            </details>

            <details className="dicCard">
              <summary aria-haspopup="true" className="headingM">
                Bootstrapping
              </summary>
              <p>
                Bootstrapping is a term for moving ahead without external help.
                It is based on the 19th century metaphor for a impossible task:
                "to pull yourself up by your bootstraps." Despite being based on
                an analogy for the impossible, bootstrapping is considered a
                useful technique in several areas.
              </p>
            </details>

            <details className="dicCard">
              <summary aria-haspopup="true" className="headingM">
                Feedback loop
              </summary>
              <p>
                A system that allows the results of your actions to be measured.
                It is often viewed as a repeated process of strategy change
                followed by measurement of results that ultimately leads to a
                fully optimized strategy.
              </p>
            </details>

            <details className="dicCard">
              <summary aria-haspopup="true" className="headingM">
                Human Centered Design
              </summary>
              <p>
                Human-centered design is a creative approach to problem solving.
                It’s a process that starts with the people you’re designing for
                and ends with new solutions that are tailor made to suit their
                needs. Human-centered design is all about building a deep
                empathy with the people you’re designing for; generating tons of
                ideas; building a bunch of prototypes; sharing what you’ve made
                with the people you’re designing for; and eventually putting
                your innovative new solution out in the world.
              </p>
            </details>

            <details className="dicCard">
              <summary aria-haspopup="true" className="headingM">
                Modularity
              </summary>
              <p>
                Modular design is a design approach that creates things out of
                independent parts with standard interfaces. This allows designs
                to be customized, upgraded, repaired and for parts to be. A well
                known example of modular design are LEGO plastic construction
                toys and Ikea the Scandinavian-founded, worldwide furniture
                store.
              </p>
            </details>

            <details className="dicCard">
              <summary aria-haspopup="true" className="headingM">
                Nudge Theory
              </summary>
              <p>
                The idea that subtle suggestions, choices and positive
                reinforcement often achieve more influence than commands, rules
                and punishment. It has implications for government, education,
                marketing, leadership and any other domain that relies on social
                influence.
              </p>
            </details>

            <details className="dicCard">
              <summary aria-haspopup="true" className="headingM">
                Socratic method
              </summary>
              <p>
                The Socratic method (also known as method of Elenchus, elenctic
                method, or Socratic debate) is a form of cooperative
                argumentative dialogue between individuals, based on asking and
                answering questions to stimulate critical thinking and to draw
                out ideas and underlying presuppositions.
              </p>
            </details>

            <details className="dicCard">
              <summary aria-haspopup="true" className="headingM">
                System Thinking
              </summary>
              <p>
                Systems thinking is a holistic approach to analysis that focuses
                on the way that a system's constituent parts interrelate and how
                systems work over time and within the context of larger systems.
                The systems thinking approach contrasts with traditional
                analysis, which studies systems by breaking them down into their
                separate elements.
              </p>
            </details>

            <details className="dicCard">
              <summary aria-haspopup="true" className="headingM">
                Path of least resistance
              </summary>
              <p>
                Path of least resistance is the easiest path to a goal. This
                sounds like an obvious choice but can be problematic when your
                goal is narrow such that you miss the bigger picture by doing
                things the easy way. The following are illustrative examples of
                the path of least resistance.
              </p>
            </details>

            <details className="dicCard">
              <summary aria-haspopup="true" className="headingM">
                Pokayoke
              </summary>
              <p>
                Is a Japanese design term that can be translated mistake
                proofing. Japanese business culture has a minor obsession with
                preventing human error through design. Pokayoke applies to both
                the design of production techniques and end products for
                consumers (e.g. Microwave doors typically can't be open when the
                microwave is operating).
              </p>
            </details>

            <details className="dicCard">
              <summary aria-haspopup="true" className="headingM">
                Principle Of Least Astonishment
              </summary>
              <p>
                Is a rule of thumb that states that user interfaces are best
                when they aren't surprising. That is to say, that when a user
                first sees your design they aren't surprised by how it works.
                This lowers the learning curve for users and tends to generate
                positive emotions. When users need to invest in learning a
                design, they may feel that they are bending to technology as
                opposed to technology bending to them.
              </p>
            </details>
          </section>
        </div>
      </main>
    </div>
  </motion.div>
);

export default Glossary;
