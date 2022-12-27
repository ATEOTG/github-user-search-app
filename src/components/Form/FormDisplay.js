import { Component } from "react";
import Company from "../svg/Company";
import Location from "../svg/Location";
import Twitter from "../svg/Twitter";
import Website from "../svg/Website";
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

        <p
          className={classes.biography}
          style={{
            color: !this.props.isLight ? "#ffffff" : "#4b6a9b",
            opacity: this.props.bio ? "100%" : "50%",
          }}
        >
          {this.props.bio ? this.props.bio : "This profile has no bio"}
        </p>
        <div
          className={classes["numbers-cont"]}
          style={{
            backgroundColor: !this.props.isLight ? "#141d2f" : "#f6f8ff",
          }}
        >
          <div className={classes["number-cont"]}>
            <p
              className={classes["number-text"]}
              style={{ color: !this.props.isLight ? "#ffffff" : "#4b6a9b" }}
            >
              Repos
            </p>
            <p
              className={classes["number-info"]}
              style={{ color: !this.props.isLight ? "#ffffff" : "#222731" }}
            >
              {this.props.repos}
            </p>
          </div>
          <div className={classes["number-cont"]}>
            <p
              className={classes["number-text"]}
              style={{ color: !this.props.isLight ? "#ffffff" : "#4b6a9b" }}
            >
              Followers
            </p>
            <p
              className={classes["number-info"]}
              style={{ color: !this.props.isLight ? "#ffffff" : "#222731" }}
            >
              {this.props.followers}
            </p>
          </div>
          <div className={classes["number-cont"]}>
            <p
              className={classes["number-text"]}
              style={{ color: !this.props.isLight ? "#ffffff" : "#4b6a9b" }}
            >
              Following
            </p>
            <p
              className={classes["number-info"]}
              style={{ color: !this.props.isLight ? "#ffffff" : "#222731" }}
            >
              {this.props.following}
            </p>
          </div>
        </div>
        <div className={classes["details-cont"]}>
          <div className={classes["detail-cont"]}>
            <Location
              isLight={this.props.isLight}
              location={this.props.location}
            />
            <p
              style={{
                color: !this.props.isLight ? "#ffffff" : "#4b6a9b",
                opacity: this.props.location ? "100%" : "50%",
              }}
            >
              {this.props.location ? this.props.location : "Not Available"}
            </p>
          </div>
          <div className={classes["detail-cont"]}>
            <Website isLight={this.props.isLight} blog={this.props.blog} />
            {!this.props.blog ? (
              <p
                style={{
                  color: !this.props.isLight ? "#ffffff" : "#4b6a9b",
                  opacity: "50%",
                }}
              >
                Not Available
              </p>
            ) : (
              <a
                href={this.props.blog}
                target="_blank"
                rel="noreferrer"
                style={{
                  color: !this.props.isLight ? "#ffffff" : "#4b6a9b",
                }}
              >
                {this.props.blog}
              </a>
            )}
          </div>
          <div className={classes["detail-cont"]}>
            <Twitter
              isLight={this.props.isLight}
              twitter={this.props.twitter}
            />
            {!this.props.twitter ? (
              <p
                style={{
                  color: !this.props.isLight ? "#ffffff" : "#4b6a9b",
                  opacity: "50%",
                }}
              >
                Not Available
              </p>
            ) : (
              <a
                href={`https://twitter.com/${this.props.twitter}`}
                target="_blank"
                rel="noreferrer"
                style={{
                  color: !this.props.isLight ? "#ffffff" : "#4b6a9b",
                }}
              >
                {`@${this.props.twitter}`}
              </a>
            )}
          </div>
          <div className={classes["detail-cont"]}>
            <Company
              isLight={this.props.isLight}
              company={this.props.company}
            />
            {!this.props.company ? (
              <p
                style={{
                  color: !this.props.isLight ? "#ffffff" : "#4b6a9b",
                  opacity: "50%",
                }}
              >
                Not Available
              </p>
            ) : (
              <a
                href={`https://github.com/${
                  this.props.company[0] === "@"
                    ? this.props.company.slice(1)
                    : this.props.company
                }`}
                target="_blank"
                rel="noreferrer"
                style={{
                  color: !this.props.isLight ? "#ffffff" : "#4b6a9b",
                }}
              >
                {`${
                  this.props.company[0] === "@"
                    ? this.props.company
                    : `@${this.props.company}`
                }`}
              </a>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default FormDisplay;
