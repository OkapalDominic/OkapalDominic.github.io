import React from 'react';
import styled from 'styled-components';

import AwesomeIcon from './../components/AwesomeIcon';
import Container from './../components/Container';
import Link from './../components/Link';
import Section from './../components/Section';
import { Heading, Text } from './../components/Typography';

// Import images
import profile from '../../images/about/profile2.jpg';
import img1920x1080 from '../../images/about/1920x1080.jpg';
import img1600x900 from '../../images/about/1600x900.jpg';
import img1280x800 from '../../images/about/1280x800.jpg';
import img768x1024 from '../../images/about/768x1024.jpg';
import img480x800 from '../../images/about/480x800.jpg';

// Import resume
import resume from '../../files/Okapal_Dominic_Resume.docx';

const ContactWrapper = styled(Section)`
    padding-top: 120px;
    padding-bottom: 80px;
`

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

const Row = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;

    @media (max-width: 479px) {
        flex-direction: column-reverse;
    }
`

const RowItem = styled.div`
    flex-grow: ${props => props.size || 0};
    & + & {
        margin-left: 1%;
    }
`

const ProfileImage = styled.img`
    width: 10em;
    border-radius: 5%;
    margin-bottom: 20px;
`

export default class Contact extends React.Component {
    render() {
        return (
            <ContactWrapper fullHeight images={[img1920x1080, img1600x900, img1280x800, img768x1024, img480x800]} overlay="rgba(138, 255, 138, 0.29)">
                <Container centered_h color="#000">
                    <Heading>Say hello</Heading>
                    <Row>
                        <RowItem>
                            <Text>Email me <Link href="mailto:dominic.okapal@gmail.com">dominic.okapal@gmail.com</Link>.</Text>

                            <Text>Checkout my <Link href={resume}>resume</Link>.</Text>

                            <Text>Follow me on the web:</Text>

                            <SocialMediaList>
                                <li>
                                    <Link href="https://github.com/OkapalDominic" target="_blank">
                                        <AwesomeIcon icon="github" />
                                    </Link>
                                </li>
                                <li>
                                    <Link href="https://www.linkedin.com/in/dominic-okapal" target="_blank">
                                        <AwesomeIcon icon="linkedin" />
                                    </Link>
                                </li>
                            </SocialMediaList>
                        </RowItem>
                        <RowItem>
                            <ProfileImage src={profile} alt={"profile"} />
                        </RowItem>
                    </Row>
                </Container>
            </ContactWrapper>
        );
    }
}