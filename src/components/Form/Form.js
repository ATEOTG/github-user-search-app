import { Component } from "react";
import classes from "./Form.module.css";
import SearchIcon from "../svg/SearchIcon";
import styled from "styled-components";

const Input = styled.input`
  background-color: rgba(255, 255, 255, 0);
  font-family: "Space Mono", monospace;
  border: none;
  width: 65%;
  justify-self: stretch;
  color: ${(props) => (!props.isLight ? "#ffffff" : "#2b3442")};

  &::placeholder {
    color: ${(props) => (!props.isLight ? "rgba(255,255,255,100)" : "#4b6a9b")};
    opacity: 100%;
  }

  &:focus {
    outline: none;
    caret-color: #0079ff;
  }
`;

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <form
        className={classes["form-search"]}
        style={{ backgroundColor: !this.props.isLight ? "#1e2a47" : "#fefefe" }}
      >
        <SearchIcon />
        <Input
          isLight={this.props.isLight}
          type="text"
          placeholder="Search GitHub username…"
        />
        <button className={classes["search-btn"]}>Search</button>
      </form>
    );
  }
}

export default Form;
