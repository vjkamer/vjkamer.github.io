import React from 'react';

import fac_m from './images/fac-m.jpg';
import fac_d from './images/fac-d.jpg';

const projectsList = [
  {
    id: 'Flip a Coin Game',
    title: 'Flip a Coin Game',
    tag: 'Personal',
    url_live: 'https://www.p7campaign.com/landing/flip-a-coin-w1/',
    description: (
      <div>
        <p>An interactive game-like landing page built on react.</p>
      </div>
    ),
    img_mobile: fac_m,
    img_desktop: fac_d,
    completion_date: '2019'
  }
];

export default projectsList;
