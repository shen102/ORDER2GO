import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Components/Header';
import SignIn from './Components/SignIn';
import SignUp from './Components/SignUp';

function App() {



  return(
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Header/>} />
          <Route path="/signin" element ={<SignIn/>}/>
          <Route path="/signup" element ={<SignUp/>}/>
        </Routes>

    </Router>
  
   </div>
   );
}
export default App;