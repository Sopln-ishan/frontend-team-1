// import Footer from "./Footer";
// import Navbar from "./Navbar";
import React from 'react';
import './Contact.css';

const Contact = () => {
    return (
        <>
            <div className="contactus">
                <div className="background-container">
                    <div className="text-overlay">
                        <h1>CONTACT US</h1>
                    </div>
                </div>
            </div>
            <section className="addr">
            <div className="address">
                <h2>Our Headquarters</h2>
                <div className="country-cards">
                    <h4>India</h4>
                    <img src="image.jpg" alt="India Office" />
                    <p>XXXXXXXXXX</p>
                    <img src="image.jpg" alt="India Office Building" />
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                    <h5></h5>
                </div>
            </div>
            </section>
        </>
    );
};

export default Contact;