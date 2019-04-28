// Dependencies
import React, { Component } from 'react';

// Custom components

// Styles
import './index.scss';

class About extends Component {
  render() {
    return (
      <div className="about">
        <h1 className="color--accent">I'm Dimash K.</h1>
        <p>
          I’m a Kazakh living in Prague, Frontend Developer, driven by
          curiosity, I love to develop great websites, always seeking to get my
          hands dirty with a new project.
        </p>
        <p>
          I usually work in pair with designers to translate their mockups into
          real websites.
        </p>
        <p>
          While developing I am trying to utilise time proofed methodologies and
          best practices, that's why I am using BEM methodology, Bootstrap grid
          system, Webpack bundling tool and many more.
        </p>
      </div>
    );
  }
}

export default About;
