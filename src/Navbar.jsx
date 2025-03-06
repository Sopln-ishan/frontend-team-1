import { Link } from 'react-router-dom';
const Navbar = () => {
    return (
        <>
            <div>
                <h1 className='logo'>Logo</h1>
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

                    <Link to="/Our-Services.jsx">
                        Our Services 
                    </Link>

                    <Link to="/Contact-Us.jsx">
                        Contact Us 
                    </Link>
                </div>
            </div>
        </>
    );
}
 
export default Navbar;