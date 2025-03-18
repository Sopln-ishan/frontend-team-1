import { useRef } from 'react';
import { motion } from 'framer-motion';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import OurServices from './Our-Services';
import BorderClearancesForm from './Services/BorderClearancesForm';
import BondedMovementsForm from './Services/BondedMovementsForm';
import ImporterExporterForm from './Services/ImporterExporterForm';
import IntegratedTruckingForm from './Services/IntegratedTruckingForm';
import ProjectCargoForm from './Services/ProjectCargoForm';
import ShippingDocumentsForm from './Services/ShippingDocumentsForm';
import OurIndustry from './Industry';
import PastClients from './PastClients';

const Home = () => {
    const ref = useRef(null);

    return (
        <div className='home-page' style={{ overflow: 'hidden'}}>
            <div ref={ ref } className="hero-section">
                <div className="company-name-section">
                    <div className="company-text-and-img">
                        <motion.h1
                            variants={{
                                hidden: { opacity: 0, x: -300},
                                visible: { opacity: 1, x: 0 }
                            }}
                            initial='hidden'
                            animate='visible'
                            transition={{ duration: 0.5 }}
                        >
                            Company Name
                        </motion.h1> 
                        <motion.p 
                            variants={{
                                hidden: { opacity: 0, x: -400 },
                                visible: { opacity: 1, x: 0 }
                            }}
                            initial='hidden'
                            animate='visible'
                            transition={{ duration: 0.5, delay: 0.25 }}
                        >
                            Company's Motto or Catchphrase
                        </motion.p>
                        {/* <motion.img
                            variants={{
                                hidden: { x: -900},
                                visible: { x: 10 }
                            }}
                            inital='hidden'
                            animate='visible'
                        >
                        </motion.img> */}
                    </div>
                </div>
            </div>

            <div id="our-services" className="our-services">
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

            <OurIndustry />
            <PastClients />
        </div>
    );
};

export default Home;




