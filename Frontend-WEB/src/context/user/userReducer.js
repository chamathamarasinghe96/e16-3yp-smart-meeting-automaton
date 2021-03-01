/* eslint-disable import/no-anonymous-default-export */
import {
  USER_ADD_SUCCESS,
  USER_ADD_FAIL,
  // REGISTER_SUCCESS,
  // REGISTER_FAIL,
  // USER_LOADED,
  // AUTH_ERROR,
  // LOGIN_SUCCESS,
  // LOGIN_FAIL,
  // LOGOUT,
  CLEAR_USER_ERRORS,
} from "../types";

export default (state, action) => {
  switch (action.type) {
    // case REGISTER_SUCCESS:
    // case LOGIN_SUCCESS:
    //   localStorage.setItem("token", action.payload.token);
    //   return {
    //     ...state,
    //     ...action.payload,
    //     isAuthenticated: false,
    //     loading: false,
    //   };
    //////////////////////////////
    case USER_ADD_SUCCESS:
      // localStorage.setItem("token", action.payload.token);
      return {
        ...state,
        error: action.payload,
      };
    // case LOGOUT:
    // case AUTH_ERROR:
    // case LOGIN_FAIL:
    //   // case REGISTER_FAIL:
    //   localStorage.removeItem("token");
    //   return {
    //     ...state,
    //     token: null,
    //     isAuthenticated: false,
    //     loading: false,
    //     user: null,
    //     error: action.payload,
    //   };
    case USER_ADD_FAIL:
      return {
        ...state,
        error: action.payload,
      };
    case CLEAR_USER_ERRORS:
      return {
        ...state,
        error: null,
      };
    // case USER_LOADED:
    //   return {
    //     ...state,
    //     isadmin: action.payload.role === 1 ? true : false,
    //     // isadmin : true
    //     isAuthenticated: true,
    //     loading: false,

    //     user: action.payload,
    //   };

    default:
      return state;
  }
};
