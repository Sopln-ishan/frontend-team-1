import './Navbar.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './Header.jsx';
import Navbar from './Navbar.jsx';
import Footer from './Footer.jsx';
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
            <Switch>
              <Route exact path="/">
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
        </div>
      </Router>
    </>
  )
}

export default App
