import { useContext, useState, useEffect } from "react";
import { useParams, useNavigate } from 'react-router-dom';
import { GlobalState } from '../../../GlobalState';
import {FaArrowAltCircleLeft} from 'react-icons/fa';
//import ProductItem from "../utils/productitem/ProductItem";

const DetailProduct = () => {
    const params = useParams()
    const state = useContext(GlobalState)
    const [products] = state.productsAPI.products
    const [detailProduct, setDetailProduct] = useState([])
    const history = useNavigate();
    const GoBack = () => history(-1)

    useEffect(() => {
       if (params) {
            products.forEach(product => {
                if (product._id === params.id) setDetailProduct(product)
        })
       }
    }, [params, products])
    
    if(detailProduct.length === 0) return null;

    console.log(detailProduct)
    return ( 
        <div style={{display: 'flex', flexDirection: 'column'}}>
            <FaArrowAltCircleLeft size={30} onClick={() => GoBack()}/>
            <div className="detail">
                    <img src={detailProduct.images.url} alt={`${detailProduct.title} product`}/>
                    <div className="box-detail">
                        <div className="row">
                            <h2>{detailProduct.name}</h2>
                        </div>
                        <span>$ {detailProduct.price}</span>
                        <p>{detailProduct.description}</p>
                        <p>{detailProduct.content}</p>
                        <p>Sold: {detailProduct.sold}</p>
                        
                    </div>
                </div>
        </div>
     );
}
 
export default DetailProduct;