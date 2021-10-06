import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Checkout from '../pages/Checkout';
import Layout from '../components/Layout';
import NotFound from '../pages/NotFound';
import Teoric from '../pages/Teoric';

const App = () => (
  <BrowserRouter>
    <Layout>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/checkout" component={Checkout} />
        <Route exact path="/teoric" component={Teoric} />
        <Route component={NotFound} />
      </Switch>
    </Layout>
  </BrowserRouter>
);

export default App;
