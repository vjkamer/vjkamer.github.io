import React from "react";

import arbol_m from "./images/arbol-m.jpg";
import arbol_d from "./images/arbol-d.jpg";
import ldc_m from "./images/ldc-m.jpg";
import ldc_d from "./images/ldc-d.jpg";
import dileps_d from "./images/dileps-d.jpg";
import dileps_m from "./images/dileps-m.jpg";
import psg_m from "./images/psg-m.jpg";
import psn_d from "./images/psn-d.jpg";
import avtoskola_d from "./images/avtoskola-d.jpg";
import avtoskola_m from "./images/avtoskola-m.jpg";

const projectsList = [
  {
    id: "PragueStagNight.com",
    title: "PragueStagNight.com",
    tag: "Client",
    url_live: "https://praguestagnight.com/",
    description: (
      <div>
        <p>
          <strong>Setup</strong>, <strong>design</strong> and{" "}
          <strong>customization</strong> of <strong>WordPress theme</strong> for
          Stag Service Company.
          <br />
          Design and Setup core feauteres dependent on clinent wishes such as:
          <ul className="portfolio__ul">
            <li>development of a child them.</li>
            <li>setup and customization of e-shop with Woocomerece.</li>
            <li>customization of different kinds of forms, and connection of these forms with emails.</li>
          </ul>
        </p>
      </div>
    ),
    img_mobile: psg_m,
    img_desktop: psn_d,
    completion_date: "2019"
  },
  {
    id: "Avtoskola.cz",
    title: "Avtoskola.cz",
    tag: "Client",
    url_live: "https://avtoskola.cz/",
    description: (
      <div>
        <p>
          Built <strong>mobile first</strong>, <strong>pixel perfect</strong>
          and <strong>highly optimized</strong> website, based on PSD design
          provided by client. No CSS frameworks were used.
          <br /> The layout is styled on <strong>pure CSS</strong> with help of{" "}
          <strong>flexboxes</strong>.
        </p>
      </div>
    ),
    img_mobile: avtoskola_m,
    img_desktop: avtoskola_d,
    completion_date: "2019"
  },
  {
    id: "Dileps.com",
    title: "Dileps.com",
    tag: "Client",
    url_live: "http://dileps.com/",
    description: (
      <div>
        <p>
          Dileps.com is a webiste which is built for construction company.
          <br />
          Website is built with use of <strong>best practices</strong> and <strong>clean code</strong>, what makes it very <strong>fast and stable</strong>.
        </p>
      </div>
    ),
    img_mobile: dileps_m,
    img_desktop: dileps_d,
    completion_date: "2018"
  },

  {
    id: "LDCStav.cz",
    title: "LDCStav.cz",
    tag: "Client",
    url_live: "http://ldcstav.cz/",
    description: (
      <div>
        <p>This project is from the same series as <strong>Dileps.cz</strong></p>
      </div>
    ),
    img_mobile: ldc_m,
    img_desktop: ldc_d,
    completion_date: "2018"
  },
  {
    id: "Arbolinvest Website",
    title: "Arbolinvest Website",
    tag: "Client",
    url_live: "https://arbolinvest.cz/",
    description: (
      <div>
        <p>This project is from the same series as <strong>Dileps.cz</strong></p>
      </div>
    ),
    img_mobile: arbol_m,
    img_desktop: arbol_d,
    completion_date: "2018"
  }
];

export default projectsList;
