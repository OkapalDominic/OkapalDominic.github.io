import styled, { css } from 'styled-components';

import Container from './Container';

const Section = styled.section`
    ${props => props.fullHeight && css`
        height: 100%;
    `}
    
    ${props => (props.centered_h || props.centered_v || props.centered_hv) && css`
        position: relative;
        display: flex;
        flex-direction: column;
    `}
    ${props => (props.centered_h || props.centered_hv) && css`
        align-items: center;
    `}

    ${props => (props.centered_v || props.centered_hv) && css`
        justify-content: center;
    `}

    ${Container} {
        position: relative;
        z-index: 2;
    }

    ${props => props.image && css`
        background-image: url(https://source.unsplash.com/${props => props.image}/480x800);
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;

        @media (min-width: 480px) {
            background-image: url(https://source.unsplash.com/${props => props.image}/768x1024);
        }

        @media (min-width: 768px) {
            background-image: url(https://source.unsplash.com/${props => props.image}/1280x800);
        }

        @media (min-width: 1280px) {
            background-image: url(https://source.unsplash.com/${props => props.image}/1600x900);
        }

        @media (min-width: 1600px) {
            background-image: url(https://source.unsplash.com/${props => props.image}/1920x1080);
        }

        &::before {
            position: absolute;
            top: 0;
            left: 0;
            z-index: 1;
            content: '';
            width: 100%;
            height: 100%;
            background-color: ${props => props.overlay || '#00000066'};
        }

    `}

`

export default Section;