import React from 'react';
import { AnimationOnScroll } from 'react-animation-on-scroll';

import Container from '../Logic/Container';

import src from '../../img/about-pets.svg';

const About = () => {
  return (
    <section className="about">
      <Container>
        <img src={src} alt="about-pets" />
        <AnimationOnScroll animateIn="animate__slideInRight" animateOnce={true} duration={0.5}>
          <article>
            <h3 className="h3-text">
              About the shelter <br />
              “Cozy House”
            </h3>
            <p className="paragraph-l">
              Currently we have 121 dogs and 342 cats on our hands and statistics show that only 20%
              of them will find a family. The others will continue to live with us and will be
              waiting for a lucky chance to become dearly loved.
            </p>
            <p className="paragraph-l">
              We feed our wards with the best food and make sure that they do not get sick, feel
              comfortable (including psychologically) and well. We are supported by 87 volunteers
              and 28 employees of various skill levels. About 12% of the animals are taken by the
              shelter staff. Taking care of the animals, they become attached to the pets and would
              hardly ever leave them alone.
            </p>
          </article>
        </AnimationOnScroll>
      </Container>
    </section>
  );
};

export default About;
