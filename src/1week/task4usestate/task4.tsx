import React, {useState} from "react";

export function Task4() {
//let a=1
    let[a,setA]=useState(1)  // a переменная(состояние), а setA - это функция, в которой находится а состояние
    const onClickHandler =()=> {
        setA(++a)
        console.log(a)
    }
    const reset =()=> {
        setA(0)
        console.log(a)
    }
        return (
            <div>
                <h1>{a}</h1>
                <button onClick={onClickHandler}>number</button>
                <button onClick={reset}>0</button>
            </div>
        )
    }