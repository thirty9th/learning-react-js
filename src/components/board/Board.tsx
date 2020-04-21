import React, {Component} from "react";
import "./Board.css";
import Cell from "../cell/Cell";

export interface BoardProps {
    id: string
}

interface State {
    cellValues: string[];
}

class Board extends Component<BoardProps, State> {

    state: State = {
        cellValues: Array(9).fill('')
    };

    createCell(index: number): JSX.Element {
        return (<Cell cellId={"" + index}
                       cellValue={this.state.cellValues[index]}
                       onClick={() => this.updateCell(index)}/>);
    }

    valuesInOrder: string[] = ["", "X", "O"];

    private nextValue(value: string): string {
        const index = this.valuesInOrder.indexOf(value);
        if (index === -1) {
            return this.valuesInOrder[0];
        } else {
            let newIndex = index + 1;
            if (newIndex > this.valuesInOrder.length - 1) {
                newIndex = 0;
            }
            return this.valuesInOrder[newIndex];
        }
    }

    render() {
        const boardId = "board-" + this.props.id;
        return <div id={boardId} className={"board"}>
            {this.createCell(0)}
            {this.createCell(1)}
            {this.createCell(2)}
            {this.createCell(3)}
            {this.createCell(4)}
            {this.createCell(5)}
            {this.createCell(6)}
            {this.createCell(7)}
            {this.createCell(8)}
        </div>;
    }

    updateCell(index: number): void {
        const cellValues = this.state.cellValues.slice();
        cellValues[index] = this.nextValue(cellValues[index]);
        this.setState({cellValues: cellValues});
    }

}

export default Board;
