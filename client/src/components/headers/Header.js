import '../../index.css';
import { Link } from 'react-router-dom';
import ProfileOverlay from './overlays/ProfileOverlay';
import {useState} from 'react';
//import {GlobalState} from '../../GlobalState';
import {FaShoppingCart, FaUserAlt, FaLocationArrow, FaBars, FaExclamationTriangle} from 'react-icons/fa';
import Logo from './icons/icon.png'

const Header = () => {  
    //const value = useContext(GlobalState)
    const [profileOverlay, setProfileOverlay] = useState(false);
    const [nav, setNav] = useState(false);
    const handleClick = () => setProfileOverlay(!profileOverlay);
    return (
        <>
        <div className='navbarContainer'>
            { /* Mobile Display Nav Button */ }
            <div className='bars' onClick={() => setNav(!nav)}>
                <FaBars size={30}/>
            </div>

            {/* Website Logo */}
            <div>
                <img src={Logo} alt="Logo" style={{width: '70px'}}/>
            </div>

            {/* Cart for Mobile */}
            <div className='cart-btn'>
                <FaShoppingCart size={32}/>
            </div>                 
            
            {/* Links */}
            <div className='navbarLinks'>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/products">Cupcakes</Link>
                    </li>
                    <li>
                        <Link to="/">Contact Us</Link>
                    </li>
                </ul>
            </div>

            <div className='menu'>
                <div className='cart-icon'>
                    <span>0</span>
                    <FaShoppingCart size={32}/>
                </div>
                <div onClick={() => handleClick()}>
                    <FaUserAlt size={32}/>
                </div>
                <div className='location-icon'>
                    <FaLocationArrow size ={32}/>
                </div>
            </div>
            <div style={{display: profileOverlay ? 'block' : 'none'}}><ProfileOverlay/></div>
                {/* Mobile Menu */}
            <div className={nav ? 'menuMobile' : 'hidden'}>
                <span onClick={() => setNav(!nav)}>x</span>
                <ul>
                    <li onClick={() => setNav(!nav)}>
                        <Link to="/">Home</Link>
                    </li>
                    <li onClick={() => setNav(!nav)}>
                        <Link to="/about">About</Link>
                    </li>
                    <li onClick={() => setNav(!nav)}>
                        <Link to="/products">Cupcakes</Link>
                    </li>
                    <li onClick={() => setNav(!nav)}>
                        <Link to="/">Contact Us</Link>
                    </li>
                </ul>
            </div>
        </div>
        <div className='infoBanner'>
            <FaExclamationTriangle color={'yellow'} size={30}/>     
            <h3>COVID-19 Protocol and Information</h3>
        </div>
        </>
    );
}
 
export default Header;