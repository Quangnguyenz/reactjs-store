import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Navbar, Sidebar, Footer } from './components'
import { Home, Products, SingleProduct, About, Cart, Error, Checkout, Private } from './pages'
import PrivateRoute from './pages/PrivateRoute'

function App() {
  return (
    <Router>
      <Navbar></Navbar>
      <Sidebar></Sidebar>
      <Switch>
        <Route exact path='/'>
          <Home></Home>
        </Route>
        <Route exact path='/about'>
          <About></About>
        </Route>
        <Route exact path='/cart'>
          <Cart></Cart>
        </Route>
        <Route exact path='/products'>
          <Products></Products>
        </Route>
        <Route exact path='/products/:id' children={<SingleProduct />}>
        </Route>
        <PrivateRoute exact path='/checkout'>
          <Checkout />
        </PrivateRoute>
        <Route exact path='*'>
          <Error></Error>
        </Route>
      </Switch>
      <Footer />
    </Router>
  )
}

export default App
