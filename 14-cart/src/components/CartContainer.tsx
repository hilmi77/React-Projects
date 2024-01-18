import React from "react";
import { useGlobalContext } from "../context/context";
import CartItem from "./CartItem";

type CartProps = {
  id: number;
  title: string;
  price: number;
  img: string;
  amount: number;
};

const CartContainer = () => {
  // useGlobalContext hook'unu null kontrolü yaparak kullanma
  const context = useGlobalContext();

  if (!context) {
    return (
      <section className="cart">
        <header>
          <h2>your bag</h2>
        </header>
        <h4>is currently empty</h4>
      </section>
    );
  }

  // Destructuring işlemi sadece null değilse yap
  const { cart, total, clearCart } = context;

  if (cart.length === 0) {
    return (
      <section className="cart">
        <header>
          <h2>your bag</h2>
          <button className="btn clear-btn" onClick={clearCart}>
            clear cart
          </button>
        </header>
        <h4>is currently empty</h4>
      </section>
    );
  }

  return (
    <section className="cart">
      <header>
        <h2>your bag</h2>
      </header>
      <div>
        {cart.map((item: CartProps) => {
          return <CartItem key={item.id} {...item} />;
        })}
      </div>
      <footer>
        <hr />
        <div className="cart-total">
          <h4>
            total <span>${total}</span>
          </h4>
        </div>
      </footer>
    </section>
  );
};

export default CartContainer;
