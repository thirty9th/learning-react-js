import React, {Component} from "react";
import "./Board.css";
import Cell from "../cell/Cell";

export interface BoardProps {
    id: string
}

interface State {
    boardValues: BoardValues,
    results: string
}

class BoardValues {
    public cells: string[][];
    private readonly firstDimension: number;
    private readonly secondDimension: number;

    constructor(firstDimension: number, secondDimension: number) {
        this.cells = [];
        this.firstDimension = firstDimension;
        this.secondDimension = secondDimension;
        for (let i: number = 0; i < firstDimension; i++) {
            this.cells[i] = [];
            for (let j: number = 0; j < secondDimension; j++) {
                this.cells[i][j] = "";
            }
        }
    }

    hasWinCondition(): boolean {
        const getColumn = (array: any[][], column: number) => array.map(row => row[column]);
        const getRow = (array: any[][], row: number) => array[row];
        const allEqual = (array: any[]) => array.every(value => array[0] !== '' && value === array[0]);
        const checkVerticals = () => {
            for (let i = 0; i < this.secondDimension; i++) {
                const columnValues = getColumn(this.cells, i);
                if (allEqual(columnValues)) {
                    return true;
                }
            }
            return false;
        };
        const checkHorizontals = () => {
            for (let i = 0; i < this.firstDimension; i++) {
                const rowValues = getRow(this.cells, i);
                if (allEqual(rowValues)) {
                    return true;
                }
            }
            return false;
        };
        const checkDiagonals = () => {
            let firstDiagonalValues: Array<string> = [];
            let secondDiagonalValues: Array<string> = [];
            let j = this.secondDimension - 1;
            for (let i = 0; i < this.firstDimension; i++) {
                firstDiagonalValues.push(this.cells[i][i]);
                secondDiagonalValues.push(this.cells[j][i]);
                j--;
            }
            return allEqual(firstDiagonalValues) || allEqual(secondDiagonalValues);
        };

        return checkVerticals() || checkHorizontals() || checkDiagonals();
    }
}

class Board extends Component<BoardProps, State> {

    state: State = {
        boardValues: new BoardValues(3, 3),
        results: ""
    };
    valuesInOrder: string[] = ["", "X", "O"];

    createCell(xCoordinate: number, yCoordinate: number): JSX.Element {
        return (<Cell cellId={"" + xCoordinate + "-" + yCoordinate}
                      cellValue={this.state.boardValues.cells[xCoordinate][yCoordinate]}
                      xCoordinate={xCoordinate}
                      yCoordinate={yCoordinate}
                      onClick={() => this.updateCell(xCoordinate, yCoordinate)}/>);
    }

    render() {
        const boardId = "board-" + this.props.id;
        return <div id={boardId} className={"board container-fluid"}>
            <div className="row">
                <div id={"results"} className="col text-success text-center">
                    {this.state.results}
                </div>
            </div>
            <div className="row">
                {this.createCell(0, 0)}
                {this.createCell(0, 1)}
                {this.createCell(0, 2)}
            </div>
            <div className="row">
                {this.createCell(1, 0)}
                {this.createCell(1, 1)}
                {this.createCell(1, 2)}
            </div>
            <div className="row">
                {this.createCell(2, 0)}
                {this.createCell(2, 1)}
                {this.createCell(2, 2)}
            </div>
        </div>;
    }

    updateCell(xCoordinate: number, yCoordinate: number): void {
        const cellValues = this.state.boardValues.cells.slice();
        cellValues[xCoordinate][yCoordinate] = this.nextValue(cellValues[xCoordinate][yCoordinate]);
        const newBoardValues = new BoardValues(3, 3);
        newBoardValues.cells = cellValues;
        this.setState({boardValues: newBoardValues});

        if (newBoardValues.hasWinCondition()) {
            this.setState({results: "Win!!!"});
        } else {
            this.setState({results: ""});
        }
    }

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

}

export default Board;
