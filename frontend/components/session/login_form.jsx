import React from 'react';
import { withRouter, Link } from 'react-router-dom';
// import { Link } from 'react-router-dom';
function Thing(props) {
  console.log('fuck');
  React.Component.call(this, props);
}

function Surrogate() {}
Surrogate.prototype = React.Component.prototype;
Thing.prototype = new Surrogate();
Thing.prototype.constructor = Thing;
Thing.prototype.render = function () {
  console.log('what');
  return (
    <Link to="/your_mum">we in here</Link>
  );
};
// class Thing {
//   // constructor(props) {
//   //   super(props);
//   //   this.state = {
//   //     username: "",
//   //     password: ""
//   //   };
//   //   this.handleSubmit = this.handleSubmit.bind(this);
//   // }
//
//   // handleSubmit(e) {
//   //   e.preventDefault();
//   //   this.props.login(this.state);
//   // }
//   //
//   // update(field) {
//   //   return e => this.setState({
//   //     [field]: e.currentTarget.value
//   //   });
//   // }
//
//   // renderErrors() {
//   //   return (
//   //     <ul>
//   //       {this.props.errors.map((error, idx) => (
//   //         <li key={`error-${idx}`}>{error}</li>
//   //       ))}
//   //     </ul>
//   //   );
//   // }
//
//
//   render() {
//
//   }
// }

export default withRouter(Thing);
