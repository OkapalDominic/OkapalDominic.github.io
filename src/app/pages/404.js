import React from 'react';
import styled from 'styled-components';

import Button from '../components/Button';
import Container from './../components/Container';
import Link from './../components/Link';
import Section from './../components/Section';
import { Heading, Subheading, Text } from './../components/Typography';

const HomeButton = Button.withComponent('a');

export default class FourOhFour extends React.Component {
    render() {
        return (
            <Section fullHeight>
                <Container centered_h padding_t="8%" color="#fff">
                    <Heading>Uh Oh!</Heading>
                    <Subheading>404!?</Subheading>

                    <Text>I don't think there's anything here...</Text>
                    <HomeButton href="/">Try starting over.</HomeButton>
                </Container>
            </Section>
        );
    }
}