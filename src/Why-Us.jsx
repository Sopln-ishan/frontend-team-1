import React from "react";
import { motion } from "framer-motion";
import "./Styles/WhyUs.css";

const WhyUs = () => {
  const icons = [
    {
      name: 'Our Reliability',
      link: '#Reliability',
      img: '../images/trust-hover.png',
      altText: 'Our Reliability Image',
      height: '200px',
      width: '200px'
    },
    {
      name: 'Our Achievements',
      link: '#Achievements',
      img: '../images/victory-hover.png',
      altText: 'Our Achievements Image',
      height: '200px',
      width: '200px'
    }
  ];

  const reliabilities = [
    {
      heading: 'Insurance Coverage',
      text: 'We provide Hauliers Insurance Liability coverage of up to AED 1,000,000 per truck, guaranteeing a high level of protection for your cargo throughout its journey.',
      backgroundColor: '#f9f5f1',
      color: '#191310',
      x: -300
    },
    {
      heading: 'Track & Trace (GPS)',
      text: 'All our trucks are GPS-enabled, allowing real-time tracking and timely updates from our back-office team to ensure complete visibility of your cargo’s progress.',
      backgroundColor: '#191310',
      color: '#f9f5f1',
      x: 300
    },
    {
      heading: 'Tailored Solutions',
      text: '“One size doesn’t fit all,” which is why we analyze your specific data to create custom logistics solutions that align perfectly with your operational needs.',
      backgroundColor: '#f9f5f1',
      color: '#191310',
      x: -300
    },
    {
      heading: 'All Over GCC & Levant Region',
      text: 'We extend our reach beyond the UAE to cover the entire GCC (KSA, Oman, Bahrain, Kuwait, Qatar) and the Levant (Jordan, Iraq, Syria, Lebanon, Egypt), providing seamless cross-border services',
      backgroundColor: '#191310',
      color: '#f9f5f1',
      x: 300
    },
    {
      heading: 'Cost-Effective Operations',
      text: 'Our team offers multiple shipping and logistics options designed to balance both quality and budget, ensuring that your business objectives are met in the most efficient way possible.',
      backgroundColor: '#f9f5f1',
      color: '#191310',
      x: -300
    },
    {
      heading: 'Dedicated Account Executives',
      text: 'Each client is assigned a dedicated account executive who oversees every aspect of your shipments, ensuring personalized service and smooth coordination at all stages.',
      backgroundColor: '#191310',
      color: '#f9f5f1',
      x: 300
    }
  ];

  return (
    <>
      <section id="why-us" >
        <div className="why-us-heading-and-bkg-img" style={{ overflow: 'hidden' }}>
          <motion.h1 
            variants={{
              hidden: { opacity: 0, y: 300 },
              visible: { opacity: 1, y: -50 }
            }}
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Why Us?
          </motion.h1>
        </div>

        <section id="Reliability">
        {/* Trust and Ensure Section */}
        <h2 className="reliability-heading">
          What do we ensure?
        </h2>

        <div className="trust-ensure" style={{ overflow: 'hidden' }}>
          {
            reliabilities.map((reliability, index) => (
              <motion.div className="trust-card" key={ index } 
                style={{ backgroundColor: reliability.backgroundColor, color: reliability.color }}
                variants={{
                  hidden: { opacity: 0, x: reliability.x },
                  visible: { opacity: 1, x: 0 }
                }}
                initial='hidden'
                whileInView='visible'
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.25 }}
              >
                <h2>{ reliability.heading }</h2>
                <p>{ reliability.text }</p>
              </motion.div>
            ))
          }
        </div>
        </section>
      </section>
    </>
  );
}

export default WhyUs;
