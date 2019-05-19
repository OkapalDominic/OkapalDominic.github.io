import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router';

import Button from './../components/Button';
import Container from './../components/Container';
import Section from './../components/Section';

// Import Typography components
import { Heading, Subheading } from './../components/Typography'

// Import images
import img1920x1080 from '../../images/home/1920x1080.jpg';
import img1600x900 from '../../images/home/1600x900.jpg';
import img1280x800 from '../../images/home/1280x800.jpg';
import img768x1024 from '../../images/home/768x1024.jpg';
import img480x800 from '../../images/home/480x800.jpg';

// Using Button component but changing the element to 'a'
const HomeButton = Button.withComponent('a');

export default class Home extends React.Component {
  render() {
    return (
      <Section fullHeight images={[img1920x1080, img1600x900, img1280x800, img768x1024, img480x800]} overlay="rgba(0, 0, 0, 0.53)">
        <Container centered_h padding_t="8%" color="#fff">
          <Heading>Dominic Okapal</Heading>

          <Subheading>Designer & developer</Subheading>

          <HomeButton href="/portfolio">Portfolio</HomeButton>
        </Container>
      </Section>
    );
  }
}