import { motion } from 'framer-motion';
import FadeInWhenVisible from './FadeInWhenVisible';
import './Styles/Guarantees.css';

const OurGuarantees = () => {
    const guarantees = [
        {
            icon: 'icon.jpg',
            title: 'guarantee 1'
        },
        {
            icon: 'icon.jpg',
            title: 'guarantee 2'
        },
        {
            icon: 'icon.jpg',
            title: 'guarantee 3'
        },
        {
            icon: 'icon.jpg',
            title: 'guarantee 4'
        }
    ]

    return (
        <div className="guarantees">
            <FadeInWhenVisible children={
                <div className="guarantees-heading">
                    <h2>What We Guarantee</h2>
                </div>
            } 
            transition={ 0.5 }
            delay={ 0 }
            />

                <div className="guarantee-card-container">
                    { guarantees.map((guarantee, index) => (
                        <motion.div className="guarantee-card" key={ index }
                            variants={{
                                hidden: { opacity: 0, y: 100 },
                                visible: { opacity: 1, y: 10 }
                            }}
                
                            initial='hidden'
                            whileInView='visible'
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.25*(index+1) }}
                        >
                            <img src={ guarantee.icon } />
                            <p>{ guarantee.title }</p>
                        </motion.div>
                    ))
                    }
                </div>
        </div>
    );
}

export default OurGuarantees;