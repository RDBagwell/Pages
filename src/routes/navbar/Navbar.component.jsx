import {Fragment, useContext} from 'react';
import {Outlet, Link} from 'react-router-dom';

import CartIcon from '../../components/cart-icon/Cart-Icon.component';
import CartDropdown from '../../components/cart-dropdown/Cart-Dropdown.component'
import { ReactComponent as CrwnLogo } from '../../assets/crown.svg';
import {UserContext} from '../../contexts/user.context';
import { CartContext } from '../../contexts/cart.context';

import { SignOutUser } from '../../utils/firebase/firebasr.utils';

import './navigation.styles.scss';

const Navbar = ()=>{
    const { currentUser } = useContext(UserContext);
    const { isCartOpen } = useContext(CartContext)
     return (
        <Fragment>
            <div className='navigation'>
                <div>
                    <Link className='logo-container' to={"/"}>
                        <CrwnLogo />
                    </Link>
                </div>
                <div className='nav-links-container'>
                    <Link className='nav-link' to={"/shop"}>
                        Shop
                    </Link>
                    {
                        currentUser ? (<span className='nav-link' onClick={SignOutUser} >Sign Out</span>) : (<Link className='nav-link' to={"/auth"}>Sign In</Link>)
                    }
                    <CartIcon />
                </div>
                {isCartOpen && <CartDropdown />}
            </div>
            <Outlet />
        </Fragment>
     )

  
}
  export default Navbar