import Home from '../mainpages/home/Home';
import Products from '../mainpages/products/Products';
import ProductView from '../mainpages/detailproduct/DetailProduct';
import ErrorPage from './utils/not_found/ErrorPage';
import AboutPage from './about/about';
import LoginPage from './auth/login';
import {Route, Routes} from 'react-router-dom';
import About from './about/about';

const Pages = () => {
    return ( 
        <div className='pages'>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/products' element={<Products/>}/>
                <Route path='/about' element={<About/>}/>
                <Route path='/productInfo/:id' element={<ProductView/>}/>
                <Route path='/about' element={<AboutPage/>}/>
                <Route path='/login' element={<LoginPage/>}/>
                <Route path='*' element={<ErrorPage/>}/>
            </Routes>
        </div>
     );
}
 
export default Pages;