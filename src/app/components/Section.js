import styled, { css } from 'styled-components';

import Container from './Container';

const Section = styled.section`
    ${props => props.fullHeight && css`
        min-height: 100%;
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

    ${props => props.images && css`
        background-image: url(${props => props.images[4]});
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
        background-attachment: fixed;

        @media (min-width: 480px) {
            background-image: url(${props => props.images[3]});
        }

        @media (min-width: 768px) {
            background-image: url(${props => props.images[2]});
        }

        @media (min-width: 1280px) {
            background-image: url(${props => props.images[1]});
        }

        @media (min-width: 1600px) {
            background-image: url(${props => props.images[0]});
        }

        &::before {
            position: fixed;
            top: 0;
            left: 0;
            content: '';
            width: 100%;
            height: 100%;
            background-color: ${props => props.overlay || '#00000066'};
        }

    `}

`

export default Section;