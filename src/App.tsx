import * as React from "react";
import {Component} from "react";
import "./App.css";
import Box from "./Box";
import logo from "./logo.svg";

class App extends Component {
    render() {
        const boxes = [];
        for (let i = 1; i <= 10; i++) {
            boxes.push(<Box index={i} key={i}/>);
        }
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <p>
                        Edit <code>src/App.js</code> and save to reload@@@
                    </p>
                    <a
                        className="App-link"
                        href="https://reactjs.org"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Learn React
                    </a>

                    {boxes}
                </header>
            </div>
        );
    }
}

export default App;
