import { Component, Fragment } from "react";
import classes from "./App.module.css";
import Header from "./components/Header/Header";

class App extends Component {
  constructor() {
    super();
    this.state = {
      isLight: false,
    };
  }

  toggleThemeHandler() {
    this.setState((currState) => {
      return { isLight: !currState.isLight };
    });
  }

  render() {
    return (
      <Fragment>
        <main
          className={classes.main}
          style={{
            backgroundColor: !this.state.isLight ? "#141d2f" : "#f6f8ff",
          }}
        >
          <div className={classes.container}>
            <Header
              isLight={this.state.isLight}
              isLightHandler={this.toggleThemeHandler.bind(this)}
            />
          </div>
        </main>
      </Fragment>
    );
  }
}

export default App;
