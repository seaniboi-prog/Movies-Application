import  React, { Component } from 'react';
import './App.scss';

import {BrowserRouter as Router, Route, Routes} from "react-router-dom";

import MainPage from './pages/MainPage';
import DetailsPage from './pages/DetailsPage';
import NotFound from './pages/NotFound';

class App extends Component {

  render() {
    return (
      <Router>
        <Routes>
          <Route path ="/" element={<MainPage/>}/>
          <Route path="/details" element={<DetailsPage/>}/>
          <Route path="*" element={<NotFound/>}/>
        </Routes>
      </Router>
    );
  }
}

export default App;
