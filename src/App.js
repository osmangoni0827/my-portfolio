import logo from './logo.svg';
import './App.css';
import React, { lazy, Suspense } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
const Contact=lazy(()=>import('./component/Contact/Contact/Contact')) ;
const  Blogs= lazy(()=>import('./component/Blog/Blogs/Blogs'));
const Portfolio=lazy(()=>import('./component/Portfolio/Portfolio'));
const About=lazy(()=>import ('./component/About/About/About'));
const Home= lazy(()=>import('./component/Home/Home/Home')) ;
function App() {
  return (
    <Router>
    <Suspense fallback={<div>Loading...</div>}>
      <Switch>
      <Route exact path="/" component={Home}/>
        <Route path="/home" component={Home}/>
        <Route  path="/about" component={About}/>
        <Route path='/portfolio' component={Portfolio}></Route>
        <Route path='/blog' component={Blogs}></Route>
        <Route path='/contact' component={Contact}></Route>
      </Switch>
    </Suspense>
  </Router>
  );
}

export default App;
