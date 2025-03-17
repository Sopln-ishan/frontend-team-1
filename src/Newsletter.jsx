import React, { useState } from 'react';
import { Mail } from 'lucide-react';
// import './Styles/Newsletter.css';

const NewsletterBox = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!email || !email.includes('@')) return;
    
    // Simulate API call
    setIsSubmitting(true);
    
    // Simulate network delay
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubscribed(true);
      setEmail('');
    }, 1000);
  };

  return (
    <div className="newsletter-section">
      <h3>Newsletter</h3>
      <div className="underline"></div>
      
      {!isSubscribed ? (
        <div className="newsletter-form">
          <form onSubmit={handleSubmit}>
            <div className="input-group">
              <Mail className="email-icon" size={16} />
              <input 
                type="email" 
                placeholder="Enter your email id" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={isSubmitting}
                required
              />
              <button 
                type="submit" 
                disabled={isSubmitting || !email}
                className={isSubmitting ? 'submitting' : ''}
              >
                {isSubmitting ? (
                  <span className="spinner"></span>
                ) : (
                  <span>→</span>
                )}
              </button>
            </div>
          </form>
        </div>
      ) : (
        <div className="thank-you-message">
          <div className="success-icon">✓</div>
          <p>Thank you for subscribing! We'll notify you for further updates.</p>
          <button 
            className="subscribe-again-btn"
            onClick={() => setIsSubscribed(false)}
          >
            Subscribe another email
          </button>
        </div>
      )}
    </div>
  );
};

export default NewsletterBox;