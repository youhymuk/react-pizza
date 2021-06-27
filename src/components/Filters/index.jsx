import React, { useState } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import './index.scss';

import { Button } from '../.';

const Filters = ({ filtersList }) => {
  const [activeItem, setActiveItem] = useState('all');

  const onFilterClickHandler = (index = null) => {
    setActiveItem(index);
  };

  return (
    <ul className="filters">
      <li className="filters__item">
        <Button
          className={classNames('filters__button', {
            'filters__button--active': activeItem === null,
          })}
          text="Все"
          onClick={() => onFilterClickHandler(null)}
        />
      </li>
      {filtersList &&
        filtersList.map((name, index) => {
          const isActive = activeItem === index;

          return (
            <li className="filters__item" key={`${name}_${index}`}>
              <Button
                className={classNames('filters__button', {
                  'filters__button--active': isActive,
                })}
                text={name}
                onClick={() => onFilterClickHandler(index)}
              />
            </li>
          );
        })}
    </ul>
  );
};

Filters.propTypes = {
  filtersList: PropTypes.array,
};

Filters.defaultProps = {
  filtersList: [],
};

export default Filters;
