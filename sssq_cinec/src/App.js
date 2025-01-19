
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';

import Sidebar from './components/Sidebar';
import Navbar from "./components/Navbar";
import LoginSignup from "./components/LoginSignup";
import Login from "./components/Login";
import Addlecturer from "./components/Addlecturer";

function App() {
  return (

    <Router>
      <div className="app-layout">

    <Navbar/>
   <Sidebar/>
  

   <div className="main-content">

          <Routes>
            <Route path="/LoginSignup" element={<LoginSignup/>} />
          </Routes>

          <Routes>
            <Route path="/Login" element={<Login/>} />
          </Routes>
          
          <Routes>
            <Route path="/Addlecturer" element={<Addlecturer/>} />
          </Routes>
        </div>



   </div>
   </Router>
  );
}

export default App;
