import React, {Component} from "react";
import "./App.css";
import Board from "../board/Board";

class App extends Component {

    render() {
        return (
            <div className="App">
                <Board id={"1"} />
            </div>
        );
    }

}

export default App;
