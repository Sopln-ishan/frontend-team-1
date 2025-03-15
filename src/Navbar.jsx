import { HashLink as Link } from 'react-router-hash-link';

const Navbar = () => {   
    return (
        <>
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
                <Link to="/Home.jsx/#our-services">
                    Our Services 
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

                <Link to="/#our-services">
                    Our Services 
                </Link>

                <Link to="/Contact.jsx">
                    Contact Us 
                </Link>
            </div>
        </>
    );
}
 
export default Navbar;