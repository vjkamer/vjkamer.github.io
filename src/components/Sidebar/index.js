// Dependencies
import React, { Component } from 'react';
import { Row, Col, Image } from 'react-bootstrap';

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
            <Image className="sidebar__logo" src="https://media.licdn.com/dms/image/C5103AQFOOsNhg7ThKw/profile-displayphoto-shrink_800_800/0?e=1562198400&v=beta&t=USjBK_MtYuljYFkuqQiOGlwRkFR2vPuS2lkiu1Qb7Wo" />
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
