import { Fragment, useContext } from 'react';
import { Outlet} from 'react-router-dom';
import { useSelector } from 'react-redux';

import CartIcon from '../../components/cart-icon/Cart-Icon.component';
import CartDropdown from '../../components/cart-dropdown/Cart-Dropdown.component'
import { ReactComponent as CrwnLogo } from '../../assets/crown.svg';
import { CartContext } from '../../contexts/cart.context';

import { SignOutUser } from '../../utils/firebase/firebasr.utils';
import { selectCurrentUser } from '../../store/user/user.selector';

import { 
    NavigationContainer, 
    LogoContainer,
    NavLinks,
    NavLink
} from './navigation.styles';

const Navbar = ()=>{
    const currentUser = useSelector(selectCurrentUser);
    const { isCartOpen } = useContext(CartContext)
     return (
        <Fragment>
            <NavigationContainer>
                <LogoContainer to={"/"}>
                        <CrwnLogo />
                </LogoContainer>
                <NavLinks>
                    <NavLink to={"/shop"}>
                        Shop
                    </NavLink>
                    {
                        currentUser ? (<NavLink as='span' onClick={SignOutUser} >Sign Out</NavLink>) : (<NavLink to={"/auth"}>Sign In</NavLink>)
                    }
                    <CartIcon />
                </NavLinks>
                {isCartOpen && <CartDropdown />}
            </NavigationContainer>
            <Outlet />
        </Fragment>
     )

  
}
  export default Navbar