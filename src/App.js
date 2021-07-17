import React, { useEffect } from 'react';
import { Route } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getProducts } from './store/thunks';
import { Header } from './components';
import { Home, Cart } from './pages';

const App = () => {
  const dispatch = useDispatch();

  const { products, activeCategory, sortBy } = useSelector(({ products, filters }) => ({
    products: products.productItems,
    activeCategory: filters.category,
    sortBy: filters.sortBy,
  }));

  useEffect(() => {
    dispatch(getProducts(activeCategory, sortBy));
  }, [activeCategory, sortBy]);

  return (
    <div className="wrapper">
      <Header />
      <main className="content">
        <Route
          path="/"
          component={() => (
            <Home products={products} activeCategory={activeCategory} sortBy={sortBy} />
          )}
          exact
        />
        <Route path="/cart" component={Cart} exact />
      </main>
    </div>
  );
};

export default App;
