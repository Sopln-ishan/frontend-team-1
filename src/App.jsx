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


function App() {
  useEffect(() => {
    document.body.style.backgroundColor = "#191310"; // Change to desired color
  }, []);

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
