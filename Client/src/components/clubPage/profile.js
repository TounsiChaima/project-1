import React, { Component } from "react";
import { Grid, Divider, Container, Button, TextField } from "@material-ui/core";
import "./Settings.css";
import axios from "axios";
import Notification from "../../Notifications";
import Tabs from "../../Utils/Modular/Tabs";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import LockIcon from "@material-ui/icons/Lock";
import EmailIcon from "@material-ui/icons/Email";
import Alert from "../../Utils/Alert";
class Profile extends Component {
  constructor(props) {
    super(props);
    this.handleAvatarChange = this.handleAvatarChange.bind(this);
    this.handleFieldsChange = this.handleFieldsChange.bind(this);
    this.state = {
      userLoggedIn: "",
      displayName: "",
      websiteURL: "",
      avatar: "",
      twitter: "",
      bio: "",
      avatarFile: null,
      avatarImage: null,
      avatarUpdated: false,
      saved: false,
      errors: null,
      password: "",
      passwordForEmail: "",
      newEmail: "",
      newPassword: "",
      newPasswordConfirmation: "",
      newEmail: "",
      _SUCCESS_PASSWORD: false,
      _ERROR_PASSWORD: false,
      _ERROR_EMAIL: false,
      _SUCCESS_EMAIL: false,
    };
  }

  componentDidMount() {
    const lowercaseUsername = this.props.user.username.toLowerCase();
    this.setState(
      {
        userLoggedIn: this.props.user,
        username: lowercaseUsername,
        displayName: this.props.user.displayName,
        websiteURL: this.props.user.websiteURL,
        twitter: this.props.user.twitter,
        bio: this.props.user.bio,
      },
      () => {
        this.setState({
          avatar:
            "https://oh-my-game-portal.herokuapp.com/" +
            this.state.userLoggedIn.avatar,
        });
      }
    );
  }
  handleAvatarChange(event) {
    this.setState({
      avatarFile: event.target.files[0],
    });
    this.setState({
      avatar: URL.createObjectURL(event.target.files[0]),
    });
  }
  handleFieldsChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }
  handleUpdateClick() {
    if (this.state.avatarFile) {
      const fb = new FormData();
      fb.append("avatar", this.state.avatarFile);
      axios
        .put(
          "/api/developers/update-avatar/" + this.state.userLoggedIn._id,
          fb,
          {
            headers: { "content-type": "multipart/form-data" },
          }
        )
        .then((res) => {
          this.setState({ avatarUpdated: true }, () => {
            setTimeout(() => {
              this.setState({ avatarUpdated: false });
            }, 4000);
          });
          console.log(res);
        })
        .catch((err) => console.log(err));
    } else {
      this.setState(
        {
          errors: "You have to chose an image first",
        },
        () => {
          setTimeout(() => {
            this.setState({ errors: null });
          }, 4000);
        }
      );
    }
  }
  handlePasswordClick() {
    if (this.state.newPassword !== this.state.newPasswordConfirmation) {
      this.setState({
        errors: "Passwords does not match!",
      });
    } else {
      var body = {
        _id: this.state.userLoggedIn._id,
        currentPassword: this.state.password,
        newPassword: this.state.newPassword,
      };

      axios
        .post("/api/developers/updatePassword", body)
        .then((res) => {
          if (res.data.error) {
            this.showPasswordError();
          } else {
            this.showPasswordSuccess();
          }
        })
        .catch((err) => {});
    }
  }
  handleEmailClick() {
    var body = {
      _id: this.state.userLoggedIn._id,
      password: this.state.passwordForEmail,
      newEmail: this.state.email,
    };
    console.log(body);
    axios
      .post("/api/developers/updateEmail", body)
      .then((res) => {
        if (res.data.error) {
          this.showEmailError();
        } else {
          this.showEmailSuccess();
        }
      })
      .catch((err) => console.log(err));
  }

  showPassword() {
    let email = document.getElementById("email-settings");
    let password = document.getElementById("password-settings");
    let general = document.getElementById("general-settings");

    password.style.display = "block";
    general.style.display = "none";
    email.style.display = "none";
    this.setState({
      email: "",
      passwordForEmail: "",
    });
  }
  showGeneral() {
    let email = document.getElementById("email-settings");
    let password = document.getElementById("password-settings");
    let general = document.getElementById("general-settings");

    password.style.display = "none";
    general.style.display = "block";
    email.style.display = "none";
  }
  showEmail() {
    let email = document.getElementById("email-settings");
    let password = document.getElementById("password-settings");
    let general = document.getElementById("general-settings");

    password.style.display = "none";
    general.style.display = "none";
    email.style.display = "block";

    this.setState({
      password: "",
      newPassword: "",
      newPasswordConfirmation: "",
    });
  }
  handleGeneralClick() {
    console.log(this.state);
    const user = {
      displayName: this.state.displayName,
      websiteURL: this.state.websiteURL,
      twitter: this.state.twitter,
      bio: this.state.bio,
    };

    axios
      .put(
        "https://oh-my-game-portal.herokuapp.com/api/developers/update/" +
          this.state.userLoggedIn._id,
        user
      )
      .then((res) => {
        this.setState({ saved: true }, () => {
          setTimeout(() => {
            this.setState({ saved: false });
          }, 4000);
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }
  showPasswordError() {
    this.setState(
      {
        _ERROR_PASSWORD: true,
      },
      () => {
        setTimeout(() => {
          this.setState({
            _ERROR_PASSWORD: false,
          });
        }, 3000);
      }
    );
  }
  showPasswordSuccess() {
    this.setState(
      {
        _SUCCESS_PASSWORD: true,
      },
      () => {
        setTimeout(() => {
          this.setState({
            _SUCCESS_PASSWORD: false,
          });
        }, 3000);
      }
    );
  }
  showEmailError() {
    this.setState(
      {
        _ERROR_EMAIL: true,
      },
      () => {
        setTimeout(() => {
          this.setState({
            _ERROR_EMAIL: false,
          });
        }, 3000);
      }
    );
  }
  showEmailSuccess() {
    this.setState(
      {
        _SUCCESS_EMAIL: true,
      },
      () => {
        setTimeout(() => {
          this.setState({
            _SUCCESS_EMAIL: false,
          });
        }, 3000);
      }
    );
  }

  render() {
    return (
      <div>
        <div
          style={{
            margin: "auto",
            width: "70%",
            height: "100%",
            backgroundColor: "white",
            border: "solid #d0d0d0 2px",
          }}
        >
          <Grid container className="header-title">
            <Grid item xs={9}>
              <div>Profile</div>
            </Grid>
            <Grid
              className="counter-title"
              item
              xs={3}
              style={{ textAlign: "right" }}
            ></Grid>
          </Grid>
          <Divider />
          {this.state.avatarUpdated ? (
            <Notification
              text="You have updated your avatar"
              show={true}
              color="#62be6b"
            />
          ) : null}
          {this.state.saved ? (
            <Notification
              text="Your changes have been saved"
              show={true}
              color="#62be6b"
            />
          ) : null}
          {this.state.errors ? (
            <Notification
              text={this.state.errors}
              show={true}
              color="#e8433b"
            />
          ) : null}

          <Grid container>
            <Grid item xs={3} className="tabs">
              <div className="form-image-widget-tester">
                <figure>
                  <img
                    alt="icon"
                    key={this.state.avatar}
                    src={this.state.avatar}
                  />
                  <input
                    className="inputSpot"
                    type="file"
                    onChange={this.handleAvatarChange}
                  />
                </figure>
                <div className="upload-tools">
                  <Button
                    variant="outlined"
                    style={{
                      color: "#22a3f0",
                      fontWeight: "bold",
                      marginTop: "1rem",
                      borderColor: "#22a3f0",
                    }}
                    onClick={() => {
                      this.handleUpdateClick();
                    }}
                  >
                    Update
                  </Button>
                </div>
                <div className="tabs-settings">
                  <Button
                    onClick={() => this.showGeneral()}
                    startIcon={<AccountCircleIcon />}
                  >
                    General
                  </Button>
                  <Button
                    onClick={() => this.showPassword()}
                    startIcon={<LockIcon />}
                  >
                    Password
                  </Button>
                  <Button
                    onClick={() => this.showEmail()}
                    startIcon={<EmailIcon />}
                  >
                    Email addresses
                  </Button>
                </div>
              </div>
            </Grid>

            <Grid id="general-settings" item xs={9}>
              <div className="content">
                <h2>Profile</h2>
                <div className="settings-element">
                  <div className="label">
                    Username
                    <span className="label-sub">
                      {" "}
                      - Displayed when you post a new game as your profile name.
                    </span>
                  </div>
                  <div>{this.props.user.username}</div>
                </div>
                <div className="settings-element">
                  <div className="label">
                    URL
                    <span className="label-sub">
                      {" "}
                      - The public URL for your account.
                    </span>
                  </div>
                  <div>
                    https://{this.state.username}
                    .galactech
                  </div>
                </div>

                <div className="settings-element">
                  <div className="label">
                    Display name
                    <span className="label-sub">
                      - Name to be shown in place of your username, leave blank
                      to default to username
                    </span>
                  </div>
                  <TextField
                    style={{ marginTop: "8px" }}
                    fullWidth
                    size="small"
                    variant="outlined"
                    placeholder={this.state.userLoggedIn.displayName}
                    name="displayName"
                    value={this.state.displayName}
                    onChange={this.handleFieldsChange}
                  />
                </div>

                <div className="settings-element">
                  <div className="label">
                    Website
                    <span className="label-sub">
                      - Optional URL to be shown on your profile page
                    </span>
                  </div>
                  <TextField
                    style={{ marginTop: "8px" }}
                    fullWidth
                    size="small"
                    variant="outlined"
                    placeholder={this.state.userLoggedIn.websiteURL}
                    name="websiteURL"
                    value={this.state.websiteURL}
                    onChange={this.handleFieldsChange}
                  />
                </div>

                <div className="settings-element">
                  <div className="label">
                    Twitter
                    <span className="label-sub">
                      - Twitter account to show on your profile
                    </span>
                  </div>
                  <TextField
                    style={{ marginTop: "8px" }}
                    fullWidth
                    size="small"
                    variant="outlined"
                    placeholder={this.state.userLoggedIn.twitter}
                    name="twitter"
                    value={this.state.twitter}
                    onChange={this.handleFieldsChange}
                  />
                </div>

                <div className="settings-element">
                  <div className="label">
                    Description
                    <span className="label-sub">
                      - Small description that will be displayed on your profile
                    </span>
                  </div>
                  <TextField
                    rows={5}
                    placeholder={this.state.userLoggedIn.bio}
                    name="bio"
                    value={this.state.bio}
                    onChange={this.handleFieldsChange}
                    fullWidth
                    size="small"
                    variant="outlined"
                    multiline
                  />
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <Button
                    style={{
                      paddingLeft: "2rem",
                      paddingRight: "2rem",
                      marginTop: "1rem",
                      color: "white",
                      fontWeight: "bold",
                      backgroundColor: "#22a3f0",
                    }}
                    variant="contained"
                    onClick={() => {
                      this.handleGeneralClick();
                    }}
                  >
                    Save
                  </Button>
                </div>
              </div>
            </Grid>
            <Grid
              id="password-settings"
              item
              xs={9}
              style={{ display: "none" }}
            >
              <div className="content">
                <h2>Password</h2>
                <div className="alerts">
                  {this.state._ERROR_PASSWORD ? (
                    <Alert
                      text="Password Incorrect"
                      bgColor="#e8433b"
                      textColor="white"
                    />
                  ) : null}
                  {this.state._SUCCESS_PASSWORD ? (
                    <Alert
                      text="Password updated!"
                      bgColor="#62be6b"
                      textColor="white"
                    />
                  ) : null}
                </div>
                <div className="settings-element">
                  <div className="label">Current password</div>
                  <TextField
                    type="password"
                    style={{ marginTop: "8px" }}
                    size="small"
                    fullWidth
                    id="outlined-basic"
                    variant="outlined"
                    name="password"
                    value={this.state.password}
                    onChange={this.handleFieldsChange}
                  />
                </div>
                <div className="settings-element">
                  <div className="label">New password</div>
                  <TextField
                    style={{ marginTop: "8px" }}
                    size="small"
                    fullWidth
                    id="outlined-basic"
                    variant="outlined"
                    name="newPassword"
                    value={this.state.newPassword}
                    onChange={this.handleFieldsChange}
                  />
                </div>
                <div className="settings-element">
                  <div className="label">New password again</div>
                  <TextField
                    type="password"
                    style={{ marginTop: "8px" }}
                    size="small"
                    fullWidth
                    id="outlined-basic"
                    variant="outlined"
                    name="newPasswordConfirmation"
                    value={this.state.newPasswordConfirmation}
                    onChange={this.handleFieldsChange}
                  />
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <Button
                    style={{
                      paddingLeft: "2rem",
                      paddingRight: "2rem",
                      marginTop: "1rem",
                      color: "white",
                      fontWeight: "bold",
                      backgroundColor: "#22a3f0",
                    }}
                    variant="contained"
                    onClick={() => {
                      this.handlePasswordClick();
                    }}
                  >
                    Save
                  </Button>
                </div>
              </div>
            </Grid>
            <Grid id="email-settings" item xs={9} style={{ display: "none" }}>
              <div className="content">
                <h2>Primary email</h2>
                <div className="alerts">
                  {this.state._ERROR_EMAIL ? (
                    <Alert
                      text="Password Incorrect"
                      bgColor="#e8433b"
                      textColor="white"
                    />
                  ) : null}
                  {this.state._SUCCESS_EMAIL ? (
                    <Alert
                      text="Email updated!"
                      bgColor="#62be6b"
                      textColor="white"
                    />
                  ) : null}
                </div>
                <div className="settings-element">
                  <div className="label-sub">
                    Your primary email address is{" "}
                    <span className="label">
                      {this.state.userLoggedIn.email}
                    </span>
                  </div>
                  <div className="label-sub">
                    Your primary email is where @galactech will send any
                    notifications to you. When you change your email address you
                    must verify it to access any games you have uploaded. You
                    will be mailed the verification instructions. For security
                    reasons you must also provide your current password to make
                    any changes to your email address.
                  </div>
                  <div className="label">New email address</div>
                  <TextField
                    style={{ marginTop: "8px" }}
                    size="small"
                    fullWidth
                    id="outlined-basic"
                    variant="outlined"
                    name="email"
                    value={this.state.email}
                    onChange={this.handleFieldsChange}
                  />
                </div>
                <div className="settings-element">
                  <div className="label">Password</div>
                  <TextField
                    type="password"
                    style={{ marginTop: "8px" }}
                    size="small"
                    fullWidth
                    id="outlined-basic"
                    variant="outlined"
                    name="passwordForEmail"
                    value={this.state.passwordForEmail}
                    onChange={this.handleFieldsChange}
                  />
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <Button
                    style={{
                      paddingLeft: "2rem",
                      paddingRight: "2rem",
                      marginTop: "1rem",
                      color: "white",
                      fontWeight: "bold",
                      backgroundColor: "#22a3f0",
                    }}
                    variant="contained"
                    onClick={() => {
                      this.handleEmailClick();
                    }}
                  >
                    Submit
                  </Button>
                </div>
                <Divider style={{ margin: "1rem" }} />
                <h2>Additional emails</h2>
                <div className="settings-element">
                  <div className="label-sub">
                    You can link additional email addresses to your galactech
                    account in order to get access to anything purchased under
                    those email addresses. For example, your PayPal email
                    address might be different than your regular email address
                    so you'd want to add it as an additional email. You will be
                    mailed verification instructions after adding an additional
                    email.
                  </div>
                  <div className="label">Additional Email Address</div>
                  <TextField
                    style={{ marginTop: "8px" }}
                    size="small"
                    fullWidth
                    id="outlined-basic"
                    variant="outlined"
                    disabled
                    name="username"
                    value={this.props.user.username}
                  />
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <Button
                    style={{
                      paddingLeft: "2rem",
                      paddingRight: "2rem",
                      marginTop: "1rem",
                      color: "white",
                      fontWeight: "bold",
                      backgroundColor: "#22a3f0",
                    }}
                    variant="contained"
                    onClick={() => {
                      this.handleGeneralClick();
                    }}
                  >
                    Add
                  </Button>
                </div>
              </div>
            </Grid>
          </Grid>
        </div>
      </div>
    );
  }
}
export default Profile;
