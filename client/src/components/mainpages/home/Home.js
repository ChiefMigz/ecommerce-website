import { useState } from "react";
//import ProductsAPI from "../../../api/ProductsAPI";
import ModalPortal from "../utils/modals/Modal";
import PostalCodeForm from "../utils/modals/delivery/PostalCode";
import Welcome from "../utils/welcome/index";

const Home = () => {


    const [showModal, setShowModal ] = useState( true )

    const handleClose = () =>{
      setShowModal(!showModal)
    }
    return ( 
      <>
      <Welcome/>
      {showModal &&  <ModalPortal onClose={handleClose}> <PostalCodeForm showmodal={setShowModal}/></ModalPortal>}
      </>
     );
}
 
export default Home;