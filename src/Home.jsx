import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import OurServices from './Our-Services';
import BorderClearancesForm from './Services/BorderClearancesForm';
import BondedMovementsForm from './Services/BondedMovementsForm';
import ImporterExporterForm from './Services/ImporterExporterForm';
import IntegratedTruckingForm from './Services/IntegratedTruckingForm';
import ProjectCargoForm from './Services/ProjectCargoForm';
import ShippingDocumentsForm from './Services/ShippingDocumentsForm';
import OurGuarantees from './Guarantees';
import PastClients from './PastClients';

const Home = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const slides = [
        {
            img: 'src/images/th (6).jpeg',
            text: 'KUNAL BAHL\nCEO, SNAPDEAL',
            description: 'KUNAL LEADS WITH ₹8 CRORES - THE BIGGEST OFFER IN SHARK TANK INDIA HISTORY, ALONGSIDE FOUR OTHER SHARKS.'
        },
        {
            img: 'src/images/th (7).jpeg',
            text: 'AI AUTHENTICATION',
            description: 'SETS A NEW STANDARD, EARNING SHARKS’ TRUST IN WORLD-CLASS VERIFICATION — MADE IN INDIA.'
        },
        {
            img: 'src/images/th (8).jpeg',
            text: '₹8 CRORE OFFER',
            description: 'CULTURE CIRCLE BAGS SHARK TANK INDIA’S RECORD-BREAKING ₹8 CRORE OFFER.'
        }
    ];

    // Next Slide
    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    };

    // Previous Slide
    const prevSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? slides.length - 1 : prevIndex - 1
        );
    };

    // Auto-play functionality
    useEffect(() => {
        const interval = setInterval(nextSlide, 3000); // Fixed the typo here
        return () => clearInterval(interval);
    }, []);

    return (
        <>
            <div className="hero-section">
                <div className="company-name-section">
                    <div className="company-name-bkg-img">
                        <h1>Company Name</h1>
                        <p>Something nice about the company</p>
                    </div>
                </div>

                <div className="content-section">
                    <p className="intro-text">
                        Excepteur efficient emerging, minim veniam anim aute carefully curated Ginza conversation... (text content).
                    </p>

                    <div className="image-placeholder" style={{ border: '2px solid #333' }} />

                    <div className="guarantees">
                        <h2>Explore the World</h2>
                        <p>
                            We seek to provide the most authentic content from athletes, adventurers,
                            explorers and travellers around the world. Our long-term mission is to educate,
                            inspire and enable all peoples to experience & protect wilderness.
                        </p>

                        <div className="destination-cards">
                            <div className="card">
                                <img src="src/images/th (6).jpeg" alt="Nærøyfjorden" />
                                <h3>Nærøyfjorden</h3>
                                <p>NORWAY</p>
                            </div>

                            <div className="card">
                                <img src="src/images/th (7).jpeg" alt="Antelope Canyon" />
                                <h3>Antelope Canyon</h3>
                                <p>UNITED STATES</p>
                            </div>

                            <div className="card">
                                <img src="src/images/th (8).jpeg" alt="Grossglockner" />
                                <h3>Grossglockner</h3>
                                <p>AUSTRIA</p>
                            </div>
                        </div>
                    </div>


                    <p className="body-text">Body text for your whole article or post. We’ll put in some lorem ipsum...</p>

                    <div className="additional-content">
                        <div className="extra-image-placeholder">Image Placeholder</div>
                        <div className="extra-guarantees">Extra Guarantees</div>

                        <div className="truck-content-section">
                            <div className="text-content">
                                <p className="extra-body-text">Body text for your whole article or post. We’ll put in some lorem ipsum...</p>
                            </div>

                            <div className="truck-image">
                                <img src="src/images/phototruck.png" alt="Truck" />
                            </div>
                        </div>


                        <div className="carousel-section">
                            <h2>DO YOU KNOW WHY US?</h2>
                            <p>As seen, as loved, as trusted in WORLD</p>

                            <div className="carousel-container">
                                {slides.map((slide, index) => (
                                    <div
                                        key={index}
                                        className={`carousel-slide ${index === currentIndex ? 'active' : ''}`}
                                    >
                                        <img src={slide.img} alt={`Slide ${index + 1}`} />
                                        <div className="slide-content">
                                            <h3>{slide.text}</h3>
                                            <p>{slide.description}</p>
                                        </div>
                                    </div>
                                ))}

                                {/* Navigation Arrows */}
                                <button className="carousel-btn prev" onClick={prevSlide}>❮</button>
                                <button className="carousel-btn next" onClick={nextSlide}>❯</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
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

        <OurGuarantees />
        <PastClients />
        </>
    );
};

export default Home;




