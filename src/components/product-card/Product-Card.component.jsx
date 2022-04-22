import Button from '../button/Button.component';

import './product-card.styles.scss';



const ProductCard = ({ product })=>{
    const {name, imageUrl, price} = product
    return (
        <div className='product-card-container'>
            <img src={imageUrl} alt={`${name}`} />
            <div className='footer'>
                <span className='name'>{name}</span>
                <span className='price'>{price}</span>
            </div>
            <Button buttonType='inverted' type='submit' children="Add to cart" />
        </div>
    );
}

export default ProductCard