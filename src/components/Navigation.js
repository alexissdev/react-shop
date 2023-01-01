import { Component } from "react";

import Logo from "./navigation/Logo";
import Cart from "./navigation/Cart";

const styles = {
  navigation: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    height: "100px",
    justifyContent: "space-between",
    position: "relative",
    padding: "0 50px",
    boxShadow: "0px 2px 3px rgba(0, 0, 0, 0.1)",
  },
};

class Navigation extends Component {
  render() {
    const { toggleCart, viewCart, cart } = this.props;

    return (
      <nav style={styles.navigation}>
        <Logo />
        <Cart toggleCart={toggleCart} viewCart={viewCart} cart={cart} />
      </nav>
    );
  }
}

export default Navigation;
