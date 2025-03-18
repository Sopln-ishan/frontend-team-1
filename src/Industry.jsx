import { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import FadeInWhenVisible from './FadeInWhenVisible';
import './Styles/Industry.css';

const OurIndustry = () => {
    const sliderRef = useRef(null);
    const scrollAmount = 1000;
    const scrollInterval = useRef(null);

    const Industries = [
        {
            img: '/images/placeholder-company-logo.png',
            name: 'Agriculture'
        },
        {
            img: '/images/placeholder-company-logo.png',
            name: 'Automotive'
        },
        {
            img: '/images/placeholder-company-logo.png',
            name: 'Construction'
        },
        {
            img: '/images/placeholder-company-logo.png',
            name: 'E-commerce'
        },
        {
            img: '/images/placeholder-company-logo.png',
            name: 'FMCG'
        },
        {
            img: '/images/placeholder-company-logo.png',
            name: 'Health Care'
        },
        {
            img: '/images/placeholder-company-logo.png',
            name: 'Logistics & Supply Chain'
        },
        {
            img: '/images/placeholder-company-logo.png',
            name: 'Manufacturing'
        },
        {
            img: '/images/placeholder-company-logo.png',
            name: 'Oil & Gas'
        },
        {
            img: '/images/placeholder-company-logo.png',
            name: 'Real Estate'
        },
        {
            img: '/images/placeholder-company-logo.png',
            name: 'Retail'
        },
        {
            img: '/images/placeholder-company-logo.png',
            name: 'Tele Communication'
        },
        {
            img: '/images/placeholder-company-logo.png',
            name: 'Pharma'
        },
        {
            img: '/images/placeholder-company-logo.png',
            name: 'Print Media and Paper'
        }
    ];

    const duplicatedIndustries = [...Industries, ...Industries, ...Industries, ...Industries, ...Industries, ...Industries, ...Industries];
    
    useEffect(() => {
        startAutoScroll();

        return () => clearInterval(scrollInterval.current);
    }, []);

    const startAutoScroll = () => {
        clearInterval(scrollInterval.current); // Ensure no duplicates
        scrollInterval.current = setInterval(() => {
            const container = sliderRef.current;
            if (container) {
                // If we've scrolled to the end of the first set of industries
                if (Math.ceil(container.scrollLeft + container.industryWidth) >= container.scrollWidth) {
                    // Reset to the beginning without animation
                    container.scrollLeft = 0;
                } else {
                    container.scrollLeft += 15;
                }
            }
        }, 15); // Lower = faster scroll
    };

    const pauseScroll = () => clearInterval(scrollInterval.current);
    const resumeScroll = () => startAutoScroll();

    // Function to handle manual scrolling with "looping" effect
    const handleScroll = (direction) => {
        const container = sliderRef.current;
        if (!container) return;
        
        const newScrollPosition = container.scrollLeft + (direction * scrollAmount);
        
        // If we're scrolling past the visible items
        if (newScrollPosition < 0) {
            // Loop to the end
            container.scrollLeft = container.scrollWidth - container.industryWidth;
        } else if (newScrollPosition > container.scrollWidth - container.industryWidth) {
            // Loop to the beginning
            container.scrollLeft = 0;
        } else {
            // Normal scroll
            container.scrollLeft = newScrollPosition;
        }
    };

    return (
        <div className="industry">
            <div className='industries-section'>
                <FadeInWhenVisible children={
                    <h1 className="industry-card-heading">Our Expertise</h1>
                } transition={ 0.5 } />

                <FadeInWhenVisible children={
                    <div
                        className='industry-card-slider'
                        onMouseEnter={pauseScroll}
                        onMouseLeave={resumeScroll}
                    >
                    
                        <div className="industries-container" ref={sliderRef}>
                            {duplicatedIndustries.map((industry, index) => (
                                <div className='industry-image-name' key={ index }>
                                    <div className='industry-image'>
                                        <img alt={industry.name} src={industry.img} />
                                    </div>
                                    <p className='industry-name'>{ industry.name }</p>
                                </div>
                            ))}
                        </div>
                    </div>
                } 
                transition={ 0.5 } 
                delay={ 0.25 }
                />
            </div>
        </div>
    );
}

export default OurIndustry;