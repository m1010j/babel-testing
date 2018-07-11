import React from 'react';
import { withRouter, Link } from 'react-router-dom';
// import { Link } from 'react-router-dom';

// class Thing extends React.Component {
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
//     return (
//       <Link to="/your_mum">we in here</Link>
//     );
//   }
// }

export default withRouter(function Thing() {
  return (
    <Link to="/your_mum">we in here</Link>
  )
});
