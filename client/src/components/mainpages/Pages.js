import Home from '../mainpages/home/Home';
import Products from '../mainpages/products/Products';
import ErrorPage from './utils/not_found/ErrorPage';
import {Route, Routes} from 'react-router-dom';

const Pages = () => {
    return ( 
        <div>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/products' element={<Products/>}/>
                <Route path='*' element={<ErrorPage/>}/>
            </Routes>
        </div>
     );
}
 
export default Pages;