import Home from '../mainpages/home/Home';
import Products from '../mainpages/products/Products';
import ProductView from '../mainpages/products/ProductView';
import ErrorPage from './utils/not_found/ErrorPage';
import {Route, Routes} from 'react-router-dom';

const Pages = () => {
    return ( 
        <div style={{padding: '20px'}}>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/products' element={<Products/>}/>
                <Route path='/productInfo' element={<ProductView/>}/>
                <Route path='*' element={<ErrorPage/>}/>

            </Routes>
        </div>
     );
}
 
export default Pages;