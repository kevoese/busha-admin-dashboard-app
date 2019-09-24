import React from 'react';
import { BrowserRouter as Router} from 'react-router-dom';
import './App.scss';
import Sidebar from './components/Sidebar';
import Main from './Pages/Main';

function App() {
  return (
    <Router>
      <div className="app">
        <Sidebar />
        <Main />
      </div>
    </Router>
  );
}

export default App;
