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
import OurServices from './Our-Services';
import WhyUs from './Why-Us';
import BondedMovementsForm from "./Services/BondedMovementsForm";
import BorderClearancesForm from "./Services/BorderClearancesForm";
import ImporterExporterForm from "./Services/ImporterExporterForm";
import IntegratedTruckingForm from "./Services/IntegratedTruckingForm";
import ProjectCargoForm from "./Services/ProjectCargoForm";
import ShippingDocumentsForm from "./Services/ShippingDocumentsForm";


function App() {
  useEffect(() => {
    document.body.style.backgroundColor = "#F4EAE2"; // Change to desired color
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

          <Route path="/Our-Services.jsx">
              <OurServices />
                <Switch>
                  <Route path="/Services/BondedMovementsForm.jsx">
                    <BondedMovementsForm />
                  </Route>

                  <Route path="/Services/BorderClearancesForm.jsx">
                    <BorderClearancesForm />
                  </Route>

                  <Route path="/Services/ImporterExporterForm.jsx">
                    <ImporterExporterForm />
                  </Route>

                  <Route path="/Services/IntegratedTruckingForm.jsx">
                    <IntegratedTruckingForm />
                  </Route>

                  <Route path="/Services/ProjectCargoForm.jsx">
                    <ProjectCargoForm />
                  </Route>

                  <Route path="/Services/ShippingDocumentsForm.jsx">
                    <ShippingDocumentsForm />
                  </Route>
                </Switch>
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
