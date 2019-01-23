import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';

// FOR TESTING IN DEVELOPMENT
import { createUser, login, logout } from './actions/session/session_actions';
// END TESTING - REMOVE IN PROD

document.addEventListener('DOMContentLoaded', () => {
  const store = configureStore();
  const root = document.getElementById('root');

  // FOR TESTING IN DEVELOPMENT
  window.createUser = createUser;
  window.login = login;
  window.logout = logout;
  window.dispatch = store.dispatch;
  // END TESTING - REMOVE IN PROD
  
  ReactDOM.render(<Root store={store} />, root);
});



// createUser, createSession, deleteSessiojn - AJAX
  // window.createUser({email: "starwars1@gmail.com", password: "starwars1"});
  // window.createSession({email: "starwars@gmail.com", password: "starwars"});
  // deleteSession();

// thunk createUser, createSession, logout
  // dispatch(window.createUser({email: "111111@gmail.com", password: "111111"}));
  // dispatch(window.login({email: "starwars@gmail.com", password: "starwars"}));
  // dispatch(logout());