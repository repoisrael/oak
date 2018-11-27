import React, { Component } from 'react'
import { Container, Row, Col } from 'reactstrap';
import Logo  from '../Logo'
import Nav from '../Nav'

class Header extends Component {
  render() {
    return (
      <header id="header">
        <Container fluid={true}>
        <Logo />
        <Nav />
        </Container>
      </header>
    );
  }
}

export default Header;
