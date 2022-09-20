import { useState } from "react";
import ProductsAPI from "../../../api/ProductsAPI";
import ModalPortal from "../utils/modals/Modal";
import PostalCodeForm from "../utils/modals/delivery/PostalCode";
import Welcome from "../welcome";

const Home = () => {


    const [showModal, setShowModal ] = useState( true )

    const handleClose = () =>{
      setShowModal(!showModal)
    }

    return ( 

       <div>
        <Welcome/>
        {showModal &&  <ModalPortal onClose={handleClose}> <PostalCodeForm showmodal={setShowModal}/></ModalPortal>}
    
       </div>
     );
}
 
export default Home;