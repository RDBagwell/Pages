import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';

import Button, {BUTTION_TYPE_CLASS} from '../button/Button.component';

import './product-card.styles.scss';



const ProductCard = ({ product })=>{
    const {name, imageUrl, price} = product;
    const { addItemToCart } = useContext(CartContext);

    const addProductToCart = ()=>addItemToCart(product)

    return (
        <div className='product-card-container'>
            <img src={imageUrl} alt={`${name}`} />
            <div className='footer'>
                <span className='name'>{name}</span>
                <span className='price'>{price}</span>
            </div>
            <Button buttonType={BUTTION_TYPE_CLASS.inverted} type='submit' children="Add to cart" onClick={addProductToCart} />
        </div>
    );
}

export default ProductCard