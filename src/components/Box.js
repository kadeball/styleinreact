import React from "react";

function Box(props) {

    const boxStyle = {
        Block1: {
            height: "100px",
            width: "100px",
            borderStyle: "solid",
            borderColor: "yellow",
            backgroundColor: "purple"
        },
        Block2: {
            height: "100px",
            width: "100px",
            borderStyle: "solid",
            borderColor: "red",
            backgroundColor: "green",
        },
        Block3: {
            height: "100px",
            width: "100px",
            borderStyle: "solid",
            borderColor: "blue",
            backgroundColor: "orange"
        }

    };

    return (
        <div>
        <div className="Block1" style={boxStyle.Block1}></div>
        <div className="Block2" style={boxStyle.Block2}></div>
    <div className="Block3" style={boxStyle.Block3}></div>
        </div>
)
}


export default Box;