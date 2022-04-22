import { useContext } from 'react';

import { CartContext } from '../../contexts/cart.context';

import './cart-icon.styles.scss';
import { ReactComponent as BagIcon } from '../../assets/shopping-bag.svg';

const CartIcon = ()=>{
    const {isCartOpen, setIsCartOpen} = useContext(CartContext);
    const toggleIsCarOpen = ()=> setIsCartOpen(!isCartOpen);
    return(
        <div className='cart-icon-container' onClick={toggleIsCarOpen}>
            <BagIcon className='shopping-icon' />
            <span className='item-count'>0</span>
        </div>
    )
}

export default CartIcon