import React, { useState, useEffect } from 'react';
import { Route } from 'react-router-dom';

import { Header } from './components';
import { Home, Cart } from './pages';

const App = () => {
  const URL = 'http://localhost:3000/db.json';

  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch(URL)
      .then((resp) => resp.json())
      .then(({ pizzas }) => setItems(pizzas));
  }, []);

  return (
    <div className="wrapper">
      <Header />
      <main className="content">
        <Route path="/" component={() => <Home items={items} />} exact />
        <Route path="/cart" component={Cart} exact />
      </main>
    </div>
  );
};

export default App;
