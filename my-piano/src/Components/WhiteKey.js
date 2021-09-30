import React from "react";
import "./WhiteKey.css";
import * as Tone from "tone";
class WhiteKey extends React.Component {
  constructor(props) {
    super(props);
    this.synth = new Tone.Synth().toDestination();
    this.specificNote = this.props.note + this.props.octaveValue;
    this.flatKeys = ["D", "E", "G", "A", "B"];
    this.state = {
      pressed: false,
      correctKey: this.props.correctKey,
    };
  }
  componentDidUpdate() {
    if (this.props.keyboardInput !== undefined) {
      if (this.props.keyboardInput[this.state.correctKey] === true) {
        this.noiseMaker();
      }
      if (this.props.keyboardInput[this.state.correctKey] === false) {
        this.noiseStopper();
      }
    }
  }
  whiteKeyButton() {
    let btnVal = " ";
    if (this.state.correctKey !== undefined) {
      btnVal = this.state.correctKey;
    }
    return (
      <button
        onMouseDown={this.noiseMaker}
        onMouseUp={this.noiseStopper}
        onMouseOut={this.noiseStopper}
        className="white-key-button"
      >
        <div className="white-input-helper">{btnVal} </div>
        <div className="actual-white"> {this.props.note}</div>
      </button>
    );
  }
  noiseStopper = () => {
    if (this.state.pressed === true) {
      this.setState({ pressed: false });
      const now = Tone.now();
      this.synth.triggerRelease(now);
    }
  };
  noiseMaker = () => {
    if (this.state.pressed === false) {
      this.setState({ pressed: true });
      //create a synth and connect it to the main output (your speakers)
      const now = Tone.now();
      //play for the duration of an 8th note
      this.synth.triggerAttack(this.specificNote, now);
    }
  };
  render() {
    return <div>{this.whiteKeyButton()}</div>;
  }
}
export default WhiteKey;
