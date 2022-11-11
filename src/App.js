import React from 'react';
import './styles/App.css';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import About from './pages/About';
import Posts from './pages/Posts';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/posts">Posts</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/posts">
            <Posts />
          </Route>
          {/* <Route path="/">
            <Home />
          </Route> */}
        </Switch>
      </div>
    </Router>
  );
}
export default App;

// export default function App() {
//   return (
//     <Router>
//       <div>
//         <nav>
//           <ul>
//             <li>
//               <Link to="/">Posts</Link>
//             </li>
//             <li>
//               <Link to="/about">About</Link>
//             </li>
//           </ul>
//         </nav>

//         <Switch>
//           <Route path="about">
//             <About />
//           </Route>
//           <Route path="posts">
//             <Posts />
//           </Route>
//         </Switch>
//       </div>
//     </Router>
//   );
// }

// function About() {
//   return (
//     <div>
//       <h2>About</h2>
//     </div>
//   );
// }

// function NoMatch() {
//   return (
//     <div>
//       <h2>Nothing to see here!</h2>
//       <p>
//         <Link to="/">Go to the home page</Link>
//       </p>
//     </div>
//   );
// }
