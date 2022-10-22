import { Link } from 'react-router-dom';
import '../../index.css';
import Logo from './icons/icon.png';
import { FaYoutube, FaFacebookSquare, FaInstagram, FaTwitterSquare } from "react-icons/fa";
const Footer = () => {
    return ( 
        <footer>
            <div className='left'>
                <h3>Contact Us</h3>
                <ul className='socialLinks'>
                    <li><span><FaYoutube size={20}/>Youtube</span></li>
                    <li><span><FaFacebookSquare size={20}/>Facebook</span></li>
                    <li><span><FaInstagram size={20}/>Instagram</span></li>
                    <li><span><FaTwitterSquare size={20}/>Twitter</span></li>
                </ul>
            </div> 

            <div className='center'>    
            <img src={Logo} alt="Logo" style={{width: '120px'}}/>
                <p>&copy;2022 Toronto Cupcakes. <br/>All Rights Reserved. Terms of Use and Privacy Policy</p>
            </div>

            <div className='right'>
                <h3>Navigation</h3>
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
        </footer>
     );
}
 
export default Footer;