import { Component } from "react";

const styles = {
  title: {
    marginBottom: "30px",
    color: "white",
  },
};

class Title extends Component {
  render() {
    return <h1 style={styles.title}>Shop</h1>;
  }
}

export default Title;
