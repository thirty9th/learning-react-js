import React, {Component} from "react";
import "./App.css";
import Board from "../board/Board";

class App extends Component {

    render() {
        return (
            <div className="App">
                <div className="jumbotron text-center">
                    <h1>Tic Tac Toe</h1>
                    <p>A simple game.</p>
                </div>

                <div className="container-fluid">
                    <Board id={"1"}/>
                </div>
            </div>
        );
    }

}

export default App;
