import { Component } from "react";

const styles = {
  cartDetails: {
    position: "absolute",
    marginTop: 30,
    boxShadow: "1px 5px 5px rgba(0, 0, 0, 0.3)",
    borderRadius: "5px",
    width: "300px",
    right: 0,
  },
  ul: {
    margin: 0,
    padding: 0,
  },
  li: {
    listStyle: "none",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "25px 20px",
    borderBottom: "1px solid #aaa",
    backgroundColor: "#150b1a",
  },

  white: {
    color: "white",
  },
};

class CartDetails extends Component {
  render() {
    const { cart } = this.props;

    return (
      <div style={styles.cartDetails}>
        <ul style={styles.ul}>
          {cart.map((item) => (
            <li style={styles.li} key={item.name}>
              <img src={item.img} alt={item.name} width="50" height="32" />
              <span style={styles.white}>{item.name}</span>{" "}
              <span style={styles.white}>{item.amount}</span>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default CartDetails;
