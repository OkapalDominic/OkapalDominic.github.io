import styled from 'styled-components';

const Button = styled.button`
  padding: 8px 12px;
  font-size: 16px;
  font-weight: 700;
  text-decoration: none;
  text-transform: uppercase;
  color: #fff;
  background: transparent;
  border: 2px solid;
  cursor: pointer;
  transition: color .25s ease-in-out;

  &:hover {
    border-color: #006666;
    color: #009999;
    background: #005555;
  }

  &:active {
    color: #005555;
    background: #009999;
  }
`

export default Button;