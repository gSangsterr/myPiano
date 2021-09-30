import BlackKey from "./BlackKey";
import WhiteKey from "./WhiteKey";
import React from "react";
import "./Octave.css";

class Octave extends React.Component {
  pianoNotes = [
    "C",
    "Db",
    "D",
    "Eb",
    "E",
    "F",
    "Gb",
    "G",
    "Ab",
    "A",
    "Bb",
    "B",
  ];
  whiteKeyboardInput = ["a", "s", "d", "f", "g", "h", "j", "k"];
  blackKeyboardInput = ["w", "e", "t", "y", "u", "i"];
  mapKeys() {
    if (this.props.octaveValue === 4) {
      return this.pianoNotes.map((input) => {
        if (input.length < 2) {
          return (
            <WhiteKey
              note={input}
              octaveValue={this.props.octaveValue}
              keyboardInput={this.props.keyboardInput}
              correctKey={this.whiteKeyboardInput.shift()}
            />
          );
        } else {
          return (
            <BlackKey
              note={input}
              octaveValue={this.props.octaveValue}
              keyboardInput={this.props.keyboardInput}
              correctKey={this.blackKeyboardInput.shift()}
            />
          );
        }
      });
    }
    return this.pianoNotes.map((input) => {
      if (input.length < 2) {
        return <WhiteKey note={input} octaveValue={this.props.octaveValue} />;
      } else {
        return <BlackKey note={input} octaveValue={this.props.octaveValue} />;
      }
    });
  }
  render() {
    return <div className="octave-div">{this.mapKeys()}</div>;
  }
}
export default Octave;
