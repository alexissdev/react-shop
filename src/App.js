import { Component } from "react";

import Layout from "./components/Layout";
import Navigation from "./components/Navigation";
import Title from "./components/Title";
import Products from "./components/Products";
import Footer from "./components/Footer";

class App extends Component {
  state = {
    products: [
      {
        id: 1,
        name: "Tomate",
        price: 1500,
        img: "./products/tomate.jpg",
        description:
          "Buy this tomato and give another taste to your milanesa sandwich.",
      },
      {
        id: 2,
        name: "Arbejas",
        price: 2500,
        img: "./products/arbejas.jpg",
        description: "Buy these bees and give another taste to your salad.",
      },
      {
        id: 3,
        name: "Lechuga",
        price: 500,
        img: "./products/lechuga.jpg",
        description:
          "Buy this lettuce and give another taste to your milanesa sandwich.",
      },
    ],
    cart: [],
    viewCart: false,
  };

  addToCart = (product) => {
    console.log(product);
    const { cart } = this.state;

    if (cart.find((item) => item.id == product.id)) {
      const newCart = cart.map((item) =>
        item.name === product.name
          ? {
              ...item,
              amount: item.amount + 1,
            }
          : item
      );

      return this.setState({ cart: newCart });
    }

    return this.setState({
      cart: this.state.cart.concat({
        ...product,
        amount: 1,
      }),
    });
  };

  toggleCart = () => {
    if (!this.state.cart.length) {
      return;
    }

    this.setState({
      viewCart: !this.state.viewCart,
    });
  };

  render() {
    return (
      <div>
        <Navigation
          toggleCart={this.toggleCart}
          viewCart={this.state.viewCart}
          cart={this.state.cart}
        />
        <Layout>
          <Title />
          <Products addToCart={this.addToCart} products={this.state.products} />
        </Layout>

        <Footer />
      </div>
    );
  }
}

export default App;
