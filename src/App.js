import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route } from 'react-router-dom';

import { setProducts } from './store/actions';
import { Header } from './components';
import { Home, Cart } from './pages';

const App = () => {
  const URL = 'http://localhost:3000/db.json';

  const dispatch = useDispatch();

  useEffect(() => {
    fetch(URL)
      .then((resp) => resp.json())
      .then(({ pizzas }) => dispatch(setProducts(pizzas)));
  }, []);

  return (
    <div className="wrapper">
      <Header />
      <main className="content">
        <Route path="/" component={Home} exact />
        <Route path="/cart" component={Cart} exact />
      </main>
    </div>
  );
};

export default App;
