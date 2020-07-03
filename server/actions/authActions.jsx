import axios from "axios";
import {
  USER_LOADING,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  GET_USERS,
  AUTH_ERROR,
  USER_LOADED,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  LOGOUT_SUCCESS,
} from "./types";
import { returnErrors } from "./errorActions";

export const register = ({
  username,
  email,
  password,
  password_confirmation,
}) => (dispatch) => {
  // Headers
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  // Request body
  const body = JSON.stringify({
    username,
    email,
    password,
    password_confirmation,
  });

  axios
    .post("/api/developers/register", body, config)
    .then((res) =>
      dispatch({
        type: REGISTER_SUCCESS,
        payload: res.data,
      })
    )
    .catch((err) => {
      dispatch(
        returnErrors(err.response.data, err.response.status, "REGISTER_FAIL")
      );
      dispatch({
        type: REGISTER_FAIL,
      });
    });
};
//Check token and load user
export const loadUser = (type) => (dispatch, getState) => {
  // User loading
  dispatch({ type: USER_LOADING });
  if (type === "developer") {
    axios
      .get("/api/developers/user", tokenConfig(getState))
      .then((res) => {
        dispatch({
          type: USER_LOADED,
          payload: res.data,
        });
      })
      .catch((err) => {
        dispatch(returnErrors(err.response.data, err.response.status));
        dispatch({
          type: AUTH_ERROR,
        });
      });
  } else if (type === "tester") {
    axios
      .get("/api/testers/tester", tokenConfig(getState))
      .then((res) => {
        console.log("TESTER : ", res.data);
        dispatch({
          type: USER_LOADED,
          payload: res.data,
        });
      })
      .catch((err) => {
        dispatch(returnErrors(err.response.data, err.response.status));
        dispatch({
          type: AUTH_ERROR,
        });
      });
  } else if (type === "admin") {
    axios
      .get("/api/admins/admin", tokenConfig(getState))
      .then((res) => {
        dispatch({
          type: USER_LOADED,
          payload: res.data,
        });
      })
      .catch((err) => {
        dispatch(returnErrors(err.response.data, err.response.status));
        dispatch({
          type: AUTH_ERROR,
        });
      });
  }
};

//getUsers
export const getUsers = () => (dispatch) => {
  axios
    .get("/api/users")
    .then((res) =>
      dispatch({
        type: GET_USERS,
        payload: res.data,
      })
    )
    .catch((err) =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};

//User loading
export const setUserLoading = () => {
  return {
    type: USER_LOADING,
  };
};

export const tokenConfig = (getState) => {
  const token = getState().auth.token;

  const config = {
    headers: {
      "Content-type": "application/json",
    },
  };

  if (token) {
    config.headers["x-auth-token"] = token;
  }
  return config;
};

// Log user out
export const logout = () => {
  return { type: LOGOUT_SUCCESS };
};

//Login user
export const login = ({ email, password, type }) => (dispatch) => {
  // Headers
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  // Request body
  const body = JSON.stringify({
    email,
    password,
  });
  if (type === "admin") {
    console.log("logging in admin : ", email);
    axios
      .post("/api/admins/login", body, config)
      .then((res) =>
        dispatch({
          type: LOGIN_SUCCESS,
          payload: res.data,
        })
      )
      .catch((err) => {
        dispatch(
          returnErrors(err.response.data, err.response.status, "LOGIN_FAIL")
        );
        dispatch({
          type: LOGIN_FAIL,
        });
      });
  } else if (type === "Developer") {
    axios
      .post("/api/developers/login", body, config)
      .then((res) =>
        dispatch({
          type: LOGIN_SUCCESS,
          payload: res.data,
        })
      )
      .catch((err) => {
        dispatch(
          returnErrors(err.response.data, err.response.status, "LOGIN_FAIL")
        );
        dispatch({
          type: LOGIN_FAIL,
        });
      });
  } else {
    console.log("logging in tester : ", email);
    axios
      .post("/api/testers/login", body, config)
      .then((res) =>
        dispatch({
          type: LOGIN_SUCCESS,
          payload: res.data,
        })
      )
      .catch((err) => {
        dispatch(
          returnErrors(err.response.data, err.response.status, "LOGIN_FAIL")
        );
        dispatch({
          type: LOGIN_FAIL,
        });
      });
  }
};
