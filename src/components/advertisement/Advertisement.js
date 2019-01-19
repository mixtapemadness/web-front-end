import React from 'react';
import BackgroundImage from 'resources/assets/img/music.jpg';

const Advertisement = () => (
  <section className="advertisement">
    <span className="advertisement__text">Advertisement</span>
    <img src={BackgroundImage} alt="Advertisement" />
  </section>
);

export default Advertisement;
