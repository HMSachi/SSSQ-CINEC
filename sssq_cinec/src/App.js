
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';

import Sidebar from './components/Sidebar';
import Navbar from "./components/Navbar.";

function App() {
  return (

    <Router>
      <div className="app-layout">

   <Sidebar/>
   <Navbar/>




   </div>
   </Router>
  );
}

export default App;
