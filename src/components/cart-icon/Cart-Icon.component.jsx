import { useContext } from 'react';

import { CartContext } from '../../contexts/cart.context';

import {
    CartIconContainer,
    ShoppingIcon,
    ItemCount
} from './cart-icon.styles';


const CartIcon = ()=>{
    const {isCartOpen, setIsCartOpen, cartCount} = useContext(CartContext);
    const toggleIsCarOpen = ()=> setIsCartOpen(!isCartOpen);
    return(
        <CartIconContainer onClick={toggleIsCarOpen}>
            <ShoppingIcon />
            <ItemCount>{cartCount}</ItemCount>
        </CartIconContainer>
    )
}

export default CartIcon