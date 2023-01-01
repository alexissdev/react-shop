import { Component } from "react";

const styles = {
  button: {
    padding: "15px 20px",
    border: "none",
    borderRadius: "10px",
    backgroundColor: "#000",
    color: "#fff",
    cursor: "pointer",
  },
};

class Button extends Component {
  render() {
    return <button style={styles.button} {...this.props} />;
  }
}

export default Button;
