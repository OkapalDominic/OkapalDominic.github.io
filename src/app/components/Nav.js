import React from 'react'
import styled, { css } from 'styled-components'

import Button from './Button';
import Link from './Link';

const Header = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  width: 100%;

  @media (min-width: 480px) {
    padding-right: 10%;
  }
`

const NavWrapper = styled.nav`
  padding: 16px;
  display: flex;
  justify-content: flex-end;

  @media (max-width: 479px) {
    flex-direction: column;
    align-items: flex-end;

    /* If navigation is open (show is true) */
    ${props => props.isOpen && css`
      ul {
        position: absolute;
        top: 64px;
        max-height: 1000px;
      }
    `}
  }
`

const NavList = styled.ul`
  margin: 0;
  display: flex;
  overflow: hidden;
  flex-direction: column;
  justify-content: flex-end;
  list-style-type: none;
  height: auto;
  max-height: 0;

  @media (min-width: 480px) {
    flex-direction: row;
    justify-content: flex-end;
    max-height: 1000px;
  }
`

const NavItem = styled.li`
  & + & {
    margin-top: 12px;
  }

  @media (min-width: 480px) {
    & + & {
      margin-top: 0;
      margin-left: 32px;
    }
  }

  a {
    font-size: 16px;
    font-weight: bold;
    text-decoration: none;
    color: #fff;
    transition: color .25s ease-in-out;
  }
`

const NavButton = styled(Button)`
  @media (min-width: 479px) {
    display: none;
  }
`

export default class Nav extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            show: false
        }

        this.toggleMenu = this.toggleMenu.bind(this)
    }

    toggleMenu() {
        this.setState({
            show: !this.state.show
        })
    }

    render() {
        return (
            <Header>
                <NavWrapper isOpen={this.state.show}>
                    <NavButton onClick={this.toggleMenu}>Menu</NavButton>

                    <NavList>
                        <NavItem>
                            <Link href="/">Home</Link>
                        </NavItem>

                        <NavItem>
                            <Link href="/about">About</Link>
                        </NavItem>

                        <NavItem>
                            <Link href="/portfolio">Portfolio</Link>
                        </NavItem>

                        {/* <NavItem>
                            <Link href="/contact">Contact</Link>
                        </NavItem> */}
                    </NavList>
                </NavWrapper>
            </Header>
        )
    }
}