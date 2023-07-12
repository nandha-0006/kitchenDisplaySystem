import React from 'react'
import './Homepage.css';
function Home() {
  return (
    <div className='full-page'>
    <div className="container-fluid">
      <div className="row">
        <div className="sidebar">
          <h2>FOH Dashboard</h2>
          <ul className="list-unstyled">
            <li>
              <a href="#dashboard">Dashboard</a>
            </li>
            <li>
              <a href="#users">Users</a>
            </li>
            <li>
              <a href="#products">Products</a>
            </li>
            <li>
              <a href="#orders">Orders</a>
            </li>
               <button>Log out</button>
          </ul>
        </div>
      </div>
    </div>
    </div>


  )
}

export default Home