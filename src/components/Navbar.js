import React from 'react'
import {Link} from 'react-router-dom';
import './Navbar.css'


const Navbar = () => {
  return (
    <div>
        <ul className="nav-bar">
            
            <li>
            <Link to='/Product' className="link">Product</Link>
              
            </li>
            <li>
            <Link to='/Order' className="link" >Order</Link>
            </li>
            <li>
                <Link to='/' className="link">Dashboard</Link>
               
            </li>
        </ul>
      
    </div>
  )
}

export default Navbar
