import { Component } from "react";
import Button from "./Button";

const styles = {
  product: {
    border: "solid 1px #eee",
    boxShadow: "0px 5px 5px rgba(0, 0, 0, 0.1)",
    width: "30%",
    padding: "10px 15px",
    borderRadius: "5px",
    backgroundColor: "#150b1a",
  },
  img: {
    width: "100%",
  },
  string: {
    color: "white",
    backgroundColor: "#150b1a",
  },
};

class Product extends Component {
  render() {
    const { product, addToCart } = this.props;
    const { name, price, img, description } = product;

    return (
      <div style={styles.product}>
        <img style={styles.img} alt={name} src={img} />
        <h3 style={styles.string}>{name}</h3>
        <p style={styles.string}>{description}</p>
        <p style={styles.string}>{price}</p>
        <Button onClick={() => addToCart(product)}>Buy</Button>
      </div>
    );
  }
}

export default Product;
