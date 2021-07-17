import React, { memo } from 'react';
import { useDispatch } from 'react-redux';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import './index.scss';

import { setActiveCategory } from '../../store/actions';
import { Button } from '..';

const Categories = memo(function Categories({ categories, activeCategory }) {
  const dispatch = useDispatch();

  const onSelectFilter = (index) => {
    dispatch(setActiveCategory(index));
  };

  return (
    <ul className="categories">
      <li className="categories__item">
        <Button
          className={classNames('categories__button', {
            'categories__button--active': activeCategory === null,
          })}
          text="Все"
          onClick={() => onSelectFilter(null)}
        />
      </li>
      {categories &&
        categories.map((name, index) => {
          const isActive = activeCategory === index;

          return (
            <li className="categories__item" key={`${name}_${index}`}>
              <Button
                className={classNames('categories__button', {
                  'categories__button--active': isActive,
                })}
                text={name}
                onClick={() => onSelectFilter(index)}
              />
            </li>
          );
        })}
    </ul>
  );
});

Categories.propTypes = {
  categories: PropTypes.array,
};

Categories.defaultProps = {
  categories: [],
};

export default Categories;
