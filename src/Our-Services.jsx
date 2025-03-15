import './Styles/Our-Services.css';
import { Link } from 'react-router-dom';

const OurServices = () => {
  const linkCards = [
    {
      title: 'Bonded Movements',
      src: '/Services/BondedMovementsForm.jsx',
      icon: 'icon.jpg',
      id: 1
    },
    {
      title: 'Border Clearances',
      src: '/Services/BorderClearancesForm.jsx',
      icon: 'icon.jpg',
      id: 2
    },
    {
      title: 'Importer Exporter',
      src: '/Services/ImportExporterForm.jsx',
      icon: 'icon.jpg',
      id: 3
    },
    {
      title: 'Integrated Trucking',
      src: '/Services/IntegratedTruckingForm.jsx',
      icon: 'icon.jpg',
      id: 4
    },
    {
      title: 'Project Cargo',
      src: '/Services/ProjectCargoForm.jsx',
      icon: 'icon.jpg',
      id: 5
    },
    {
      title: 'Shipping Documents',
      src: '/Services/ShippingDocumentsForm.jsx',
      icon: 'icon.jpg',
      id: 6
    }
  ]
  return (
    <div className='our-services-section'>
      <div className='our-services-heading'>
        <h2>Our Services</h2>
      </div>

      <div className='our-services-card-container'>
        {linkCards.map((linkCard) => (
          <Link to={ linkCard.src } className='link-card' key={ linkCard.id }>
            <img src={ linkCard.icon } />
            <p>{ linkCard.title }</p>
          </Link>
          ))
        }
        
      </div>
    </div>
  );
};

export default OurServices;
