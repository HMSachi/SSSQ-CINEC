
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';

import Sidebar from './components/Sidebar';
import Navbar from "./components/Navbar";
import LoginSignup from "./components/LoginSignup";

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
        </div>



   </div>
   </Router>
  );
}

export default App;
