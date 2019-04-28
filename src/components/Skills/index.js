// Dependencies
import React, { Component } from 'react';

// Custom components

// Styles
import './index.scss';

class Skills extends Component {
  render() {
    return (
      <ul className="skills-list transparent-little">
        <li className="skills-list__item">
          <i className="fab fa-html5" /> HTML
        </li>
        <li className="skills-list__item">
          <i className="fab fa-css3-alt" /> CSS
          <ul className="skills-list skills-list--inner">
            <li className="skills-list__item skills-list__item--inner">
              <a
                href="https://sass-lang.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Sass/Scss
              </a>
            </li>
            <li className="skills-list__item skills-list__item--inner">
              <a
                href="https://getbootstrap.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Bootstrap
              </a>
            </li>
            <li className="skills-list__item skills-list__item--inner">
              <a
                href="https://en.bem.info/methodology/"
                target="_blank"
                rel="noopener noreferrer"
              >
                BEM
              </a>
            </li>
          </ul>
        </li>
        <li className="skills-list__item">
          <i className="fab fa-js" /> JavaScript
          <ul className="skills-list skills-list--inner">
            <li className="skills-list__item--inner">
              <a
                href="https://www.w3schools.com/js/js_es6.asp"
                target="_blank"
                rel="noopener noreferrer"
              >
                ES6
              </a>
            </li>
            <li className="skills-list__item--inner">
              <a
                href="https://www.npmjs.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                NPM
              </a>
            </li>
            <li className="skills-list__item--inner">
              <a
                href="https://webpack.js.org/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Webpack
              </a>
            </li>
          </ul>
        </li>
        <li className="skills-list__item">
          <i className="fab fa-github" /> Git
        </li>
        <li className="skills-list__item">
          <i className="fab fa-php" /> PHP
          <ul className="skills-list skills-list--inner">
            <li className="skills-list__item skills-list__item--inner">
              <a
                href="https://wordpress.org/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Wordpress
              </a>
            </li>
          </ul>
        </li>
        <li className="skills-list__item">
          <i className="fab fa-adobe" /> Adobe
          <ul className="skills-list skills-list--inner">
            <li className="skills-list__item skills-list__item--inner">
              <a href="https://www.adobe.com/products/photoshop.html">
                Photoshop
              </a>
            </li>
            <li className="skills-list__item skills-list__item--inner">
              <a href="https://www.adobe.com/products/illustrator.html">
                Illustrator
              </a>
            </li>
          </ul>
        </li>
      </ul>
    );
  }
}

export default Skills;
