import React from "react";
import { Link, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className = "drawer drawer-mobile">
  <input id="my-drawer-2" type="checkbox" className = "drawer-toggle" />
  <div className = "drawer-content text-center mt-8">
      <h1 className="text-4xl font-bold text-secondary">Welcome your Dashboard</h1>
    <Outlet></Outlet>
  </div> 
  <div className = "drawer-side">
    <label htmlFor = "my-drawer-2" className = "drawer-overlay"></label> 
    <ul className = "menu p-4 py-8 overflow-y-auto w-75 bg-base-100 text-base-content">
      <li><Link to="/dashboard">My Appointments</Link></li>
      <li><Link to = "/dashboard/myReview">My Reviews</Link></li>
    </ul>
  
  </div>
</div>
  );
};

export default Dashboard;
