import React, { Component } from "react";
//AlertRed
//textColor #721C24
//bgColor #F8D7DA
export default class Alert extends Component {
  render() {
    return (
      <div
        style={{
          marginTop: "10px",
          padding: "5px",
          paddingLeft: "1rem",
          paddingRight: "1rem",
          backgroundColor: this.props.bgColor,
          color: this.props.textColor,
          borderRadius: "5px",
          fontSize: "12px",
          fontWeight: "bold",
          transition: "backgroundColor 2s",
        }}
      >
        {this.props.text}
      </div>
    );
  }
}
