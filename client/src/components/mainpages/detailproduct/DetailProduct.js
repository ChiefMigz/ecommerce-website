import { useContext, useState, useEffect } from "react";
import { useParams, useNavigate } from 'react-router-dom';
import { GlobalState } from '../../../GlobalState';
import {FaArrowAltCircleLeft} from 'react-icons/fa';
import './DetailProduct.css';
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

    return ( 
        <div className='contentMargin' style={{display: 'flex', flexDirection: 'column'}}>
            <FaArrowAltCircleLeft size={60} onClick={() => GoBack()}/>
            <div className="general">
                <div className="sag">
                    <img src={detailProduct.images.url} alt=""/>
                    </div>
                <div className="detailContent">
                    <div className="left">
                    <h1>{detailProduct.name}</h1>
                    <h3>Label</h3>
                    <h5>{detailProduct.description}</h5>
                    <div className="para">$ {detailProduct.price}</div>
                    <div className="alacaklı">
                        <button><i className="fas fa-shopping-bag"></i> Add To Bag</button>
                    </div>
                    </div>
                    
                </div>
                </div>
        </div>
     );
}
 
export default DetailProduct;