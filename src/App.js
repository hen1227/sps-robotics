import './App.css';
import Home from './home/Home'
import Members from './members/Members'
import {Component, createRef, useEffect, useState} from "react";
import Navbar from "./navbar/Navbar";


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
                <Navbar/>
                <div className="App">
                    <ul id={"Pages"} ref={this.pageRef}>
                        <li>
                            <div className="Page" style={{background: "rgb(40,0,0)"}}>
                                Hello world
                            </div>
                        </li>
                        <li>
                            <div className="Page" style={{background: "rgb(0,0,40)"}}>
                                Also hello
                            </div>
                        </li>
                        <li>
                            <div className="Page" style={{background: "rgb(0,20,0)"}}>
                                2023 Season
                            </div>
                        </li>
                        <li>

                            <div className="Page" style={{background: "rgb(0,40,40)"}}>
                                Another page
                            </div>
                        </li>
                    </ul>
                </div>
            </>
        );
    }
}

export default App;
