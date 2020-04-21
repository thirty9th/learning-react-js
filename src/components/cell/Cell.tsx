import React, {Component} from "react";
import "./Cell.css";

export interface CellProps {
    cellId: string,
    cellValue: string,
    onClick: any
}

class Cell extends Component<CellProps> {

    render() {
        const cellId = "cell-" + this.props.cellId;
        return <div id={cellId}
                    className={"cell"}
                    onClick={() => this.props.onClick()}>
            {this.props.cellValue}
        </div>;
    }

}

export default Cell;
