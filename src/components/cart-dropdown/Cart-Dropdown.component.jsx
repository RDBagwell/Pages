import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';

import { Link } from 'react-router-dom';

import Button from '../button/Button.component';
import CartItem from '../cart-item/Cart-Item.component';
import './cart-dropdown.styles.scss';

const CartDropdown = ()=>{
    const { cartItems } = useContext(CartContext);
    return(
        <div className='cart-dropdown-container'>
            <div className='cart-items' >
            {cartItems.length ? (
                cartItems.map((cartItem) => (
                    <CartItem key={cartItem.id} cartItem={cartItem} />
                ))
                ) : (
                <span className='empty-message'>Your cart is empty</span>
            )}
            </div>
            <Link to='checkout'>
                <Button>Go To Checkout</Button>
            </Link>
        </div>
    )
}

export default CartDropdown