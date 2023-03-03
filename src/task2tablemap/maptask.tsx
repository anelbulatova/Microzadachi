import React, {useState} from 'react';
import {NewComponent} from "../task1/NewComponent";
import {NewCars} from "./newCars";


function Maptask() {
    const topCars = [
        {manufacturer: 'BMW', model: 'X5'},
        {manufacturer: 'Mersedes', model: 'MLS'},
        {manufacturer: 'Audi', model: 'Q7'}
    ]

    return (
        <NewCars topCars={topCars}/>
    );
}

    export default Maptask;