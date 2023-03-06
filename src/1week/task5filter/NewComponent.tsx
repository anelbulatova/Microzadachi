import React from "react";
import {FilterType, MoneyType} from "./task5filter";

type NewComponentType = {
    currentMoney: MoneyType[]
    onClickFilterHandler: (nameButton: FilterType) => void
}

export const NewComponent = (props: NewComponentType) => {

    return (
        <>
            <ul>
                {props.currentMoney.map((objFromMoneyArr,index) => {
                    return(
                        <li key={index}>
                            <span>{objFromMoneyArr.banknote}</span>
                            <span>{objFromMoneyArr.nominal}</span>
                            <span>{objFromMoneyArr.number}</span>
                        </li>
                    )
                })}
            </ul>
            <div style={{marginLeft:'35px'}}>
                <button onClick={()=>props.onClickFilterHandler('all')}>all</button>
                <button onClick={()=>props.onClickFilterHandler('ruble')}>ruble</button>
                <button onClick={()=>props.onClickFilterHandler('dollar')}>dollar</button>
            </div>
        </>
    )
}