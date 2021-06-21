import React from 'react';
import classNames from 'classnames';

import './index.scss';

const Button = ({ className, children, outline, href, type = 'button' }) => {
  return type === 'button' ? (
    <button className={classNames('button', className, { 'button--outline': outline })}>
      {children}
    </button>
  ) : (
    <a className={classNames('button', className, { 'button--outline': outline })} href={href}>
      {children}
    </a>
  );
};

export default Button;
