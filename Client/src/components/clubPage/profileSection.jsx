import React, { Component } from "react";

export default class ProfileSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      profileClass: "profile-section-open",
    };
  }

  componentDidMount() {
    this.setState({
      profileClass: this.props.state,
    });
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.state !== this.props.state) {
      this.setState({
        profileClass: this.props.state,
      });
    }
  }

  render() {
    return (
      <div className={this.state.profileClass}>
        <div className="profile-image">
          <img
           
            src= "data:image/png;base64,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" 
            alt="icon"
          />
        </div>
        {this.state.profileClass === "profile-section-open" ? (
          <div className="profile-information">
            <div className="profile-section-label">Your dashboard</div>
            <div className="username-section">{this.props.data}</div>
          </div>
        ) : null}
      </div>
    );
  }
}
