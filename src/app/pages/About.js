import React from 'react';
import styled from 'styled-components';

import Container from './../components/Container';
import Link from './../components/Link';
import Section from './../components/Section';
import { Heading, Subheading, Text } from './../components/Typography';

// Import images
import profile from '../../images/about/profile2.jpg';
import img1920x1080 from '../../images/about/1920x1080.jpg';
import img1600x900 from '../../images/about/1600x900.jpg';
import img1280x800 from '../../images/about/1280x800.jpg';
import img768x1024 from '../../images/about/768x1024.jpg';
import img480x800 from '../../images/about/480x800.jpg';

const AboutWrapper = styled(Section)`
    padding-top: 120px;
    padding-bottom: 80px;
`

const ProfileImage = styled.img`
    width: 10em;
    border-radius: 5%;
    margin-bottom: 20px;
`

const Row = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`

const RowItem = styled.div`
    flex-grow: ${props => props.size || 0};
`

const AboutSubheading = styled(Subheading)`
    padding-top: 40px;
    margin-bottom: 0;

    & + h1 {
        margin-top: 10px;
    }
`

export default class About extends React.Component {
    render() {
        return (
            <AboutWrapper fullHeight images={[img1920x1080, img1600x900, img1280x800, img768x1024, img480x800]} overlay="rgba(0, 255, 255, 0.13)">
                <Container centered_h color="#000">
                    <Row>
                        <RowItem>
                            <AboutSubheading>Dominic Okapal</AboutSubheading>
                            <Heading>About Me</Heading>
                        </RowItem>
                        <RowItem>
                            <ProfileImage src={profile} alt={"profile"} />
                        </RowItem>
                    </Row>

                    <Text background_color="rgba(255, 255, 255, 0.18)">
                        Born and raised in Portland, Oregon I graduated from Sunset High School and served in the Air Force for 6 years.
                        Shortly after seperating from the Air Force, I got married to an amazing woman. We now have four wonderful children and live in Helena, Montana.
                    </Text>
                    <Text background_color="rgba(255, 255, 255, 0.18)">
                        I recently graduated from Portland State University with a BS in Computer Science. As electives, I have taken
                        Computational Structures, Computer Graphics, Full-Stack Web Development, Internet & Cloud Systems, Intro to Human Computer Interactions,
                        and Intro to Visual Computing.
                    </Text>
                    <Text background_color="rgba(255, 255, 255, 0.18)">
                        I really enjoyed my Capstone. It was great to work in a larger team and experience Git in that setting.
                        Being the point-of-contact, I was able to use some of what I learned in Intro to Human Computer Interactions.
                        Since our Capstone project was a web app built with Angular, I was grateful to be able to apply what I learned in Full-Stack Web Development.
                    </Text>
                    <Text background_color="rgba(255, 255, 255, 0.18)">
                        Checkout some of my work on my <Link href="/portfolio">Portfolio</Link> page!
                    </Text>
                </Container>
            </AboutWrapper>
        );
    }
}