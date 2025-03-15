import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import OurServices from './Our-Services.jsx';
import OurGuarantees from './Guarantees.jsx';
import BondedMovementsForm from "./Services/BondedMovementsForm";
import BorderClearancesForm from "./Services/BorderClearancesForm";
import ImporterExporterForm from "./Services/ImporterExporterForm";
import IntegratedTruckingForm from "./Services/IntegratedTruckingForm";
import ProjectCargoForm from "./Services/ProjectCargoForm";
import ShippingDocumentsForm from "./Services/ShippingDocumentsForm";

const Home = () => {
    return (
        <>
        <div className="hero-section">
            <div className="company-name-section">
                <div className="company-name-bkg-img">
                    <h1>Company Name</h1>
                    <p>Something nice about the company</p>
                </div>
            </div>
        </div>

        <div id="our-services" className="">
            <OurServices />
            <Router>
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
            </Router>
        </div>

        <OurGuarantees className="guarantees-section" />
        </>
    );
}
 
export default Home;