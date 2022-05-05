import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';

import { Link } from 'react-router-dom';

import Button from '../button/Button.component';
import CartItem from '../cart-item/Cart-Item.component';
import {
    CartDorpdownContainer, 
    EmptyMessage,
    CartItems,
}  from './cart-dropdown.styles';

const CartDropdown = ()=>{
    const { cartItems } = useContext(CartContext);
    return(
        <CartDorpdownContainer>
            <CartItems >
            {cartItems.length ? (
                cartItems.map((cartItem) => (
                    <CartItem key={cartItem.id} cartItem={cartItem} />
                ))
                ) : (
                <EmptyMessage>Your cart is empty</EmptyMessage>
            )}
            </CartItems>
            <Link to='checkout'>
                <Button>Go To Checkout</Button>
            </Link>
        </CartDorpdownContainer>
    )
}

export default CartDropdown