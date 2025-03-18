import { HashLink as Link } from 'react-router-hash-link';
import { motion } from 'framer-motion';

const Navbar = () => {   
    return (
        <motion.section 
            variants={{
                hidden: { y: -100 },
                visible: { y: 0 }
            }}
            initial='hidden'
            animate='visible'
            transition={{ duration: 0.5 }}
        >
            <h1 className='logo'>Logo</h1>
            <div className='dropdown-nav-bar' style={{ display: 'none' }}>
                <div className='dropdown-button'>
                    &#x2630;
                </div>

                <div className='dropdown-content'>
                <div className="navlink">
                <Link to="/">
                    Home
                </Link>
                </div>

                <div className="navlink">
                <Link to="/About-Us.jsx">
                    About Us 
                </Link>
                </div>

                <div className="navlink">
                <Link to="/Why-Us.jsx">
                    Why Us 
                </Link>
                </div>

                <div className="navlink">
                <Link to="/Contact.jsx">
                    Contact Us 
                </Link>   
                </div> 
                </div>
            </div>

            <div className="navigation-menu">
                <Link to="/">
                    Home
                </Link>

                <Link to="/About-Us.jsx">
                    About Us 
                </Link>

                <Link to="/Why-Us.jsx">
                    Why Us 
                </Link>

                <Link to="/Contact.jsx">
                    Contact Us 
                </Link>
            </div>
        </motion.section>
    );
}
 
export default Navbar;