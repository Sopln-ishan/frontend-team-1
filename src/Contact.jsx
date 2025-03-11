import React, { useState, useEffect } from 'react';
import './Contact.css';

const CountryCard = ({ country }) => {
  return (
    <div 
      className="country-card" 
      style={{ 
        backgroundImage: `linear-gradient(rgba(25, 19, 16, 0.83), rgba(255, 255, 255, 0.7)), url(${country.image2})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      {/* <h4 className="country-name">{country.name}</h4> */}
      <div className="extraimg">  
        <h4 className="country-name">{country.name}</h4>
        <img src={country.image1} alt={`${country.name} Image`} className="country-image" />
      </div>
      <p className="country-description">{country.description}</p>
    </div>
  );
};

const Contact = () => {
  const countries = [
    { code: "+1", name: "USA", flag: "🇺🇸" },
    { code: "+91", name: "India", flag: "🇮🇳" },
    { code: "+44", name: "UK", flag: "🇬🇧" },
    { code: "+61", name: "Australia", flag: "🇦🇺" },
    { code: "+81", name: "Japan", flag: "🇯🇵" },
  ];
  
  const countryList = [
    {
      name: "UAE",
      image1: "https://images.trvl-media.com/lodging/3000000/2240000/2235400/2235336/88658e84.jpg?impolicy=resizecrop&rw=575&rh=575&ra=fill",
      image2: "https://images.trvl-media.com/lodging/3000000/2240000/2235400/2235336/88658e84.jpg?impolicy=resizecrop&rw=575&rh=575&ra=fill",
      // description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    },
    {
      name: "Saudi Arabia",
      image1: "https://media-cdn.tripadvisor.com/media/attractions-splice-spp-674x446/11/85/f3/b7.jpg",
      image2: "https://media-cdn.tripadvisor.com/media/attractions-splice-spp-674x446/11/85/f3/b7.jpg",
      // description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    },
    {
      name: "OMAN",
      image1: "https://www.holidify.com/images/cmsuploads/compressed/shutterstock_80147977_20191202163915.jpg",
      image2: "https://www.holidify.com/images/cmsuploads/compressed/shutterstock_80147977_20191202163915.jpg",
      // description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    },
    {
      name: "BAHRAIN",
      image1: "https://live.staticflickr.com/4100/4884934423_125d9bca35_b.jpg",
      image2: "https://m.media-amazon.com/images/I/61ywLsK+idL._AC_UF1000,1000_QL80_.jpg",
      // description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    },
    {
      name: "KUWAIT",
      image1: "https://i0.wp.com/nenow.in/wp-content/uploads/2024/12/kuwait-1.jpeg?resize=780%2C585&quality=89&ssl=1",
      image2: "https://i0.wp.com/nenow.in/wp-content/uploads/2024/12/kuwait-1.jpeg?resize=780%2C585&quality=89&ssl=1",
      // description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    },
    {
      name: "QATAR",
      image2: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/29/ed/64/28/lusail-promenade.jpg?w=500&h=500&s=1",
      image1: "https://llqlifestyle.com/wp-content/uploads/2022/05/15a496b0-6c7d-4bd4-a2ad-ae269fe21c95-1024x756.jpg",
      // description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    },
    {
      name: "JORDAN",
      image1: "japan1.jpg",
      image2: "japan2.jpg",
      // description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    },
    {
      name: "IRAQ",
      image1: "japan1.jpg",
      image2: "japan2.jpg",
      // description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    },
    {
      name: "SYRIA",
      image1: "japan1.jpg",
      image2: "japan2.jpg",
      // description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    },
    {
      name: "LEBANON",
      image1: "japan1.jpg",
      image2: "japan2.jpg",
      // description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    },
    {
      name: "EGYPT",
      image1: "japan1.jpg",
      image2: "japan2.jpg",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    },
  ];

  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    countryCode: countries[0].code,
    email: "",
    query: "",
  });
  
  const [selectedCountry, setSelectedCountry] = useState(countryList[0]);
  const [data, setData] = useState({
    name: "",
    image1: "",
    image2: "",
    description: ""
  });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    // Simulating API call
    setTimeout(() => {
      setData({
        name: selectedCountry.name,
        image1: selectedCountry.image1,
        image2: selectedCountry.image2,
        description: selectedCountry.description,
      });
    }, 500);
  }, [selectedCountry]);

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
        <section className="addr">
          <h1>Our Headquarters</h1>
          <div className="country-grid">
            {countryList.map((country, index) => (
              <CountryCard key={index} country={country} />
            ))}
          </div>
        </section>
        <div className="form-container">
          <h2>Raise a Query</h2>
          {submitted ? (
            <p className="success-message">Thank you! We'll get back to you soon.</p>
          ) : (
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
          )}
        </div>
      </div>
    </>
  );
};

export default Contact;