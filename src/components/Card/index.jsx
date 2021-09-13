import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import ContentLoader from 'react-content-loader'

import './index.scss';

import { Button } from '..';

const Card = ({ id, name, imageUrl, price, types, sizes, isLoading, handleAddProductToCart, addedProductCount }) => {
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

  const onAddProduct = () => {
    const product = {
      id,
      name,
      imageUrl,
      price,
      size: sizesList[activeSize],
      type: typesList[activeType],
    }
    handleAddProductToCart(product)
  }

  return isLoading 
    ? (
      <ContentLoader 
        speed={2}
        width={280}
        height={460}
        viewBox="0 0 280 460"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
      >
        <circle cx="134" cy="131" r="120" /> 
        <rect x="10" y="278" rx="6" ry="6" width="255" height="28" /> 
        <rect x="0" y="323" rx="10" ry="10" width="280" height="85" /> 
        <rect x="136" y="417" rx="20" ry="20" width="143" height="40" /> 
        <rect x="3" y="426" rx="0" ry="0" width="89" height="27" />
      </ContentLoader>
    ) 
    : (
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
          <div className="card__price">от {price} &#8372;</div>
          <Button className="button--outline button--add" onClick={onAddProduct}>
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
            {addedProductCount && <i>{addedProductCount}</i>}
          </Button>
        </div>
      </article>
    );
};

Card.propTypes = {
  name: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  types: PropTypes.arrayOf(PropTypes.number),
  sizes: PropTypes.arrayOf(PropTypes.number),
  addedProductCount: PropTypes.number,
  onAddProduct: PropTypes.func.isRequired,
};

Card.defaultProps = {
  price: 0,
  types: [],
  sizes: [],
};

export default Card;
