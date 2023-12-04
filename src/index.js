import App from './App'
import './index.css'
import ReactDOM from 'react-dom/client';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
// import './CustomToastify.css'

import ReactGA from 'react-ga4';
import React from "react";

// TODO: Get this setup
// ReactGA.initialize('G-');

export default function Website() {
    return (
        <Router>
            <div className={"app"}>
                <Routes>
                    <Route path="/:page" element={<App />} />
                    <Route path="/*" element={<App />} />
                </Routes>
            </div>
        </Router>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Website />);
