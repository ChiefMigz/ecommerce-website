import '../../index.css';
import { Link } from 'react-router-dom';
import ProfileOverlay from './overlays/ProfileOverlay';
import {useState, useContext} from 'react';
import {GlobalState} from '../../GlobalState';
import {FaShoppingCart, FaUserAlt, FaLocationArrow} from 'react-icons/fa';
import Logo from './icons/icon.png'

const Header = () => {  
    const value = useContext(GlobalState)
    const [profileOverlay, setProfileOverlay] = useState(false);
    const handleClick = () => setProfileOverlay(!profileOverlay);
    return (
            <div className='container'>
                
                {/* Website Logo */}
                <div>
                    <img src={Logo} alt="Logo" style={{width: '60px'}}/>
                </div>
                
                {/* Links */}
                <div className='navbar'>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/">About</Link>
                        </li>
                        <li>
                            <Link to="/">Cupcakes</Link>
                        </li>
                        <li>
                            <Link to="/">About Us</Link>
                        </li>
                    </ul>
                </div>
                <div className='menu'>
                    <div className='cart-icon'>
                        <span>0</span>
                        <FaShoppingCart size={30}/>
                    </div>
                    <div onClick={() => handleClick()}>
                        <FaUserAlt size={30}/>
                    </div>
                    <div>
                        <FaLocationArrow size ={30}/>
                    </div>
                </div>
                <div style={{display: profileOverlay ? 'block' : 'none'}}><ProfileOverlay/></div>
            </div>
    );
}
 
export default Header;