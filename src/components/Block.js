import React,{useState} from 'react';

function Block(props) {


    const [color, changeColor] = useState("red");
    const [borderColor, changeBorder] = useState("blue");
    const styling = {
        clickBlocks: {
            height: "100px",
            width: "300px",
            borderWidth: "3px",
            borderStyle: "solid",
            backgroundColor: color,
            borderColor: borderColor

        }

    };

    return (
        <div style={styling.clickBlocks}  onClick={() => {
            if (color=="red") {
                changeColor("blue");
                changeBorder("green")
            }
            else if (color=="blue"){
                changeColor("green");
                changeBorder("red")}
            else {
                changeColor("red");
                changeBorder("blue")}
        }
        }
        >{color}</div>
    )

}

export default Block;

