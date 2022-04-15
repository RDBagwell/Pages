import {Routes, Route} from 'react-router-dom';

import Home from './routes/home/home.component';
import Navbar from './routes/navbar/Navbar.component';
import SignIn from './routes/signin/SignIn.component';

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
        <Route path='/sign-in' element={<SignIn />}/>
        <Route index element={<Home />} /> 
      </Route>
      
    </Routes>
  );
}

export default App;
