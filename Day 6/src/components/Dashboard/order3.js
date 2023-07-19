import React from 'react';
import '../Dashboard/order.css';


function Order3() {
  return (
    <>

      
<div className="orders-container">
          <h1>Orders</h1>
          <div className="orders-list">
            <div className="order-item">
              <h3>Res #1</h3>
              <p>Customer: Peter</p>
              <ul>
                <li>Pizza</li>
                <li>Toppings</li>
              </ul>
              <button className="btn-prepare4">prepare</button>
              <button className="btn-prepare">update</button>
            </div>
            <div className="order-item">
              <h3>Res #2</h3>
              <p>Customer: Griffin</p>
              <ul>
                <li>Burger</li>
                <li>coke</li>
              </ul>
              <button className="btn-prepare4">prepare</button>
              <button className="btn-prepare">update</button>
            </div>
            <div className="order-item">
              <h3>Res #3</h3>
              <p>Customer: Jassim</p>
              <ul>
                <li>Friedrice-veg</li>
                <li>Gobi-65</li>
              </ul>
              <button className="btn-prepare4">prepare</button>
              <button className="btn-prepare">update</button>
            </div>
            <div className="order-item">
              <h3>Res #4</h3>
              <p>Customer: Stev</p>
              <ul>
                <li>Idly</li>
                <li>Vada-sambar</li>
              </ul>
              <button className="btn-prepare4">prepare</button>
              <button className="btn-prepare">update</button>
            </div>
            <div className="order-item">
              <h3>Res #5</h3>
              <p>Customer: Navadeesh</p>
              <ul>
                <li>Mutoon Biriyani</li>
                <li>Egg Roast</li>
              </ul>
              <button className="btn-prepare4">prepare</button>
              <button className="btn-prepare">update</button>
            </div>
            <div className="order-item">
              <h3>RES #6</h3>
              <p>Customer: Prajeet</p>
              <ul>
                <li>Noodels-Veg</li>
                <li>Pasta-Veg</li>
              </ul>
              <button className="btn-prepare4">prepare</button>
              <button className="btn-prepare">update</button>
            </div>
          
          </div>
          
        </div>
  
    </>
  );
}

export default Order3;