import React from 'react';
import PropTypes from 'prop-types';

import { Filters, Sorting, Card } from '../../components';

const Home = ({ items }) => {
  const filtersList = ['Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];
  const sortingList = ['популярности', 'цене', 'алфавиту'];

  return (
    <div className="container">
      <div className="content__top">
        <Filters filtersList={filtersList} />
        <Sorting sortingList={sortingList} />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <ul className="content__list">
        {items.map((item) => (
          <li className="content__item" key={item.id}>
            <Card {...item} />
          </li>
        ))}
      </ul>
    </div>
  );
};

Home.propTypes = {
  items: PropTypes.array,
};

Home.defaultProps = {
  items: [],
};

export default Home;
