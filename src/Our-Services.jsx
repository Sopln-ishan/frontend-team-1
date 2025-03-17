import FadeInWhenVisible from './FadeInWhenVisible';
import { motion } from 'framer-motion';
import './Styles/Our-Services.css';
import { Link } from 'react-router-dom';

const OurServices = () => {
  const linkCards = [
    {
      title: 'Bonded Movements',
      src: '/Services/BondedMovementsForm.jsx',
      icon: '../images/warehouse.png',
      id: 1
    },
    {
      title: 'Border Clearances',
      src: '/Services/BorderClearancesForm.jsx',
      icon: '../images/truck.png',
      id: 2
    },
    {
      title: 'Importer Exporter',
      src: '/Services/ImportExporterForm.jsx',
      icon: '../images/worldwide.png',
      id: 3
    },
    {
      title: 'Integrated Trucking',
      src: '/Services/IntegratedTruckingForm.jsx',
      icon: '../images/delivery-truck.png',
      id: 4
    },
    {
      title: 'Project Cargo',
      src: '/Services/ProjectCargoForm.jsx',
      icon: '../images/delivery-box.png',
      id: 5
    },
    {
      title: 'Shipping Documents',
      src: '/Services/ShippingDocumentsForm.jsx',
      icon: '../images/plan.png',
      id: 6
    }
  ];

  return (
    <div className='our-services-section'>
      <FadeInWhenVisible children={  
        <div className='our-services-heading' style={{ position: 'relative', overflow: 'hidden' }}>
          <h2>Our Services</h2>
        </div>
      }
      />

      <div className='our-services-card-container' style={{ position: 'relative', overflow: 'hidden' }}>
        {linkCards.map((linkCard) => (
          <motion.div 
            variants={{
              hidden: { opacity: 0, y: 100 },
              visible: { opacity: 1, y: 10 }
            }}

            initial='hidden'
            whileInView='visible'
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.25*linkCard.id }}
            key={ linkCard.id }
          >
            <Link to={ linkCard.src } className='link-card'>
              <img src={ linkCard.icon } />
              <p>{ linkCard.title }</p>
            </Link>
          </motion.div>
          ))
        }
      </div>
    </div>
  );
};

export default OurServices;
