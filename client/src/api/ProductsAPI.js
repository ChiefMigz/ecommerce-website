import {useState, useEffect} from 'react';
import axios from 'axios';

const ProductsAPI = () => {
    const [products, setProducts] = useState([])
    const [callback, setCallback] = useState(false)
    const [category, setCategory] = useState('')
    const [sort, setSort] = useState('')
    const [search, setSearch] = useState('')
    const [page, setPage] = useState(1)
    const [result, setResult] = useState(0)
    const API_HOST = 'https://cupcake-website-backend.herokuapp.com'

    useEffect(() =>{
        const getProducts = async () => {
            const res = await axios.get(`${API_HOST}/api/products?limit=${page*9}&${category}&${sort}&title[regex]=${search}`)
            console.log(res)
            setProducts(res.data.products)
        }
        getProducts()
    },[callback, category, sort, search, page])
    
    return {
        products: [products, setProducts],
        callback: [callback, setCallback],
        category: [category, setCategory],
        sort: [sort, setSort],
        search: [search, setSearch],
        page: [page, setPage],
        result: [result, setResult]
    }
}
 
export default ProductsAPI;