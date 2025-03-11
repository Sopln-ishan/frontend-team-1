import React, { useState } from 'react';
import './Contact.css';

const CountryCards = [
  {
    country: 'India',
    officeImage: 'image.jpg',
    officeAltText: 'India office',
    contactNum: 'xxxxxxxxx',
    officeBuildingImage: 'image.jpg',
    officeBuildingAltText: 'India office building',
    address: 'lorem ipsum'
  },
  {
    country: 'India',
    officeImage: 'image.jpg',
    officeAltText: 'India office',
    contactNum: 'xxxxxxxxx',
    officeBuildingImage: 'image.jpg',
    officeBuildingAltText: 'India office building',
    address: 'lorem ipsum'
  },
  {
    country: 'India',
    officeImage: 'image.jpg',
    officeAltText: 'India office',
    contactNum: 'xxxxxxxxx',
    officeBuildingImage: 'image.jpg',
    officeBuildingAltText: 'India office building',
    address: 'lorem ipsum'
  },
  {
    country: 'India',
    officeImage: 'image.jpg',
    officeAltText: 'India office',
    contactNum: 'xxxxxxxxx',
    officeBuildingImage: 'image.jpg',
    officeBuildingAltText: 'India office building',
    address: 'lorem ipsum'
  },
  {
    country: 'India',
    officeImage: 'image.jpg',
    officeAltText: 'India office',
    contactNum: 'xxxxxxxxx',
    officeBuildingImage: 'image.jpg',
    officeBuildingAltText: 'India office building',
    address: 'lorem ipsum'
  },
  {
    country: 'India',
    officeImage: 'image.jpg',
    officeAltText: 'India office',
    contactNum: 'xxxxxxxxx',
    officeBuildingImage: 'image.jpg',
    officeBuildingAltText: 'India office building',
    address: 'lorem ipsum'
  }
]

const countries = [
  { code: "+1", name: "USA", flag: "🇺🇸" },
  { code: "+91", name: "India", flag: "🇮🇳" },
  { code: "+44", name: "UK", flag: "🇬🇧" },
  { code: "+61", name: "Australia", flag: "🇦🇺" },
  { code: "+81", name: "Japan", flag: "🇯🇵" },
];

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    countryCode: countries[0].code,
    email: "",
    query: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <div className="contact-us-page">
        <div className="contactus">
          <div className="background-container">
            <div className="text-overlay">
              <h1>CONTACT US</h1>
            </div>
          </div>
        </div>

        <section className="headquarters-section">
          <h1>Our Headquarters</h1>

          <div className="country-cards-container">
            {
              CountryCards.map((CountryCard) => (
                <div className="country-cards">
                  <h4>{ CountryCard.country }</h4>

                  <img src={ CountryCard.officeImage } alt={ CountryCard.officeAltText } />
                  <p>{ CountryCard.contactNum }</p>

                  <img src={ CountryCard.officeBuildingImage } alt={ CountryCard.officeBuildingAltText } />
                  <p>{ CountryCard.address }</p>
                </div>
              ))
            }
          </div>

        </section>
        <div className="form-container">
          <h2>Raise a Query</h2>
          {
            submitted ? (<p className="success-message">Thank you! We'll get back to you soon.</p>) : (
              <form onSubmit={handleSubmit}>
                <label>Name:</label>
                <input type="text" name="name" value={formData.name} onChange={handleChange} required />  
                <label>Mobile Number:</label>

                <div className="mobile-input">
                  <select name="countryCode" value={formData.countryCode} onChange={handleChange}>
                    {countries.map((country) => (
                      <option key={country.code} value={country.code}>
                        {country.flag} {country.code}
                      </option>
                    ))}
                  </select>

                  <input type="tel" name="mobile" value={formData.mobile} onChange={handleChange} required />
                </div>

                <label>Email ID:</label>
                <input type="email" name="email" value={formData.email} onChange={handleChange} required />
                <label>Your Query:</label>
                <textarea name="query" value={formData.query} onChange={handleChange} required></textarea>
                <button type="submit">Submit</button>
              </form>
            )
          }
        </div>
      </div>
    </>
  );
};

export default Contact;