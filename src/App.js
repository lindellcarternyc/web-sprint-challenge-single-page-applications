import React from 'react'
import { Switch, Route } from 'react-router-dom'

// LAYOUT COMPONENTS
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'

// PAGES
import Home from './pages/Home'
import NotFoud from './pages/404'
import Confirm from './pages/Confirm'
import Pizza from './pages/Pizza'

const App = () => {
  return (
    <>
      <Header />
      <Main>
        <Switch>
          <Route path="/confirm">
            <Confirm />
          </Route>
          <Route path="/pizza">
            <Pizza />
          </Route>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route>
            <NotFoud />
          </Route>
        </Switch>
      </Main>
      <Footer />
    </>
  );
};
export default App;
