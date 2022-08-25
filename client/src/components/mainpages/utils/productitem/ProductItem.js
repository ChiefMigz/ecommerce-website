import '../../../../index.css';
import { Link } from 'react-router-dom';
import {FaCartPlus} from 'react-icons/fa';

const ProductItem = ({product}) => {
    return ( 
        <div className='card'>
            <Link to={`/productInfo/${product._id}`}>
                <div className='imgBox'>
                    <img src={product.images.url} alt={product.name} class='product'/>
                </div>

                <div className='contentBox'>
                    <small>Allergy Information</small>
                    <h3>{product.name}</h3>
                    <h2 class='price'>$ {product.price}</h2>
                    <div className='categories'>
                        {
                            product.categories.map(cateogry => {
                                return <span id='category-item'>{cateogry}</span>
                            })
                        }
                    </div>
                    <button class='buy'>Add to Cart<FaCartPlus class='add-cart-icon' size={20}/></button>
                </div>
            </Link>
        </div>
     );
}
 
export default ProductItem;