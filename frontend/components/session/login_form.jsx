import React from 'react';
import { withRouter, Link } from 'react-router-dom';
// import { Link } from 'react-router-dom';
// function Thing(props) {
//   React.Component.call(this, props);
//   this.state = {
//     username: "",
//     password: ""
//   }
// }

// function Surrogate() {}
// Surrogate.prototype = React.Component.prototype;
// Thing.prototype = new Surrogate();
// Thing.prototype.constructor = Thing;
// Thing.prototype.handleSubmit = function (e) {
//   e.preventDefault();
//   this.props.login(this.state);
// };
// Thing.prototype.render = function () {
//   return (<div>
//     Please Sign Up
//     <form onSubmit={this.handleSubmit.bind(this)}>

//       <label>Username:
//         <input type="text" value={this.state.username}
//           onChange={this.update("username")}
//         />
//       </label>

//       <label>Password:
//         <input type="password" value={this.state.password}
//           onChange={this.update("password")}
//         />
//       </label>


//       <input type="submit" value="Sign Up" />
//     </form>

//     <Link to="/login">Already on Ike!? Log in</Link>
//   </div>);
// };

// Thing.prototype.update = function(field) {
//   return e => this.setState({
//     [field]: e.currentTarget.value
//   });
// }
class Thing extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     username: "",
  //     password: ""
  //   };
  //   this.handleSubmit = this.handleSubmit.bind(this);
  // }

  // handleSubmit(e) {
  //   e.preventDefault();
  //   this.props.login(this.state);
  // }
  //


  // renderErrors() {
  //   return (
  //     <ul>
  //       {this.props.errors.map((error, idx) => (
  //         <li key={`error-${idx}`}>{error}</li>
  //       ))}
  //     </ul>
  //   );
  // }


  render() {
    return <h2>login</h2>
  }
}

export default withRouter(Thing);
