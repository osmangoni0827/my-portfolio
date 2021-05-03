import logo from './logo.svg';
import './App.css';
import React, { lazy, Suspense } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import About from './component/About/About/About';
import Home from './component/Home/Home/Home';
import Blogs from './component/Blog/Blogs/Blogs';
import Portfolio from './component/Portfolio/Portfolio';
import Contact from './component/Contact/Contact/Contact'

function App() {
  return (
    <Router>
    
      <Switch>
      <Route exact path="/" component={Home}/>
        <Route path="/home" component={Home}/>
        <Route  path="/about" component={About}/>
        <Route path='/portfolio' component={Portfolio}></Route>
        <Route path='/blog' component={Blogs}></Route>
        <Route path='/contact' component={Contact}></Route>
      </Switch>
  </Router>
  );
}

export default App;
