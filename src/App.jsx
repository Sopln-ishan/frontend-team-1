import React, { useEffect } from 'react';
import './Navbar.css';
import './Home.css';
import './About-Us.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Home.jsx';
import Navbar from './Navbar.jsx';
import AboutUs from './About-Us.jsx';
import ContactUs from './Contact.jsx';
import Footer from './Footer.jsx';
import OurServices from './Our-Services.jsx';
import WhyUs from './Why-Us.jsx';

<<<<<<< HEAD
=======
function App() {
  useEffect(() => {
    document.body.style.backgroundColor = "#F4EAE2"; // Change to desired color
  }, []);
>>>>>>> 163c1e6db60a6af58c27dbaecc51a90be32a092a

function App() {
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

              <Route path="/Our-Services.jsx">
                  <OurServices />
              </Route>

              <Route path="/Contact.jsx">
                  <ContactUs />
              </Route>
            </Switch>
        </Router>
        <Footer/>
    </>
  )
}

export default App
