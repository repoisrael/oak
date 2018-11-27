import React, { Component } from 'react'
import ListItem from "../ListItem";

class List extends Component {
  render() {
    return (
      <ul className="nav-menu">
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
      </ul>
    );
  }
}

