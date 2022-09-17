import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Create from './components/Create';
import Read from './components/Read';
import Update from './components/Update'
import Delete from './components/Delete'

function App() {
  return (
    <Router>
      Nav Sect
      <Routes>
        <Route exact path='/create' component = { <Create /> } />
        <Route exact path='/read' component={ <Read /> } />
        <Route path='/update' component={ <Update /> } />
        <Route path='/delete' component={ <Delete /> } />        
      </Routes>
    </Router>
  );
}

export default App;
