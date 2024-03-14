import React, { useState, useEffect } from 'react';// import Navbar from './Navbar'
import {Link} from 'react-router-dom';
import productsData from '../Data';
import ordersData from '../Customer';
import './Dashboard.css'

const Dashboard = () => {
  const [totalProducts, setTotalProducts] = useState(0);
  const [totalOrder, setTotalOrder] = useState(0);

  useEffect(() => {
    // Fetch the product data from local storage
    const products = JSON.parse(localStorage.getItem('products')) || [];
    // Update the total product count
    setTotalProducts(products.length);
  }, []);
   useEffect(()=>{const order = JSON.parse(localStorage.getItem('order')) || [];
    // Update the total product count
    setTotalOrder(order.length);
  }, []);
   
  return (
    <>
    <div className="dash">
      <div className="dash-head">
      <h1 >Welcome to Dashboard</h1>
      </div>
    
    <div className="dash-count">
    <span > Total Products : {totalProducts}</span>
        <span> Total Orders : 6</span>

    </div>
        

    </div>
       
        {/* <Link to='/Product'>Product</Link>
                <Link to='/Order'>Order</Link> */}
       
    </>
  )
}

export default Dashboard
