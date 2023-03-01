import { LOGIN, LOGOUT, DISPLAY_NOTIFICATION_DRAWER, HIDE_NOTIFICATION_DRAWER } from "./uiActionTypes";
import { bindActionCreators } from 'redux';
import {
  login as loginActionCreator,
  logout as logoutActionCreator,
  displayNotificationDrawer as displayNotificationDrawerActionCreator,
  hideNotificationDrawer as hideNotificationDrawerActionCreator
} from './uiActionCreators';



export const login = (email, password) => ({
    type: LOGIN,
    user: { email, password }
  });
  
  export const logout = () => ({
    type: LOGOUT
  });
  
  export const displayNotificationDrawer = () => ({
    type: DISPLAY_NOTIFICATION_DRAWER
  });
  
  export const hideNotificationDrawer = () => ({
    type: HIDE_NOTIFICATION_DRAWER
  });

  export const boundLogin = (email, password) => dispatch(login(email, password));

  
  export const boundLogout = () => dispatch(logout());

  export const boundDisplayNotificationDrawer = () =>
  dispatch(displayNotificationDrawer());

  export const boundHideNotificationDrawer = () =>
  dispatch(hideNotificationDrawer());

  export const loginRequest = (email, password) => {
    return (dispatch) => {
      dispatch(login(email, password));
      return fetch("http://localhost:8564/login-success.json")
        .then((res) => res.json())
        .then((json) => dispatch(loginSuccess()))
        .catch((error) => dispatch(loginFailure()));
    };
  };
  