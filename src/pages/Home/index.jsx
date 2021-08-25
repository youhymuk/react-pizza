import React from 'react';
import PropTypes from 'prop-types';

import { categories, sortingList } from '../../constants';
import { Categories, Sorting, Card } from '../../components';
import {useDispatch, useSelector} from "react-redux";
import {addProduct} from "../../store/actions/cartActions";

const Home = ({ products, activeCategory, sortBy, isLoading }) => {
  const dispatch = useDispatch();
  const { addedProducts } = useSelector(({ cart }) => cart)

  const handleAddProductToCart = (product) => {
    dispatch(addProduct(product));
  }

  return (
    <div className="container">
      <div className="content__top">
        <Categories categories={categories} activeCategory={activeCategory} />
        <Sorting sortingList={sortingList} activeSortType={sortBy} />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <ul className="content__list">
        {products.map((item, index) => (
          <li className="content__item" key={item.id || index}>
            <Card
              {...item}
              handleAddProductToCart={handleAddProductToCart}
              addedProductCount={addedProducts[item.id] && addedProducts[item.id].length}
              isLoading={isLoading} />
          </li>
        ))}
      </ul>
    </div>
  );
};

Home.propTypes = {
  products: PropTypes.array,
  isLoading: PropTypes.bool,
};

Home.defaultProps = {
  products: [],
  isLoading: true,
};

export default Home;
