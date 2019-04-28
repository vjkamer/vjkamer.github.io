// Dependencies
import React, { Component } from 'react';
import { Row, Col, Image } from 'react-bootstrap';
import avatar from '../../images/avatar.jpg';

// Custom components
import SocialIcons from '../SocialIcons/';

// Styles
import './index.scss';

class Sidebar extends Component {
  render() {
    return (
      <div className="sidebar">
        <Row className="sidebar__row--logo" noGutters>
          <Col className="text-center text-md-right" xs={12}>
            <Image className="sidebar__logo" src={avatar} />
          </Col>
        </Row>
        <Row className="sidebar__row--social-icons" noGutters>
          <Col className="text-center text-md-right" xs={12}>
            <SocialIcons />
          </Col>
        </Row>
      </div>
    );
  }
}

export default Sidebar;
