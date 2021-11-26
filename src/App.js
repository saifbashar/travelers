// Import Section

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AuthProvider from './context/AuthProvider';
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import NotFound from './components/NotFound/NotFound';
import Login from './components/Login/Login';
import About from './components/About/About';
import PlaceOrder from './components/PlaceOrder/PlaceOrder';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import AllOrder from './components/AllOrder/AllOrder';
import AddNew from './components/AddNew/AddNew';
import MyOrders from './components/MyOrders/MyOrders';
import Contact from './components/Contact/Contact';

function App() {
  return (
    <div className="App">
      {/* Auth Provider */}
      <AuthProvider>
        <Router>
          {/* Header */}
          <Header></Header>

          <Switch>
            {/* Route for home page */}
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            {/* Route for contact */}
            <Route path="/contact">
              <Contact></Contact>
            </Route>
            {/* Route for login */}
            <Route path="/login">
              <Login></Login>
            </Route>
            {/* Route for about */}
            <Route path="/about">
              <About></About>
            </Route>
            {/* Private Route for service id */}
            <PrivateRoute path="/services/:id">
              <PlaceOrder></PlaceOrder>
            </PrivateRoute>
            {/* All orders */}
            <PrivateRoute path="/allOrders">
              <AllOrder></AllOrder>
            </PrivateRoute>
            {/* Add new services */}
            <PrivateRoute path="/addNewServices">
              <AddNew></AddNew>
            </PrivateRoute>
            {/* My Orders */}
            <PrivateRoute path="/myOrders">
              <MyOrders></MyOrders>
            </PrivateRoute>
            {/* Not Found Section */}
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          {/* Footer  */}
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
