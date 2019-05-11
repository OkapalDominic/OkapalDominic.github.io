import React from 'react';
import styled from 'styled-components';

import Container from './../components/Container';
import Link from './../components/Link';
import Section from './../components/Section';
import { Heading, Subheading, Text } from './../components/Typography';

export default class About extends React.Component {
    render () {
        return (
            <Section fullHeight image="kCrrUx7US04">
                <Container centered_h padding_t="8%" color="#eeee55">
                    <Subheading>Dominic Okapal</Subheading>

                    <Heading>About Me</Heading>

                    <Text>
                        I am a student at Portland State University studying Computer Science.
                        I was born in Beaverton Oregon where I graduated from Sunset High School and
                        went into the Air Force for 6 years.
                    </Text>
                    <Text>
                        I am now married to an amazing woman with four amazing children and am looking for work as a web developer.
                    </Text>

                    <a href="mailto:dominic.okapal@gmail.com">dominic.okapal@gmail.com</a>
                </Container>
            </Section>
        )
    }
}