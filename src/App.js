import './App.css';
import Home from './home/Home'
import Members from './members/Members'
import {Component, createRef, useEffect, useState} from "react";
import Navbar from "./navbar/Navbar";
// import { BrowserRouter, Routes, Route } from "react-router-dom";


class App extends Component {

    constructor(props) {
        super(props);
        this.pageRef = createRef();
    }

    smoothScroll = (n) => {
        this.pageRef.current.scroll({left: n * window.outerWidth, behavior: "smooth"})
    }

    scrollToPage(n) {
        this.smoothScroll(n);
    }

    render() {
        return (
            <>
                {/*<div onClick={e => this.scrollToPage(0)}>Page1</div>*/}
                {/*<div onClick={e => this.scrollToPage(1)}>Page2</div>*/}
                {/*<div onClick={e => this.scrollToPage(2)}>Page3</div>*/}

                <Navbar/>
                <div className="App">
                    <ul id={"Pages"} ref={this.pageRef}>
                        <li>
                            <div className="Page" style={{background: "blue"}}>
                                Hello world
                            </div>
                        </li>
                        <li>
                            <div className="Page" style={{background: "red"}}>
                                Also hello
                            </div>
                        </li>
                        <li>
                            <div className="Page" style={{background: "blue"}}>
                                Hello world
                            </div>
                        </li>
                        <li>

                            <div className="Page" style={{background: "red"}}>
                                Also hello
                            </div>
                        </li>
                    </ul>
                </div>
            </>
        );
    }
}

export default App;
