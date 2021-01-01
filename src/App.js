import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/home/Home';
import Navbarr from './components/navbar/Navbarr'
import Win from './components/win/Win';
import Footer from './components/footer/Footer'
import { Route, BrowserRouter as Router } from 'react-router-dom'
import Search from './components/search/Search'
import Teams from './components/Teams/Teams';

function App() {
  return (
 <div><Router>
   <Navbarr />
   <Route exact path='/' component={Home} />
   <Route exact path='/' component={Win} />
   <Route exact path='/search/:search' component={Search} />
 
    <Route exact path='/teams' component={Teams} />
  </Router>
  <Footer />
  </div>
  );
}

export default App;
