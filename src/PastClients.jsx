import { useRef, useEffect } from 'react';
import './Styles/PastClients.css';
import FadeInWhenVisible from './FadeInWhenVisible';

const PastClients = () => {
    const sliderRef = useRef(null);
    const scrollAmount = 200;
    const scrollInterval = useRef(null);

    const clients = [
        { name: 'company 1', img: '../images/placeholder-company-logo.png', id: '1' },
        { name: 'company 2', img: '../images/placeholder-company-logo.png', id: '2' },
        { name: 'company 3', img: '../images/placeholder-company-logo.png', id: '3' },
        { name: 'company 4', img: '../images/placeholder-company-logo.png', id: '4' },
        { name: 'company 5', img: '../images/placeholder-company-logo.png', id: '5' },
        { name: 'company 6', img: '../images/placeholder-company-logo.png', id: '6' }
    ];

    // Duplicate the clients array to create the illusion of infinite scrolling
    const duplicatedClients = [...clients, ...clients, ...clients, ...clients, ...clients, ...clients, ...clients];

    useEffect(() => {
        startAutoScroll();

        return () => clearInterval(scrollInterval.current);
    }, []);

    const startAutoScroll = () => {
        clearInterval(scrollInterval.current); // Ensure no duplicates
        scrollInterval.current = setInterval(() => {
            const container = sliderRef.current;
            if (container) {
                // If we've scrolled to the end of the first set of clients
                if (Math.ceil(container.scrollLeft + container.clientWidth) >= container.scrollWidth) {
                    // Reset to the beginning without animation
                    container.scrollLeft = 0;
                } else {
                    container.scrollLeft += 1;
                }
            }
        }, 20); // Lower = faster scroll
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
            container.scrollLeft = container.scrollWidth - container.clientWidth;
        } else if (newScrollPosition > container.scrollWidth - container.clientWidth) {
            // Loop to the beginning
            container.scrollLeft = 0;
        } else {
            // Normal scroll
            container.scrollLeft = newScrollPosition;
        }
    };

    return (
        <div className='past-clients-section'>
            <FadeInWhenVisible children={
                <h1 className="client-card-heading">Our Past Clients</h1>
            } transition={ 0.5 } />

            <FadeInWhenVisible children={
                <div
                    className='client-card-slider'
                    onMouseEnter={pauseScroll}
                    onMouseLeave={resumeScroll}
                >
                
                    <div className="clients-container" ref={sliderRef}>
                        {duplicatedClients.map((client, index) => (
                            <div className='client-image' key={`${client.id}-${index}`}>
                                <img alt={client.name} src={client.img} />
                            </div>
                        ))}
                    </div>
                </div>
            } 
            transition={ 0.5 } 
            delay={ 0.25 }
            />
        </div>
    );
};

export default PastClients;