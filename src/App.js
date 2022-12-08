import './App.css';
import Home from './home/Home'
import Members from './members/Members'
import Navbar from "./navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <Navbar/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/members" element={<Members/>}/>
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
