import React from "react";
import StatsCounter from "./StatsCounter";

const cofounders = [
  {
    name: "Elon Musk",
    title: "CEO & Co-founder",
    image: "https://encrypted-tbn1.gstatic.com/licensed-image?q=tbn:ANd9GcS2CHe7B3Ca4IP1HBjFALkqkeU43BjeDYAtGuP32PxP2XPSZWnByb0xArOAOEdP5lcykP_lUkxAM4HUkK8", // Replace with actual image URL
  },
  {
    name: "Mark Zuckerberg",
    title: "CTO & Co-founder",
    image: "data:image/jpeg;base64,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", // Replace with actual image URL
  },
  {
    name: "Jeff Bezos",
    title: "COO & Co-founder",
    image: "data:image/jpeg;base64,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", // Replace with actual image URL
  },
];

const AboutUs = () => {
    const histories = [
        {
            img: "../images/gray-screen-img.png",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus corporis dolores iusto ipsa, tempore deleniti consectetur, rem voluptatibus distinctio adipisci, minus minima modi nobis error. Laboriosam non soluta mollitia quam.",
            floatImage: "left",
            alignText: "left",
            id: 1,
        },
        {
            img: "../images/gray-screen-img.png",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus corporis dolores iusto ipsa, tempore deleniti consectetur, rem voluptatibus distinctio adipisci, minus minima modi nobis error. Laboriosam non soluta mollitia quam.",
            floatImage: "right",
            alignText: "right",
            id: 2
        }
    ];
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
                    <h1>About Us</h1>
                    <p>A brief description about what you do</p>
                </div>

                <div className="vision-mission-section">
                    <div className="mission-section">
                        <h2>Our Mission</h2>
                        <p>Our mission is to continually enhance our customer service by tailoring a broad range of services to meet your unique business needs. We are dedicated to providing innovative, cost-effective, and sustainable logistics solutions that support your ongoing success.
                        </p>
                    </div>

                    <div className="vision-section">
                        <h2>Our Vision</h2>
                        <p>Our vision is to become the most trusted supply chain partner in the UAE and GCC by consistently delivering reliable, efficient, and innovative logistics solutions that our customers can depend on daily.</p>
                    </div>
                </div>
                <hr />
                <StatsCounter />
                <hr />

                <div className="cofounders-container">
                    <h2 className="cofounders-title">Meet Our Co-founders</h2>
                    <div className="cofounders-cards">
                        {cofounders.map((founder, index) => (
                            <div key={index} className="cofounder-card">
                                <img src={founder.image} alt={founder.name} className="cofounder-avatar" />
                                <h3 className="cofounder-name">{founder.name}</h3>
                                <p className="cofounder-role">{founder.title}</p>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="timeline-container">
                    {timelineData.map((item, index) => (
                     <div key={index} className="timeline-item">
                       <div className="timeline-icon">{item.icon}</div>
                       <div className="timeline-content">
                         <h3>{item.week}</h3>
                         <h4>{item.title}</h4>
                         <p>{item.description}</p>
                       </div>
                </div>
      ))}
    </div>
            </div>
        </> 
    );
}
 
export default AboutUs;