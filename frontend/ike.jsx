import  React from 'react';
import ReactDOM from 'react-dom';
import * as SessionApiUtil from './util/session_api_util';
import configureStore from './store/store';
import Root from './components/root';

document.addEventListener("DOMContentLoaded", () => {
  // const Test = function({store}) {
  //   return (
  //     <div>
  //       <h1>Testing</h1>
  //       <h2>{store.getState().session.id}</h2>
  //     </div>
  //   )
  // }
  class Animal {
    constructor(name) {
      this.name = name;
    }
  }

  class Jeff extends Animal {
    constructor(name, age) {
      super(name)
      this.age = age;
    }

    speak() {
      console.log(`${this.name} is sad about being ${this.age}`);
    }
  }

  const j = new Jeff("jeff", 69)
  j.speak();
  const root = document.getElementById('root');
  const store = configureStore();
  window.login = SessionApiUtil.login;
  window.logout = SessionApiUtil.logout;
  window.signup = SessionApiUtil.signup;
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  ReactDOM.render(<Root store={store} />, root);
});
