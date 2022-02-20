import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import AddProject from './Components/AddProject';
import AllProjects from './Components/AllProjects';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import AddEvents from './Components/AddEvents';

class App extends React.Component {
  render() {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<AddProject />} />
          <Route path="/allProjects" element={<AllProjects />} />
          <Route path="/addEvents" element={<AddEvents />}/>
        </Routes>
      </Router>
    );

  }

}

export default App;
