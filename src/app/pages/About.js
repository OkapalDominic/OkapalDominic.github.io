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

export default class About extends React.Component {
    render () {
        return (
            <Section fullHeight images={[img1920x1080, img1600x900, img1280x800, img768x1024, img480x800]} overlay="#00ffff22">
                <Container centered_h padding_t="8%" color="#fff">
                    <div style={{float: 'left'}}>
                    <Subheading>Dominic Okapal</Subheading>

                    <Heading>About Me</Heading>
                    </div>
                    <ProfileImage src={profile} alt={"profile"} />

                    <Text background_color="#0000002f">
                        I am a student at Portland State University studying Computer Science.
                        I was born in Beaverton Oregon where I graduated from Sunset High School and
                        went into the Air Force for 6 years.
                    </Text>
                    <Text background_color="#0000002f">
                        I am now married to an amazing woman with four amazing children and am looking for work as a web developer.
                    </Text>

                    <Link href="mailto:dominic.okapal@gmail.com">dominic.okapal@gmail.com</Link>
                </Container>
            </Section>
        )
    }
}