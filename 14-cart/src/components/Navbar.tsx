import React from "react";
import { useGlobalContext } from "../context/context";
import { FaCartPlus } from "react-icons/fa";

const Navbar = () => {
  // useGlobalContext hook'unu null kontrolü yaparak kullanma
  const context = useGlobalContext();

  if (!context) {
    return (
      <nav>
        <div className="nav-center">
          <h3>useReducer</h3>
          <div className="nav-container">
            <FaCartPlus className="nav-icon" />
            <div className="amount-container">
              <p className="total-amount">Loading...</p>
            </div>
          </div>
        </div>
      </nav>
    );
  }

  // Destructuring işlemi sadece null değilse yap
  const { amount } = context;

  return (
    <nav>
      <div className="nav-center">
        <h3>useReducer</h3>
        <div className="nav-container">
          <FaCartPlus className="nav-icon" />
          <div className="amount-container">
            <p className="total-amount">{amount}</p>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
