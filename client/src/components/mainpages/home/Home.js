import { useState } from "react";
import ProductsAPI from "../../../api/ProductsAPI";
import ModalPortal from "../../Modal/Modal";
import PostalCodeForm from "../../PostalCodeForm/PostalCode";
import Products from "../products/Products";
import Welcome from "../welcome";

const Home = () => {


    const [showModal, setShowModal ] = useState( true )

    const handleClose = () =>{
      setShowModal(!showModal)
    }

    return ( 
       <div>
        <Welcome/>
        <Products/>

     {showModal&&   <ModalPortal onClose={handleClose}> <PostalCodeForm showmodal={setShowModal}/></ModalPortal>}
    
       </div>

     );
}
 
export default Home;