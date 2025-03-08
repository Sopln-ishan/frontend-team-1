import './Navbar.css';
import './Home.css';
import './About-Us.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Home.jsx';
import Navbar from './Navbar.jsx';
import AboutUs from './About-Us.jsx';
import ContactUs from './Contact-Us.jsx';
import OurServices from './Our-Services.jsx';
import WhyUs from './Why-Us.jsx';

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

              <Route path="/Contact-Us.jsx">
                  <ContactUs />
              </Route>
            </Switch>
        </Router>

    </>
  )
}

export default App
