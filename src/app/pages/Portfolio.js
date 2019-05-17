import React from 'react';
import styled from 'styled-components';

import Container from './../components/Container';
import Link from './../components/Link';
import Section from './../components/Section';
import { Heading, Subheading, Text } from './../components/Typography';

// Import images
import img1920x1080 from '../../images/about/1920x1080.jpg';
import img1600x900 from '../../images/about/1600x900.jpg';
import img1280x800 from '../../images/about/1280x800.jpg';
import img768x1024 from '../../images/about/768x1024.jpg';
import img480x800 from '../../images/about/480x800.jpg';

// Import example thumbnails
import capstoneMockup from '../../images/portfolio/examples/capstoneMockup.jpg';
import capstoneRepo from '../../images/portfolio/examples/capstoneRepo.jpg';
import animal_analysis from '../../images/portfolio/examples/animal_analysis.jpg';
import game from '../../images/portfolio/examples/game.jpg';

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
    width: 98%;
    padding: 3px;
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
            <PortfolioWrapper fullHeight images={[img1920x1080, img1600x900, img1280x800, img768x1024, img480x800]} overlay="#ffff0022">
                <Container centered_h>
                    <Subheading>Dominic Okapal</Subheading>

                    <Heading>My work</Heading>

                    <Text>
                        Selected examples of my work.
                    </Text>

                    <PortfolioGrid>
                        <PortfolioItem href="../examples/capstone/index.html">
                            <PortfolioItemThumbnail
                                src={capstoneMockup}
                                alt="Mockup for capstone project"
                            />
                            <PortfolioItemThumbnailText>
                                This is a mockup I made for my capstone project.  A webapp written with Angular for the VA.
                            </PortfolioItemThumbnailText>
                        </PortfolioItem>

                        <PortfolioItem href="https://github.com/movshov/VA-Audiology-App" target="_blank">
                            <PortfolioItemThumbnail 
                            src={capstoneRepo}
                            alt="Repository for capstone project"
                            />
                            <PortfolioItemThumbnailText>
                                This is the repository where my actual capstone project is being hosted.<br/>
                                Search <strong>author:OkapalDominic</strong> in this repository to see my branches.
                            </PortfolioItemThumbnailText>
                        </PortfolioItem>

                        <PortfolioItem href="https://github.com/OkapalDominic/animal_analysis" target="_blank">
                            <PortfolioItemThumbnail
                            src={animal_analysis}
                            alt="Animal Analysis" />
                            <PortfolioItemThumbnailText>
                                This repo contains a project made using Flask, originally deployed to google cloud.  Upload an image of an animal
                                and write about it.  It then looks up information on that animal.  There are instructions if you want to try it out.
                            </PortfolioItemThumbnailText>
                        </PortfolioItem>

                        <PortfolioItem href="/examples/game">
                            <PortfolioItemThumbnail
                            src={game}
                            alt="Drag game" />
                            <PortfolioItemThumbnailText>
                                This is a simple game made using react.  See if you can reach the exit!
                            </PortfolioItemThumbnailText>
                        </PortfolioItem>
                    </PortfolioGrid>
                </Container>
            </PortfolioWrapper>
        )
    }
}