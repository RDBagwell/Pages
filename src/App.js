import {Routes, Route} from 'react-router-dom';

import Home from './routes/home/home.component';
import Navbar from './routes/navbar/Navbar.component';
import Auth from './routes/authentication/Authentication.component';

const Shop = ()=>(
  <div>
    <h1>
      My Shop
    </h1>
    
  </div>
)

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Navbar />}>
        <Route path='/shop' element={<Shop />} />
        <Route path='/auth' element={<Auth />}/>
        <Route index element={<Home />} /> 
      </Route>
      
    </Routes>
  );
}

export default App;
