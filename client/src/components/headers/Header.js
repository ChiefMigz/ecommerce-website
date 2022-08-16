import '../../index.css';
import { Link } from 'react-router-dom';
import ProfileOverlay from './overlays/ProfileOverlay';
import {useState, useContext} from 'react';
import {GlobalState} from '../../GlobalState';
import {FaShoppingCart, FaUserAlt, FaLocationArrow} from 'react-icons/fa';
import Logo from './icons/icon.png'

const Header = () => {  
    //const value = useContext(GlobalState)
    const [profileOverlay, setProfileOverlay] = useState(false);
    const handleClick = () => setProfileOverlay(!profileOverlay);
    return (
            <div className='container'>
                
                {/* Website Logo */}
                <div>
                    <img src={Logo} alt="Logo" style={{width: '70px'}}/>
                </div>
                
                {/* Links */}
                <div className='navbar'>
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
            </div>
    );
}
 
export default Header;