import {Routes, Route} from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';


import {onAuthStateChangedListener, createUserDocumentFromAuth} from './utils/firebase/firebasr.utils';
import {setCurrentUser} from './store/user/user.action';

import Home from './routes/home/home.component';
import Navbar from './routes/navbar/Navbar.component';
import Auth from './routes/authentication/Authentication.component';
import Shop from './routes/shop/Shop.component';
import Checkout from './routes/checkout/checkout.component';

const App = () => {

  const dispatch = useDispatch();

  useEffect(()=>{
    const unsubscribe = onAuthStateChangedListener((user)=>{
        if(user){
             createUserDocumentFromAuth(user)
        }
        dispatch(setCurrentUser(user));
    });

    return unsubscribe;
 }, [dispatch]);

  return (
    <Routes>
      <Route path='/' element={<Navbar />}>
        <Route path='/shop/*' element={<Shop />} />
        <Route path='/auth' element={<Auth />}/>
        <Route path='/checkout' element={<Checkout />}/>
        <Route index element={<Home />} /> 
      </Route>
    </Routes>
  );
}

export default App;
