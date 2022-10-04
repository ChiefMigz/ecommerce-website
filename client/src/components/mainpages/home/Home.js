import { useState } from 'react';
import { FaExclamationTriangle } from 'react-icons/fa';
//import ProductsAPI from '../../../api/ProductsAPI';
import ModalPortal from '../utils/modals/Modal';
import PostalCodeForm from '../utils/modals/delivery/PostalCode';
import Welcome from '../utils/welcome/index';
import './Home.css';

const Home = () => {


    const [showModal, setShowModal ] = useState( true )

    const handleClose = () =>{
      setShowModal(!showModal)
    }
    return ( 
      <div className='marginTop'>
        <div className='infoBanner'>
              <FaExclamationTriangle color={'yellow'} size={30}/>     
              <h3>COVID-19 Protocol and Information</h3>
        </div>
        <Welcome/>
        {showModal &&  <ModalPortal onClose={handleClose}> <PostalCodeForm showmodal={setShowModal}/></ModalPortal>}
      </div>
     );
}
 
export default Home;