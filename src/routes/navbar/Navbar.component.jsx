import {Fragment} from 'react';
import {Outlet, Link} from 'react-router-dom';
import { ReactComponent as CrwnLogo } from '../../assets/crown.svg';
import './navigation.styles.scss';

const Navbar = ()=>(
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
                <Link className='nav-link' to={"/auth"}>
                    Sign In
                </Link>

            </div>
        </div>
      <Outlet />
    </Fragment>
  )

  export default Navbar