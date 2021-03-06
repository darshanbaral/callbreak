import React from "react";
import Button from "react-bootstrap/Button";

export default class SButton extends React.Component {
  handleClick = () => {
    this.props.onClick();
  };
  render() {
    let cursor = this.props.allowClick ? "pointer" : "initial";
    return (
      <Button
        style={{
          cursor: cursor,
          width: "100px"
        }}
        variant={this.props.allowClick ? this.props.type : "secondary"}
        onClick={this.handleClick}
      >
        {this.props.label}
      </Button>
    );
  }
}
