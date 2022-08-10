import { useContext } from 'react';
import { GlobalState }  from '../../../GlobalState';
import ProductItem from '../utils/productitem/ProductItem';
import './../../../index.css';

const Products = () => {
    const state = useContext(GlobalState)
    
    const [products, setProducts] = state.productsAPI.products

    return (
        <div>
            <h1>Always Available</h1>
            <div className='cupcake-container'>
            {
                products.map(product => {
                    return <ProductItem key={product._id} product={product}/>
                })
            }
            </div>
        </div>
        
     );
}
 
export default Products;