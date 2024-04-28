import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Components/Header';

function App() {



  return(
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Header/>} />
        </Routes>

    </Router>
  
   </div>
   );
}
export default App;