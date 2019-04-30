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
          <strong>customization</strong> of <strong>WordPress</strong> theme for
          Stag Service Company.
          <br />
          Design and Setup core feauteres dependent on clinent wishes such as:
          <ul className="portfolio__ul">
            <li>setup a Child Theme.</li>
            <li>full customization of Woocomerece.</li>
            <li>custom Date and Time picker.</li>
            <li>creation Categories of Stag Activities.</li>
            <li>
              sends confirmation email both to client and to website admin.
            </li>
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
          Project contains a most modern <strong>effects</strong> and{" "}
          <strong>animations</strong>.<br />
          Good <strong>organized</strong> and <strong>clean code</strong> make
          this website fast and stable.
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
        <p>
          LDCStav.cz is a <strong>Resposnive</strong> construction company
          website. <br /> Project has been built with the{" "}
          <strong>latest Bootstrap</strong>, <strong>CSS</strong> and{" "}
          <strong>HTML5</strong> standarts.
          <br /> The <strong>Code</strong> is very{" "}
          <strong>well commented</strong>, also website include{" "}
          <strong>JQuery animations</strong>.
        </p>
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
        <p>
          Project has been build with the latest{" "}
          <strong>web technologies</strong> and standards. The layout is{" "}
          <strong>drag responsive</strong> and looks attractive at all screen
          sizes whether it is a Desktop, laptop, Tablet, or mobile.
          <br />
          <br /> Website is bug free and supporting all browsers.
        </p>
      </div>
    ),
    img_mobile: arbol_m,
    img_desktop: arbol_d,
    completion_date: "2017"
  }
];

export default projectsList;
