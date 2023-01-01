import { Component } from "react";

import BubbleAlert from "./BubbleAlert";
import CartDetails from "./CartDetails";

const styles = {
  cart: {
    border: "none",
    cursor: "pointer",
    appearance: "none",
    backgroundColor: "inherit",
  },
  bubble: {
    position: "relative",
    left: 12,
    top: 20,
  },
  image: {
    border: 0,
    width: "4rem",
    height: "4rem",
    verticalAlign: "middle",
  },
};

class Cart extends Component {
  render() {
    const { toggleCart, viewCart, cart } = this.props;
    const amount = cart.reduce((acc, item) => acc + item.amount, 0);

    return (
      <div>
        <span style={styles.bubble}>
          {amount > 0 && <BubbleAlert value={amount} />}
        </span>
        <button onClick={toggleCart} style={styles.cart}>
          <img alt="Cart" src="./cart-icon-96.png" style={styles.image} />
        </button>
        {viewCart && <CartDetails cart={cart} />}
      </div>
    );
  }
}

export default Cart;
