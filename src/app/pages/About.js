import React from 'react';
import styled from 'styled-components';

import Container from './../components/Container';
import Link from './../components/Link';
import Section from './../components/Section';
import { Heading, Subheading, Text } from './../components/Typography';

// Import images
import profile from '../../images/about/profile.jpg';
import img1920x1080 from '../../images/about/1920x1080.jpg';
import img1600x900 from '../../images/about/1600x900.jpg';
import img1280x800 from '../../images/about/1280x800.jpg';
import img768x1024 from '../../images/about/768x1024.jpg';
import img480x800 from '../../images/about/480x800.jpg';

const ProfileImage = styled.img`
    width: 10em;
    border-radius: 50%;
    border: 5px solid #663333;
`

const Row = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
`

const RowItem = styled.div`
    flex-grow: ${props => props.size || 0};
`

export default class About extends React.Component {
    render() {
        return (
            <Section fullHeight images={[img1920x1080, img1600x900, img1280x800, img768x1024, img480x800]} overlay="#00ffff22">
                <Container centered_h padding_t="8%" color="#000">
                    <Row>
                        <RowItem>
                            <Subheading>Dominic Okapal</Subheading>
                            <Heading>About Me</Heading>
                        </RowItem>
                        <RowItem>
                            <ProfileImage src={profile} alt={"profile"} />
                        </RowItem>
                    </Row>

                    <Text background_color="#ffffff2f">
                        I was born and raised in Portland, Oregon. Upon graduating from Sunset High School, I joined the Air Force and served for 6 years.
                        Shortly after moving back to Portland, I got married to an amazing woman. We now have four wonderful children.
                    </Text>
                    <Text background_color="#ffffff2f">
                        Currently, I am working toward a Computer Science degree at Portland State University. As electives, I have taken
                        Computational Structures, Computer Graphics, Full-Stack Web Development, Internet & Cloud Systems, Intro to Human Computer Interactions,
                        and Intro to Visual Computing.  I really enjoyed my Capstone.  It was great to work in a large team and experience Git in that setting.
                        Being the point-of-contact, I was able to use what I learned in Intro to Human Computer Interactions.
                        Since our Capstone project was a web app built with Angular, I was grateful to be able to apply what I learned in Full-Stack Web Development.
                    </Text>
                    <Text background_color="#ffffff2f">
                        I am excited to jump start my career as a web developer.
                    </Text>
                </Container>
            </Section>
        )
    }
}