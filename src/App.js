import React from 'react';
import { Route } from 'react-router-dom';

import { Header } from './components';
import { Home, Cart } from './pages';

const App = () => {
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
