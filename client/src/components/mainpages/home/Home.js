import { useState } from "react";
//import ProductsAPI from "../../../api/ProductsAPI";
import ModalPortal from "../utils/modals/Modal";
import PostalCodeForm from "../utils/modals/delivery/PostalCode";
import Welcome from "../utils/welcome";

const Home = () => {


    const [showModal, setShowModal ] = useState( true )

    const handleClose = () =>{
      setShowModal(!showModal)
    }

    return ( 
      <>
      <Welcome/>
      <main>
      {showModal &&  <ModalPortal onClose={handleClose}> <PostalCodeForm showmodal={setShowModal}/></ModalPortal>}
      </main>
      </>
     );
}
 
export default Home;