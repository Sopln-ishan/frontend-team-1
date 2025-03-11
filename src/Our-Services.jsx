import './Our-Services.css';
import { Link } from 'react-router-dom';

const OurServices = () => {
  const linkCards = [
    {
      title: 'Bonded Movements Form',
      link: '/Services/BondedMovementsForm.jsx',
      icon: 'icon.jpg',
      id: 1
    },
    {
      title: 'Border Clearances Form',
      link: '/Services/BorderClearancesForm.jsx',
      icon: 'icon.jpg',
      id: 2
    },
    {
      title: 'Importer Exporter Form',
      link: '/Services/ImportExporterForm.jsx',
      icon: 'icon.jpg',
      id: 3
    },
    {
      title: 'Integrated Trucking Form',
      link: '/Services/IntegratedTruckingForm.jsx',
      icon: 'icon.jpg',
      id: 4
    },
    {
      title: 'Project Cargo Form',
      link: '/Services/ProjectCargoForm.jsx',
      icon: 'icon.jpg',
      id: 5
    },
    {
      title: 'Shipping Documents Form',
      link: '/Services/ShippingDocumentsForm.jsx',
      icon: 'icon.jpg',
      id: 6
    }
  ]
  return (
    <div className='our-services-section'>
      <div className='our-services-bkg-img'>
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
