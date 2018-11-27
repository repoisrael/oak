import React, { Component } from 'react'

import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'


class Nav extends Component {
  render() {
    return (
      <nav id="nav-menu-container">
        <List>
        <ListItem class="menu-active" ><a href="#intro">ראשי</a></ListItem>
            <ListItem><a href="#about">אודותנו</a></ListItem>
            <ListItem><a href="#services">שירותנו</a></ListItem>
            <ListItem><a href="#portfoListItemo">תיק עבודות</a></ListItem>
            <ListItem><a href="#team">צוות</a></ListItem>
            <ListItem class="menu-has-children"><a href="">רשת חברתית</a>
              <List>
                <ListItem><a href="#">טלפון</a></ListItem>
                <ListItem><a href="#">מייל</a></ListItem>
                <ListItem><a href="#">וואצאפ</a></ListItem>
                <ListItem><a href="#">פייסבוק</a></ListItem>
              </List>
            </ListItem>
            <ListItem><a href="#contact">צור קשר</a></ListItem>
         </List>
      </nav>
    );
  }
}
