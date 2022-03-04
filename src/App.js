import React from 'react';

import {Routes, Route} from 'react-router-dom'

import './App.css';




import FeaturedProduct from './components/FeaturedProduct';
import Home from './components/Home';
import Navbar from './components/Navbar';
import NewProduct from './components/NewProduct';
import NoMatch from './components/NoMatch';
import OrderSummary from './components/OrderSummary';
import Product from './components/Product';
import UserDetails from './components/UserDetails';
import Users from './components/Users';
import Admin from './components/Admin';

// import About from './components/About';
const LazyAbout= React.lazy(()=> import('./components/About'))

function App() {
  return (
    <>
    <Navbar/>


     <Routes>
      <Route path="/" element={<Home/>}></Route>

      <Route path="/about" element={ 
      <React.Suspense fallback="Loading...">
        <LazyAbout/>

      </React.Suspense>
      
    } 
    />

      <Route path="/order-summary" element={<OrderSummary/>}></Route>
      <Route path="/products" element={<Product/>}>
        <Route index element={<FeaturedProduct/>} />
        <Route path="featured" element={<FeaturedProduct/>} />
        <Route path="new" element={<NewProduct/>}/>
      </Route>
      <Route path="users" element={<Users/>} >

           <Route path=":userId" element={<UserDetails/>}/>
           <Route path="admin"  element={<Admin/>}/>

      </Route>


      {/* <Route path="users/2" element={<UserDetails/>}/>
      <Route path="users/3" element={<UserDetails/>}/> */}
      <Route path="*" element={<NoMatch/>}></Route>
    </Routes>


    </>
   
 
  );
}

export default App;
