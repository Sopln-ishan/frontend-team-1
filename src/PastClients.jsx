import { useRef } from 'react';
import './Styles/PastClients.css';

import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

const PastClients = () => {
    const sliderRef = useRef(null);
    const scrollAmount = 200;

    const clients = [
        {
            name: 'company 1',
            img: 'comapny-1.jpg',
            id: '1'
        },
        {
            name: 'company 2',
            img: 'company-2.jpg',
            id: '2'
        },
        {
            name: 'company 3',
            img: 'company-3.jpg',
            id: '3'
        },
        {
            name: 'company 4',
            img: 'company-4.jpg',
            id: '4'
        },
        {
            name: 'company 5',
            img: 'company-5.jpg',
            id: '5'
        },
        {
            name: 'company 6',
            img: 'company-6.jpg',
            id: '6'
        }
    ];

    return (
        <div className='past-clients-section'>
            <h1 className="client-card-heading">Our Past Clients</h1>
            <div className='client-card-slider'>
                <button
                    className="nav-btn"
                    onClick={() => {
                        const container = sliderRef.current;
                        container.scrollLeft -= scrollAmount;
                    }}
                >
                    <ChevronLeftIcon />
                </button>

                <div className="clients-container" ref={sliderRef}>
                    {clients.map((client) => {
                    return (
                        <div className='client-image' key={ client.id }>
                            <img
                                alt={ client.name }
                                src={ client.img }
                            />
                        </div>
                    );
                    })}
                </div>

                <button
                    className="nav-btn"
                    onClick={() => {
                        const container = sliderRef.current;
                        container.scrollLeft += scrollAmount;
                    }}
                >
                    <ChevronRightIcon />
                </button>
            </div>
        </div>
    );
}
 
export default PastClients;