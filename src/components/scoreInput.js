import React from "react";
import styled from "styled-components";

const Input = styled.input`
  text-align: center;
  border: none;
  width: 99%;
  height: 28px;
  margin: auto;
  display: block;
  font-size: 1em;
  background-color: ${props => (props.valid ? "none" : "#d75d5d")};
  &:focus {
    outline: none;
  }
`;

export default class ScoreInput extends React.Component {
  state = { value: "", placeholder: "0", valid: true };
  handleChange = event => {
    const [min, max] = this.props.gameState === "call" ? [1, 8] : [0, 13];
    const val = Number(event.target.value);
    if (val < min || val > max || isNaN(val)) {
      this.setState({ valid: false });
    } else {
      this.setState({ valid: true });
    }
    this.setState({ value: event.target.value });
    this.props.onChange(this.props.id, event.target.value);
  };
  handleBlur = () => {
    this.setState({ placeholder: "0" });
  };
  handleFocus = () => {
    this.setState({ placeholder: "" });
  };
  render() {
    return (
      <Input
        id={this.props.id}
        type="tel"
        placeholder={this.state.placeholder}
        value={this.state.value}
        onChange={this.handleChange}
        onFocus={this.handleFocus}
        onBlur={this.handleBlur}
        valid={this.state.valid}
      />
    );
  }
}
