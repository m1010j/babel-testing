import  React from 'react';
import ReactDOM from 'react-dom';
import * as SessionApiUtil from './util/session_api_util';
import configureStore from './store/store';
// import Root from './components/root';

document.addEventListener("DOMContentLoaded", () => {
  const Test = function({store}) {
    return (
      <div>
        <h1>Testing</h1>
        <h2>{store.getState().session.id}</h2>
      </div>
    )
  }
  const root = document.getElementById('root');
  const store = configureStore();
  window.login = SessionApiUtil.login;
  window.logout = SessionApiUtil.logout;
  window.signup = SessionApiUtil.signup;
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  ReactDOM.render(<Test store={store} />, root);
});
