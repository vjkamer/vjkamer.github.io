import React from "react";

import arbol_m from "./images/arbol-m.jpg";
import arbol_d from "./images/arbol-d.jpg";
import ldc_m from "./images/ldc-m.jpg";
import ldc_d from "./images/ldc-d.jpg";

const projectsList = [
  {
    id: "LDCStav Constaruction Website",
    title: "LDCStav Constaruction Website",
    tag: "Client",
    url_live: "google.com",
    description: (
      <div>
        <p>Description</p>
      </div>
    ),
    img_mobile: ldc_m,
    img_desktop: ldc_d,
    completion_date: "2019"
  },
  {
    id: "Arbolinvest Website",
    title: "Arbolinvest Website",
    tag: "Client",
    url_live: "google.com",
    description: (
      <div>
        <p>Description</p>
      </div>
    ),
    img_mobile: arbol_m,
    img_desktop: arbol_d,
    completion_date: "2019"
  }
];

export default projectsList;
