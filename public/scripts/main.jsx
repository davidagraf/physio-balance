import React from 'react';
import ReactDOM from 'react-dom';

import 'normalize.css/normalize.css';
import 'styles/main.scss';
import 'scripts/utils/mobile.js';

import Root from 'scripts/components/Root.jsx';

ReactDOM.render(<Root/>, document.getElementById('root'));

// import { Router, Route, Link } from 'react-router'
//
// class App extends React.Component {
//   render() {
//     return (
//       <div>
//         <h1>App</h1>
//         <ul>
//           <li><Link to="/about">About</Link></li>
//           <li><Link to="/inbox">Inbox</Link></li>
//         </ul>
//         {this.props.children}
//       </div>
//     )
//   }
// }
//
// class About extends React.Component {
//   render() {
//     return <h3>About</h3>
//   }
// }
//
// class Inbox extends React.Component {
//   render() {
//     return (
//       <div>
//         <h2>Inbox</h2>
//         {this.props.children || "Welcome to your Inbox"}
//       </div>
//     )
//   }
// }
//
// class Message extends React.Component {
//   render() {
//     return <h3>Message {this.props.params.id}</h3>
//   }
// }
//
// ReactDOM.render((
//   <Router>
//     <Route path="/" component={App}>
//       <Route path="about" component={About} />
//       <Route path="inbox" component={Inbox}>
//         <Route path="messages/:id" component={Message} />
//       </Route>
//     </Route>
//   </Router>
// ), document.getElementById('root'))
