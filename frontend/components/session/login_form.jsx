import React from 'react';
// import { withRouter, Link } from 'react-router-dom';
// import { Link } from 'react-router-dom';

// class LoginForm extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       username: "",
//       password: ""
//     };
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }
//
//   handleSubmit(e) {
//     e.preventDefault();
//     this.props.login(this.state);
//   }
//
//   update(field) {
//     return e => this.setState({
//       [field]: e.currentTarget.value
//     });
//   }
//
//   renderErrors() {
//     return (
//       <ul>
//         {this.props.errors.map((error, idx) => (
//           <li key={`error-${idx}`}>{error}</li>
//         ))}
//       </ul>
//     );
//   }
//
//
//   render() {
//     return (
//       <div>
//         Please Login
//         <form onSubmit={this.handleSubmit}>
//
//           <label>Username:
//             <input type="text" value={this.state.username}
//               onChange={this.update("username")}
//             />
//           </label>
//
//           <label>Password:
//             <input type="password" value={this.state.password}
//               onChange={this.update("password")}
//             />
//           </label>
//
//           <input type="submit" value="Log In" />
//         </form>
//
//         <Link to="/signup">New to Ike!? Sign up</Link>
//       </div>
//     );
//   }
// }
//
// export default withRouter(LoginForm);
export default function Thing() {
  return (
    <h1>we in here</h1>
  );
};
