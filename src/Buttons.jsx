import React, {useState} from "react";

export const Buttons = () => {
    let[buttonType1, setButtonType1]=useState("Push")
    let[buttonType2, setButtonType2]=useState("Push")
    
    const handleClick = (buttonType) => {
        switch(buttonType) {
        case (buttonType === 'B1'):
            setButtonType1("Pushed");
            break;
        case (buttonType === 'B2'):
            setButtonType2("Pushed");
            break;
        case (buttonType === 'Reset'):
            setButtonType1("Push")
            setButtonType2("Push")
            break;
         default:
        break;

        }
    }

    return (
        <>
            <button onClick= {()=> handleClick('B1') } >{buttonType1}</button>
            <button onClick= {()=> handleClick('B2') } >{buttonType2}</button>
            <button onClick= {()=> handleClick('Reset') }>Reset</button>
        </>
    )
}