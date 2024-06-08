import React from 'react';

const Institution = ({ id, name, color, link, description }) => (
  <section id={id} className="institution" style={{ backgroundColor: color }}>
    <h2>{name}</h2>
    <a href={link} target="_blank" rel="noopener noreferrer">{description}</a>
  </section>
);

export default Institution;
