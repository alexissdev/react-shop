import { Component } from "react";

const styles = {
  footer: {
    position: "relative",
    width: "100%",
    top: "400px",
    boxShadow: "0px 2px 3px rgba(0, 0, 0, 0.1)",
    color: "white",
    textAlign: "center",
    backgroundColor: "#E9725A",
  },
  text: {
    padding: "15px 0",
    backgroundColor: "#150b1a",
  },
};

class Footer extends Component {
  render() {
    return (
      <footer style={styles.footer}>
        <h4 style={styles.text}>All rights reserved. Alexis Costa</h4>
      </footer>
    );
  }
}

export default Footer;
