import React, { useEffect, useRef } from 'react';
import './Styles/ReviewsSection.css';

const reviews = [
  {
    name: 'SARTH PATIL',
    exam: 'NEET-UG 2024',
    score: '710/720',
    text: 'I chose ALLEN Online Courses because I wanted to balance my NEET prep with my school schedule. The course structure, from daily homework to post-class handouts, was well-organized.',
    img: '/images/sarth_patil.png'
  },
  {
    name: 'SEKH GALIB RAZA',
    exam: 'NEET-UG 2024',
    score: '690/720',
    text: 'I took NEET in 2023 but did not achieve my desired score, so I reattempted in 2024 with ALLEN Online Courses. The top-quality faculty, study material, & personalised experience on the ALLEN app helped me improve my score.',
    img: '/images/sekh_galib.png'
  },
  {
    name: 'AVIK DAS',
    exam: 'JEE Adv. 2024',
    score: 'AIR 69',
    text: 'I wanted to stay with my family while preparing for JEE, so I chose ALLEN Online Courses. The faculty was great & the live classes, daily homework & test series helped me secure a great score & rank!',
    img: '/images/avik_das.png'
  },
  {
    name: 'SHIFA FATIMA',
    exam: 'NEET-UG 2024',
    score: '696/720',
    text: 'I came to know about ALLENs Online Test Series from my senior in school. The tests are really awesome as these are based mainly on NCERT and cover almost all types of NEET questions. They gave me the real feel of the competition.',
    img: '/images/shifa_fatima.png'
  }
];

const ReviewsSection = () => {
  const containerRef = useRef(null);
  
  useEffect(() => {
    // Clone items for infinite scroll effect
    const scrollContainer = containerRef.current;
    if (scrollContainer) {
      const reviewCards = Array.from(scrollContainer.children);
      
      // Clone each card and append to container
      reviewCards.forEach(card => {
        const clone = card.cloneNode(true);
        scrollContainer.appendChild(clone);
      });
    }
  }, []);

  return (
    <div className="horizontal-scroll-wrapper">
        <h1> What People Say </h1>
      <div className="reviews-scroll-container" ref={containerRef}>
        {reviews.map((review, index) => (
          <div key={index} className="review-card">
            <span className="quote-mark">"</span>
            <p className="review-text">{review.text}</p>
            <div className="reviewer">
              <img src={review.img} alt={review.name} className="reviewer-img" />
              <div className="reviewer-info">
                <h4>{review.name}</h4>
                <p>{review.exam}, Score {review.score}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReviewsSection;

