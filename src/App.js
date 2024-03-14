// import logo from './logo.svg';
import React from 'react';
import './App.css';
import { useState } from 'react';
import Dashboard from './components/Dashboard';
import Order from './components/Order';
import Product from './components/Product';
// import { BrowserRouter, Route, Switch } from 'react-router-dom';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';impo\
import {Routes, Route, redirect} from 'react-router-dom';
import Navbar from './components/Navbar';
import productsData from './Data';

import ordersData from './Customer';


function App() {
  const [products, setProducts] = useState(productsData);
  const [order,setOrder]=useState(ordersData)

  // Calculate the total number of products dynamically
  const totalProducts = products.length;
  const totalOrder=order.length;

  // Function to add a new product
  const handleAddProduct = (newProduct) => {
    setProducts([...products, newProduct]);
  };
  const handleOrderProduct=(newOrder)=>{
    setOrder([...order,newOrder])
  };

  return (
    <>
     
     <Navbar></Navbar>
    
     <Routes>
      <Route path='/' element={<Dashboard  totalproducts={totalProducts} totalOrder={totalOrder}></Dashboard>}></Route>
      <Route path='/Order' element={<Order></Order>}></Route>
      <Route path='/Product' element={<Product onAddProduct={handleAddProduct} />}></Route>
      {/* <Route path='/productform' element={<Productform></Productform>}></Route> */}
      {/* <Route path='/redirect' element={<redirect to='/'></redirect>}></Route> */}
      
      
     </Routes>
     




    </>
    
  );
}

export default App;
