import React, {Component} from "react";

export interface BoxProps {
    index: number;
}

class Box extends Component<BoxProps> {

    render() {
        return (
            <p style={{border: "1px solid black"}}>Box [#{this.props.index}]</p>
        );
    }

}

export default Box;
