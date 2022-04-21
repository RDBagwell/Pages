import {Fragment, useContext} from 'react';
import {Outlet, Link} from 'react-router-dom';
import { ReactComponent as CrwnLogo } from '../../assets/crown.svg';
import './navigation.styles.scss';
import {UserContext} from '../../contexts/user.context'
import { SignOutUser } from '../../utils/firebase/firebasr.utils';

const Navbar = ()=>{
    const { currentUser } = useContext(UserContext);
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


                </div>
            </div>
            <Outlet />
        </Fragment>
     )

  
}
  export default Navbar