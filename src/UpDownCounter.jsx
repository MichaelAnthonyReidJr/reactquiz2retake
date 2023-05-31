import React, {useState} from "react";

export const UpDownCounter = () => {
    let[counter, setCounter]=useState(0)
    
    const handleClick= (operation) => {
        if (operation === 'Down'){
            setCounter(--counter)
        }else {
            setCounter(++counter)
        }
        }

    return (
        <>
            <button onClick ={()=>handleClick('Down')}>Down</button>
            {counter}
            <button onClick ={()=>handleClick('Up')}>Up</button>
        </>
    )
}