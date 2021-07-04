import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

import { categories, sortingList } from '../../constants';
import { Categories, Sorting, Card } from '../../components';

const Home = () => {
  const products = useSelector(({ products }) => products.productItems);

  return (
    <div className="container">
      <div className="content__top">
        <Categories categories={categories} />
        <Sorting sortingList={sortingList} />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <ul className="content__list">
        {products.map((item) => (
          <li className="content__item" key={item.id}>
            <Card {...item} />
          </li>
        ))}
      </ul>
    </div>
  );
};

Home.propTypes = {
  products: PropTypes.array,
};

Home.defaultProps = {
  products: [],
};

export default Home;
