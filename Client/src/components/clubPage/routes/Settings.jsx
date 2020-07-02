import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loadUser } from "../../../actions/authActions";
import store from "../../../store";

import Profile from "./Profile";
import Sidebar from "../sidebar";
class Settings extends Component {
  constructor() {
    super();
    this.state = {
      userLoggedIn: {},
      loading: true,
    };
  }

  static propTypes = {
    auth: PropTypes.object.isRequired,
  };

  componentDidMount() {
    store.dispatch(loadUser("developer"), () => {
      this.setState({
        userLoggedIn: this.props.auth,
      });
    });
  }

  render() {
    const { user } = this.props.auth;
    if (user !== null) {
      return (
        <Sidebar
          history={this.props.history}
          data={user}
          toolbarColor="white"
          textColor="black"
          main={<Profile user={user} history={this.props.history} />}
        />
      );
    }
    
  }
}
const mapStateToProps = (state) => ({
  auth: state.auth,
});
export default connect(mapStateToProps, null)(Settings);
