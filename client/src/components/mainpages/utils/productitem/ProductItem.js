const ProductItem = ({product}) => {
    return ( 
        <div>
            <img src={product.images.url} alt=""/>

            <div className="product_box">
                <h2 title={product.title}>{product.title}</h2>
                <span>${product.price}</span>
                <p>{product.description}</p>
            </div>
        </div>
     );
}
 
export default ProductItem;