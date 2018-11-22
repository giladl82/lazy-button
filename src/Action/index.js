import React from 'react';
import boom from './boom.svg';
import peace from './peace.svg';

import './style.css'

const Action = ({ by }) => {
  const src = by === 'angel' ? peace : boom;

  return <img src={src} alt="" className="action__img" />;
};

export default Action;
