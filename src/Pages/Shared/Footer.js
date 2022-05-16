import React from "react";
import { Link } from "react-router-dom";
import footerBg from "../../assets/images/footer.png";

const Footer = () => {
  return (
    <div style={{ background: `url(${footerBg})`, backgroundSize : 'cover', backgroundPosition : 'top'}}>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 justify-items-center pt-20">
        <div className="menu menu-compact dropdown-content  p-2">
          <h2 className="pl-4 text-bold text-xl">SERVICES</h2>
          <li>
            <Link to="/">Emergency Checkup</Link>
          </li>
          <li>
            <Link to="/about">Monthly Checkup</Link>
          </li>
          <li>
            <Link to="/appointment">Weekly Checkup</Link>
          </li>
          <li>
            <Link to="reviews">Deep Checkup</Link>
          </li>
        </div>
        <div className="menu menu-compact dropdown-content  p-2">
          <h2 className="pl-4 text-bold text-xl">ORAL HEALTH</h2>
          <li>
            <Link to="/">Fluoride Treatment</Link>
          </li>
          <li>
            <Link to="/about">Cavity Filling</Link>
          </li>
          <li>
            <Link to="/appointment">Teeth Whitening</Link>
          </li>
          <li>
            <Link to="reviews">Deep Checkup</Link>
          </li>
        </div>
        <div className="menu menu-compact dropdown-content  p-2">
          <h2 className="pl-4 text-bold text-xl">OUR ADDRESS</h2>
          <li>
            <Link to="/">New York Hudson</Link>
          </li>
          <li>
            <Link to="/about">New York - 101010</Link>
          </li>
        </div>
      </div>
      <p className="text-center pb-12 pt-12">
        &copy;2022 copy right by Shoriful
      </p>
    </div>
  );
};

export default Footer;
