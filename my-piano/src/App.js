import "./App.css";
import Octave from "./Components/Octave";
import React from "react";

class App extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
  octaveAmount = [3, 4, 5, 6];
  componentDidMount() {
    window.addEventListener("keydown", this.eventDown);
    window.addEventListener("keyup", this.eventUp);
  }
  eventDown = (event) => {
    this.setState({ [event.key]: true });
  };
  eventUp = (event) => {
    this.setState({ [event.key]: false });
  };
  makePiano() {
    return this.octaveAmount.map((input) => {
      if (input === 4) {
        return <Octave octaveValue={input} keyboardInput={this.state} />;
      }
      return <Octave octaveValue={input} />;
    });
  }
  render() {
    return <div className="App">{this.makePiano()}</div>;
  }
}

export default App;
