import { Component } from "react";

const styles = {
  logo: {
    fontWeight: "700",
    fontSize: "2rem",
    verticalAlign: "middle",
    left: "1rem",
    position: "relative",
    color: "white",
  },
  image: {
    width: "4rem",
    height: "4rem",
    verticalAlign: "middle",
  },
};

class Logo extends Component {
  render() {
    return (
      <div>
        <img style={styles.image} alt="" src={"./icon-96.png"} />
        <span style={styles.logo}>Shop</span>
      </div>
    );
  }
}

export default Logo;
