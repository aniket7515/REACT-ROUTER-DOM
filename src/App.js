import {Routes, Route} from 'react-router-dom'

import './App.css';
import About from './components/About';
import FeaturedProduct from './components/FeaturedProduct';
import Home from './components/Home';
import Navbar from './components/Navbar';
import NewProduct from './components/NewProduct';
import NoMatch from './components/NoMatch';
import OrderSummary from './components/OrderSummary';
import Product from './components/Product';

function App() {
  return (
    <>
    <Navbar/>


     <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/about" element={<About/>}></Route>
      <Route path="/order-summary" element={<OrderSummary/>}></Route>
      <Route path="/products" element={<Product/>}>
        <Route path="featured" element={<FeaturedProduct/>} />
        <Route path="new" element={<NewProduct/>}/>
      </Route>
      <Route path="*" element={<NoMatch/>}></Route>
    </Routes>


    </>
   
 
  );
}

export default App;
