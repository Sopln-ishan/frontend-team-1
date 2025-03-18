import React from "react";
import StatsCounter from "./StatsCounter";
import { motion } from "framer-motion";

const AboutUs = () => {
    const timelineData = [
        {
          week: "WEEK ONE",
          title: "UNDERSTAND",
          description: "Gather existing knowledge, expose assumptions and unknowns.",
          icon: "📖",
        },
        {
          week: "WEEK TWO",
          title: "DIVERGE",
          description:
            "Eliminate all limits. Our goal is to explore as many materials, models, or ideas as possible.",
          icon: "🛠️",
        },
        {
          week: "WEEK THREE",
          title: "CONVERGE",
          description:
            "Our goal is the value of the proposition that will be moved forward.",
          icon: "🔗",
        },
        {
          week: "WEEK FOUR",
          title: "PROTOTYPING",
          description:
            "During this phase, we build a quick and cheap version to test the feasibility of ideas.",
          icon: "🛠️",
        },
        {
          week: "WEEK FIVE",
          title: "TESTING",
          description:
            "Ensure that your product meets the needs of users and see how effective it is.",
          icon: "⚙️",
        },
        {
          week: "WEEK SIX",
          title: "REITERATION",
          description:
            "Refine the solution to fix any issues and improve its functionality.",
          icon: "🔄",
        },
        {
          week: "WEEK SEVEN",
          title: "REVIEW",
          description:
            "To review means to look back over time, evaluating the work that has been done.",
          icon: "✔️",
        },
        {
          week: "WEEK EIGHT",
          title: "FINALIZE",
          description:
            "When you are satisfied with the final design, it’s time to finalize and present.",
          icon: "🏁",
        },
      ];

    return ( 
        <>
            <div className="about-us">
                <div className="about-us-heading-and-bkg-img">
                  <div id="about-us" className="about-us-text" style={{ position: 'relative', overflow: 'hidden' }}>
                    <motion.div className="about-us-heading"
                      variants={{
                        hidden: { opacity: 0, y: 300 },
                        visible: { opacity: 1, y: 0 }
                      }}
                      initial='hidden'
                      whileInView='visible'
                      viewport={{ once: true }}
                      transition={{ duration: 0.5 }}
                    >
                      <h1>About Us</h1>
                    </motion.div>
                    
                    <motion.div className="about-us-description"
                      variants={{
                        hidden: { opacity: 0, y: 300 },
                        visible: { opacity: 1, y: 50 }
                      }}
                      initial='hidden'
                      whileInView='visible'
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.25 }}
                    >
                      <div className="vision-mission-section">
                        <div className="vision-section">
                            <h2>Our Vision</h2>
                            <p>Our vision is to become the most trusted supply chain partner in the UAE and GCC by consistently delivering reliable, efficient, and innovative logistics solutions that our customers can depend on daily.</p>
                        </div>

                        <div className="mission-section">
                            <h2>Our Mission</h2>
                            <p>Our mission is to continually enhance our customer service by tailoring a broad range of services to meet your unique business needs. We are dedicated to providing innovative, cost-effective, and sustainable logistics solutions that support your ongoing success.</p>
                        </div>
                      </div>
                    </motion.div>
                    
                  </div>
                    
                  {/* <div className="about-us-img" style={{ position: 'relative', overflow: 'hidden' }}>
                      <motion.img src="images/about-us-bkg-img.png"
                        variants={{
                          hidden: { opacity: 0, x: 300 },
                          visible: { opacity: 1, x: -50 }
                        }}
                        initial='hidden'
                        whileInView='visible'
                        viewport={{ once: true }}
                        transition={{ duration: 0.55, delay: 0.25 }}
                      />
                  </div> */}
                </div>

                <div className="about-company-section">
                  <motion.div className="about-company-heading"
                    variants={{
                      hidden: { opacity: 0, y: 300 },
                      visible: { opacity: 1, y: 0 }
                    }}
                    initial='hidden'
                    whileInView='visible'
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                  >
                    <h1>About Company</h1>
                  </motion.div>

                  <motion.div className="about-company-text"
                    variants={{
                      hidden: { opacity: 0, y: 300 },
                      visible: { opacity: 1, y: 0 }
                    }}
                    initial='hidden'
                    whileInView='visible'
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.25 }}
                  >
                    <p>Company is committed to delivering a seamless and satisfying experience to all its customers. We offer a comprehensive range of supply chain solutions, including trucking, consultancy, warehouse space, sea and air freight, and e-commerce services. Our team is dedicated to providing innovative and sustainable solutions to address the ongoing challenges faced by our customers. With extensive experience across diverse industry verticals such as retail, FMCG, e-commerce, supply chain and logistics, steel and aluminum, automobile, and transport, we bring valuable expertise to every partnership.</p><br />
                    <p>We offer a comprehensive solution for all supply chain needs, including trucking solutions, consultancy services, warehouse space, sea and air freight, and e-commerce solutions. Our team delivers innovative and sustainable solutions to address the ongoing challenges faced by our customers. Backed by extensive experience across diverse industry verticals such as retail, FMCG, e-commerce, supply chain and logistics, steel and aluminum, automobile, and transport, we are well-equipped to meet our clients' evolving needs.</p>
                  </motion.div>
                </div>

                <StatsCounter />

                <div className="timeline-section">
                  <h1>
                    Our Glorious Past...
                  </h1>

                  <div className="timeline-container">
                    {timelineData.map((item, index) => (
                      <div key={index} className="timeline-item">
                        <div className="timeline-icon">{item.icon}</div>

                        <motion.div className="timeline-content"
                          variants={{
                            hidden: { opacity: 0, x: 300 },
                            visible: { opacity: 1, x: 10 }
                          }}
                          initial='hidden'
                          whileInView='visible'
                          viewport={{ once: true }}
                          transition={{ druation: 0.5, delay: 0.25 }}
                        >
                          <h3>{item.week}</h3>
                          <h4>{item.title}</h4>
                          <p>{item.description}</p>
                        </motion.div>
                      </div>
                    ))}
                  </div>
                </div>
            </div>
        </> 
    );
}
 
export default AboutUs;