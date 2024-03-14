import React from 'react'
import ordersData from '../Customer'
import './Order.css'
const Order = () => {
  return (
    <>
    <div className="order">
      <div className="order-head">
      <h1>ORDERS</h1>
      </div>
    <div className="order-table">
        <table id="customers" style={{backgroundColor:'white'}}>
        <thead>
          <tr>
            <th>Order ID</th>
            <th>Customer Name</th>
            <th>Order Date</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {ordersData.map(order => (
            <tr key={order.id}>
              <td>{order.orderId}</td>
              <td>{order.customerName}</td>
              <td>{order.orderDate}</td>
              <td>{order.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
    </div>
       
      
    </>
  )
}

export default Order
