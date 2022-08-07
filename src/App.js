import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar"
import Passing from "./pages/Passing"
import Rushing from "./pages/Rushing"

function App() {
    return ( 
        <Router>
            <Navbar />
            <Routes>
                <Route path='/pass' element={<Passing />} />
                <Route path='/rush' element={<Rushing />} />
            </Routes>
        </Router>
    );
}
    
export default App;