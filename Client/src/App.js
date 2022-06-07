import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import AddProject from './Components/AddProject';
import AllProjects from './Components/AllProjects';
import AddEvents from './Components/AddEvents';
import AllEvents from './Components/AllEvents';
import ProjectDetails from './Components/ProjectDetails';
import EventCard from './Components/EventCard';
import { NoMatch } from './Components/NoMatch';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AddProject />} />    
        <Route path="/allProjects" element={<AllProjects />} />
        <Route path="/addEvents/:projectName" element={<AddEvents />} />
        <Route path="/allEvents/:projectName" element={<AllEvents />} />
        <Route Path="/project/:id" element={<ProjectDetails />} />
        <Route Path="/event/:id" element={<EventCard />} />
        <Route Path='*' element={<NoMatch/>}></Route>
      </Routes>
    </Router>
  );
}

export default App;