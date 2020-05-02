import React, {Component} from "react";
import "./Cell.css";

export interface CellProps {
    cellId: string,
    cellValue: string,
    xCoordinate: number,
    yCoordinate: number,
    onClick: any
}

class Cell extends Component<CellProps> {

    render() {
        const cellId = "cell-" + this.props.cellId;
        return <div id={cellId}
                    className={"cell col text-center"}
                    onClick={() => this.props.onClick()}>
            <p>{this.props.cellValue}</p>
        </div>;
    }

}

export default Cell;
