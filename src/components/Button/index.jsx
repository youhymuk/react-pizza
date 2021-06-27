import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

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

Button.propTypes = {
  className: PropTypes.string,
  text: PropTypes.string,
  path: PropTypes.string,
  type: PropTypes.string,
  outline: PropTypes.bool,
  onClick: PropTypes.func,
  children: PropTypes.node,
};

export default Button;
