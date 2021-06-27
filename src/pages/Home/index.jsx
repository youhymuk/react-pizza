import React, { useEffect, useState } from 'react';

import { Filters, Sorting, Card } from '../../components';

const Home = () => {
  const URL = 'http://localhost:3000/db.json';

  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch(URL)
      .then((resp) => resp.json())
      .then(({ pizzas }) => setItems(pizzas));
  }, []);

  return (
    <div className="container">
      <div className="content__top">
        <Filters />
        <Sorting />
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

export default Home;
