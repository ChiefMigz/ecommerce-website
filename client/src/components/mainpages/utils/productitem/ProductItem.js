import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {FaCartPlus} from 'react-icons/fa';
import '../../../../index.css';
import NotificationModal from '../modals/notification/NotificationModal';

class ProductItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ...props,
            allergies: {
                title: 'test',
                description: 'description'
            },
            active: false
        }
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(e) {
        const query = e.target.id;
        this.props.product.forEach(product=> {
            if (product._id === query)
                console.log(product.name) 
        })
    }
    
    render() { 
        const {state: {product}} = this; 
        return ( 
        <div className='card'>
            <Link to={`/productInfo/${product._id}`}>
                <div className='imgBox'>
                    <img src={product.images.url} alt={product.name} className='product'/>
                </div>
                    <div className='detailLink'>&nbsp;</div>
            </Link>
                
            <div className='contentBox' onClick={(e)=>e.preventDefault()}>
                <span className='allergyInfo' id={product._id} onClick={this.handleClick}>Allergy Information</span>    
                <h3>{product.name}</h3>
                <h2 className='price'>$ {product.price}</h2>
                <div className='categories'>
                    {
                        product.categories.map(cateogry => {
                            return <span id='category-item'>{cateogry}</span>
                        })
                    }
                </div>
                <button className='buy'>Add to Cart<FaCartPlus className='add-cart-icon' size={20}/></button>
            </div>
            
        </div>
        );
    }
}

export default ProductItem;