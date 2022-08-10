import '../../../../index.css';

const ProductItem = ({product}) => {
    return ( 
        <div class="card">

            <div class="imgBox">
                <img src={product.images.url} alt="mouse corsair" class="mouse"/>
            </div>

            <div class="contentBox">
                <h3>{product.name}</h3>
                <small>Allergy Information</small>
                <h2 class="price">{product.price} CAD</h2>
                <a href="#" class="buy">Add to Cart</a>
            </div>
        </div>
     );
}
 
export default ProductItem;