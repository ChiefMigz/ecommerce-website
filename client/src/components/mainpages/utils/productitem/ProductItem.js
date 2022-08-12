import '../../../../index.css';
import { Link } from 'react-router-dom';
import {FaCartPlus} from 'react-icons/fa';

const ProductItem = ({product}) => {
    return ( 
        <div class="card">
            <Link to={`/productInfo`}>
                <div class="imgBox">
                    <img src={product.images.url} alt={product.name} class="product"/>
                </div>

                <div class="contentBox">
                    <h3>{product.name}</h3>
                    <small>Allergy Information</small>
                    <h2 class="price">$ {product.price}</h2>
                    <button class="buy">Add to Cart &nbsp;&nbsp;<FaCartPlus class='add-cart-icon' size={20}/></button>
                </div>
            </Link>
        </div>
     );
}
 
export default ProductItem;