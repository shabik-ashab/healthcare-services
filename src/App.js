import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import Contact from "./Components/Contact";
import Home from './Components/Home';
import Navbar from "./Components/Navbar";
import ServiceDetails from "./Components/ServiceDetails";
import Services from "./Components/Services";
import Apoinment from './Components/Apoinment';
import Login from "./Components/Login";
import Register from "./Components/Register";
import AuthProvider from "./contexts/AuthProvider";
import PrivateRoute from "./Components/PrivateRoute";
import NotFound from './Components/NotFound';
import Footer from "./Components/Footer";


function App() {
  return (
    <div className="App">
      <AuthProvider>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/"> 
            <Home />
          </Route>
          <Route exact path="/home">
          <Home></Home>
          </Route>
          <Route exact path="/services">
            <Services />
          </Route>
          <Route exact path="/services/:id">
            <ServiceDetails />
          </Route>
          <Route exact path="/contact">
            <Contact />
          </Route>
          <PrivateRoute exact path="/apoinment">
            <Apoinment />
          </PrivateRoute>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/register">
            <Register />
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer />
      </Router> 
      </AuthProvider>
    </div>
  );
}

export default App;
