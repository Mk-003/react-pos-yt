import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import Product from './PRODUCTZX/Product';
import ProductsList from './PRODUCTZX/ProductsList';
import Cart from './PRODUCTZX/Cart';
import Pos from './PRODUCTZX/Pos';
import Receipt from './PRODUCTZX/Receipt';
import Home from './PRODUCTZX/Home';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/product" element={<Product/>} />
        <Route path="/productslist" element={<ProductsList/>} />
        <Route path ="/cart" element={<Cart/>}/>
        <Route path="/pos" element={<Pos/>}/>
        <Route path='/reciept' element={<Receipt/>} />
        
      </Routes>
    </Router>
  );
}

export default App;
