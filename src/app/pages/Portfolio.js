import React from 'react';
import styled from 'styled-components';

import Container from './../components/Container';
import Link from './../components/Link';
import Section from './../components/Section';
import { Heading, Subheading, Text } from './../components/Typography';

// Import images

// Import example thumbnails
import capstone from '../../images/about/examples/capstone.jpg';

const PortfolioWrapper = styled(Section)`
    padding-top: 120px;
    padding-bottom: 80px;
    background-color: #999;
`

const PortfolioGrid = styled.div`
    padding-bottom: 32px;
    display: flex;
    flex-wrap: wrap;
`

const PortfolioItemThumbnail = styled.img`
    max-width: 100%;
    object-fit: contain;
    transition: opacity .25s ease-in-out;
`

const PortfolioItemThumbnailText = styled(Text)`
    opacity: 0;
    transition: opacity .25s ease-in-out;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: black;
    background-color: #ffffff99;
    border: 1px solid #ffffff00;
    border-radius: 10px;
    text-align: center;
`

const PortfolioItem = styled.a`
    position: relative;
    display: block;
    cursor: pointer;
    width: 100%;

    &:focus,
    &:hover {
        ${PortfolioItemThumbnail} {
            opacity: .3;
        }
        ${PortfolioItemThumbnailText} {
            opacity: 1;
        }
    }

    @media (max-width: 767px) {
        &:nth-child(n+2) {
            margin-top: 16px;
        }
    }

    @media (min-width: 768px) and (max-width: 991px) {
        width: calc(50% - 32px);

        &:nth-child(odd) {
            margin-right: 32px;
        }

        &:nth-child(even) {
            margin-left: 32px;
        }

        &:nth-child(n+3) {
            margin-top: 48px;
        }
    }

    @media (min-width: 992px) {
        width: calc(33.33333% - 32px);

        &:first-child,
        &:nth-child(4),
        &:nth-child(7) {
            margin-right: 32px;
        }

        &:nth-child(2),
        &:nth-child(4),
        &:nth-child(8) {
            margin-left: 16px;
            margin-right: 16px;
        }

        &:nth-child(3),
        &:nth-child(6),
        &:last-child {
            margin-left: 32px;
        }

        &:nth-child(n+4) {
            margin-top: 24px;
        }
    }
`

export default class Portfolio extends React.Component {
    render() {
        return (
            <PortfolioWrapper>
                <Container centered_h>
                    <Subheading>Dominic Okapal</Subheading>

                    <Heading>My work</Heading>

                    <Text>
                        Selected examples of my work.  If you want to see more, drop me an email.
                    </Text>

                    <PortfolioGrid>
                        <PortfolioItem href="../examples/capstone/index.html">
                            <PortfolioItemThumbnail
                                src={capstone}
                                alt="Example of work"
                            />
                            <PortfolioItemThumbnailText>
                                This is a mockup I made for my capstone project.  A webapp written with Angular for the VA.
                            </PortfolioItemThumbnailText>
                        </PortfolioItem>
                        <PortfolioItem href="">
                            <PortfolioItemThumbnail src="https://source.unsplash.com/-aDl1z8_nGY/600x600" srcSet="https://source.unsplash.com/-aDl1z8_nGY/600x600 1x, https://source.unsplash.com/-aDl1z8_nGY/1200x1200 2x" alt="Example of work" />
                        </PortfolioItem>

                        <PortfolioItem href="">
                            <PortfolioItemThumbnail src="https://source.unsplash.com/qvEwMfUX_DM/600x600" srcSet="https://source.unsplash.com/qvEwMfUX_DM/600x600 1x, https://source.unsplash.com/qvEwMfUX_DM/1200x1200 2x" alt="Example of work" />
                        </PortfolioItem>

                        <PortfolioItem href="">
                            <PortfolioItemThumbnail src="https://source.unsplash.com/9QjbejABFn8/600x600" srcSet="https://source.unsplash.com/9QjbejABFn8/600x600 1x, https://source.unsplash.com/9QjbejABFn8/1200x1200 2x" alt="Example of work" />
                        </PortfolioItem>

                        <PortfolioItem href="">
                            <PortfolioItemThumbnail src="https://source.unsplash.com/cDD83wV627U/600x600" srcSet="https://source.unsplash.com/cDD83wV627U/600x600 1x, https://source.unsplash.com/cDD83wV627U/1200x1200 2x" alt="Example of work" />
                        </PortfolioItem>

                        <PortfolioItem href="">
                            <PortfolioItemThumbnail src="https://source.unsplash.com/KDYcgCEoFcY/600x600" srcSet="https://source.unsplash.com/KDYcgCEoFcY/600x600 1x, https://source.unsplash.com/KDYcgCEoFcY/1200x1200 2x" alt="Example of work" />
                        </PortfolioItem>

                        <PortfolioItem href="">
                            <PortfolioItemThumbnail src="https://source.unsplash.com/oKfCxcKnCo8/600x600" srcSet="https://source.unsplash.com/oKfCxcKnCo8/600x600 1x, https://source.unsplash.com/oKfCxcKnCo8/1200x1200 2x" alt="Example of work" />
                        </PortfolioItem>

                        <PortfolioItem href="">
                            <PortfolioItemThumbnail src="https://source.unsplash.com/dClHqW-EfS8/600x600" srcSet="https://source.unsplash.com/dClHqW-EfS8/600x600 1x, https://source.unsplash.com/dClHqW-EfS8/1200x1200 2x" alt="Example of work" />
                        </PortfolioItem>

                        <PortfolioItem href="">
                            <PortfolioItemThumbnail src="https://source.unsplash.com/74elF-XSsPg/600x600" srcSet="https://source.unsplash.com/74elF-XSsPg/600x600 1x, https://source.unsplash.com/74elF-XSsPg/1200x1200 2x" alt="Example of work" />
                        </PortfolioItem>
                    </PortfolioGrid>

                    <Text>Let's get in touch:</Text>

                    <Link href="mailto:dominic.okapal@gmail.com">dominic.okapal@gmail.com</Link>
                </Container>
            </PortfolioWrapper>
        )
    }
}