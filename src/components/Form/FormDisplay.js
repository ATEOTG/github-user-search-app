import { Component } from "react";
import classes from "./FormDisplay.module.css";

class FormDisplay extends Component {
  render() {
    return (
      <div
        className={classes["display-cont"]}
        style={{
          backgroundColor: !this.props.isLight ? "#1e2a47" : "#fefefe",
          boxShadow: !this.props.isLight
            ? "none"
            : "0 1rem 2rem rgb(43, 52, 66,.15)",
        }}
      >
        <div className={classes["display-primary-cont"]}>
          <img
            className={classes.image}
            src={this.props.image}
            alt="avatar pfp"
          />
          <div className={classes["display-primary"]}>
            <h3 style={{ color: !this.props.isLight ? "#ffffff" : "#222731" }}>
              {!this.props.name ? this.props.user : this.props.name}
            </h3>
            <p className={classes.username}>@{this.props.user}</p>
            <p
              className={classes.date}
              style={{ color: !this.props.isLight ? "#ffffff" : "#4b6a9b" }}
            >
              Joined {this.props.joined[2]} {this.props.joined[1]}{" "}
              {this.props.joined[0]}
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default FormDisplay;
