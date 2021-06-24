import React from 'react';
import classNames from 'classnames';

import './index.scss';

const Button = ({ className, text, children, outline, onClick, href, type = 'button' }) => {
  const content = children ? children : text;

  return type === 'button' ? (
    <button
      className={classNames('button', className, { 'button--outline': outline })}
      onClick={onClick}>
      {content}
    </button>
  ) : (
    <a className={classNames('button', className, { 'button--outline': outline })} href={href}>
      {content}
    </a>
  );
};

export default Button;
