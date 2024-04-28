import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Components/Header';
import SignIn from './Components/SignIn';

function App() {



  return(
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Header/>} />
          <Route path="/signin" element ={<SignIn/>}/>
        </Routes>

    </Router>
  
   </div>
   );
}
export default App;