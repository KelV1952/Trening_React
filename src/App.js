import React from 'react';
import './styles/App.css';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect,
} from 'react-router-dom';
import About from './pages/About';
import Posts from './pages/Posts';
import Navbar from './components/UI/Navbar/Navbar';
import Error from './pages/Errors';
import AppRouter from './components/UI/AppRouter/AppRouter';

function App() {
  return (
    <Router>
      <Navbar />
      <AppRouter />
    </Router>
  );
}
export default App;
