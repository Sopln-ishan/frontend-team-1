import React, { useEffect } from 'react';
import './Styles/Navbar.css';
import './Styles/Home.css';
import './Styles/About-Us.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Home';
import Navbar from './Navbar';
import AboutUs from './About-Us';
import ContactUs from './Contact';
import Footer from './Footer';
import WhyUs from './Why-Us';

<<<<<<< HEAD
function App() {
=======

function App() {
  useEffect(() => {
    document.body.style.backgroundColor = "#F4EAE2"; // Change to desired color
  }, []);

>>>>>>> f403ed5f51d622cebff42386729c3e3c064410ab
  return (
    <>
      <Router>
        <div className="Navbar">
          <Navbar />
        </div>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>

          <Route path="/About-Us.jsx">
              <AboutUs />
          </Route>

          <Route path="/Why-Us.jsx">
              <WhyUs />
          </Route>

          <Route path="/Contact.jsx">
              <ContactUs />
          </Route>
        </Switch>
      </Router>
      
      <Footer />
    </>
  );
}

export default App;
