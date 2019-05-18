import React from 'react';
import styled from 'styled-components';

import AwesomeIcon from './../components/AwesomeIcon';
import Container from './../components/Container';
import Link from './../components/Link';
import Section from './../components/Section';
import { Heading, Text } from './../components/Typography';

// Import images
import img1920x1080 from '../../images/about/1920x1080.jpg';
import img1600x900 from '../../images/about/1600x900.jpg';
import img1280x800 from '../../images/about/1280x800.jpg';
import img768x1024 from '../../images/about/768x1024.jpg';
import img480x800 from '../../images/about/480x800.jpg';

// Import resume
// import resume from '../../files/Okapal_Dominic_Resume.docx';

const ContactLink = styled(Link)`
    margin-bottom: 32px;
    display: inline-block;
    font-size: 16px;

    @media (min-width: 768px) {
        font-size: 18px;
    }
`

const SocialMediaList = styled.ul`
    padding: 0;
    margin: 0;

    li {
        display: inline-block;
        list-style-type: none;

        &:not(:last-child) {
            margin-right: 16px;
        }
    }

    a {
        font-size: 18px;

        @media (min-width: 480px) {
            font-size: 24px;
        }
    }
`

export default class Contact extends React.Component {
    render() {
        return (
            <Section fullHeight images={[img1920x1080, img1600x900, img1280x800, img768x1024, img480x800]} overlay="#8aff8a49">
                <Container centered_h padding_t="8%" color="#000">
                    <Heading>Say hello</Heading>

                    <Text>If you are interested, <Link href="mailto:dominic.okapal@gmail.com">contact me</Link>. Or checkout my <Link href={resume}>resume</Link>.</Text>

                    <ContactLink href="mailto:domiic.okapal@gmail.com">dominic.okapal@gmail.com</ContactLink>

                    <Text>Follow me on the web:</Text>

                    <SocialMediaList>
                        <li>
                            <Link href="https://github.com/OkapalDominic" target="_blank">
                                <AwesomeIcon icon="github" />
                            </Link>
                        </li>
                        <li>
                            <Link href="www.linkedin.com/in/dominic-okapal" target="_blank">
                                <AwesomeIcon icon="linkedin" />
                            </Link>
                        </li>
                    </SocialMediaList>
                </Container>
            </Section>
        );
    }
}