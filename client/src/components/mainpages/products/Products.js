import { useContext } from 'react';
import { GlobalState }  from '../../../GlobalState';
import ProductItem from '../utils/productitem/ProductItem';
import FilterComponent from './FilterComponent';
import Loading from '../utils/loading/Loading';
import LoadMore from './LoadMore';
import './../../../index.css';

const Products = () => {
    const state = useContext(GlobalState)
    
    const [products, setProducts] = state.productsAPI.products
    const handleCheck = (id) =>{
        products.forEach(product => {
            if(product._id === id) product.checked = !product.checked
        })
        setProducts([...products])
    }

    return (
        <div>
            <span id='title-01'>
                <h1>Always Available</h1>
            </span>
            
            <div id='container-row'>
                <FilterComponent/>
                <div className='cupcake-container'>
                {products.length === 0 && <Loading />}
                {     
                    products.map(product => {
                        return <ProductItem key={product._id} product={product} handleCheck={handleCheck}/>
                    })
                }
                </div>
                
            </div>
            <LoadMore/> 
            
        </div>
     );
     
}
 
export default Products;