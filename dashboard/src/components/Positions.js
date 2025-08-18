import axios from "axios";
import React, { useEffect, useState } from "react";
import "./Positions.css";

const Dashboard = () => {
  const [positions, setPositions] = useState([]);

  useEffect(() => {
    axios.get("https://tradingplatform-lv6u.onrender.com/allposition")
      .then(res => setPositions(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="dash-container">
      <table className="positions-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Qty</th>
            <th>Avg</th>
            <th>Price</th>
            <th>Net</th>
            <th>Day</th>
          </tr>
        </thead>
        <tbody>
          {positions.map((pos, i) => (
            <tr key={i}>
              <td>{pos.name}</td>
              <td>{pos.qty}</td>
              <td>{pos.avg}</td>
              <td>{pos.price}</td>
              <td>{pos.net}</td>
              <td>{pos.day}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Dashboard;
