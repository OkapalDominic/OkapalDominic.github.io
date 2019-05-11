import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router';

import Button from './../components/Button';
import Container from './../components/Container';
import Section from './../components/Section';

// Import Typography components
import { Heading, Subheading } from './../components/Typography'

// Using Button component but changing the element to 'a'
const HomeButton = Button.withComponent('a')

export default class Home extends React.Component {
  render() {
    return (
      <Section fullHeight image="U0tBTn8UR8I">
        <Container centered_h padding_t="8%" color="#fff">
          <Heading>Dominic Okapal</Heading>

          <Subheading>Designer & developer</Subheading>

          <HomeButton href="/portfolio">My work</HomeButton>
        </Container>
      </Section>
    );
  }
}