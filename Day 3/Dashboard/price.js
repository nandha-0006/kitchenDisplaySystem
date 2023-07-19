import React from 'react';
import '../Dashboard/price.css';



function PriceList() {
  return (
    <>
    
      <div className="price-list-container">
        <div style={{display: "flex", justifyContent: "space-between", marginBottom: "2%"}}>
        <h1>Price List</h1>
        <button className="update-button">Update Prices</button>
        </div>
        <table>
          <thead>
            <tr>
              <th>Item</th>
              <th>Price</th>
              <th>Category</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Dosa-Chicken</td>
              <td>INR 90</td>
              <td>Non-veg</td>
            </tr>
            <tr>
              <td>Idly</td>
              <td>INR 50</td>
              <td>Veg</td>
            </tr>
            <tr>
              <td>Egg Fry</td>
              <td>INR 90</td>
              <td>Non-veg</td>
            </tr>
            <tr>
              <td>Empty Biriyani</td>
              <td>INR 60</td>
              <td>Non-veg</td>
            </tr>
            <tr>
              <td>Chilly-Chicken</td>
              <td>INR 170</td>
              <td>Non-veg</td>
            </tr>
            <tr>
              <td>Dragon Chicken</td>
              <td>INR 200</td>
              <td>Non-veg</td>
            </tr>
            
          </tbody>
        </table>
        
      </div>
    </>
  );
}

export default PriceList;
