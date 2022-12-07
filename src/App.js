import './App.css';
import Home from './home/Home'
import Members from './members/Members'
import Header from "./header/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/members" element={<Members/>}/>
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
