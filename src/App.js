import {Routes, Route} from 'react-router-dom';

import Home from './routes/home/home.component';
import Navbar from './routes/navbar/Navbar.component';
import Auth from './routes/authentication/Authentication.component';
import Shop from './routes/shop/Shop.component';
import Checkout from './routes/checkout/checkout.component';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Navbar />}>
        <Route path='/shop' element={<Shop />} />
        <Route path='/auth' element={<Auth />}/>
        <Route path='/checkout' element={<Checkout />}/>
        <Route index element={<Home />} /> 
      </Route>
      
    </Routes>
  );
}

export default App;
