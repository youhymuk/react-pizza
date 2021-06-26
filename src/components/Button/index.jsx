import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';

import './index.scss';

const Button = ({ className, text, children, outline, onClick, path, type = 'button' }) => {
  const content = children ? children : text;

  return type === 'button' ? (
    <button
      className={classNames('button', className, { 'button--outline': outline })}
      onClick={onClick}>
      {content}
    </button>
  ) : (
    <Link className={classNames('button', className, { 'button--outline': outline })} to={path}>
      {content}
    </Link>
  );
};

export default Button;
