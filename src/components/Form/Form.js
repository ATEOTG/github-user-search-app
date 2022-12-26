import { Component, createRef } from "react";
import classes from "./Form.module.css";
import styled from "styled-components";
import SearchIcon from "../svg/SearchIcon";
import FormDisplay from "./FormDisplay";

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
    this.myRef = createRef();
    this.dateMap = {
      1: "Jan",
      2: "Feb",
      3: "Mar",
      4: "Apr",
      5: "May",
      6: "Jun",
      7: "Jul",
      8: "Aug",
      9: "Sep",
      10: "Oct",
      11: "Nov",
      12: "Dec",
    };
    this.state = {
      user: "",
      name: "",
      following: 0,
      followers: 0,
      repos: 0,
      bio: "",
      location: "",
      joined: "",
      twitter: "",
      company: "",
      blog: "",
      image: "",
    };
  }

  async searchUser(user) {
    const response = await fetch(`https://api.github.com/users/${user}`);
    const data = await response.json();

    const date = data.created_at.split("-");
    const dateArr = [date[0], this.dateMap[+date[1]], date[2].slice(0, 2)];
    this.setState(() => {
      return {
        user: data.login,
        name: data.name,
        following: data.following,
        followers: data.followers,
        repos: data.public_repos,
        bio: data.bio,
        location: data.location,
        joined: dateArr,
        twitter: data.twitter_username,
        company: data.company,
        blog: data.blog,
        image: data.avatar_url,
      };
    });
    console.log(data);
  }

  userChangeHandler(e) {
    e.preventDefault();
    this.setState(() => {
      return { user: this.myRef.current.value };
    });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.user !== this.state.user) {
      this.searchUser(this.state.user);
    }
  }

  componentDidMount() {
    this.searchUser("octocat");
  }

  render() {
    return (
      <div className={classes["form-div"]}>
        <form
          className={classes["form-search"]}
          style={{
            backgroundColor: !this.props.isLight ? "#1e2a47" : "#fefefe",
            boxShadow: !this.props.isLight
              ? "none"
              : "0 1rem 2rem rgb(43, 52, 66,.15)",
          }}
        >
          <SearchIcon />
          <Input
            isLight={this.props.isLight}
            type="text"
            placeholder="Search GitHub username…"
            ref={this.myRef}
          />
          <button
            onClick={this.userChangeHandler.bind(this)}
            className={classes["search-btn"]}
          >
            Search
          </button>
        </form>
        <FormDisplay
          isLight={this.props.isLight}
          user={this.state.user}
          name={this.state.name}
          followers={this.state.followers}
          following={this.state.following}
          repos={this.state.repos}
          bio={this.state.bio}
          location={this.state.location}
          joined={this.state.joined}
          twitter={this.state.twitter}
          company={this.state.company}
          blog={this.state.blog}
          image={this.state.image}
        />
      </div>
    );
  }
}

export default Form;
