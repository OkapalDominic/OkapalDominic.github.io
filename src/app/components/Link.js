import styled from 'styled-components';

const Link = styled.a`
    font-weight: bold;
    text-decoration: none;
    color: #3a3a99;
    transition: color .25s ease-in-out;

    &:focus,
    &:hover {
        color: #006666;
    }
`

export default Link;