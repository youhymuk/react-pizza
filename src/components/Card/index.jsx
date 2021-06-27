import React, { useState } from 'react';
import classNames from 'classnames';

import './index.scss';

import { Button } from '..';

const Card = ({ name, imageUrl, price, types, sizes }) => {
  const typesList = ['тонкое', 'традиционное'];
  const sizesList = [26, 30, 40];

  const [activeType, setActiveType] = useState(types[0]);
  const [activeSize, setActiveSize] = useState(sizesList.indexOf(sizes[0]));

  const selectTypeHandler = (index) => {
    setActiveType(index);
  };

  const selectSizeHandler = (index) => {
    setActiveSize(index);
  };

  return (
    <article className="card">
      <img className="card__image" src={imageUrl} alt={name} />
      <h4 className="card__title">{name}</h4>
      <div className="card__selector">
        <ul className="card__type-list">
          {typesList.map((type, index) => {
            const isActive = activeType === index;
            const isDisabled = !types.includes(index);

            return (
              <li className="card__type-item" key={`${type}_${index}`}>
                <Button
                  className={classNames('card__button', {
                    'card__button--active': isActive,
                    'button--disabled': isDisabled,
                  })}
                  text={type}
                  onClick={() => selectTypeHandler(index)}
                  disabled={isDisabled}
                />
              </li>
            );
          })}
        </ul>
        <ul className="card__type-list">
          {sizesList.map((size, index) => {
            const isActive = activeSize === index;
            const isDisabled = !sizes.includes(size);

            return (
              <li className="card__type-item" key={size + index}>
                <Button
                  className={classNames('card__button', {
                    'card__button--active': isActive,
                    'button--disabled': isDisabled,
                  })}
                  text={`${size} см.`}
                  onClick={() => selectSizeHandler(index)}
                  disabled={isDisabled}
                />
              </li>
            );
          })}
        </ul>
      </div>
      <div className="card__bottom">
        <div className="card__price">от {price} &#x20bd;</div>
        <Button className="button--outline button--add">
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
              fill="white"
            />
          </svg>
          <span className="button__text">Добавить</span>
          <i>2</i>
        </Button>
      </div>
    </article>
  );
};

export default Card;