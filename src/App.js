import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Create from './components/Create';
import Read from './components/Read';
import Update from './components/Update'
import Delete from './components/Delete'

function App() {
  return (
    <div className='main'>
      <Router>
       <h3>React Crud Operation</h3>
      <Routes>
        <Route exact path='/create' element={<Create />} />
        <Route exact path='/read' element={<Read />} />
        <Route path='/update' element={<Update />} />
        <Route path='/delete' element={<Delete />} />        
      </Routes>
    </Router>
    </div>
    
  );
}

export default App;
