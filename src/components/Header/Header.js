import { Component } from "react";
import classes from "./Header.module.css";
import Moon from "../svg/Moon";
import Sun from "../svg/Sun";

class Header extends Component {
  render() {
    return (
      <div className={classes["header-cont"]}>
        <h1
          className={classes.title}
          style={{ color: !this.props.isLight ? "#ffffff" : "#222731" }}
        >
          devfinder
        </h1>
        <div className={classes["theme-cont"]}>
          {!this.props.isLight ? (
            <Sun isLightHandler={this.props.isLightHandler} />
          ) : (
            <Moon isLightHandler={this.props.isLightHandler} />
          )}
        </div>
      </div>
    );
  }
}

export default Header;
