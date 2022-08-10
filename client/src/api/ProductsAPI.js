import {useState, useEffect} from 'react';
import axios from 'axios';

const ProductsAPI = () => {
    const [products, setProducts] = useState([])

    const getProducts = async () => {
        const res = await axios.get(`/api/products`)
        console.log(res)
        setProducts(res.data.products)
    }

    useEffect(() =>{
        getProducts()
    },[])
    
    return {
        products: [products, setProducts]
    }
}
 
export default ProductsAPI;